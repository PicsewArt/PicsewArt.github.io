---
title: "Java: Get header fields"
category: "Java"
quote: true
tags: [Java]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0037.jpg'
---
在开发应用程序的过程中, 如果有多个应用, 通常会通过一个 `portal` 门户来集成, 这个 `portal` 是所有应用程序的入口, 用户一旦在 `portal` 登录之后, 进入另外一个系统, 就需要类似的单点登录(`SSO`). 进入各个子系统的时候, 就不需要再次登录, 当然类似的功能, 你可以通过专业的单点登录软件来实现, 也可以自己写数据库 `token` 等方式来实现。其实还有一个比较简单的方法, 就是通过 `portal` 封装已经登录过的用户的消息, 写到 `HTTP header` 之中, 然后把请求 `forward` 到各个子系统中去, 而各子系统从 `HTTP header` 中获取用户名, 作为是否登录过的校验或者合法的校验。总结了几种处理 `HTTP Header` 的方法:

## 利用 `HttpServletRequest`

```java
import javax.servlet.http.HttpServletRequest;

//...
private HttpServletRequest request;

//get request headers
private Map<String, String> getHeadersInfo() {

  Map<String, String> map = new HashMap<String, String>();

  Enumeration headerNames = request.getHeaderNames();
  while (headerNames.hasMoreElements()) {
      String key = (String) headerNames.nextElement();
      String value = request.getHeader(key);
      map.put(key, value);
  }

  return map;
}
```

例如:

```json
"headers" : {
    "Host" : "meniny.cn",
    "Accept-Encoding" : "gzip,deflate",
    "X-Forwarded-For" : "66.249.x.x",
    "X-Forwarded-Proto" : "http",
    "User-Agent" : "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "X-Request-Start" : "1389158003923",
    "Accept" : "*/*",
    "Connection" : "close",
    "X-Forwarded-Port" : "80",
    "From" : "googlebot(at)googlebot.com"
}
```

## 获取 `user-agent`

```java
import javax.servlet.http.HttpServletRequest;

//...
private HttpServletRequest request;

private String getUserAgent() {
  return request.getHeader("user-agent");
}
```

例如:

```console
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

## 利用 `Spring MVC ` 获取 `HttpRequest Header`

```java
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/site")
public class SiteController {

    @Autowired
    private HttpServletRequest request;

    @RequestMapping(value = "/{input:.+}", method = RequestMethod.GET)
    public ModelAndView getDomain(@PathVariable("input") String input) {

        ModelAndView modelandView = new ModelAndView("result");

        modelandView.addObject("user-agent", getUserAgent());
        modelandView.addObject("headers", getHeadersInfo());

        return modelandView;
    }

    //get user agent
    private String getUserAgent() {
        return request.getHeader("user-agent");
    }

    //get request headers
    private Map<String, String> getHeadersInfo() {

        Map<String, String> map = new HashMap<String, String>();

        Enumeration headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = (String) headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }

        return map;
    }

}
```

也许有人会说, `HTTP Header` 是可以模拟的, 那么自己可以构造一个用来欺骗这些系统, 是的, 的确是这样, 所以在用 `HTTP Header` 来传值得时候, 一定要记得, 所有的请求都必须经过 `portal` 来处理, 然后 `forward` 到各子系统, 就不会出现这个问题了。因为 `portal` 首先拦截用户发起的所有的请求, 如果是构造的用户, 在 `portal` 的 `sessiion` 也是没有记录的, 仍然会跳转到登录页面, 如果在 `protal` 的 `session` 中记录, 而且 `HTTP Header` 中也有记录, 那么在子系统就是合法的用户, 然后自己可以根据一些要求处理业务逻辑了。
