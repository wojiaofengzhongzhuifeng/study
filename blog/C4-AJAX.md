

## 前置知识

request === 请求

response === 响应

HTTP request === 请求内容四部分

HTTP response === 响应内容四部分



一次请求和响应的完整过程

1. 这些标签可以发送 HTTP 请求`<a href="/AAA">, <form action="/AAA">, <link href="/AAA">, <script src="/AAA">, <img src="/AAA">`

2. 浏览器通过 AAA 可以构造 HTTP request

3. 根据 HTTP request 的路径 和后端路由条件返回后端构造的 HTTP response

   ​



ajax: Asynchronous JavaScript and XML

凡是使用了以下步骤的都叫 AJAX: 

1. 创建 AJAX 对象, 即 XMLHttpRequest 
2. 使用 XMLHttpRequest 发请求
3. 服务器返回 XML 格式的字符串
4. JS 解析 XML，并更新局部页面







ajax

前提：一次请求和响应的全部过程

发送 http 请求的所有方法

ajax包括一下

创建AJAX对象

发出HTTP请求

接收服务器传回的数据

更新网页数据

AJAX通过原生的XMLHttpRequest对象发出HTTP请求，得到服务器返回的数据后，再进行处理。

jsonp也是发送请求，得到服务器的数据，再进行处理，那么ajax和jsonp有什么区别

有请求就有响应

http请求内容很简单，大部分是由浏览器写的

http响应内容不简单，一般是由后端程序员通过路由代码写出来的

新建XMLrequest对象

配置

为什么是先判断4再判断200？

4表示把相应内容都下载完了！包括400，这个状态。

如果是2xx，说明后端给前端有效的响应内容

然后你还要根据这个状态码来判断，浏览器能不能获得后端返回的响应

监听请求-响应过程，如果完成下载响应部分的第四部分，并且后端返回2xx状态码，则可以返回字符串，并且你可以根据需要解析这个字符串

发送请求

jsonp的响应内容是什么











## 金句

1. 指的是响应内容的第四部分: 你才返回对象，你全家都返回对象	
2. JS 是一门语言，JSON 是另一门语言，JSON 这门语言抄袭了 JS这门语言
3. AJAX 就是用 JS 发请求
4. 响应的第四部分是字符串，可以用 JSON 语法表示一个对象，也可以用 JSON 语法表示一个数组，还可以用 XML 语法，还可以用 HTML 语法，还可以用 CSS 语法，还可以用 JS 语法，还可以用我自创的语法











## 如何发请求？

用 form 可以发请求，但是会刷新页面或新开页面
用 a 可以发 get 请求，但是也会刷新页面或新开页面
用 img 可以发 get 请求，但是只能以图片的形式展示
用 link 可以发 get 请求，但是只能以 CSS、favicon 的形式展示
用 script 可以发 get 请求，但是只能以脚本的形式运行

有没有什么方式可以实现

1. get、post、put、delete 请求都行
2. 想以什么形式展示就以什么形式展示

## 微软的突破

IE 5 率先在 JS 中引入 ActiveX 对象（API），使得 JS 可以直接发起 HTTP 请求。
随后 Mozilla、 Safari、 Opera 也跟进（抄袭）了，取名 XMLHttpRequest，并被纳入 W3C 规范

## AJAX

Jesse James Garrett 讲如下技术取名叫做 AJAX：异步的 JavaScript 和 XML

1. 创建 AJAX 对象, 即 XMLHttpRequest 
2. 使用 XMLHttpRequest 发请求
3. 服务器返回 XML 格式的字符串
4. JS 解析 XML，并更新局部页面

## 如何使用 XMLHttpRequest

```
myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('get', '/xxx') // 配置request
  request.send()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log('请求响应都完毕了')
      console.log(request.status)
      if(request.status >= 200 && request.status < 300){
        console.log('说明请求成功')
        console.log(typeof request.responseText)
        console.log(request.responseText)
        let string = request.responseText
        // 把符合 JSON 语法的字符串
        // 转换成 JS 对应的值
        let object = window.JSON.parse(string) 
        // JSON.parse 是浏览器提供的
        console.log(typeof object)
        console.log(object)
        console.log('object.note')
        console.log(object.note)
      }else if(request.status >= 400){
        console.log('说明请求失败') 
      }
    }
  }
})
```

```
// 后端代码
  }else if(path==='/xxx'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')
    response.write(`
    {
      "note":{
        "to": "jack",
        "from": "rao",
        "heading": "打招呼",
        "content": "hi"
      }
    }
    `)
    response.end()
```

## JSON —— 一门新语言

[http://json.org](http://json.org/)

## 同源策略

只有 协议+端口+域名 一模一样才允许发 AJAX 请求

一模一样一模一样一模一样一模一样一模一样一模一样一模一样一模一样

1. [http://baidu.com](http://baidu.com/) 可以向 [http://www.baidu.com](http://www.baidu.com/) 发 AJAX 请求吗 no
2. [http://baidu.com:80](http://baidu.com/) 可以向 [http://baidu.com:81](http://baidu.com:81/) 发 AJAX 请求吗 no

浏览器必须保证
只有 协议+端口+域名 一模一样才允许发 AJAX 请求
CORS 可以告诉浏览器，我俩一家的，别阻止他

突破同源策略 === 跨域

Cross-Origin Resource Sharing
C         O        资源R        S

## CORS 跨域