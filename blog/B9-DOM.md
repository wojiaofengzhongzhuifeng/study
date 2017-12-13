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

12.    xxx.children表示xxx结点的所有element结点

13.    xxx.childNodes表示xxx结点的所有node结点

14.    document结点的意思: 表示整个html的根节点

15.    xxx可以是element结点,可以是document结点,也可以是text结点,但一定是node结点

16.    HTML文档可以看成由各种 DOM 节点组成的文档树，**例如：整篇文档是一个文档节点**

17.    节点类型通过xxx.nodeType确定

      | Element Type | Node Type |
      | ------------ | --------- |
      | Element      | 1         |
      | Attribute    | 2         |
      | Text         | 3         |
      | Comment      | 8         |
      | Document     | 9         |

18.    xxx.nodeName,返回的是节点的名称

       1. 元素节点的名称是标签名，
       2. 文本节点的名称是#text，
       3. 文档节点的名称是#document。

19.    寻找 DOM 元素,经过寻找返回的节点一般是html的某个标签`<div></div>`,当然最大的节点是document

20.    现在所使用的 DOM 的属性和方法

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
       ```


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
21. 对于DOM的理解

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
       <h1>你好</h1>
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

    ![未命名文件 (3).png](http://upload-images.jianshu.io/upload_images/5529438-d3de7f00f7a01772.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

22. ```
     //获得节点的自身属性
     xxx.nodeType 
     xxx.nodeName
     xxx.nodeValue

     //长途搜索,获得 HTML 文档的节点
     document.querySelector()
     document.querySeoectorAll()   //返回一个伪数组,即使伪数组内只有一个值,
     
     
      //关系搜索,其实就是按照一个已知节点通过关系获得其他节点,动态获取最后一个节点不会
     xxx.parentNode
     xxx.lastChild      //指向xxx的child.Nodes返回伪数组的最后一个节点
     xxx.firstChild     //指向xxx的child.Nodes返回伪数组的第一个节点
     xxx.nextSibling
     xxx.previousSibling   
     xxx.childNodes[]   //返回包含文本节点
     xxx.children[]    //寻找子节点,都用这个,并且xxx.children[]返回一个伪数组,所以要填[]内的数字

     //修改 DOM 树
     xxx.appendChild(xxx2)   //插在xxx的childNodes列表的的最后位置
     xxx.insertBefore(xxx1, xxx2)  //
     
     //创建节点
     document.createElement("p");
     document.createTextNode("This is a created element");
    ```

23. 当你的 HTML 写完之后，就想象有一个表示了这个 HTML 的树型结构,那我们做如下的操作

    1. 指定 === 获得某个 Node 节点,指定节点 === 用笔指着树型结构,说明可以操作了

       - 通过节点的特征找:长途搜索

         `var divTag = document.querySelector("#wrapper")`

          `var textNode  = document.querySelectorAll("li")[1].childNodes[0]`

       - 通过节点关系找: 关系搜索

         `var ulTag = divTag.children[0]`

    2. 在树型结构的空白区域创建节点

       ` var pTag = document.createElement("p");`

    3. **在p节点创建Text节点**

       `var pText = document.createTextNode("这是添加的p元素的文本内容")`

       `pTag.appendChild(pText)`

    4. 将创建的节点接到树型结构上

       `divTag.appendChild(pTag)`

    5. 获得了某个 Node 节点(用笔指着树型结构),你就可以对这个节点进行操作

       - 获得节点属性:

         `divTag.nodeName`

         `divTag.nodeType`

24. 我知道如何创建Element节点,但是我不太熟悉如何创建Text节点

25. document和document.documentElement区别??

    前者表示的是整个dom树型结构还是document标签?

    后者肯定表示的是整个树型结构的html 标签

26. 修改dom的返回值是

27. document对象是HTMLDocument(继承自Document类型)的一个实例,表示整个HTML页面                  

28. 我在看阮一峰的DOM

29. ====

30. 你有了HTML文件, 电脑是通过把html转化为对象保存在内存中,而我们人脑则是把html文件用树形图的形式划出来,人脑所做的事情是一种抽象过程,抽象的结果就是树型结构,也就是DOM

31. document节点是最顶层的节点,代表整个**文档**(是不是整个树型结构??)应该是的

32. 根节点值得是html,而不是document

33. 除了根节点以外，其他节点对于周围的节点都存在三种关系。

    父节点关系: xxx.parentNode

    子节点关系: xxx.childNodes/xxx.firstChild/xxx.lastChild,注意返回NodeList集合,成员包括xxx节点的所有子节点,也就是说,除了HTML元素节点，该属性返回的还包括Text节点和Comment节点

    同级节点关系: sibling   如xxx.nextSibling和xxx.previousSibling

34. 我想知道这个节点的某些属性,通过这些属性来了解这些节点是什么?

    1. `xxx.nodeName`和`xxx.nodeType`,他们返回的东西可以看下面的表

    | 类型                                    | nodeName             | nodeType |
    | ------------------------------------- | -------------------- | -------- |
    | ELEMENT_NODE**(DOM模型的div节点,h1节点等等)**  | 大写的HTML元素名           | 1        |
    | ATTRIBUTE_NODE                        | 等同于Attr.name         | 2        |
    | TEXT_NODE**(如DOM节点中p节点内的文本内容)**       | #text                | 3        |
    | COMMENT_NODE                          | #comment             | 8        |
    | DOCUMENT_NODE**(就是DOM模型的document节点)** | #document            | 9        |
    | DOCUMENT_FRAGMENT_NODE                | #document-fragment   | 11       |
    | DOCUMENT_TYPE_NODE                    | 等同于DocumentType.name | 10       |

    2. `xxx.textContent`和`xxx.innerText`返回的是xxx节点及其子节点的所有文本节点

35. 节点的关系中,返回的都有可能是text节点,所以这不好

36. Node节点对象的常用方法,只需DOM能做什么事情就可以了:

    - `Node.appendChild()`查
    - `Node.hasChildNodes()`
    - `Node.cloneNode()`
    - `Node.insertBefore()`
    - `Node.removeChild()`
    - `Node.replaceChild()`
    - `Node.contains()`
    - `Node.isEqualNode()`
    - `Node.isSameNode()`
    - `Node.normalize()`

37. 分清`textContent`  `innerHTML`  `innerText`的关系







## 对 DOM 的一些理解

1. DOM === 想象的树型结构模型.

2. DOM中的O指的是Object,他是在内存中,按照树型结构,通过构造函数(如Node,Element(翻译为标签比较好),Document三个构造函数),构造出对象,来将 DOM 展现到内存中

3. DOM的D指的是Document,可以认为是 HTML 文档

4. DOM的M指的是Model,因为在 HTML结构 在内存中不好用笔表示,所以用一个模型来表示,这个模型就是树型结构

5. DOM 树型结构

   ![未命名文件 (4).png](http://upload-images.jianshu.io/upload_images/5529438-1ac257c9d8bc180d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   1. 上图就是DOM,其中的每个节点(包括矩形节点和椭圆形节点)都是Node类型

   2. document节点是Document构造函数的一个实例对象,document节点代表了整个文档(整个树型结构),我们可以通过直接输入`document`来获取document节点

   3. html节点是Element构造函数的一个实例对象,html节点又叫根节点,我们可以通过输入`document.documentElement`来获得html节点

   4. 椭圆形的文本节点:"你好,我叫饶家俊"  是Text构造函数的一个实例对象

   5. Node,Element,Text的关系

      ![未命名文件 (5).png](http://upload-images.jianshu.io/upload_images/5529438-9adcec2c1bf89f37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

      ​

## Node类型的一些属性和方法

### Node属性

1. **节点本身某些特征**的属性:
   - `Node.nodeName`:
     - 看着DOM,如果你不确定某个Node节点是什么类型(不确定某个Node节点是矩形还是椭圆形)
     - 返回节点类型,重要的返回的值有`大写的HTML元素名	`, `#text	` ,`#document`
   - `Node.nodeType`:
     - 根据Node类型返回某些数字
     - Element类型,返回的数字是1
     - Text类型,返回的数字是3
     - Document类型,返回的数字的9
   - `Node.textContent`
     - 返回的当前节点及其所有后代的文本内容
     - 值得注意的是,因为`Node.textContent`是Node属性,所以文本节点也是有textContent的
     - 相应的,`innerHTML`和`innerText`是Element的属性,所以`TextNode.innerHTML`返回的是undefined,注意,并不是返回null
2. 节点**结构关系**属性
   - 兄弟关系
     - `Node.nextSibling`
     - `Node.previousSibling`
   - 儿子关系
     - `Node.childNodes`
     - `Node.firstChild`
     - `Node.lastChild`
   - 父关系
     - `Node.parentNode`
   - 上面的所有关系属性都可以获取到Text节点(除了父关系)
   - `Node.childNodes`是最特殊的,它返回的是一个伪数组,里面是Node节点,并且位数组内的值是动态变化的

### Node方法

- `Node.appendChild()`
- `Node.hasChildNodes()`
- `Node.cloneNode()`
- `Node.insertBefore()`
- `Node.removeChild()`
- `Node.replaceChild()`
- `Node.contains()`
- `Node.isEqualNode()`
- `Node.isSameNode()`
- `Node.normalize()`

​	



## document节点的一些属性和方法

### document属性



