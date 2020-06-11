---
title: "Swift: Optional Protocol Methods Without @objc"
category: "Swift"
quote: true
tags: [Objective-C, Swift, Protocol, "@objc"]
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
---
Objective-C 协议 (`protocol`) 在 Swift 中是一个特殊的存在, 当你使用 `@objc` 标记一个协议, `LLVM` 会生成一系列额外内容:

* 一个 `isa` 指针
* 运行时模块, 例如 `__objc_imageinfo`、`__objc_classref` 等

Swift 协议并不支持可选 (`optional`), 除非我们将协议导出到 `Objective-C`, 因为这时它们已经变成了 `Objective-C` 协议。

此外, 这些协议也不能用于扩展 (`extension`)、枚举 (`enum`) 和结构体 (`struct`), 作用十分有限, 如果你在 Linux 环境下使用 Swift, 没有 Objective-C 的运行时环境, 你甚至无法使用这一特性。

进一步了解下 `@objc` 协议的结构:

```sh
                                   ;
                                   ; @protocol _TtP9Protocols8Protocol_ {
                                   ;     -method
                                   ; }
00000001002afcb0                                 dq         0x0                 ; isa, XREF=0x1002abaa0, 0x1002b03c8
00000001002afcb8                                 dq         0x1002782f0         ; name, "_TtP9Protocols8Protocol_"
00000001002afcc0                                 dq         0x0                 ; protocols
00000001002afcc8                                 dq         0x1002afd00         ; instance methods
00000001002afcd0                                 dq         0x0                 ; class methods
00000001002afcd8                                 dq         0x0                 ; optional instanceMethods
00000001002afce0                                 dq         0x0                 ; optional class methods
00000001002afce8                                 dq         0x0                 ; instance properties
00000001002afcf0                                 dd         0x00000050          ; size
00000001002afcf4                                 dd         0x00000001          ; flags
00000001002afcf8                                 db  0x20 ; ' '
00000001002afcf9                                 db  0xfd ; '.'
00000001002afcfa                                 db  0x2a ; '*'
00000001002afcfb                                 db  0x00 ; '.'
00000001002afcfc                                 db  0x01 ; '.'
00000001002afcfd                                 db  0x00 ; '.'
00000001002afcfe                                 db  0x00 ; '.'
00000001002afcff                                 db  0x00 ; '.'
00000001002afd00                                 db  0x18 ; '.'                 ; XREF=0x1002afcc8
00000001002afd01                                 db  0x00 ; '.'
00000001002afd02                                 db  0x00 ; '.'
00000001002afd03                                 db  0x00 ; '.'
00000001002afd04                                 db  0x01 ; '.'
00000001002afd05                                 db  0x00 ; '.'
00000001002afd06                                 db  0x00 ; '.'
00000001002afd07                                 db  0x00 ; '.'
00000001002afd08                                 db  0x0a ; '.'
00000001002afd09                                 db  0xf2 ; '.'
00000001002afd0a                                 db  0x26 ; '&'
00000001002afd0b                                 db  0x00 ; '.'
00000001002afd0c                                 db  0x01 ; '.'
00000001002afd0d                                 db  0x00 ; '.'
00000001002afd0e                                 db  0x00 ; '.'
00000001002afd0f                                 db  0x00 ; '.'
00000001002afd10                                 db  0xe0 ; '.'
00000001002afd11                                 db  0x82 ; '.'
00000001002afd12                                 db  0x27 ; '''
00000001002afd13                                 db  0x00 ; '.'
00000001002afd14                                 db  0x01 ; '.'
00000001002afd15                                 db  0x00 ; '.'
00000001002afd16                                 db  0x00 ; '.'
00000001002afd17                                 db  0x00 ; '.'
00000001002afd18                                 db  0x00 ; '.'
00000001002afd19                                 db  0x00 ; '.'
00000001002afd1a                                 db  0x00 ; '.'
00000001002afd1b                                 db  0x00 ; '.'
00000001002afd1c                                 db  0x00 ; '.'
00000001002afd1d                                 db  0x00 ; '.'
00000001002afd1e                                 db  0x00 ; '.'
00000001002afd1f                                 db  0x00 ; '.'
00000001002afd20                                 db  0xe0 ; '.'
00000001002afd21                                 db  0x82 ; '.'
00000001002afd22                                 db  0x27 ; '''
00000001002afd23                                 db  0x00 ; '.'
00000001002afd24                                 db  0x01 ; '.'
00000001002afd25                                 db  0x00 ; '.'
00000001002afd26                                 db  0x00 ; '.'
00000001002afd27                                 db  0x00 ; '.'
                                   ;
                                   ; Section __objc_selrefs
                                   ;
                                   ; Range 0x1002afd28 - 0x1002b0360 (1592 bytes)
                                   ; File offset 2817320 (1592 bytes)
                                   ; Flags : 0x10000005
                                   ;
00000001002afd28                                 dq         0x10026daa6         ; @selector(hash), "hash", XREF=0x1000008e8, -[NSObject hashValue]+4, __TFE10ObjectiveCCSo8NSObjectg9hashValueSi+4, __TFE10FoundationSSg4hashSi+15, _swift_stdlib_NSStringNFDHashValue+27, _swift_stdlib_NSStringASCIIHashValue+10
00000001002afd30                                 dq         0x10026daab         ; @selector(isEqual:), "isEqual:", XREF=__TTWCSo8NSObjects9Equatable10ObjectiveCZFS0_oi2eefTxx_Sb+16, __TZF10ObjectiveCoi2eeFTCSo8NSObjectS0__Sb+16, _swift_stdlib_NSObject_isEqual+21
00000001002afd38                                 dq         0x10026dab4         ; @selector(hashValue), "hashValue", XREF=__TTWCSo8NSObjects8Hashable10ObjectiveCFS0_g9hashValueSi+7
00000001002afd40                                 dq         0x10026dabe         ; @selector(description), "description", XREF=__TTWC
; assembly code goes by
```

但如果我们仅仅定义一个普通的协议:

```sh
0000000100276b90                                 db         "_TtP9Protocols8Protocol_", 0
                                       ;
                                       ; Section __objc_methname
                                       ;
                                       ; Range 0x100276ba9 - 0x10027830d (5988 bytes)
                                       ; File offset 2583465 (5988 bytes)
                                       ; Flags : 0x00000002
                                       ;
0000000100276ba9                                 db         "hash", 0           ; XREF=0x100000210, 0x1002afcf0
0000000100276bae                                 db         "isEqual:", 0       ; XREF=0x1002afcf8
0000000100276bb7                                 db         "hashValue", 0      ; XREF=0x1002afd00
0000000100276bc1                                 db         "description", 0    ; XREF=0x1002afd08
; assembly code goes by
```

可见, `@objc` 协议中的确增添了不少内容。

`optional` 表示一个方法可能存在也可能不存在, 在 Objective-C 中我们通常再发消息之前进行检查, Swift 中我们使用可选类型 `(?)` 直接调用即可。那么, 我们其实也可以通过给协议增加扩展来实现 Swift 版的 `optional`。

```swift
protocol Protocol: class {
    func requiredMethodOne()
    func requiredMethodTwo()
}

extension Protocol {
    func optionalMethodOne() {}
    func optionalMethodTwo() {}
}
```

这样, 即使你调用没有实现的 `optionalMethodOne()` 也不会发生任何事不可预测的事情。
