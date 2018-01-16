

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

## AJAX demo

https://github.com/wojiaofengzhongzhuifeng/nodejs-test-cors



## 理解 AJAX 

学ajax之前，需要知道 HTTP 请求内容和 HTTP 响应内容的四个部分，如下

>  问题： 老师的`key: alue`有许多---的是需要背的吗？

请求内容：

![请求内容](https://i.loli.net/2017/10/11/59de1afbc635c.bmp)

响应内容： 

![响应内容](http://upload-images.jianshu.io/upload_images/5529438-4df42610e8d6ad1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

同时还要知道怎么在 Chrome 上查看 HTTP request 和 HTTP response 

![选区_112.png](http://upload-images.jianshu.io/upload_images/5529438-74e0abf601e3d789.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

那么，ajax 是什么呢？我们可以画出 ”client 和 server“ 的关系图：

![选区_113.png](http://upload-images.jianshu.io/upload_images/5529438-7526879e29d26805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**AJAX 就是在 client  通过XMLHttpRequest对象, 构造（set）HTTP请求和获取（get）HTTP响应的技术**

**AJAX 是用js构造请求和获得响应的技术**

那么 AJAX 的具体实现方法是怎么样的呢？

1. JS 设置（set）任意请求 header
   第一部分 request.open('get', '/xxx')
   第二部分 request.setRequestHeader('content-type','x-www-form-urlencoded')
   第四部分 request.send('a=1&b=2')
2. JS 获取（get）任意响应 header 
   第一部分 request.status / request.statusText
   第二部分 request.getResponseHeader() / request.getAllResponseHeaders()
   第四部分 request.responseText

## jQuery 的 AJAX 实现代码迭代过程

如何确定写的 AJAX 代码是否正确？将你写的代码放到 AJAX demo 的 main.js 代码区中

第一版：使用原生 js 中的 XMLHttpRequest 实现 ajax

```
myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax()
})

window.jQuery = function(nodeOrSelecotr){
  var nodes = {}
  return nodes
}

window.jQuery.ajax = function(){
  //相当于告诉浏览器我要set Http 请求了
  var request = new XMLHttpRequest()
  //对应 http 请求的第一部分
  request.open("post", "/xxx")
  //对应 http 请求的第二部分
  request.setRequestHeader('name','rjj')
  request.setRequestHeader('test','rjj111')
  request.setRequestHeader('test2','rjj2222')
  //对应 http 请求的第三部分，仅仅是为了便于记忆
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status <= 300){
        console.log("成功了")
        console.log("响应内容第一部分：" + request.status)
        console.log("响应内容第二部分：" + request.getAllResponseHeaders())
        console.log("响应内容第四部分：" + request.responseText)
      } else{
        console.log("失败了")
      }
    }
  }
  //对应 http 请求的第四部分
  request.send("pass=ssss")
}




//自己写的第一版
myButton.addEventListener('click', function(){
  ajax()
})

function ajax(){
  var request = new XMLHttpRequest()

  request.open("post", "/xxx")

  request.setRequestHeader("name", "rjj")

  request.setRequestHeader("name", "zzz")

  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        console.log("成功")
        console.log("request.responseText")
        console.log(request.responseText)
      }else{
        console.log("失败")
        console.log(request)
      }
    }
  }

  request.send("xxxxxxxxx")
}
```

第二版：放到函数内

```
myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax("post", "/xxx", "name", "rjj", "test", "rjj111", "test2", "rjj2222","password=xxx", success, fail)
})

window.jQuery = function(nodeOrSelecotr){
  var nodes = {}
  return nodes
}

window.jQuery.ajax = function(method, path, key1, value1, key2, value2, key3, value3, body, successFn, failFn){  
  //相当于告诉浏览器我要set Http 请求了
  var request = new XMLHttpRequest()
  //对应 http 请求的第一部分
  request.open(method, path)
  //对应 http 请求的第二部分
  request.setRequestHeader(key1, value1)
  request.setRequestHeader(key2, value2)
  request.setRequestHeader(key3, value3)
  //对应 http 请求的第三部分，仅仅是为了便于记忆
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status <= 300){
        //为什么要传入request.responseText呢?因为响应内容最重要的就是第四部分
        successFn.call(undefined, request.responseText)
      }else {
        failFn.call(undefined, request)
      }
    }
  }
  //对应 http 请求的第四部分
  request.send(body)
}

//调用函数
function success(){
  console.log("成功了")
}
function fail(){
  console.log("失败了")
}




//自己写的第二版
myButton.addEventListener('click', function(){
  ajax("post", "/xxx", {name:'rjj', sss:'zxxx'}, fffff, yyyyyy)
})

function ajax(method, path, header, successFn, failFn, body){
  var request = new XMLHttpRequest()

  request.open(method, path)

  for(var key in header){
    request.setRequestHeader(key, header[key])
  }

  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
      	//调用 ajax 函数的成功函数,并且往这个函数添加 request.responseText 变量作为第一个参数
        successFn.call(undefined, request.responseText)
      }else{
        failFn.call(undefined, request)
      }
    }
  }

  request.send(body)
}

function fffff(x){
  console.log(x)
}

function yyyyyy(x){
  console.log(x)
}
```

第三版：更灵活的函数调用

我能不能像这样调用函数?

```
ajax({
  method: "post",
  path: "/xxx",
  header:{
    name:"rjj",
    test:"rjj111",
    test2:"rjj2222"
  }
  body: "password=xxx",
  successFn: success,
  failFn: fail
})
```

```
myButton.addEventListener('click', function(){
  ajax({
    method: "post",
    path: "/xxx",
    header:{
      name: "xxx",
      zzz:'xxx',
    },
    successFn: function(x){
      console.log(x)
    },
    failFn: function(x){
      console.log(x)
    } 
  })
})

function ajax(options){

  var method = options.method
  var path = options.path
  var header = options.header
  var successFn = options.successFn
  var failFn = options.failFn
  var body = options.body

  var request = new XMLHttpRequest()

  request.open(method, path)

  for(var key in header){
    request.setRequestHeader(key, header[key])
  }

  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined, request.responseText)
      }else{
        failFn.call(undefined, request)
      }
    }
  }

  request.send(body)
}
```

>  注意: 传给 ajax 函数的 successFn 参数是一个函数AA, 但是这个函数AA没有执行, 他是在 ajax 函数内部执行, 并且往函数AA添加了一个参数(request.responseText), 函数AA叫做 callback 函数

第四版: 把他放到自制的 jQuery 上

```
myButton.addEventListener("click", function(){
$.ajax(
  {
    method: "post",
    path: "/xxx",
    header:{
      name: "xxx",
      zzz:'xxx',
    },
    successFn: function(x){
      console.log(x)
    },
    failFn: function(x){
      console.log(x)
  } 
})
})

window.jQuery = function(nodeOrSelector){
  var nodes = {}
  return nodes
}

window.jQuery.ajax = function(options){

  var method = options.method
  var path = options.path
  var header = options.header
  var successFn = options.successFn
  var failFn = options.failFn
  var body = options.body

  var request = new XMLHttpRequest()

  request.open(method, path)

  for(var key in header){
    request.setRequestHeader(key, header[key])
  }

  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined, request.responseText)
      }else{
        failFn.call(undefined, request)
      }
    }
  }

  request.send(body)
}

window.$ = window.jQuery

```

第五版: 使用 ES6 将代码优化(析构赋值)

1. 原代码: 

   ```
   var method = options.method
   var path = options.path
   var header = options.header
   var successFn = options.successFn
   var failFn = options.failFn
   var body = options.body
   ```


2. 使用 ES6 代码优化:

   ```
   let {method, path, header, successFn, failFn, body} = options
   ```


3. 再次优化:

   将上一步的代码删除, 复制`{method, path, header, successFn, failFn, body}`

   放到`window.jQuery.ajax = function(AAA){}`的AAA处

第六版:

```
//现在有这几个库
jQuery.ajax({
  success: ()=>{},
  error: ()=>{},
  method: "get",
  test: "ssss"
})
rjj.ajax({
  成功: ()=>{},
  失败: ()=>{},
  method: "post",
  test1: "zzzz"
})

//如果我想使用 jQuery 的库,我需要找到jQuery的文档,确定成功函数的名字为"success"
//如果我想使用 rjj 的库, 我需要找到 rjj 的文档,确定成功函数的名字为"成功"
//所以我这样写
jQuery.ajax({})
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

















将老师的server.js和index.html抄下来，供后面学习用

学ajax之前，需要背下http请求和响应的4部分
能手写一个http请求和响应
能在chrome上找到请求和响应

画出client和server的图
ajax就是在client上构造（set）HTTP请求和获取（get）HTTP响应的技术
所以ajax是用js构造请求和获得响应的技术

目标：get或者set HTTP请求 和 HTTP响应
具体的ajax实现方法如下
比如：如何set请求的第二部分
￼

自己写
手写一个 ajax 
将ajax封装，并进行优化

在ajax封装的时候，初步使用promise