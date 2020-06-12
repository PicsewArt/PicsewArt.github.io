---
title: "iOS: UIWebView 将内容渲染为 PDF 和图片"
category: "iOS"
copy: true
tags: [iOS, UIWebView, PDF, UIPrintPageRenderer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0054.jpg'
---
使用分类的方式来实现:

```objc
#import <UIKit/UIKit.h>

@interface UIWebView (Render)
- (NSData * _Nullable)renderToPDF;
- (UIImage * _Nullable)renderToImage;
@end
```

```objc
#import "UIWebView+Render.h"
#import "UIPrintPageRenderer+PDF.h"

#define PDFSize CGSizeMake(595.2,841.8)

@implementation UIWebView (Render)
- (NSData *)renderToPDF {
    UIPrintPageRenderer *render = [[UIPrintPageRenderer alloc] init];
    [render addPrintFormatter:self.viewPrintFormatter startingAtPageAtIndex:0];

    // Padding is desirable, but optional
    float padding = 10.0f;

    // Define the printableRect and paperRect
    // If the printableRect defines the printable area of the page
    CGRect paperRect = CGRectMake(0, 0, PDFSize.width, PDFSize.height);
    CGRect printableRect = CGRectMake(padding, padding, PDFSize.width - (padding * 2), PDFSize.height-(padding * 2));

    [render setValue:[NSValue valueWithCGRect:paperRect] forKey:@"paperRect"];
    [render setValue:[NSValue valueWithCGRect:printableRect] forKey:@"printableRect"];

    // Call the printToPDF helper method that will do the actual PDF creation using values set above
    NSData *pdfData = [render createPDF];
    return pdfData;
}

- (UIImage *)renderToImage {

    //Create original tmp bounds
    CGRect originalFrame = self.frame;

    CGRect newFrame = self.bounds;
    newFrame.size.width = self.frame.size.width;
    newFrame.size.height = self.frame.size.height;
    self.frame = newFrame;

    CGSize screen = [[UIScreen mainScreen] bounds].size;
    CGSize fitSize = [self sizeThatFits:screen];

    newFrame.size.height = fitSize.height;
    self.frame = newFrame;

    UIGraphicsBeginImageContext(CGSizeMake(fitSize.width, fitSize.height));
    CGContextRef resizedContext = UIGraphicsGetCurrentContext();
    [[self layer] renderInContext:resizedContext];
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    self.frame = originalFrame;

    return image;
}
@end
```

其中引用的另一个分类:

```objc
@implementation UIPrintPageRenderer (PDF)
- (NSData *)createPDF {
    NSMutableData *pdfData = [NSMutableData data];
    UIGraphicsBeginPDFContextToData(pdfData, self.paperRect, nil);
    [self prepareForDrawingPages:NSMakeRange(0, self.numberOfPages)];
    CGRect bounds = UIGraphicsGetPDFContextBounds();

    for (NSInteger i = 0 ; i < self.numberOfPages ; ++i) {
        UIGraphicsBeginPDFPage();
        [self drawPageAtIndex:i inRect: bounds];
    }

    UIGraphicsEndPDFContext();
    return pdfData;
}
@end
```
