---
title: "Encryption: Generate RSA public key with modulus and exponent"
category: "iOS"
quote: true
tags: [Objective-C, C, RSA, Encryption, Public Key, Modulus, Exponent]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
Was trying to generate a RSA public key with RSA modulus(n) and RSA public exponent(e).

I have tried to use [SCZ-BasicEncodingRules-iOS](https://github.com/StCredZero/SCZ-BasicEncodingRules-iOS), but unfortunately `SCZ-BasicEncodingRules-iOS` has wrong decoding algorithm for iOS 8 and above. It outputs key with incorrect prefix.

If you faced with the same issue, here is a solution:

```objc
+ (NSData * __nullable)generateRSAPublicKeyWithModulus:(NSData * __nonnull)modulus exponent:(NSData * __nonnull)exponent {
    const uint8_t DEFAULT_EXPONENT[] = {0x01, 0x00, 0x01,}; //default: 65537
    const uint8_t UNSIGNED_FLAG_FOR_BYTE = 0x81;
    const uint8_t UNSIGNED_FLAG_FOR_BYTE2 = 0x82;
    const uint8_t UNSIGNED_FLAG_FOR_BIGNUM = 0x00;
    const uint8_t SEQUENCE_TAG = 0x30;
    const uint8_t INTEGER_TAG = 0x02;

    uint8_t* modulusBytes = (uint8_t*)[modulus bytes];
    uint8_t* exponentBytes = (uint8_t*)(exponent == nil ? DEFAULT_EXPONENT : [exponent bytes]);

    //(1) calculate lengths
    //- length of modulus
    int lenMod = (int)[modulus length];
    if (modulusBytes[0] >= 0x80)
        lenMod ++;  //place for UNSIGNED_FLAG_FOR_BIGNUM
    int lenModHeader = 2 + (lenMod >= 0x80 ? 1 : 0) + (lenMod >= 0x0100 ? 1 : 0);
    //- length of exponent
    int lenExp = exponent == nil ? sizeof(DEFAULT_EXPONENT) : (int)[exponent length];
    int lenExpHeader = 2;
    //- length of body
    int lenBody = lenModHeader + lenMod + lenExpHeader + lenExp;
    //- length of total
    int lenTotal = 2 + (lenBody >= 0x80 ? 1 : 0) + (lenBody >= 0x0100 ? 1 : 0) + lenBody;

    int index = 0;
    uint8_t* byteBuffer = malloc(sizeof(uint8_t) * lenTotal);
    memset(byteBuffer, 0x00, sizeof(uint8_t) * lenTotal);

    //(2) fill up byte buffer
    //- sequence tag
    byteBuffer[index ++] = SEQUENCE_TAG;
    //- total length
    if(lenBody >= 0x80)
        byteBuffer[index ++] = (lenBody >= 0x0100 ? UNSIGNED_FLAG_FOR_BYTE2 : UNSIGNED_FLAG_FOR_BYTE);
    if(lenBody >= 0x0100) {
        byteBuffer[index ++] = (uint8_t)(lenBody / 0x0100);
        byteBuffer[index ++] = lenBody % 0x0100;
    }
    else
        byteBuffer[index ++] = lenBody;
    //- integer tag
    byteBuffer[index ++] = INTEGER_TAG;
    //- modulus length
    if (lenMod >= 0x80)
        byteBuffer[index ++] = (lenMod >= 0x0100 ? UNSIGNED_FLAG_FOR_BYTE2 : UNSIGNED_FLAG_FOR_BYTE);
    if (lenMod >= 0x0100) {
        byteBuffer[index ++] = (int)(lenMod / 0x0100);
        byteBuffer[index ++] = lenMod % 0x0100;
    }
    else
        byteBuffer[index ++] = lenMod;
    //- modulus value
    if (modulusBytes[0] >= 0x80)
        byteBuffer[index ++] = UNSIGNED_FLAG_FOR_BIGNUM;
    memcpy(byteBuffer + index, modulusBytes, sizeof(uint8_t) * [modulus length]);
    index += [modulus length];
    //- exponent length
    byteBuffer[index ++] = INTEGER_TAG;
    byteBuffer[index ++] = lenExp;
    //- exponent value
    memcpy(byteBuffer + index, exponentBytes, sizeof(uint8_t) * lenExp);
    index += lenExp;

    if (index != lenTotal)
        NSLog(@"lengths mismatch: index = %d, lenTotal = %d", index, lenTotal);

    NSMutableData* buffer = [NSMutableData dataWithBytes:byteBuffer length:lenTotal];
    free(byteBuffer);

    return buffer;
}
```

This algorithm matches with standard Java `KeyFactory` generation class.

## Sample

`Base64` encoded modulus and exponent:

```json
{
  "modulus" : "AK9nUzMhwkqyrGrV\/kmL9lUGQrdVNSZwr\/XpwhD3CIfJiQe\/k85lu6dio3neMMSmIaQsBRChRg5kvyjcBa+ueusFqbf8LUhY5Pnc51BDpIFCCtVSWWVApTi8qMNdMkHcqpQrH3lloPgXIGr80yF7LfOVpLDYj7jxMgHYjE3pM4xt",
  "exponent" : "AQAB"
}
```

Generate the public key (in Swift 3):

```swift
public func encrypt(_ string: String, modulus: String, exponent: String) -> String? {
  if let modData = Data(base64Encoded: modulus),
    let expData = Data(base64Encoded: exponent),
    let keyData = PublicKeyRSA.generatePublicKey(withModulus: modData, exponent: expData) {
      /// encrypt...
  }
}
```
