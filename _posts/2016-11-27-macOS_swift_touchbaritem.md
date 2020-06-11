---
title: "OS X: Best practical way to validate NSTouchBar items"
category: "OS X"
copy: true
tags: [OS X, macOS, Cocoa, NSTouchBar]
cave: true
hero:
  format: 'jpeg'
  url: 'post/macintosh.jpg'
---
Protocol and extensions:

```swift
@available(macOS 10.12.1, *)
protocol TouchBarItemValidations: class {

    func validateTouchBarItem(_ item: NSTouchBarItem) -> Bool
}



@available(macOS 10.12.1, *)
extension NSTouchBarProvider {

    func validateTouchBarItems() {

        guard NSClassFromString("NSTouchBar") != nil else { return }  // run-time check

        guard let touchBar = self.touchBar else { return }

        // validate currently visible touch bar items
        for identifier in touchBar.itemIdentifiers {
            guard let item = touchBar.item(forIdentifier: identifier) as? NSCustomTouchBarItem else { continue }

            item.validate()
        }
    }

}


@available(macOS 10.12.1, *)
extension NSCustomTouchBarItem: NSValidatedUserInterfaceItem {

    func validate() {

        // validate content control
        if let control = self.control,
            let action = control.action,
            let validator = NSApp.target(forAction: action, to: control.target, from: self)
        {
            if let validator = validator as? TouchBarItemValidations {
                control.isEnabled = validator.validateTouchBarItem(self)

            } else if let validator = validator as? NSUserInterfaceValidations {
                control.isEnabled = (validator as AnyObject).validateUserInterfaceItem(self)
            }
        }
    }



    // MARK: Validated User Interface Item Protocol

    public var action: Selector? {

        return self.control?.action
    }


    public var tag: Int {

        return self.control?.tag ?? 0
    }



    // MARK: Private Methods

    private var control: NSControl? {

        return self.view as? NSControl
    }

}


@available(macOS 10.12.1, *)
extension AppDelegate {

    func applicationDidUpdate(_ notification: Notification) {

        // validate touch bar items
        if #available(macOS 10.12.1, *) {
            for window in NSApp.windows {
                for responder in sequence(first: window.firstResponder, next: { $0.nextResponder }) {
                    responder.validateTouchBarItems()
                }
            }
        }
    }
}
```
