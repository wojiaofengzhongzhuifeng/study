## 重点
1. cookie: 有 HTTP 请求

2. sessions: 基于 Cookie 实现，将 SessionID 存在 Cookie 中。

3. Cookie 存在浏览器文件；Session 存在服务器文件。(Cookie 是本地存储，Session 是服务器存储)

4. localStorage: 无 HTTP 请求, 记录不重要信息, 永久有效

5. SessionStorage: 与 localStorage 一致, 但是**关闭窗口**（不是退出chrome）失效

6. cache-control: 没有 HTTP 请求

   (问题: 响应端是如何发现你的缓存没有过期, 还不是要通过 HTTP 请求得知吗?那么怎么会没有 HTTP 请求呢?答案: HTTP发送之前,会查看cache-control,如果不需要请求,就不再发送请求)

7. Cache-Control直接不请求, Etag直接不下载(要请求)

8. Cookie有效期：退出浏览器，Cookie 消失




## Cookie, Session, LocalStorage, SessionStorage 

### Cookie 理解

进公园

   背景: 这个公园有一个总公园, 总公园里有许多小公园(总公园是登录页面, 小公园是域名相同的页面)

1. 第一次进总公园, (第一次请求某个服务器)

   工作人员检查你的入园是否符合条件(后端查看是否是注册以后的用户)

   通过条件的话工作人员会给你一张票(后端会给你一个响应头, 这个响应头的作用是设置一个 cookie )

   票的内容是只有工作人员才知道是否可以入园的字符串

2. 第二次进总公园(第二次请求相同的域名)

   你要带上这个票进公园(浏览器会在请求头带上cookie)

   工作人员看到这个票, 确认里面的内容正确就给你进去(后端看到这个cookie就会让你直接进入登录后的页面)

### Cookie 的实现

