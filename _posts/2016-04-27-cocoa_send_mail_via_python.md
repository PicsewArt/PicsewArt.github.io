---
title: "Cocoa: Sending mail via Python"
category: "OS X"
copy: true
tags: [OS X, Python]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0053.jpg'
---
偶然看到一个讨论, 需求很简单, 单纯的 SMTP 邮件发送。

这样的话我想 Python 应该是一个不错的选择, 那么首先我们需要写一个 Python 程序, 我们将它保存为 `mail.py`:

```py
import os
import smtplib
import json

from email import Encoders
from email.MIMEBase import MIMEBase
from email.MIMEText import MIMEText
from email.MIMEMultipart import MIMEMultipart
from email.Utils import COMMASPACE, formatdate

def send_mail(account, pwd, recipients, subject, body, attachments=[]):
  assert type(recipients) == list
  assert type(attachments) == list

  mult = MIMEMultipart()
  mult['From'] = account
  mult['To'] = COMMASPACE.join(recipients)
  mult['Date'] = formatdate(localtime=True)
  mult['Subject'] = subject

  mult.attach(MIMEText(body))

  for f in attachments:
    part = MIMEBase('application', "octet-stream")
    part.set_payload( open(f,"rb").read() )
    Encoders.encode_base64(part)
    part.add_header('Content-Disposition', 'attachment; filename="%s"' % os.path.basename(f))
    mult.attach(part)

  # 这里是 QQ 邮箱, 如果你需要用其他邮箱发送, 修改这里
  smtp = smtplib.SMTP("smtp.qq.com", 587)
  smtp.ehlo()
  smtp.starttls()
  smtp.ehlo()
  smtp.login(account, pwd)

  smtp.sendmail(account, recipients, mult.as_string())
  smtp.close()

send_mail(*COCOA_MESSAGE)
```

其中发信服务器我使用了 `smtp.qq.com:587`。QQ 邮箱的 SMTP 服务需要在其设置中开启, 你可能还需要生成一个授权码。

接着需要在 Xcode 中导入 `Python.framework`, 新建一个类:

```objc
+ (NSInteger)sendMessageFrom:(NSString *)account
                    password:(NSString *)password
                     subject:(NSString *)subject
                        body:(NSString *)body
                  recipients:(NSArray *)recipients
                 attachments:(NSArray *)attachments {

    NSArray *jsonData = @[account, password, recipients, subject, body, attachments];
    NSURL *codePath = [[NSURL URLWithString:[[NSBundle mainBundle] resourcePath]] URLByAppendingPathComponent:@"mail.py"];
    NSString *pythonCode = [NSString stringWithContentsOfFile:[codePath absoluteString] encoding:NSUTF8StringEncoding error:nil];
    pythonCode = [pythonCode stringByReplacingOccurrencesOfString:@"COCOA_MESSAGE" withString:[jsonData JSONRepresentation]];

    Py_Initialize();
    NSInteger failure = PyRun_SimpleString([pythonCode UTF8String]);
    Py_Finalize();

    return failure;
}
```

其中接受者和附件均为列表, 其他内容为字符串即可。附件为空时传入空列表。

现在我们来测试一下吧:

```objc
NSArray <NSString *>* attachments = @[@"/Users/Meniny/Desktop/LICENSE", @"/Users/Meniny/Desktop/LICENSE"];
NSInteger failure = [PythonMail sendMessageFrom:@"8382453@qq.com"
                                       password:@"usaudjewmhfrg"
                                        subject:"Send Mail via Python in Cocoa"
                                           body:"Testing Mail Body"
                                     recipients:@"meniny@qq.com"
                                    attachments:attachments];

if (!failure) {
    [NSUserNotification notificationMessage:@"Success" informative:@"Main was send successfully" image:nil soundName:nil delegate:nil];
} else {
    [NSUserNotification notificationMessage:@"Failure" informative:@"Failed to send E-mail" image:nil soundName:nil delegate:nil];
}
```
{% assign sending = 'https://ooo.0o0.ooo/2017/04/27/5901677df1131.jpg' %}
[![sending mail]({{ sending }})]({{ sending }}){: .cover-link}
