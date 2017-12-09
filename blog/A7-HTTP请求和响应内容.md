## HTTP请求与响应的过程

1.  命令行输入`curl -X POST -d "1234567890" -s -v -H "Frank: xxx" -- "https://www.baidu.com/s?wd=hello&rsv_spt=1#5"`

    注意点：

    - 命令行详解：
      1. `curl -s -v -- www.baidu.com`一个最简单的获得请求内容和响应内容的命令行。
      2. `-X POST`指定post方法
      3. `-d 1234567890`向目标网站发送数据
      4. `-H "frank:xxx"`在请求内容的第二部分加上frank：xxx


    - `curl`命令的作用是发送一个请求内容，你也可以用其他方式发送请求，例如在回车输入`www.baidu.com`

    - `"https://www.baidu.com/s?wd=hello&rsv_spt=1#5"` URL

      `http://` 协议

      `www.baidu.com`域名(主机)

       **这里省略端口:80，本来位于主机之后**

      `/s` 路径

      `?wd=hello&rsv_spt=1` 查询参数，他是属于路径的，但是方方老师单独把他拿出来了

      `#5` 锚点，不属于路径

2.  命令行中，请求内容为

![请求内容](https://i.loli.net/2017/10/11/59de1afbc635c.bmp)

因此我们可以总结出请求内容的模板

```
1 请求方法 路径 协议版本

2 accept: text/html(请求必须)

2 Host: www.baidu.com(请求必须)

2 Content-Type: application/x-www-form-urlencoded(请求的POST必须)

2 Content-length: 10(请求的POST必须)

2 key1: value1

3 这里是回车，目的是区分第2部分和第4部分

4 这里本来是请求的内容，但是从命令行的请求内容看，并没有请求内容暴露出来

注：
1. 最左边的数字表示第几部分

2. 路径就是URL的路径和它之后的东西，除去了锚点

3. Content-Type表示第4部分的数据格式，当没有第4部分时（如GET请求），自然没有Content-Type。

4. Host就是URL的域名

5. User-Agent就是你是通过什么方式发送的请求，像上面的就是通过 curl 命令行

6. accept表示想要什么格式的文件

7. 对于 POST 请求，你可以在curl的时候写 -d "1234567890"，这样，请求内容的第4部分就会有1234567890发送给server

8. 如果请求内容出现Content-Length，你应该要知道它的意思是client发送给server的数据长度

9. 当然，你也可以自己创建键值对，在curl的时候写 -H "Frank: xxx" ，请求内容就会加上Frank: xxx
```

3. 在命令行中，响应内容**(这条响应内容就是响应的上面的请求内容)**为

![响应内容](http://upload-images.jianshu.io/upload_images/5529438-4df42610e8d6ad1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


我们可以总结的模板

```
1 协议版本 状态码 对状态码的解释

2 Content-Length: 17931

2 Content-Type: text/html

2 key1: value1

3 这里是回车，目的是区分第2部分和第4部分

4 这里是返回的完整文件

注：
1. 200：请求成功

2. 301：永久移动

3. 302：临时移动

4. 403：服务器理解请求客户端的请求，但是拒绝执行此请求

5. 404：请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求

6. 500：服务器内部错误，无法完成请求

7. 502：充当网关或代理的服务器，从远端服务器接收到了一个无效的请求

8. 状态码的解释没用

9. Content-Length表示第4部分的长度

10. Content-Type表示第4部分的数据格式
```

## 零碎的知识点

### HTTP协议的作用

指导浏览器和服务器如何进行沟通

### URI，URL，URN的关系

1. URI：统一资源标志符，包括了URL和URN

2. URL：统一资源定位符。给你个地址，里面住的人不一定就是编号为#232，会发生变动

3. URN：统一资源名称。直接给你人的编号为#232，但是你不知道地址。

### 顶级域名，二级域名，三级域名分别是什么？

1. `www.baidu.com`正确的叫法应该是从右到左

   `com`是顶级域名

   `baidu`是二级域名

   `www`是三级域名

   所以`www.baidu.com`是一个三级域名网站

2. 但是工作往往会把`com`忽略，直接把`baidu`认为是顶级域名

   所以`www.baidu.com`可以被叫成二级域名网站

3. 降域



### 锚点是什么？

URL：`https://www.baidu.com/s?wd=hello&rsv_spt=1#5`

`#5`就是锚点，他的作用就是让整个网页的页面的id=5的元素与浏览器的左上角对齐。

### 域名与IP的关系

1. 如何用命令行查询网站的IP

`nslookup 你要查询的网址`

2. 域名查询IP过程

    - 第一种：如果你修改了自己的Host文件，如`123.233.233.233 www.baidu.com`，那么很明显，此时的域名是通过你的Host文件查询IP地址的。**如果修改了Host文件，指定了某些网站与域名的对应关系，那么就不会通过第二种方式来获得IP**

    - 第二种：如果你不修改文件，此时是通过DNS**（输入域名，输出IP）**来得到IP地址的。

### 请求方法的PUT和PATCH区别

1. 字面理解

   PUT：全局更新

   PATCH：局部更新

2. 例子

   在`userInfo`里面，有`useId`，`useName`字段

   如果你只想修改`useId`，那么应该用PATCH方法局部更新。

   如果用了PUT方法，理论上useInfo上就只有`useId`了，`useName`没有了，因为你在修改的时候并没有加上`useName`。



### 消息报头

1. 上面请求内容和响应内容的`key: value` 学名叫消息报头，分为普通报头、请求报头、响应报头、实体报头。
2. 普通报头：在请求内容和响应内容都可以用，~~但不用于被传输的实体，只用于传输的消息。~~
   1. ~~`Cache-Control`用于指定缓存指令~~
   2. ~~`Date`普通报头域表示消息产生的日期和时间~~
   3. ~~`Connection`普通报头域允许发送指定连接的选项。例如指定连接是连续，或者指定“close”选项，通知服务器，在响应完成后，关闭连接~~
3. 请求报头：允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。
4. 响应报头：允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。
5. 实体报头：定义了关于实体正文的信息。



### chrome 浏览器对 HTTP 的展示

1. 保存所有的请求，不会因为刷新把请求内容删除

![勾选红色框](https://i.loli.net/2017/10/12/59dedf398277d.bmp)


2. 分析请求内容

![依次点击](https://i.loli.net/2017/10/12/59dee074d97e0.bmp)


3. 分析响应内容

![依次点击](https://i.loli.net/2017/10/12/59dee150e6fa1.bmp)



### HTTP全过程

输入域名(url)-->DNS映射为IP-->TCP三次握手-->HTTP请求-->HTTP响应-->(浏览器跟踪重定向地址)-->服务器处理请求-->服务器返回一个html响应-->(视情况决定释放TCP连接)-->客户端解析HTML-->获取嵌入在HTML中的对象重新发起http请求











### 参考

http://www.ruanyifeng.com/blog/2011/09/curl.html

http://www.cnblogs.com/puyaoyao/p/3705970.html

https://segmentfault.com/a/1190000007033157

