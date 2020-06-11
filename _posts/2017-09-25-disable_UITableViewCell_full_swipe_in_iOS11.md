---
title: "Disable the full swipe on a tableview cell in iOS 11"
category: "iOS"
quote: false
tags: [iOS, iOS 11]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0028.jpg'
---
Implement like below:

```swift
func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
    let delete = UIContextualAction(style: .destructive, title: "Delete") { (action, sourceView, completionHandler) in
        print("index path of delete: \(indexPath)")
        completionHandler(true)
    }
    let swipeAction = UISwipeActionsConfiguration(actions: [delete])
    swipeAction.performsFirstActionWithFullSwipe = false // This is the line which disables full swipe
    return swipeAction
}
```

And remove the other functions if you implement any like `editingStyle` and `editActionsForRowAt`.
