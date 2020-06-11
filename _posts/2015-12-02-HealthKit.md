---
title: "iOS : HealthKit 牛刀小试"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,HealthKit]
---
HealthKit 发布已经很久了，最近有机会用到，小试一把。

## Framework

首先要导入 HealthKit.framework 框架，在 Build Phases 下 Link Binary with Libraries 中添加即可。

## Capabilities

与 iCloud 等功能类似，也需要在 Capabilities 中开启后才能使用。

## System Version

HealthKit 是与 iOS 8 一同推出的，仅有运行 iOS 8 以上版本系统的 iPhone 与 Apple Watch 可以使用。你可以通过这句代码来判断设备是否支持 HealthKit:

```swift

HKHealthStore.isHealthDataAvailable()

```


## Authorization

当 HealtKit 可用时，需要进行授权操作:

```swift

let healthStore = HKHealthStore()
let readObjectTypes: Setter<HKObjectType> = NSSet(object: HKObjectType.quantityTypeForIdentifier(HKQuantityTypeIdentifierStepCount)!) as! Setter<HKObjectType>
healthStore.requestAuthorizationToShareTypes(nil, readTypes: readObjectTypes, completion: { (success: Bool, error: NSError?) -> Void in
	if success {
		print("授权成功")
	} else {
		print("授权失败")
	}
})

```


这里用来授权的方法是:

```swift

public func requestAuthorizationToShareTypes(typesToShare: Setter<HKSampleType>?, readTypes typesToRead: Setter<HKObjectType>?, completion: (Bool, NSError?) -> Void)

```


* typesToShare: NSSet，可能修改数据的类型

* typesToRead: NSSet，可能会读取数据的类型

* completion: 授权回调

## Get Data

```swift

// 表示获取数据为步数
let sampleType = HKSampleType.quantityTypeForIdentifier(HKQuantityTypeIdentifierStepCount)
// 获取数据的时间段，前两个参数为 nil 表示获取全部数据
let predicate = HKQuery.predicateForSamplesWithStartDate(nil, endDate: nil, options: HKQueryOptions.StrictStartDate)
// 对结果排序
let sortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)
// 获取数据
let sampleQuery = HKSampleQuery(sampleType: sampleType!, predicate: predicate, limit: Int(HKObjectQueryNoLimit), sortDescriptors: [sortDescriptor], resultsHandler: { (query: HKSampleQuery, results: [HKSample]?, error: NSError?) -> Void in
	if error == nil {
		for samples: HKSample in results! {
		    print("\(samples)")
		}
	} else {
		print("error != nil")
	}
})
// 执行数据库查询
healthStore.executeQuery(sampleQuery)

```


## Simple Data

上面我们已经获取到了数据，但我们会发现这些数据比较详细，而大部分情况下我们只需要一些基础信息，例如总的步数。

```python

// 获取数据为步数
let quantityType = HKQuantityType.quantityTypeForIdentifier(HKQuantityTypeIdentifierStepCount)
// 获取步数的间隔
let dateComponents = NSDateComponents()
dateComponents.day = 1
// 查询统计的实例
let collectionQuery = HKStatisticsCollectionQuery(quantityType: quantityType!, quantitySamplePredicate: nil, options: HKStatisticsOptions.CumulativeSum, anchorDate: NSDate(timeIntervalSince1970: 0), intervalComponents: dateComponents)
collectionQuery.initialResultsHandler = { (query: HKStatisticsCollectionQuery, result: HKStatisticsCollection?, error: NSError?) -> Void in
	for statistic in (result?.statistics())! {
		print("\(statistic.startDate) -- \(statistic.endDate)")
		for source in statistic.sources! {
		    if source.name == UIDevice.currentDevice().name {
		        print("\(source)\n\(statistic.sumQuantityForSource(source)?.doubleValueForUnit(HKUnit.countUnit()))")
		    }
		}
	}
}
  
healthStore.executeQuery(collectionQuery)

```