1. 服务器通过 Set-Cookie 头给客户端一串字符串(背)
2. 客户端每次访问相同域名的网页时，必须带上这段字符串(背)
3. 客户端要在一段时间内保存这个Cookie(背)
4. Cookie 默认在用户关闭页面后就失效，后台代码可以任意设置 Cookie 的过期时间
5. [大小大概在 4kb 以内](https://stackoverflow.com/questions/640938/what-is-the-maximum-size-of-a-web-browsers-cookies-key)

### Session的理解

进公园

	背景: 我是一个坏游客, 我知道什么样的字符串就可以进入公园, 于是我可以伪造假的门票, 工作人员发现了这个问题, 所以工作人员采用更安全的方法来审查门票

1. 第一次进总公园, (第一次请求某个服务器)

   工作人员检查你的入园是否符合条件(后端查看是否是注册以后的用户)

   通过条件的话工作人员会给你一张票(后端会给你一个响应头, 这个响应头的作用是设置一个 cookie , cookie 的值是一个随机数)

   **并且工作人员把票的字符串和你的名字写到一张表里**(后端设置一个session, 保存在服务器内存中, session的内容是之前的随机数对应你的用户信息)

   票的内容是只有工作人员才知道是否可以入园的字符串

2. 第二次进总公园(第二次请求相同的域名)

   你要带上这个票进公园(浏览器会在请求头带上cookie)

   工作人员看到这个票, **通过判断票的字符串是否和表的字符串匹配**, 如果匹配,那么说明可以进入(后端拿到请求内容的cookie的随机数, 会和sessions的内容进行比对, 看请求的cookie的随机数有没有在sessions上出现,如果出现了, 就会让你进入登录后的页面)

3. 比cookie多做两件事情(标了粗体)

4. sessions其实就是服务器的一块内存, key:value, 分别是随机数和用户的信息

### Session的实现

1. 将 SessionID（随机数）通过 Cookie 发给客户端

2. 客户端访问服务器时，服务器读取 SessionID

3. 服务器有一块内存（哈希表）保存了所有 session

4. 通过 SessionID 我们可以得到对应用户的隐私信息，如 id、email

5. 这块内存（哈希表）就是服务器上的所有 session

   

### localStorage

1. 挂在window的一个对象, 是浏览器的hash

2. 掌握localStorage的三个 api 

   `localStorage.setItem("xxx", "yyy")` 如果 yyy 是对象, 那么要用 JSON 转一下再存储

   `localStorage.getItem("xxx")`

   `localStorage.clear()`

3. localStorage存在c盘文件

4. LocalStorage 跟 HTTP 无关

5. HTTP 不会带上 LocalStorage 的值

6. 只有相同域名的页面才能互相读取 LocalStorage（没有同源那么严格）

7. 每个域名 localStorage 最大存储量为 5Mb 左右（每个浏览器不一样）

8. 常用场景：记录有没有提示过用户（没有用的信息，不能记录密码）[demo](https://github.com/wojiaofengzhongzhuifeng/localStorage)

9. LocalStorage 永久有效，除非用户清理缓存

### SessionStorage（会话存储）

4,5,6,7同上

9不同: 在用户关闭页面（会话结束）后就失效 === 关闭页面



### Session 通过 LocalStorage + 查询参数实现

未完成



### Cache-Control

1. 写在后端的相应大文件AA的路由中,  给响应内容的第二部分加上[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)的某些语法

   如在后端写`response.setHeader("Cache-Control", "max-age=30")` 这段代码的意思就是在30s之内, 你用缓存来获得大文件AA, 

   那么在第二次浏览器想请求同样的大文件AA时, ~~服务器~~Chrome发现了请求内容第二部分有关缓存的, **直接不产生 HTTP 请求**, 而是在本地内存中拿到大文件AA

   浏览器直接在本地内存拿到大文件AA

   在实际工作中, 入口文件(一般是index)不设置Cache-Control, 其他的文件都设置Cache-Control, 时间越长越好

  ![](http://upload-images.jianshu.io/upload_images/5529438-54aee4d7d74b3b52.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2. 首页不能设置Cache-Control的原因

   - 假设设置了百度首页的Cache-Control为一天

   - 用户一般进入百度首页只能是在 URL 中输入`www.baidu.com`, 那么首页在一天的时间内都不能获得最新的版本, 也可以理解为没有接口去更新页面了, 因为所有的路口都封锁了

   - 但是为什么js文件, css文件又可以设置Cache-Control呢?

   - 因为用户一般不会自己去请求js文件, css文件

   - 如果遇到js文件更新版本, 那么怎么办?

   - 在前端请求js文件中, 给路径加个查询参数即可

     这是原来的: `<script src="./js/main.js">`

     这是现在的:  `<script src="./js/main.js?v=1">`

### Expire

1. 和Cache-Control写的位置一样, [语法](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires#示例),不同的是控制缓存的时间要写成**什么时候过期的时间**, 如`Wed, 21 Oct 2015 07:28:00 GMT`, 而用户有可能把本地的时间弄错, 所以现在都使用 Cache-Control 

### Etag

1. 与 MD5 有关系

   MD5是一种摘要算法, 用于确认信息传输是否一致

   如你下载一部电影, 网上的电影的文件对应一个MD5值,

   你下载电影后, 本地的电影也对应一个MD5值

   两个MD5值如果完全相同,就说明确实是一个文件了

   特点: 如果两个文件内容越相似, 那么两个MD5的值差异越大

2. 在后端中, 将相应的文件内容给一个 MD5的值, 并且把这个MD5的值设置为响应内容的第二部分中Etag(key)的value

   那么前端在重新请求这个文件的时候,请求内容就会带上`if-None-Match: MDXXXXXXX`这个请求头

   后端发现请求内容的`if-None-Match: MDXXXXXXX`和服务器中相应文件的MD5相同, 那么后端知道这个文件不需要下载

   给前端的响应内容没有第四部分,只有第一和第二部分, 并且返回的状态码是304










## 一些区别