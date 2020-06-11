---
title: "Swift: Return instancetype"
category: "Swift"
quote: false
tags: [iOS, Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0016.jpg'
---
To return instancetype in Swift, you can define a generic helper method which infers the type of self from the calling context:

```swift
public extension UIViewController {
    // Call this
    public class func instance(storyboard sbname: String, bundle: Bundle? = nil, identifier: String?) -> Self {
        return helper_instance(storyboard: sbname, bundle: bundle, identifier: identifier)
    }

    // Helper
    private class func helper_instance<T>(storyboard sbname: String, bundle: Bundle?, identifier: String?) -> T {
        let storyboard = UIStoryboard.init(name: sbname, bundle: bundle)
        guard let id = identifier else {
            return storyboard.instantiateInitialViewController() as! T
        }
        return storyboard.instantiateViewController(withIdentifier: id) as! T
    }
}
```

then:

```swift
let controller = MyController.instance(storyboard: "Main", identifier: "MyController")
```

compiles, and the type is inferred as `MyController` now.
