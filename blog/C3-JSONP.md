## 前置知识

1. 数据库 === 长久存放数据

2. 路由 === 后端通过`if else`执行不同的代码, 而 if 的路径可以是 URL 或者 form , script, link的路径

3. 输入 URL , 后端把根据路由,将服务器的文件传给客户端, 这个文件一般是index.html, index.html 中有 link 标签和 script 标签, 那么客户端会继续向服务器发请求,获得相应文件

4. 图片

   ![image.png](http://upload-images.jianshu.io/upload_images/5529438-036d5f3f56c69277.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   第一个是路由, 根据 URL 的不同执行不同的后端代码

   第二个是服务器的地址

   做以下约定: 路由没有`./`, 文件路径有`./`

   ​

5. 前端, 后端,服务器的关系是什么?

   服务器是连接前端与后端的???

6. 定义路由, 路由条件, 路由代码

7. 路由代码的作用是创建一个 HTTP 响应 

8. 后端的`response.write(AAA)`AAA是什么??

9. 域名 === `www.baidu.com` 求您记住吧

10. A网站能使用B网站的 js, 

## 通过一个 demo 了解历史

1. 需求: 点击付款按钮, 页面的账户余额减 1 元

2. 使用 form 表单将数据修改提交到 db 中

   https://github.com/wojiaofengzhongzhuifeng/JSONP-demo

   前端与后端的交流过程

   1. 用户输入 URL 
   2. 后端获取到 URL, 根据路由的条件和 URL 对比执行不同的路由代码AAA
   3. 路由代码AAA发起 HTTP 请求, 向服务端获取相应的文件
   4. 文件内的script的src, link的href, form的actionimg的src和路由的条件进行比较, 执行不同的路由代码 
   5. 路由代码继续发起 HTTP 请求, 向服务器获取相应文件

   缺点: 用户需要后退, 刷新当前页面,体验不好, 并且提交了 form 表单之后浏览器会自动刷新

3. 使用 form 表单 + iframe 改善浏览器自动刷新的体验

4. 使用 img 标签发起请求, 修改后端的数据, 但是你还是要自己刷新

5. 使用 script 标签发请求, 实现不刷新就能改变余额值

   服务器返回了在浏览器执行的字符串

   服务器

   ​



## JSONP的知识

1. 解决的问题: 想让rao.com的前端访问jack.com的后端, 这样做的目的是不想写多写一份重复的代码

2. 为什么要让jack.com和frank.com的ip地址相同??

3. 准备步骤: 

   - `gedit /etc/hosts`添加两个地址

     127.0.0.1  rao.com

     127.0.0.1 jack.com

   - 在终端输入分别输入`node index.js 8001`和`node index.js 8002`

   - 在 地址栏输入`rao.com:8001`和`jack.com:8002`

4. rao.com 和jack.com的前后端完全相同的, 所以能直接在 rao.com 的前端操作 jack.com的数据库,但是正常情况下, 两个网站的代码不可能相同, 所以需要其他方法

5. 我们写的是rao.com的前端和jack.com的后端

6. jsonp要解决的是两个网站,我们只需要一个 script,因为script是不受域名限制的,ajax受域名限制, 既然不受限制, rao.com想请求jack.com的数据, 

7. JSONP

   请求方: rao.com 的前端程序员(浏览器)

   响应方: jack.com 的后端程序员(服务器)

   1. 请求方创建 script, src 指向响应方, 同时传一个查询参数`?callbackName=yyy`
   2. 响应方根据查询参数callbackName, 构造形如`yyy.call(undefined, "你想要的数据")`这样的响应
   3. 浏览器收到响应, 就会执行 yyy.call(undefined, "你要的数据")
   4. 那么请求方就知道了他要的数据

8. JSONP的约定

   1. callbackName -> callback
   2. yyy -> 随机数 jQuery32132432()

   ​