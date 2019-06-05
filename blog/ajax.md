

# AJAX 目录



## AJAX 发送请求过程

Jesse James Garrett 讲如下技术取名叫做 AJAX：异步的 JavaScript 和 XML

AJAX 技术包括以下四步:

1. 创建 AJAX 对象, 即 XMLHttpRequest 

2. 使用 XMLHttpRequest 发请求

3. 服务器返回 XML 格式的字符串

4. JS 解析 XML，并更新局部页面

   

## AJAX原生代码

readystate === 4 表示连接成功

status >= 200 && status <= 300 表示服务器能正确返回数据

```javascript
//自己写的第一版
myButton.addEventListener('click', function(){
  ajax()
})

function ajax(){
//相当于告诉浏览器我要set Http 请求了
  var request = new XMLHttpRequest()
//对应 http 请求的第一部分
  request.open("POST", "/xxx")
//对应 http 请求的第二部分
  request.setRequestHeader("name", "rjj")
  request.setRequestHeader("name", "zzz")
//对应 http 请求的第三部分，仅仅是为了便于记忆
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      console.log("请求完成")
      if(request.status >= 200 && request.status < 300){
        console.log("请求成功")
        //request包含着所有后端返回给前端的信息
        console.log(request)
      }else{
        console.log("请求失败")
        //request包含着所有后端返回给前端的信息
        console.log(request)
      }
    }
  }
//对应 http 请求的第四部分
  request.send("xxxxxxxxx")
}
```
