## 增删改查

1. 约定
   1. xxx表示现在节点
2. 增
   1. 如果xxx想添加css样式,: `xxx.style.样式名 = 值`

   2. 如果xxx想添加HTML中的css属性: `xxx.属性名 = 值` 

   3. 1和2的区别:

      想象你正在创建一个`<div id='xxx'></div>`

      第一个是添加css样式`xxx.style.width = 100px`相当于`<div style="width:100px" id="xxx">`

      第二个是添加HTML属性`xxx.width = 100px` ,相当于`<div width='100px' id="xxx"></div>`

   4. 如果xxx想添加HTML中的class属性: `xxx.className = 'class的名字'`(这个被classList代替)

   5. 如果xxx想添加HTML中的id属性: `xxx.id = id的名字`

   6. 如果xxx想添加HTML的文本内容: `xxx.textContext = "画笔"`

   7. 如果xxx想追加HTML的class名字: xxx.classList.add("active")
3. 删
4. 改
5. 查
   1. 寻找父节点: `xxx.parentNode()`





目前用到的api

1. document.createElement()
2. document.appendChild()
3. div.textContent = xxx
4. div.src = 'xxx'
5. div.id = 'ssss'
6. div.className = 'ssss'
7. 事件监听onerror onclick  onkeypress
8. xxx.nextSibling
9. 事件监听的所有信息








## 草稿

1. xxx表示的是节点,可以是element(元素节点),可以是text(文本节点), document(整个文档的节点),一般都是用element和document,document实际上就是 DOM 树

2. 我们已经知道, Object有`Function,String,Boolean,Number,Array`

3. Node类型与Object相似,`Document,Element, Text`与`Function,Array`相似

4. 所有的`Function,String,Boolean,Number,Array`产生的实例,都有`Object`的方法`toString()`

5. 所有`Document,Element, Text`类型节点,都有`Node`的属性`nodeType`

6. 节点类型   与   数据类型 相对应

7. 节点类型的数型结构在内存中以对象来实现

8. ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Document</title>
   </head>
   <body>
       <div class="parent" id="wrapper">
         <ul>
           <li>选项1</li>
           <li>选项2</li>
           <li>选项3</li>
         </ul>        
       </div>
   </body>
   </html>
   ```

   js引擎将HTML树结构以对象的方式存储在内存中,且在内存中同样是树型结构

9. DOM-创建节点-API

   ```
   //第一种,创建元素节点(elementNode)
   var div = document.creatElement("div")
   //第二种,创建文本节点(textNode)
   var text = document.createTextNode("一个TextNode")
   //第三种,复制另一个节点A,true是将A节点及子节点都复制;false将A节点复制
   var div2 = div.cloneNode(true)
   ```

   需要注意的是:

   1. 创建节点,仅仅是在内存中开辟一段空间,并没有把节点与之前形成的树形结构连接.

10. 我在写老师的作业

11. `div.parentNode`与`div.parentElement`区别

   前者的意思是父结点,父结点包括element Node和text Node,

   后者的意思是父元素,

11. element与Node区别???

   element中文叫元素

   Node中文叫结点,

   后者包含前者

12.   xxx.children表示xxx结点的所有element结点

13.   xxx.childNodes表示xxx结点的所有node结点

14.   document结点的意思: 表示整个html的根节点

15.   xxx可以是element结点,可以是document结点,也可以是text结点,但一定是node结点

16.   HTML文档可以看成由各种 DOM 节点组成的文档树，**例如：整篇文档是一个文档节点**

17.   节点类型通过xxx.nodeType确定

     | Element Type | Node Type |
     | ------------ | --------- |
     | Element      | 1         |
     | Attribute    | 2         |
     | Text         | 3         |
     | Comment      | 8         |
     | Document     | 9         |

18.   xxx.nodeName,返回的是节点的名称

     1. 元素节点的名称是标签名，
     2. 文本节点的名称是#text，
     3. 文档节点的名称是#document。

19.   寻找 DOM 元素,经过寻找返回的节点一般是html的某个标签`<div></div>`,当然最大的节点是document

20.   现在所使用的 DOM 的属性和方法

     ```
     //获得节点的自身属性
     xxx.nodeType 
     xxx.nodeName
     xxx.nodeValue

     //长途搜索,获得 HTML 文档的节点
     document.getElementById()
     xxx/document.getElementsByTagName()
     xxxdocument.getElementsByName()
     xxx/document.getElementsByClassName()


     //短途搜索,其实就是按照一个已知节点通过关系获得其他节点,动态获取最后一个节点不会
     xxx.parentNode
     xxx.lastChild
     xxx.nextSibling
     xxx.previousSibling
     xxx.childNodes[]   //返回包含文本节点
     xxx.children[]

     //修改 DOM 树
     xxx.appendChild(xxx2)
     xxx.insertBefore(xxx1, xxx2)


     //创建节点
     document.createElement("p");
     document.createTextNode("This is a created element");
     ```

     ​