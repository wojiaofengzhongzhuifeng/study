

## 总结 + 我认为的重点

1. DOM === 用树型结构表示的 HTML 文档,所以DOM的作用 === 表示 HTML 文档

2. DOM提供的 API 是用来查询,修改 HTML 文档内容

3. 标准属性和不标准属性的的操作是不同的

4. 伪数组 === Object类型 使用伪数组的意义是为了方便的获取伪数组内的值(???)不确定

5. 只有`Node.querySelectorAll()`返回的数组不是动态的

   ​

## 对 DOM 的一些理解

1. DOM === 想象的树型结构模型.

2. DOM提供的API的作用就是修改或者查看 HTML 代码

3. DOM中的O指的是Object,他是在内存中,按照树型结构,通过构造函数(如Node,Element(翻译为标签比较好),Document三个构造函数),构造出对象,将 DOM 展现到内存中

4. DOM的D指的是Document,可以认为是 HTML 文档

5. DOM的M指的是Model,因为在 HTML结构 在内存中不好用笔表示,所以用一个模型来表示,这个模型就是树型结构

6. DOM 树型结构

   ![未命名文件 (4).png](http://upload-images.jianshu.io/upload_images/5529438-1ac257c9d8bc180d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   1. 上图就是DOM,其中的每个节点(包括矩形节点和椭圆形节点)都是Node类型

   2. document节点是Document构造函数的一个实例对象,document节点代表了整个文档(整个树型结构

      ,我们可以通过直接输入`document`来获取document节点

   3. html节点是Element构造函数的一个实例对象,html节点又叫根节点

      我们可以通过输入`document.documentElement`来获得html节点

   4. 椭圆形的文本节点:"你好,我叫饶家俊"  是Text构造函数的一个实例对象(文本节点是Text构造函数的一个实例对象)

   5. Node,Element,Text的关系

      ![未命名文件 (5).png](http://upload-images.jianshu.io/upload_images/5529438-9adcec2c1bf89f37.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## DOM的归纳和总结

1. JavaScript将 HTML 文档渲染成 DOM 的树型结构.

2. 有了树形结构, 第一件事情是什么?当然是获取DOM的节点啦!

3. 获得节点的方法: 

   1. 直接在DOM寻找: `document.querySelector(AAAA)`和`document.querySelectorAll(AAAA)`
   2. 通过节点关系获得节点
      1. 兄弟关系
         - `Node.nextSibling`
         - `Node.previousSibling`
      2. 儿子关系
         - `Node.childNodes`
         - `Node.firstChild`
         - `Node.lastChild`
      3. 父关系
         - `Node.parentNode`

4. 获得节点后,首先你要了解获得的节点是什么吧(比如你要知道节点是什么类型)?

5. 获得节点自身属性方法:

   1. `Node.nodeName`
   2. `Node.nodeType`
   3. `Node.textContent`

6. 既然节点可以对应 HTML 文档的标签,那么我可不可以通过DOM来查看/修改标签的属性?

   `Node.想查看的属性/想修改属性`or`Node.想查看的属性/想修改属性 = value`

7. 添加属性

   1. 对于标准属性,直接`Node.想添加属性 = value`
   2. 对于非标准值,则需要这样`Node.setAttribute("data-class", "xxxxxxxxxxx")`

8. 由于标签的class属性实在是太重要了,所以`Node.classList`返回的伪数组可以控制Node的class名

9. 我可以通过DOM的API修改DOM的结构吗?

   1. 先创建一个标签节点或者文本节点

      `document.createElement("div")`生成Element节点

      `document.createTextNode("你好,我叫饶家俊")`生成Text节点

   2. 通过Node方法将创建的节点拼接到 DOM 中,搜索`Node方法`

 

## Node类型的一些属性和方法

### Node属性

1. **节点本身某些特征**的属性:
   - `Node.nodeName`:
     - 看着DOM,如果你不确定某个Node节点是什么类型(不确定某个Node节点是矩形还是椭圆形)
       - 返回节点类型,重要的返回的值有`大写的HTML元素名`, `#text	` ,`#document`
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
   - `Node.childNodes`是最特殊的,它返回的是一个伪数组,里面是Node节点,并且伪数组内的值是动态变化的

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

1. 用于指向其他节点(快捷获取某些特殊节点)的属性

   - `document.documentElement`指向 DOM 的 html节点
   - `document.activeElement`指向获得焦点的那个节点

2. 返回文档特定元素的伪数组集合的属性

   - `document.links`
   - `document.forms`
   - `document.images`
   - `document.embeds`
   - 等等

3. 返回文档信息的属性

   - `document.location`
   - `document.readyState`返回的是当前文档的状态,
   - 等等

   ​



### document获取(查找)节点方法

1. 方法:`document.querySelector(AAAA)`和`document.querySelectorAll(AAAA)`

2. 注意点:

   - 如果获取标签,那么直接AAAA === "div" 即可
   - 第一个返回的是第一个符合CSS选择器AAAA条件的节点,第二个返回的是伪数组,里面包含了所有符合选择器的节点
   - 第二个返回的结果不是动态的,不会实时反映元素节点的变化
   - 这两个方法除了是document,还可以是某个Node节点
   - 其他查找方法不学,没有必要

   ​

   ​

### document生成节点的方法

1. `document.createElement("div")`生成Element节点
2. `document.createTextNode("你好,我叫饶家俊")`生成Text节点
3. ~~`Node.setAttribute("class", "test")`生成Attr节点,并且接到Node节点上~~



### document事件相关的方法

待续

### document写入方法

待续



##  Element节点的一些属性和方法

### 属性

1. 元素特征相关的属性

   现在有一段HTML代码

   ```
   <div id="wrapper"  data-num="3232323">
     <ul>
       <li>选项1</li>
       <li>选项2</li>
       <li>选项3</li>
     </ul>        
   </div>
   ```

   下面是JavaScript代码

   ```
   var divTag = document.querySelector("#wrapper")

   //返回标签节点所有的属性,用伪数组返回
   divTag.attributes  

   //返回标签节点的id
   divTag.id

   //返回标签节点的class
   divTag.className

   //返回标签节点的tagName
   divTag.tagName

   //返回标签节点内的所有东西,包括文字和标签,但是是以字符串方式返回
   divTag.innerHTML

   //由于class实在是太重要了,所以有个属性是用来返回标签节点内的所有class,通过伪数组返回
   divTag.classList
   /*
   返回的伪数组有以下方法:
   1. add()：增加一个class。
   2. remove()：移除一个class。
   3. contains()：检查当前元素是否包含某个class。
   4. toggle()：将某个class移入或移出当前元素。
   5. item()：返回指定索引位置的class。其实用divTag.classList[1]这样更好
   6. toString()：将class的列表转为字符串。
   */
   ```

2. 盒模型相关属性

   1. 获得整个页面高度:`document.documentElement.scrollHeight`

   2. 获得整个浏览器视口的高度`document.documentElement.clientHeight // 不包括滚动条`

   3. 某个Element距离**浏览器视口**左上角的坐标

      - `Element.getBoundingClientRect().left`
      - `Element.getBoundingClientRect().top`

   4. 某个Element距离**整个网页**左上角的坐标(,注意和上一个区别)

      - `Element.getBoundingClientRect().left + document.documentElement.scrollLeft`
      - `Element.getBoundingClientRect().top + document.documentElement.scrollTop`

   5. 下面的可以不看了,等到遇到问题的时候再看

   6. 容器 === 浏览器的可视区域

   7. `Node.clientHeight`,`Node.clientWidth`

      - 某个 Element节点: 经过浏览器视口变化,返回节点所占据整个页面的高度和宽度(只有padding,margin和border不是)
      - `html`节点: 返回浏览器视口宽度和高度

   8. `Node.clientTop`,`Node.clientLeft`

      - 返回节点的左边框(border)和上边框(border)的**边框宽度**

   9. `Noe.scrollHeight`, `Node.scrollWidth`

      - 某个Element节点: 经过浏览器视口变化,返回节点所占据整个页面的高度和宽度(只有padding,margin和border不是)
      - `html`节点: 经过浏览器视口变化,返回整个页面的高度和宽度

   10. `Node.scrollLeft`, `Node.scrollTop`

      - 返回向下的滚动条和向右的滚动条滚动的像素

   11. `Node.offsetHeight`, `Node.offsetWidth`

      - 某个 Element节点: 经过浏览器视口变化,返回节点所占据整个页面左上角距离右下角的宽度和高度,并且左上角是包括padding和border
      - `html`节点: 经过浏览器视口变化,返回整个页面的高度和宽度

   12. `Node.offsetLeft`,`Node.offsetTop`

      - 与父节点之间的宽度和高度???

      ​





##  使用 DOM API 操作 Element 属性

1. 有如下 HTML 代码:

   ```
   <div id="test" data-test1="test1" class="test2" data-test2="test3">id为test</div>
   ```

   js代码如下:

   ```
   //获取测试用div
   var divTag = document.querySelector("#test")

   //将div的所有属性(attribute,就像id,data-test1,class,data-test2)放到一个伪数组中
   divTag.attributes

   //读取,修改div的某个属性名和属性值,不能修改属性名
   divTag.attributes[0].name
   divTag.attributes[0].value
   divTag.attributes[0].value = "yyyyyyyyyyyyyyyyyyy"

   //如果属性是标准属性,则可以非常简单的设置属性值,就好像这个div早就已经有这些标准属性,你只需给他们的value赋值
   divTag.id = "newTest"
   divTag.style = "border: 1px solid black"

   //如果属性不是标准属性,则你必须先创造这个非标准值,然后才能赋值
   divTag.setAttribute("data-class", "xxxxxxxxxxx")
   ```

   ​

## 题目

1. HTML 代码

```
<div id=parent></div>
```

问: parent的值是多少? 

2. HTMLCollection与NodeList的区别有

   A. HTMLCollection实例对象的成员只能是Element节点，NodeList实例对象的成员可以包含其他节点。

   B. HTMLCollection实例对象都是动态集合，节点的变化会实时反映在集合中。NodeList实例对象都是静态集合。

   C. HTMLCollection实例对象可以用id属性或name属性引用节点元素，NodeList只能使用数字索引引用。
   ​               









## 增删改查

1. 约定

   1. xxx表示现在节点

2. 增

   1. 如果xxx想添加css样式,: `xxx.style.样式名 = 值`

   2. 如果xxx想添加HTML中的css属性: `xxx.属性名 = 值` 

   3. 1和2的区别:

      想象你正在创建一个``

      第一个是添加css样式`xxx.style.width = 100px`相当于``

      第二个是添加HTML属性`xxx.width = 100px` ,相当于``

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

8. ​

   ``

   ​

   ​

   ​

   ```
   <!DOCTYPE html>
   ```

   ```
   <html lang="en">
   ```

   ```
   <head>
   ```

   ​

   ```
     <meta charset="UTF-8">
   ```

   ```
     <title>Document</title>
   ```

   ```
   </head>
   ```

   ```
   <body>
   ```

   ```
       <div class="parent" id="wrapper">
   ```

   ```
         <ul>
   ```

   ```
           <li>选项1</li>
   ```

   ```
           <li>选项2</li>
   ```

   ```
           <li>选项3</li>
   ```

   ```
         </ul>        
   ```

   ```
       </div>
   ```

   ```
   </body>
   ```

   ```
   </html>
   ```

   ​

   js引擎将HTML树结构以对象的方式存储在内存中,且在内存中同样是树型结构

9. DOM-创建节点-API

   ​

   ``

   ​

   ​

   ​

   ```
   //第一种,创建元素节点(elementNode)
   ```

   ```
   var div = document.creatElement("div")
   ```

   ```
   //第二种,创建文本节点(textNode)
   ```

   ```
   var text = document.createTextNode("一个TextNode")
   ```

   ```
   //第三种,复制另一个节点A,true是将A节点及子节点都复制;false将A节点复制
   ```

   ​

   ```
   var div2 = div.cloneNode(true)
   ```

   ​

   需要注意的是:

   1. 创建节点,仅仅是在内存中开辟一段空间,并没有把节点与之前形成的树形结构连接.

10. 我在写老师的作业

11. `div.parentNode`与`div.parentElement`区别

   前者的意思是父结点,父结点包括element Node和text Node,

   后者的意思是父元素,

1. element与Node区别???

   element中文叫元素

   Node中文叫结点,

   后者包含前者

2. xxx.children表示xxx结点的所有element结点

3. xxx.childNodes表示xxx结点的所有node结点

4. document结点的意思: 表示整个html的根节点

5. xxx可以是element结点,可以是document结点,也可以是text结点,但一定是node结点

6. HTML文档可以看成由各种 DOM 节点组成的文档树，**例如：整篇文档是一个文档节点**

7. 节点类型通过xxx.nodeType确定

   | Element Type | Node Type |
   | ------------ | --------- |
   | Element      | 1         |
   | Attribute    | 2         |
   | Text         | 3         |
   | Comment      | 8         |
   | Document     | 9         |

8. xxx.nodeName,返回的是节点的名称

   1. 元素节点的名称是标签名，
   2. 文本节点的名称是#text，
   3. 文档节点的名称是#document。

9. 寻找 DOM 元素,经过寻找返回的节点一般是html的某个标签``,当然最大的节点是document

10. 现在所使用的 DOM 的属性和方法

   ​

   ``

   ​

   ​

   ​

   ```
    //获得节点的自身属性
   ```

   ```
    xxx.nodeType 
   ```

   ```
    xxx.nodeName
   ```

   ```
    xxx.nodeValue
   ```

   ```

   ```

   ```
    //长途搜索,获得 HTML 文档的节点
   ```

   ```
    document.getElementById()
   ```

   ```
    xxx/document.getElementsByTagName()
   ```

   ```
    xxxdocument.getElementsByName()
   ```

   ​

   ```
    xxx/document.getElementsByClassName()
   ```

   ​

``

```
 //短途搜索,其实就是按照一个已知节点通过关系获得其他节点,动态获取最后一个节点不会
```

```
 xxx.parentNode
```

```
 xxx.lastChild
```

```
 xxx.nextSibling
```

```
 xxx.previousSibling
```

```
 xxx.childNodes[]   //返回包含文本节点
```

```
 xxx.children[]
```

```

```

```
 //修改 DOM 树
```

```
 xxx.appendChild(xxx2)
```

```
 xxx.insertBefore(xxx1, xxx2)
```

``

```
 //创建节点
```

```
 document.createElement("p");
 document.createTextNode("This is a created element");
```

1. 对于DOM的理解

   ​

   ``

   ​

   ​

   ​

   ```
   <!DOCTYPE html>
   ```

   ```
   <html lang="en">
   ```

   ```
   <head>
   ```

   ```
     <meta charset="UTF-8">
   ```

   ```
     <title>Document</title>
   ```

   ```
   </head>
   ```

   ```
   <body>
   ```

   ```
      <h1>你好</h1>
   ```

   ```
       <div class="parent" id="wrapper">
   ```

   ```
         <ul>
   ```

   ```
           <li>选项1</li>
   ```

   ```
           <li>选项2</li>
   ```

   ```
           <li>选项3</li>
   ```

   ```
         </ul>        
   ```

   ```
       </div>
   ```

   ```
   </body>
   ```

   ​

   ```
   </html>
   ```

   ​

   ![img](http://upload-images.jianshu.io/upload_images/5529438-d3de7f00f7a01772.png?imageMogr2/auto-orient/strip%257CimageView2/2/w/1240)

2. ​

   ``

   ​

   ​

   ​

   ```
    //获得节点的自身属性
   ```

   ```
    xxx.nodeType 
   ```

   ```
    xxx.nodeName
   ```

   ```
    xxx.nodeValue
   ```

   ```

   ```

   ```
    //长途搜索,获得 HTML 文档的节点
   ```

   ```
    document.querySelector()
   ```

   ​

   ```
    document.querySeoectorAll()   //返回一个伪数组,即使伪数组内只有一个值,
   ```

   ```
    
   ```

   ```
    
   ```

   ```
     //关系搜索,其实就是按照一个已知节点通过关系获得其他节点,动态获取最后一个节点不会
   ```

   ```
    xxx.parentNode
   ```

   ```
    xxx.lastChild      //指向xxx的child.Nodes返回伪数组的最后一个节点
   ```

   ```
    xxx.firstChild     //指向xxx的child.Nodes返回伪数组的第一个节点
   ```

   ```
    xxx.nextSibling
   ```

   ```
    xxx.previousSibling   
   ```

   ```
    xxx.childNodes[]   //返回包含文本节点
   ```

   ```
    xxx.children[]    //寻找子节点,都用这个,并且xxx.children[]返回一个伪数组,所以要填[]内的数字
   ```

   ```

   ```

   ```
    //修改 DOM 树
   ```

   ```
    xxx.appendChild(xxx2)   //插在xxx的childNodes列表的的最后位置
   ```

   ```
    xxx.insertBefore(xxx1, xxx2)  //
   ```

   ```
    
   ```

   ```
    //创建节点
   ```

   ```
    document.createElement("p");
   ```

   ```
    document.createTextNode("This is a created element");
   ```

   ​

3. 当你的 HTML 写完之后，就想象有一个表示了这个 HTML 的树型结构,那我们做如下的操作

   1. 指定 === 获得某个 Node 节点,指定节点 === 用笔指着树型结构,说明可以操作了

      - 通过节点的特征找:长途搜索

        `var divTag = document.querySelector("#wrapper")`

         `var textNode  = document.querySelectorAll("li")[1].childNodes[0]`

      - 通过节点关系找: 关系搜索

        `var ulTag = divTag.children[0]`

   2. 在树型结构的空白区域创建节点

      `var pTag = document.createElement("p");`

   3. **在p节点创建Text节点**

      `var pText = document.createTextNode("这是添加的p元素的文本内容")`

      `pTag.appendChild(pText)`

   4. 将创建的节点接到树型结构上

      `divTag.appendChild(pTag)`

   5. 获得了某个 Node 节点(用笔指着树型结构),你就可以对这个节点进行操作

      - 获得节点属性:

        `divTag.nodeName`

        `divTag.nodeType`

4. 我知道如何创建Element节点,但是我不太熟悉如何创建Text节点

5. document和document.documentElement区别??

   前者表示的是整个dom树型结构还是document标签?

   后者肯定表示的是整个树型结构的html 标签

6. 修改dom的返回值是

7. document对象是HTMLDocument(继承自Document类型)的一个实例,表示整个HTML页面                  

8. 我在看阮一峰的DOM

9. ====

10. 你有了HTML文件, 电脑是通过把html转化为对象保存在内存中,而我们人脑则是把html文件用树形图的形式划出来,人脑所做的事情是一种抽象过程,抽象的结果就是树型结构,也就是DOM

11. document节点是最顶层的节点,代表整个**文档**(是不是整个树型结构??)应该是的

12. 根节点值得是html,而不是document

13. 除了根节点以外，其他节点对于周围的节点都存在三种关系。

   父节点关系: xxx.parentNode

   子节点关系: xxx.childNodes/xxx.firstChild/xxx.lastChild,注意返回NodeList集合,成员包括xxx节点的所有子节点,也就是说,除了HTML元素节点，该属性返回的还包括Text节点和Comment节点

   同级节点关系: sibling   如xxx.nextSibling和xxx.previousSibling

14. 我想知道这个节点的某些属性,通过这些属性来了解这些节点是什么?

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

   1. `xxx.textContent`和`xxx.innerText`返回的是xxx节点及其子节点的所有文本节点

15. 节点的关系中,返回的都有可能是text节点,所以这不好

16. Node节点对象的常用方法,只需DOM能做什么事情就可以了:

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

17. 分清`textContent`  `innerHTML`  `innerText`的关系