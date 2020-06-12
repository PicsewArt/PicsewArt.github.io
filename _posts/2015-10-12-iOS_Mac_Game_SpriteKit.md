---
title: "iOS/Mac GameDev : SpriteKit"
category: "Game"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0014.jpg'
tags: [iOS,Game,SpriteKit]
---
最近抽时间研究了一下 iOS 上主要的一些游戏开发库诸如 SpriteKit、SceneKit、Metal、Unity 及 OpenGL ES，做一个简单的总结。

本文主要介绍 SpriteKit，其他部分在后面的博客中会提到，个人能力有限，有错误请指正。

### 什么是 SpriteKit

从 iOS 7 开始苹果在 iOS 引入了 SpriteKit，它是一个用来构建 2D 小游戏的 iOS 原生套件。

### 为什么选择 SpriteKit

要回答这个问题，需要了解 SpriteKit 的优缺点。

#### 优点

* 提供了 Sprite 与丰富的滤镜、遮罩等特效，甚至还集成了物理库

* 内置了诸如移动、旋转等许多动作，并支持粒子及纹理

* 由苹果开发和维护，内置于 iOS 与 OS X 平台

* 最重要的是，十分简单易用

#### 缺点

* 平台局限性: 如果你选择 SpriteKit，那也就意味着你将被苹果生态圈所绑架，你的游戏要移植到其他平台可能要耗费很多精力

* 功能局限性: 此外 SpriteKit 由于发展时间较短，成熟度和整体的丰富程度还不及其它前辈框架

### 怎样使用 SpriteKit

简单介绍一下 SpriteKit 的使用吧，类似 Cocos2D，SpriteKit 也按照 scene 也即场景来构建游戏，scene 实际上是一个 `SKScene` 实例，它的内容会在 `SKView` 实例中进行渲染。当你在 Xcode 中新建游戏工程并选择 SpriteKit 后，`GameScene` 和 `GameViewController` 类都会自动生成。

打开 `GameScene.swift` 文件(iOS)可以看到有这样一段代码:

```swift
override func touchesBegan(touches: Setter<UITouch>, withEvent event: UIEvent?) {
   /* Called when a touch begins */

    for touch in touches {
        let location = touch.locationInNode(self)
        let sprite = SKSpriteNode(imageNamed:"Spaceship")
        sprite.xScale = 0.5
        sprite.yScale = 0.5
        sprite.position = location
        let action = SKAction.rotateByAngle(CGFloat(M_PI), duration:1)
        sprite.runAction(SKAction.repeatActionForever(action))

        self.addChild(sprite)
    }
}
```


这时候我们运行游戏，手指随便点击屏幕，每次都会出现一个角度不同的小飞机。

这段代码的作用是，在手指点击的位置，获得坐标，使用一张图片 `"Spaceship"` 创建一个 `SKSpriteNode` 实例，并设置其缩放 `xScale` 与 `yScale`，设置位置 `position`，然后创建一个旋转动作，最后执行动作，并添加 sprite 到 scene 中。

其中，的 `SKSpriteNode` 是一个节点，继承自 `SKNode`。依据游戏的复杂程度，我们会添加不同数量不同类型的节点到场景中，

而 `SKAction` 则表示要执行的动作，它内置了一些常用的动作包括 `rotate`、`move`、`resize`、`scale`、`fade` 等并可以设定相关属性如 `duration` 等，同时它也支持序列(`sequence`)和组(`group`)等许多特性，由于比较简单这里不做赘述，参考预置代码即可。

在此基础上，已经可以做出一些简单地效果。但我在前面提到过，SpriteKit 是支持物理库的，也就是说我们可以模拟一些物理行为。

`SKPhysicsBody` 类就是用来模拟物理行为的。我们只需要为上面代码中的精灵节点设置 `physicsBody` 即可。

```swift
sprite.physicsBody = SKPhysicsBody(rectangleOfSize: sprite.size)
```

再次运行游戏后，点击屏幕，小飞机被添加并迅速向下掉落，是的这是应为精灵被赋予了重力的缘故。

我们可以通过设置精灵的 `physicsBody.dynamic` 来关闭:

```swift
sprite.physicsBody.dynamic = NO
```


此外，你可能会需要实现 `override func didSimulatePhysics()` 来对进一步该节点。例如在其掉出屏幕后自动移除:

```swift
override func didSimulatePhysics() {
	self.enumerateChildNodesWithName("monster") { (node, stop) -> Void in
		if node.position.y > UIScreen.mainScreen().bounds.size.height {
		 node.removeFromParent()
		}
	}
}
```

![mac](https://img.blog.csdn.net/20151012175231301?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)




