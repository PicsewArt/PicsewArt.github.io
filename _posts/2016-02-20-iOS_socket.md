---
title: "iOS: Socket 编程"
category: "iOS"
tags: [Socket, TCP/IP, HTTP]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
最近总被问到 `Socket` 问题, 好久没写了, 干脆总结一下吧。

## 一、`HTTP` 、`TCP/IP` 与 `Socket`

网络七层分别为:

* 物理层
* 数据链路层
* 网络层
* 传输层
* 会话层
* 表示层
* 应用层

其中, 物理层、数据链路层和网络层通常被称作媒体层, 是网络工程师所研究的对象; 传输层、会话层、表示层和应用层则被称作主机层, 是用户所面向和关心的内容。

`HTTP` 协议对应于应用层, `TCP` 协议对应于传输层, `IP` 协议对应于网络层, 三者本质上没有可比性。`TCP/IP` 主要解决数据如何在网络中传输的问题, 而 `HTTP` 主要解决如何包装数据的问题。

我们在传输数据时, 可以只使用传输层 ( `TCP/IP` ) , 但是那样的话, 由于没有应用层, 便无法识别数据内容, 如果想要使传输的数据有意义, 则必须使用应用层 协议, 应用层协议很多, 有 `HTTP` 、FTP、TELNET等等, 也可以自己定义应用层协议。WEB使用 `HTTP` 作传输层协议, 以封装 `HTTP` 文本信息, 然 后使用 `TCP/IP` 做传输层协议将它发送到网络上。 `Socket` 是对 `TCP/IP` 协议的封装, `Socket` 本身并不是协议, 而是一个调用接口 (API) , 通过 `Socket` , 我们才能使用 `TCP/IP` 协议。

## 二、`HTTP` 和 `Socket` 连接区别

相信不少初学手机联网开发的朋友都想知道 `HTTP` 与 `Socket` 连接究竟有什么区别, 希望通过自己的浅显理解能对初学者有所帮助。

#### 2.1、`TCP` 连接

要想明白 `Socket` 连接, 先要明白 `TCP` 连接。手机能够使用联网功能是因为手机底层实现了 `TCP/IP` 协议, 可以使手机终端通过无线网络建立 `TCP` 连接。 `TCP` 协议可以对上层网络提供接口, 使上层网络数据的传输建立在“无差别”的网络之上。

建立起一个 `TCP` 连接需要经过“三次握手”：

* 第一次握手：客户端发送syn包(syn=j)到服务器, 并进入SYN_SEND状态, 等待服务器确认;
* 第二次握手：服务器收到syn包, 必须确认客户的SYN (ack=j+1) , 同时自己也发送一个SYN包 (syn=k) , 即SYN+ACK包, 此时服务器进入SYN_RECV状态;
* 第三次握手：客户端收到服务器的SYN＋ACK包, 向服务器发送确认包ACK(ack=k+1), 此包发送完毕, 客户端和服务器进入ESTABLISHED状态, 完成三次握手。

握手过程中传送的包里不包含数据, 三次握手完毕后, 客户端与服务器才正式开始传送数据。理想状态下, `TCP` 连接一旦建立, 在通信双方中的任何一方主动关闭连接之前, `TCP` 连接都将被一直保持下去。断开连接时服务器和客户端均可以主动发起断开 `TCP` 连接的请求, 断开过程需要经过“四次握手” (过程就不细写了, 就是服务器和客户端交互, 最终确定断开) 

#### 2.2、`HTTP` 连接

 `HTTP` 协议即超文本传送协议(HypertextTransfer Protocol ), 是Web联网的基础, 也是手机联网常用的协议之一, `HTTP` 协议是建立在 `TCP` 协议之上的一种应用。

 `HTTP` 连接最显著的特点是客户端发送的每次请求都需要服务器回送响应, 在请求结束后, 会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。

* 在 `HTTP` 1.0中, 客户端的每次请求都要求建立一次单独的连接, 在处理完本次请求后, 就自动释放连接。
* 在 `HTTP` 1.1中则可以在一次连接中处理多个请求, 并且多个请求可以重叠进行, 不需要等待一个请求结束后再发送下一个请求。

由于 `HTTP` 在每次请求结束后都会主动释放连接, 因此 `HTTP` 连接是一种“短连接”, 要保持客户端程序的在线状态, 需要不断地向服务器发起连接请求。通常的

做法是即时不需要获得任何数据, 客户端也保持每隔一段固定的时间向服务器发送一次“保持连接”的请求, 服务器在收到该请求后对客户端进行回复, 表明知道客户端“在线”。若服务器长时间无法收到客户端的请求, 则认为客户端“下线”, 若客户端长时间无法收到服务器的回复, 则认为网络已经断开。

## 三、`Socket` 原理

#### 3.1、套接字 ( `Socket` ) 概念

