



## HTML目录

- [如何写HTML代码](#如何写html代码)
- [理解HTML](#理解html)
- [HTML标签使用经验](#html标签使用经验)
- [标签是block的情况](#标签是block的情况)
- [空元素是什么意思？常见的空元素是什么？](#空元素是什么意思常见的空元素是什么)
- [可以在head存在的标签](#可以在head存在的标签)
- [可替换元素是什么？常见的可替换元素是什么？ ](#可替换元素是什么常见的可替换元素是什么 )
- [Meta标签](#meta标签)
- [测试1](#测试%3f)
- [测试1](#测试1)
- [测试1](#测试1)























## 如何写HTML代码

(没写完，要积累)

方法：

1. 直接看有什么内容
2. 看内容之上是谁
3. 如果没有之上，那就想想它是什么



例子：

如果我想完成简历的HTML部分。这个简历的效果图如下：http://rscardwp.px-lab.com/

![](https://i.loli.net/2017/10/15/59e3076c1ae06.bmp)



![](https://i.loli.net/2017/10/15/59e3076c7a5d7.bmp)



**[⬆ back to top](#html目录)**



## 理解HTML

HTML是一门**标记语言**，你写的是标签而不是代码。

意思是你只能通过HTML来告诉别人**内容是什么，却不能告诉别人内容长的什么样子**。

至于`<p>`标签的默认样式是block，那只是浏览器的css管的，并不是HTML管的。



## HTML标签使用经验

1. `span`和`div`只有他们没有固定意义，因此没有固定样式。往往要加class。其中`span`用在一段的话特殊单词

2. `dl>(dt+dd)*n`通常用来展示键-值对列表，如：

   ```
   <dl>
     <dt>姓名</dt>
     <dd>饶家俊</dd>
     <dt>班级</dt>
     <dd>101</dd>
     <dt>年龄</dt>
     <dd>18</dd>
   </dl>    
   ```

3. `hr`表示水平分割线





## 标签是block的情况

`div`，`ul`，`h1`，`form`，`p`





##  空元素是什么意思？常见的空元素是什么？

1. 空元素=单元素，不需要闭合的元素就叫空元素。
2. `br` ，`hr`，`img`，`input`，`link`，`meta`





## 可以在head存在的标签 

`title`，`meta`，`link`，`script`，`style`，`base`，`noscript`





## 可替换元素是什么？常见的可替换元素是什么？ 

1. 可替换元素是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

   例如，要根据`input`元素的`type`属性来看这个元素在浏览器上面到底显示的是按钮（当type=button）还是文本框（当type=text）

2. `input`，`img`，`textarea`，`video`





## Meta标签

1. 作用：用来描述数据的数据，用来**概括**描述网页的大体情况，给浏览器，搜索引擎和其他网络服务。

2. 属性：

   `<meta name="这里填键" content="这里填值">`or

   `<meta http-equiv="这里填键" content="这里填值">`

   ​

   键-值这样填：

   1. 如果是http协议的东西，用第二个模板，如：

      `<meta http-equiv="content-Type" content="text/html;charset=utf-8">`（这种写法不怎么推荐，现在都基本这样写`<meta charset="utf-8"`。

      浏览器根据输入的域名来发送请求内容，服务器根据请求内容，返回浏览器响应内容（html文件），然后在渲染html的时候，遇到meta标签就告诉浏览器用utf-8字符集，不过，好像应该写响应内容写好格式`response.setHeader("Content-type","text/html;utf-8")`。

   2. 如果是其他的，比如想告诉搜索引擎你网页的关键字是”饶家俊，前端“，那么应该这样写

      `<meta name="heywords" content="饶家俊，前端">`

   ​

   ​

## 测试1?