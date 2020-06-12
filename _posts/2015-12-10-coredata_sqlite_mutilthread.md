---
title: "CoreData 与 SQLite 线程安全"
category: "iOS"
tags: [CoreData, SQLite, Mutilthreading]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
---
数据库读取操作一般都是多线程访问的。在对数据进行读取时，我们要保证其当前状态不能被修改，即读取时加锁，否则就会出现数据错误混乱。
iOS中常用的两种数据持久化存储方式:

* CoreData
* SQLite

两者都需要设置线程安全，在这里以FMDB来解释对SQLite的线程安全访问。

## FMDB

#### 没有线程安全的执行方式

```objc
FMDatabase *database = [FMDatabase databaseWithPath:[self getDatabasePath]];

//打开数据库

[database open];

NSString *sql = @"create table if not exists Test (id integer primary key autoincrement,name text,image blob);";

//创建表

[database executeUpdate:sql];

//把UIImage对象转化为NSData

NSData *data = UIImagePNGRepresentation([UIImage imageNamed:@"user_browse"]);

//写入数据

sql = @"insert into Test (name,image) values (?,?)";

[database executeUpdate:sql,@"张三",data];

//读取显示

sql = @"select * from Test;";

FMResultSet *resultSet = [database executeQuery:sql];

while (resultSet.next) {

    //[resultSet dataForColumn:@"image"];

    NSData *imageData = [resultSet dataForColumnIndex:2];

    UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 300, 300)];

    imageView.image = [UIImage imageWithData:imageData];

    [self.view addSubview:imageView];

}
```

#### 使用线程队列

```objc
FMDatabaseQueue *queue = [[FMDatabaseQueue alloc] initWithPath:[self getDatabasePath]];

[queue inDatabase:^(FMDatabase *db) {

    //线程安全的

    __block NSString *sql = @"create table if not exists Test (id integer primary key autoincrement,name text,image blob);";

    //创建表

    [database executeUpdate:sql];

}];

//插入数据

[queue inDatabase:^(FMDatabase *db) {

    //写入数据

    sql = @"insert into Test (name,image) values (?,?)";

    [database executeUpdate:sql,@"张三",data];

}];

//读取
[queue inDatabase:^(FMDatabase *db) {
    //读取显示
    sql = @"select * from Test;";
    FMResultSet *resultSet = [database executeQuery:sql];
    while (resultSet.next)
    {
        //[resultSet dataForColumn:@"image"];

        NSData *imageData = [resultSet dataForColumnIndex:2];
        UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 300, 300)];

        imageView.image = [UIImage imageWithData:imageData];
        [self.view addSubview:imageView];
    }
}];
```

在当使用FMDBDatabaseQueue创建数据库时，会使用GCD创建一个线程队列：

```objc
 _queue = dispatch_queue_create([[NSString stringWithFormat:@"fmdb.%@", self] UTF8String], NULL);
        dispatch_queue_set_specific(_queue, kDispatchQueueSpecificKey, (__bridge void *)self, NULL);
        _openFlags = openFlags;
```

然后在读取时调用 `[queue inDatabase:^(FMDatabase *db)` 方法，在block中会锁定当前数据库

```objc
dispatch_sync(_queue, ^() {
    FMDatabase *db = [self database];
    block(db);
    // ...
}
```

我们可以看到实际上这里是对整个数据库进行加锁，以此来保证线程安全的。

## CoreData

#### 没有线程安全的CoreData数据读取

`NSManagedObjectContext` 对象的创建：`_managedObjectContext = [[NSManagedObjectContext alloc] init];`

插入数据操作:

```objc
Modal *newmodal = [NSEntityDescription insertNewObjectForEntityForName:TableName inManagedObjectContext:context];
```

其他查询、更新、删除操作

```objc
//获取Entity
NSEntityDescription *entity = [NSEntityDescription entityForName:TableName inManagedObjectContext:context];
```

#### 线程安全的CoreData操作

首先创建并行的`NSManagedObjectContext`对象

```objc
NSManagedObjectContext* context = [[NSManagedObjectContext alloc] initWithConcurrencyType:NSPrivateQueueConcurrencyType];
```

然后在执行读取操作时使用一下两个方法：

* `- (void)performBlock:(void (^)(void))block`
* `- (void)performBlockAndWait:(void (^)(void))block`

```objc
[context performBlock:^{
    // 要执行的读取操作
}];
```
