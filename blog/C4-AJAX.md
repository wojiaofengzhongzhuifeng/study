## 简要理解 AJAX

1. 你才返回对象，你全家都返回对象("你"指的是响应内容的第四部分)
2. JS 是一门语言，JSON 是另一门语言，JSON 这门语言抄袭了 JS这门语言
3. AJAX 就是用 JS set 请求和get 响应
4. 响应的第四部分是字符串，可以用 JSON 语法表示一个对象，也可以用 JSON 语法表示一个数组，还可以用 XML 语法，还可以用 HTML 语法，还可以用 CSS 语法，还可以用 JS 语法，还可以用我自创的语法





## 如何发请求？

用 form 可以发请求，但是会刷新页面或新开页面
用 a 可以发 get 请求，但是也会刷新页面或新开页面
用 img 可以发 get 请求，但是只能以图片的形式展示
用 link 可以发 get 请求，但是只能以 CSS、favicon 的形式展示
用 script 可以发 get 请求，但是只能以脚本的形式运行(就是 JSONP 的实现原理)

有没有什么方式可以实现

1. get、post、put、delete 请求都行
2. 想以什么形式展示就以什么形式展示

## 微软的突破

IE 5 率先在 JS 中引入 ActiveX 对象（API），使得 JS 可以直接发起 HTTP 请求。
随后 Mozilla、 Safari、 Opera 也跟进（抄袭）了，取名 XMLHttpRequest，并被纳入 W3C 规范

## AJAX

Jesse James Garrett 讲如下技术取名叫做 AJAX：异步的 JavaScript 和 XML

AJAX 技术包括以下四步:

1. 创建 AJAX 对象, 即 XMLHttpRequest 
2. 使用 XMLHttpRequest 发请求
3. 服务器返回 XML 格式的字符串
4. JS 解析 XML，并更新局部页面

## AJAX demo 

https://github.com/wojiaofengzhongzhuifeng/nodejs-test-cors



## 理解 AJAX 

学 AJAX 之前，需要知道 HTTP 请求内容和 HTTP 响应内容的四个部分，如下

>  问题： 老师的`key: alue`有许多---的是需要背的吗？

请求内容：

![请求内容](https://i.loli.net/2017/10/11/59de1afbc635c.bmp)

响应内容： 

![响应内容](http://upload-images.jianshu.io/upload_images/5529438-4df42610e8d6ad1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

同时还要知道怎么在 Chrome 上查看 HTTP request 和 HTTP response 

![选区_112.png](http://upload-images.jianshu.io/upload_images/5529438-74e0abf601e3d789.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

那么，AJAX 是什么呢？我们可以画出 ” client 和 server “ 的关系图：

![选区_113.png](http://upload-images.jianshu.io/upload_images/5529438-7526879e29d26805.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**AJAX 就是在 chrome  通过 XMLHttpRequest 对象, 构造（set）HTTP 请求和获取（get）HTTP 响应的技术**

那么 AJAX 的具体实现方法是怎么样的呢？

1. JS 设置（set）任意请求 header
   请求内容第一部分 request.open('get', '/xxx')
   请求内容第二部分 request.setRequestHeader('content-type','x-www-form-urlencoded')
   请求内容第四部分 request.send('a=1&b=2')
2. JS 获取（get）任意响应 header 
   响应内容第一部分 request.status / request.statusText
   响应内容第二部分 request.getResponseHeader() / request.getAllResponseHeaders()
   响应内容第四部分 request.responseText

## jQuery 的 AJAX 实现代码迭代过程

> 如何确定写的 AJAX 代码是否正确？将你写的代码放到 AJAX demo 的 main.js

第一版：使用原生 js 中的 XMLHttpRequest 实现 ajax

```
//自己写的第一版
myButton.addEventListener('click', function(){
  ajax()
})

function ajax(){
//相当于告诉浏览器我要set Http 请求了
  var request = new XMLHttpRequest()
//对应 http 请求的第一部分
  request.open("post", "/xxx")
//对应 http 请求的第二部分
  request.setRequestHeader("name", "rjj")
  request.setRequestHeader("name", "zzz")
//对应 http 请求的第三部分，仅仅是为了便于记忆
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
//对应 http 请求的第四部分
  request.send("xxxxxxxxx")
}
```

第二版：放到函数内

把第一版中的`function ajax(){}`内写死的内容提取出来, 用变量获取, 代码如下: 

```
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
  console.log("请求成功了")
}

function yyyyyy(x){
  console.log(x)
  console.log("请求失败了了")

}
```

第三版：更灵活的函数调用

> 第二版的函数调用实在太难用了, 根本不能在实际中使用, 我能不能改进一下?

我能不能像这样调用函数? 注意我可以改变每个 key: value 的位置, 还可以不设置某个 key: value

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
    header:{
      name: "xxx",
      zzz:'xxx',
    },
    successFnAA: function(x){
      console.log(x)
    },
    failFnAA: function(x){
      console.log(x)
    },
    path: "/xxx",
  })
})

function ajax(options){

  var method = options.method
  var path = options.path
  var header = options.header
  var successFn = options.successFnAA
  var failFn = options.failFnAA
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

注意: 

1. successFnAA 是参数, 参数的值是一个函数, 函数的内容是`function(x){console.log(x)}`
2. 但是这个函数AA没有执行, 他是在 ajax 函数内部执行, 并且往函数AA添加了一个参数(request.responseText)
3. 函数AA叫做 callback 函数

第四版: 把他放到自制的 jQuery 上

> 我想把原生的 AJAX 实现代码封装到我自己写的库,应该怎么办?

创造一个对象, 把第三版的 AJAX 函数挂到这个对象上即可

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

//创造对象
window.jQuery = function(nodeOrSelector){
  var nodes = {}
  return nodes
}

//将 AJAX 函数挂到对象上
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

//仅仅是简写,并不重要
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

第六版: 使用 promise **统一**成功函数名和失败函数名

> 如果一个项目需要使用两个不同的库，那么你就必须去看这个库的代码才能知道如何调用成功函数和失败函数, 所以我们使用 promise 来统一函数名,调用这个库的时候就不必考虑成功函数的名字

记住: `return new Promise(function(resolve, reject){})`

添加 promise 步骤

1. 在window.jQuery.ajax函数内部, 剪切所有代码
2. 在window.jQuery.ajax函数内部,添加`return new Promise(function(resolve, reject){AAA})`
3. 在AAA区域复制代码
4. 将 successFn 变成 resolve, 将 failFn 变成 reject

使用 promise 

1. 在`jQuery.ajax()`之后添加`.then`,其中第一个参数表示成功函数, 第二个参数表是失败函数

```
myButton.addEventListener("click", function() {
    jQuery.ajax({
        method: "post",
        path: "/xxx",
        header: {
            name: "xxx",
            zzz: 'xxx'
        }
    }).then(function () {
        console.log(1)
    }, function () {
        console.log(2)
    })


})


window.jQuery = function(nodeOrSelector){
    var nodes = {}
    return nodes
}



window.jQuery.ajax = function(options){
    return new Promise(function (resolve, reject) {

        var method = options.method
        var path = options.path
        var header = options.header
        var body = options.body

        var request = new XMLHttpRequest()

        request.open(method, path)

        for (var key in header) {
            request.setRequestHeader(key, header[key])
        }

        request.onreadystatechange = function(){
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

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