套接字 ( `Socket` ) 是通信的基石, 是支持 `TCP/IP` 协议的网络通信的基本操作单元。它是网络通信过程中端点的抽象表示, 包含进行网络通信必须的五种信息：连接使用的协议, 本地主机的IP地址, 本地进程的协议端口, 远地主机的IP地址, 远地进程的协议端口。

应用层通过传输层进行数据通信时, `TCP` 会遇到同时为多个应用程序进程提供并发服务的问题。多个 `TCP` 连接或多个应用程序进程可能需要通过同一个

 `TCP` 协议端口传输数据。为了区别不同的应用程序进程和连接, 许多计算机操作系统为应用程序与 `TCP` ／IP协议交互提供了套接字( `Socket` )接口。应层可以和传输层通过 `Socket` 接口, 区分来自不同应用程序进程或网络连接的通信, 实现数据传输的并发服务。

#### 3.2 、建立 `Socket` 连接

建立 `Socket` 连接至少需要一对套接字, 其中一个运行于客户端, 称为Client `Socket` , 另一个运行于服务器端, 称为Server `Socket` 。

套接字之间的连接过程分为三个步骤：服务器监听, 客户端请求, 连接确认。

* 服务器监听：服务器端套接字并不定位具体的客户端套接字, 而是处于等待连接的状态, 实时监控网络状态, 等待客户端的连接请求。
* 客户端请求：指客户端的套接字提出连接请求, 要连接的目标是服务器端的套接字。为此, 客户端的套接字必须首先描述它要连接的服务器的套接字, 指出服务器端套接字的地址和端口号, 然后就向服务器端套接字提出连接请求。
* 连接确认：当服务器端套接字监听到或者说接收到客户端套接字的连接请求时, 就响应客户端套接字的请求, 建立一个新的线程, 把服务器端套接字的描述发给客户端, 一旦客户端确认了此描述, 双方就正式建立连接。而服务器端套接字继续处于监听状态, 继续接收其他客户端套接字的连接请求。

#### 3.3、`Socket` 连接与 `TCP` 连接

创建 `Socket` 连接时, 可以指定使用的传输层协议, `Socket` 可以支持不同的传输层协议 ( `TCP` 或UDP) , 当使用 `TCP` 协议进行连接时, 该 `Socket` 连接就是一个 `TCP` 连接。

#### 3.4、`Socket` 连接与 `HTTP` 连接

由于通常情况下 `Socket` 连接就是 `TCP` 连接, 因此 `Socket` 连接一旦建立, 通信双方即可开始相互发送数据内容, 直到双方连接断开。但在实际网络应用中, 客户端到服务器之间的通信往往需要穿越多个中间节点, 例如路由器、网关、防火墙等, 大部分防火墙默认会关闭长时间处于非活跃状态的连接而导致

 `Socket` 连接断连, 因此需要通过轮询告诉网络, 该连接处于活跃状态。

而 `HTTP` 连接使用的是“请求—响应”的方式, 不仅在请求时需要先建立连接, 而且需要客户端向服务器发出请求后, 服务器端才能回复数据。

很多情况下, 需要服务器端主动向客户端推送数据, 保持客户端与服务器数据的实时与同步。此时若双方建立的是 `Socket` 连接, 服务器就可以直接将数据传送给客户端;若双方建立的是 `HTTP` 连接, 则服务器需要等到客户端发送一次请求后才能将数据传回给客户端, 因此, 客户端定时向服务器端发送连接请求, 不仅可以保持在线, 同时也是在“询问”服务器是否有新的数据, 如果有就将数据传给客户端。

<!--
## 四、实现 `Socket`

这里我们使用 `Socket` 实现一个聊天室的功能, 关于服务器这里的就不介绍了

#### 4.1 再头文件中第一输入流和输出流和一个消息数组

```objc
@interfaceViewController (){

NSInputStream *_inputStream;//对应输入流

NSOutputStream *_outputStream;//对应输出流

}

@property (weak, nonatomic) IBOutlet NSLayoutConstraint *inputViewConstraint;

@property (weak, nonatomic) IBOutlet UITableView *tableView;

@property (nonatomic, strong) NSMutableArray *chatMsgs;//聊天消息数组

@end
懒加载这个消息数组

-(NSMutableArray *)chatMsgs{

if(!_chatMsgs) {

_chatMsgs =[NSMutableArray array];

}

return_chatMsgs;

}
```

#### 4.2 实现输入输出流的监听

```objc
-(void)stream:(NSStream *)aStream handleEvent:(NSStreamEvent)eventCode{

NSLog(@"%@",[NSThread currentThread]);

//NSStreamEventOpenCompleted = 1UL << 0,//输入输出流打开完成//NSStreamEventHasBytesAvailable = 1UL << 1,//有字节可读//NSStreamEventHasSpaceAvailable = 1UL << 2,//可以发放字节//NSStreamEventErrorOccurred = 1UL << 3,//连接出现错误//NSStreamEventEndEncountered = 1UL << 4//连接结束

switch(eventCode) {

caseNSStreamEventOpenCompleted:

NSLog(@"输入输出流打开完成");

break;

caseNSStreamEventHasBytesAvailable:

NSLog(@"有字节可读");

[self readData];

break;

caseNSStreamEventHasSpaceAvailable:

NSLog(@"可以发送字节");

break;

caseNSStreamEventErrorOccurred:

NSLog(@"连接出现错误");

break;

caseNSStreamEventEndEncountered:

NSLog(@"连接结束");

//关闭输入输出流

[_inputStream close];

[_outputStream close];

//从主运行循环移除

[_inputStream removeFromRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];

[_outputStream removeFromRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];

break;

default:

break;

}

}
```

