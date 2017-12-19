



## HTML目录

- [如何写HTML代码](#如何写html代码)
- [理解HTML](#理解html)
- [HTML标签经验](#html标签使用经验)
- [标签是block](#标签是block的情况)
- [空元素](#空元素是什么意思常见的空元素是什么)
- [head存在的标签](#可以在head存在的标签)
- [可替换元素是什么？ ](#可替换元素是什么常见的可替换元素是什么 )
- [Meta标签](#meta标签)
- [测试1](#测试%3f)
- [测试1](#测试1)
- [测试1](#测试1)























## 如何写HTML代码

(没写完，要积累)

1. 如何划分div区

   原则：万物皆div，div只有两种方式

   ![](https://i.loli.net/2017/10/16/59e49b342fdf8.bmp)

   错误的划分例子：

   ![](https://i.loli.net/2017/10/16/59e49a1deb669.bmp)

   正确的划分例子：

   ![](https://i.loli.net/2017/10/16/59e49a1e391ed.bmp)

**[⬆ back to top](#html目录)**

2. **以上面的为例,分区必须是div(行内元素),不能是span(内联元素).**

## 理解HTML

HTML是一门**标记语言**，你写的是标签而不是代码。

意思是你只能通过HTML来告诉别人**内容是什么，却不能告诉别人内容长的什么样子**。

至于`<p>`标签的默认样式是block，那只是浏览器的css管的，并不是HTML管的。

**[⬆ back to top](#html目录)**





## HTML标签使用经验

1. `span`和`div`只有他们没有固定意义，因此没有固定样式。往往要加class。其中`span`用在一段的话特殊单词

2. `dl>(dt+dd)*n`通常用来展示键-值对列表，如：

   ```
   dl:dictionary list
   dt:dictionary title
   dd：dictionary data

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



**[⬆ back to top](#html目录)**






## 标签是block的情况

`form`，~~`p`~~，`ul和ol和li`，`dl和dt和dd`

**[⬆ back to top](#html目录)**



##  空元素是什么意思？常见的空元素是什么？

1. 空元素=单元素，也有的叫自闭合元素，不需要闭合的元素就叫空元素。
2. `br` ，`hr`，`img`，`input`，`link`，`meta`


**[⬆ back to top](#html目录)**






## 可以在head存在的标签 

`title`，`meta`，`link`，`script`，`style`，`base`，`noscript`

**[⬆ back to top](#html目录)**





## 可替换元素是什么？常见的可替换元素是什么？ 

1. 可替换元素是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

   例如，要根据`input`元素的`type`属性来看这个元素在浏览器上面到底显示的是按钮（当type=button）还是文本框（当type=text）

2. `input`，`img`，`textarea`，`video`


**[⬆ back to top](#html目录)**






## Meta标签

1. 作用：用来描述数据的数据，用来**概括**描述网页的大体情况，给浏览器，搜索引擎和其他网络服务。

2. 属性：

   `<meta name="这里填键" content="这里填值">`or`<meta http-equiv="这里填键" content="这里填值">`

   ​

   键-值这样填：

   1. 如果是http协议的东西，用第二个模板，如：

      `<meta http-equiv="content-Type" content="text/html;charset=utf-8">`（这种写法不怎么推荐，现在都基本这样写`<meta charset="utf-8"`。

      浏览器根据输入的域名来发送请求内容，服务器根据请求内容，返回浏览器响应内容（html文件），然后在渲染html的时候，遇到meta标签就告诉浏览器用utf-8字符集，不过，好像应该写响应内容写好格式`response.setHeader("Content-type","text/html;utf-8")`。

   2. 如果是其他的，比如想告诉搜索引擎你网页的关键字是”饶家俊，前端“，那么应该这样写

      `<meta name="heywords" content="饶家俊，前端">`

   **[⬆ back to top](#html目录)**

   ​

   ​

   ​

## HTML、XML、XHTML 有什么区别？关系是什么？

1. HTML：超文本标记语言。
2. XML：扩展标记语言，你可以自己定义一个标签，也方便储存传输分享数据。
3. XHTML：可扩展超文本标记语言。可以理解为严格语法的HTML



关系：直接用XML语法往HTML套，变成了XHTML。



 

## 文档声明的作用？严格模式和混杂模式指什么？doctype html的作用是什么？

1. 告诉浏览器使用标准模式。
2. 如果不写，那么浏览器就会模拟老式浏览器的行为给你的代码进行渲染（混杂模式），目的是为了防止站点无法工作。
3. 告知浏览器的解析器用什么文档标准解析这个文档。





##  浏览器乱码的原因是什么？

1. 第一种情况：HTML文件在本地编写并且运行，过程如下：

   1. 使用后编辑器编写HTML代码，代码中保存有中文。
   2. 电脑保存HTML文件。
   3. 你用浏览器打开HTML文件
   4. 浏览器渲染该HTML文件。

   问题处在**第2步和第4 步**，比如电脑保存HTML文件是用UTF-8保存的，但是浏览器渲染该HTML却是用GBK。当然乱码。

   解决办法：你可以在HTML文件中的适当位置（`<head>`）写入`<meta charset="utf-8">`，直接告诉浏览器用UTF-8解码，别猜了。

2. 还有一种情况就是你的HTML文件是由Node.js拼接成的，那么这个HTML文件就会在浏览器中打开，而**保存Node.js文件里的HTML片段的中文**和浏览器的中文编码方式很可能不同，因此乱码。

3. 完美解决办法：在响应内容加上`response.setHeader('Content-Type', 'text/html; charset=utf-8')`

   并且在HTML文件的`<head>`里面加上`<meta charset="utf-8">`





## 常见的浏览器有哪些？什么内核？

1. 使用Trident内核的浏览器：IE、Maxthon、TT、The World等；
2. 使用Gecko内核的浏览器：Netcape6及以上版本、FireFox、MozillaSuite/SeaMonkey；
3. 使用Presto内核的浏览器：Opera7及以上版本；
4. 使用Webkit内核的浏览器：Safari、Chrome。





## 全局属性

可以用于html所有标签的的属性。以下是全局属性：

1. accesskey：根据浏览器和操作系统和accesskey的值来为html元素设置快捷键。
2. class
3. contenteditable：是否可编辑
4. contextmenu：（？？？）
5. data-xxx：xxx是自己定义的，注意xxx不能有**大写**
6. dir：文字方向
7. draggable：能否被拖拽。
8. dropzone：？？
9. hidden：隐藏这个标签
10. id
11. lang：？？？
12. spellcheck：是否检查错误
13. style：`<a style="color:red;">这是style</a>`
14. tabindex：是否可以获得焦点（？？？）
15. title：（？？？）




## title 属性和 alt属性分别有什么作用？

1. alt属性只能用在img,area,input中,他的作用是当图片不展示的时候,就显示alt属性内的值
2. title属性可以用在几乎所有标签上,当鼠标悬浮于某些元素中,展现的文字就是title属性内的文字





## 草稿

1. <!DOCTYPE html>
   1. 告诉浏览器你的语法,使用html5的规则进行解析html文件
2. 标签
   1. ​
3. 属性
4. 注释
5. 空白
6. 实体:搜索html 实体
7. 乱码原因
8. `<input type="checkbox" checked>`
9. ​