#### 4.3 链接服务器

```objc
- (IBAction)connectToHost:(id)sender {

//1.建立连接

NSString *host =@"127.0.0.1";

intport =12345;

//定义C语言输入输出流

CFReadStreamRef readStream;

CFWriteStreamRef writeStream;

CFStreamCreatePairWith `Socket` ToHost(NULL, (__bridge CFStringRef)host, port, &readStream, &writeStream);

//把C语言的输入输出流转化成OC对象

_inputStream = (__bridge NSInputStream *)(readStream);

_outputStream = (__bridge NSOutputStream *)(writeStream);

//设置代理

_inputStream.delegate=self;

_outputStream.delegate=self;

//把输入输入流添加到主运行循环

//不添加主运行循环 代理有可能不工作

[_inputStream scheduleInRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];

[_outputStream scheduleInRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];

//打开输入输出流

[_inputStream open];

[_outputStream open];

}
```

#### 4.4 登陆

```objc
- (IBAction)loginBtnClick:(id)sender {

//登录

//发送用户名和密码

//在这里做的时候, 只发用户名, 密码就不用发送

//如果要登录, 发送的数据格式为 "iam:zhangsan";

//如果要发送聊天消息, 数据格式为 "msg:did you have dinner";

//登录的指令11NSString *loginStr =@"iam:zhangsan";

//把Str转成NSData

NSData *data =[loginStr dataUsingEncoding:NSUTF8StringEncoding];

[_outputStream write:data.bytes maxLength:data.length];

}
```

#### 4.5 读取服务器数据

```objc
#pragmamark 读了服务器返回的数据

-(void)readData{

//建立一个缓冲区 可以放1024个字节

uint8_t buf[1024];

//返回实际装的字节数

NSInteger len = [_inputStream read:buf maxLength:sizeof(buf)];

//把字节数组转化成字符串

NSData *data =[NSData dataWithBytes:buf length:len];

//从服务器接收到的数据

NSString *recStr =[[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

NSLog(@"%@",recStr);

[self reloadDataWithText:recStr];

}
```

#### 4.6 发送数据

```objc
-(BOOL)textFieldShouldReturn:(UITextField *)textField{

NSString *text =textField.text;

NSLog(@"%@",text);

//聊天信息

NSString *msgStr = [NSString stringWithFormat:@"msg:%@",text];

//把Str转成NSData10NSData *data =[msgStr dataUsingEncoding:NSUTF8StringEncoding];

//刷新表格

[self reloadDataWithText:msgStr];

//发送数据

[_outputStream write:data.bytes maxLength:data.length];

//发送完数据, 清空textField

textField.text =nil;

returnYES;

}
```

#### 4.7 实现数据的显示, 并且每发送一次消息都会滚动到对应的位置

```objc
-(void)reloadDataWithText:(NSString *)text{

[self.chatMsgs addObject:text];

[self.tableView reloadData];

//数据多, 应该往上滚动

NSIndexPath *lastPath = [NSIndexPath indexPathForRow:self.chatMsgs.count -1inSection:0];

[self.tableView scrollToRowAtIndexPath:lastPath atScrollPosition:UITableViewScrollPositionBottom animated:YES];

}

#pragmamark 表格的数据源

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{

returnself.chatMsgs.count;

}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath

{

staticNSString *ID =@"Cell";

UITableViewCell *cell =[tableView dequeueReusableCellWithIdentifier:ID];

cell.textLabel.text =self.chatMsgs[indexPath.row];

returncell;

}

-(void)scrollViewWillBeginDragging:(UIScrollView *)scrollView{

[self.view endEditing:YES];

}
```

#### 4.8 监听键盘的改变

```objc
//监听键盘

[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(kbFrmWillChange:) name:UIKeyboardWillChangeFrameNotificationobject:nil];

}

-(void)kbFrmWillChange:(NSNotification *)noti{

NSLog(@"%@",noti.userInfo);

//获取窗口的高度

CGFloat windowH =[UIScreen mainScreen].bounds.size.height;

//键盘结束的Frm

CGRect kbEndFrm =[noti.userInfo[UIKeyboardFrameEndUserInfoKey] CGRectValue];

//获取键盘结束的y值

CGFloat kbEndY =kbEndFrm.origin.y;

self.inputViewConstraint.constant = windowH -kbEndY;

}
```
-->
