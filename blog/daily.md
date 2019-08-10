

---


# 周总结



# 2019.8.9

### 📒如何对 axios 进行二次封装

### bug1: 没有子节点的不应该显示下标

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/C4C0466C-6F42-4906-8903-7B9240BFF5B0.png)

### 右键选择文件夹，

# 2019.8.8

### 编写 React 业务组件流程是什么？

### bosf 发送请求，需要如何拼接 url

需要确定： 域名，appKey（也叫 projectKey），表名（entity），表的item(key)

### 模型加载步骤

- 获取用户需要的文件，文件类型是以下类型：

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808094650.png)

- 文件夹的处理

    - ifc 不需处理
    
    - OBJ，iModel，FBX 需要转化为 zip 包
    
    - Rvt 需要在 window 下的 revit 软件进行「导出模型」操作，导出的结果是一个 zip 包

- [链接](http://bos.bimwinner.com)，选择某一个应用，选择「应用预览」

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808094824.png)

- 将 zip 或者 IFC 文件进行上传

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/E34872AF-9B15-400B-8654-789CB7F1CAF9.png)

- 点击红框，弹出模型加载页面

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808103939.png)

- 替换 url

http://demo.bimwinner.com:7787/showAllComponentsInfo?host=🚧host🚧&3dAppKey=🚧appKey🚧&modelKeys=["🚧modelKey🚧"]

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808104425.png)


# 2109.8.7

### postman 如何在登录之后，自动记录 token 的值，在其他地方使用这个 token 的值？

### ✅403 是什么原因？

其中一个原因：url 带 appKey，拼接 url 过程中，appKey 错误

### ✅如何全局寻找文件
`open file_name`

### ✅我基于 antd 的 table 组件封装代码，如何继承 antd 的 table 的所有属性？

![](http://snpy.in/Qmu7eE)

### 📒组件所需的数据与后端返回的数据常常不一致 如何处理？编写业务组件代码的步骤是什么？

目前我这样处理：

1. 区分 ui 组件和容器组件

2. 在容器组件中，创建静态数据，传入 ui 组件中，生成静态页面

3. 测试接口

4. 在容器组件中，通过接口获取数据，在容器组件中进行数据转化，转化成静态页面页面所需数据

### ✅如何使用 react hooks 模拟 didMount ？

https://codesandbox.io/s/dreamy-microservice-b52hf

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190807184754.png)

### 📒如何 mock 数据？



# 2019.8.6

### ✅demo展示页面中，将 markdown 中的超链接[]()转化为 iframe

核心：

1. 正则匹配，获取 a 标签字符串 `match`

2. 字符串转成 dom， 通过 `getAttribute` 获取href `new DOMParser().parseFromString(linkString, "text/xml")`

3. 正则匹配，将 a 标签字符串替换为 iframe  `replace`

实现： https://jsbin.com/qafiroguho/2/edit?js,output

### ✅正则匹配有哪些方法，有什么作用？

> 正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、replace、search 和 split 方法。本章介绍 JavaScript 正则表达式。

### demo 展示页面中，中文的demo分享功能似乎有问题

### ✅demoList 页面中，treeData 应该放到 state 还是 props 还是放到 redux 还是放到 demoList/index 文件中 还是demoList/DemoTree?

demoList/index 组件内的state

### demo 展示项目中的前后端合作方法

### ✅url 转码

四个 api

传入的是整个 URL: encodeURI decodeURI

传入的是部分 URL: encodeURIComponent decodeURIComponent

### 需求：用户将 xxx 保存至「我的收藏」
testZ

### 需求：demo管理页面，需要添加按钮，用于用户上传他的项目到实例项目中

### 需求：创建一个页面，页面功能是管理用户的请求







  




# 2019.8.5

### 📒如何进行断点调试

### React hooks 如何模拟 componentDidMounted 其中种方法

在 useEffect 中监听了事件，这样很有可能监听多次事件，如何处理？

在文件设立一个变量（不是组件的state）

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190805191240.png)

### ✅如何打印reject的内容

`console.dir`

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190805100216.png)

### ✅对象内，一个 value1 使用另一个 value 的值，如何处理？

value1 设为函数

### ❓如何定义 react state 为 number 的初始值？

null

### ✅「修改」用英文怎么说？

update

### ✅state 是一个 数组对象，如何进行增删改查？

前提：this.state.list = [
  {
    name: "test1",
    id: 1
  },
  {
    name: "test2",
    id: 2
  },
  {
    name: "test3",
    id: 3
  },
]

增：
```
this.state.list.push({name: "xxxx", id: "yyyy})
this.setState({
  list: this.state.list
})
```

删：
```
已知 wantToDeleteId = 123321

const afterDeleteList = this.state.list.filter((item)=>(
  item.id !== wantToDeleteId
));
this.setState({
  list: afterDeleteList
})
```

改：
```
已知 tempProject = {
  id: 123321,
  name: "testtesttest"
}

this.setState((preState)=>(
  {
    list: preState.list.map((item)=>(
      item.id === tempProject.id ? Object.assign(item, { name: tempProject.name }) : item
    ))
  }
))
```

### ✅webstorm 如何进入下一个错误

shift + f2

### 📒ts + react 中 点击一个 button 事件中， 涉及的概念？以及如何定义 e 的类型

- event(e): 事件

- handler: 函数

- element: 元素，可以认为是 dom 元素

### ✅如何定义 e（event）类型

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/99e05636bf0cbc32121bdb212efefd7a0837d1e9

如何让 webstorm 提醒你类型？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190805201225.png)

在定义 e 的时候，故意写错即可

### ✅如何定义 onClick 处理函数

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/7ec892853c106e30483aac036f49405d0e21f3e7

### ✅如何继承原生 icon 的所有属性

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/f4dbb03b2d0136422249260e9c483dfd151eeed2





---周分隔符---



---





# 2019.8.3










## ztalk

- 赚钱能力 ！== 赚钱
- 明确目前工作的重要性
- 努力是阶层流动最重要的因素
- 第一桶金是怎么来的？
  - 选择一件最想做的事情去做
  - 变成一件事情的专家
  - 寻找机会 
  - 要有想象力，想象成功的画面 



## react 轮子项目笔记

[webpack上](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/react轮子/01webpack4环境搭建（上）.md)
[webpack下](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/react轮子/02webpack4环境搭建（下）.md)

## 看视频，应该怎么做笔记？

1. 每个视频，都要记上做了什么？以及你的疑问



# 2019.8.2

## 粘贴图片完成上传功能

- 监听粘贴事件，将图片通过上传接口上传到服务器中

- 上传完毕会拼接以下的字段：

  `![](这里是上传图片的服务器地址)`

- 遇到的问题：

## 使用一个例子，总结函数式组件常用的ts api

https://codesandbox.io/s/brave-jennings-figt1

## 想上传文件，如何配置 ajax ？

![使用 postman 发送请求](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190802163057.png)

![使用axios发送请求](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190802162950.png)

**重点在于formData 的代码**

## ts 报错

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190802151436.png)

converter.makeHtml(content)是 string 类型

dangerouslySetInnerHTML 需要 `{__html: string}`类型

前者是你提供的，后者是api需要的数据类型

## react 初始化数据

未完成demo书写

https://codesandbox.io/s/kind-jang-4mr44

# 2019.8.1

- react hooks 如何定义 props类型？

  ```react
  interface Props {
    markdown: string;
  }
  const EditDemoPlace: React.FC<Props> = ({markdown})=>{
  	return (
  		<div>{markdown}</div>
  	)
  };
  ```

- 一般来说，在变量名称定义之后，立即进行类型定义

- 定义 css 对象

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190801152925.png)

- 如何在 ts 中定义 input 的e? 

  https://codesandbox.io/s/blissful-bas-3r20r

  点击 onChange

# 2019.7.31

## bos二次开发

-  

# 2019.7.30

- React hooks 使用 https://codesandbox.io/s/exciting-dirac-6h64c

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190730101034.png)

  如果 state 是一个对象类型，那么如何修改这个state？

  在todos修改，然后setTodos

- 副作用分为无需清除和需要清除

- 副作用(side effect)分为Data fetching, setting up a subscription, and manually changing the DOM

- useEffect === do something after render dom

- js操作url的params 不刷新方法

# 2019.7.29

- 页面 === routes

- 公司有个库，通过cdn script 引入，有的时候会报错

  在 script 中添加 async 属性

- 

## 盈嘉demo 展示管理工具需求

- 未登录，「我的实例」和「我的收藏」不展示，「demo管理」和「demo 添加」页面不展示
- 添加 「demo管理」和「demo 添加」页面
- 在「demo 展示」中，能搜索
- 添加页面layout切换功能
- 使用 dva 请求「demo展示」数据

# 2019.7.26

- Dva 使用
  - 



# 2019.7.25

- react 高级应用： refs

  核心：通过 refs 获取dom，将dom从子节点传输到父节点

  https://codesandbox.io/s/hardcore-currying-u6wm4

## three 书笔记

- 三个核心对象

  - 场景(scene)：容器，包含想要渲染的物体 + 使用的光源
  - 照相机(camera)：
  - 渲染器(render)：根据场景和照相机，决定浏览器是如何渲染的

- 英文单词

  geometry：几何大小

  Plane: 平面

- camera 和 spotLight 不是一个东西 

  Camera 指示render 从哪一个位置渲染

  spotLight 与阴影有关

- Plane 只是一个普通的几何物体而已，与 cube sphere没有区别

- 一个几何物体，需要考虑 大小 材质。通过 材质(material) + spotLight 可以产生阴影

- Axes:

  - 红：x
  - 蓝：z
  - 绿：y



## 第二个项目

- 登录logIn注册signUp
  - 当用户没有登录 重定向到登录页面
  - 

# 2019.7.24

- react 父组件调用子组件的方法：核心：父组件获取子组件的this

  https://codesandbox.io/s/eloquent-cannon-k0icb

- form 表单有初始值的处理

  - 表单不要有 state

  - 如果需求是点击确定才修改，那么总数据新增一个字段，用于临时保存用户选择的数据和修改数据

    https://codesandbox.io/s/brave-hamilton-gm58d

- 数据stack heap 的bug

  https://www.yuque.com/docs/share/8a6e0241-b290-4756-818c-9a6bedd9e89e

# 2019.7.23

- render 函数中

  ![image-20190723140541068](/Users/raojj/Library/Application Support/typora-user-images/image-20190723140541068.png)



# 2019.7.22

- react 中，如何进行数据命名，以及对数据操作的函数命名？

  - 数据：number；
  - 对数据的修改：editNumber；
  - 对数据的初始化：initNumber；
  - 使用数据A产生数据B：createNumber(数据A)
  - 数据过滤结果： matchNumber
  - 数组： friends

- react中，子组件想修改父组件的数据，最简单的实现方式是什么？

  - 不需要在子组件传递父组件的state 的数据
  - 父组件setState函数可以传入一个函数

  https://codesandbox.io/s/serverless-frost-0r2ji

- react 哲学

- 不要设置相同的变量名称

  ![组件的函数的参数不与state，antd提供的属性名称一致](/Users/raojj/Library/Application Support/typora-user-images/image-20190722185812537.png)

  ![①组件的state名称不与antd提供的属性名称一致](/Users/raojj/Library/Application Support/typora-user-images/image-20190722192144954.png)

  

# 2019.7.19

- 有数据，才使用数据进行计算。如

  const test = noEmptObj(obj) && createTest(obj)

  当obj不为空，才获取test的数据。

- state的变量名称不能重复

- 组件的state 初始化由prop提供，是应该这样写还是

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190719182542.png)

  在 componentDidMounted写？



# 2019.7.18

- 是否 constructor 无法 setState
- 现有一个函数 test(a, b)，输出a + b，其中a, b都是异步获取数据，那么如何保证test正常输出值？

# 2019.7.17

## table-tree 思路

- 写一个组件，接受两个props，分别是buttonBottom，model = [{domain: "baidi", dataBaseKey: "xxx", modelKey: "yyy"}]

- 进入这个组件所在页面，使用 5.3.11 发送请求，获取到如下数据，将数据A保存起来，数据A选择 200 个数据B

  ```
  // 数据A
  allModelData = {
  	m1: {
  		m1Key1: xxx,
  		m1Key2: yyy,
  		... * 10000
  	},
  	m2: {
  		m2Key1: xxx,
  		m2Key2: yyy,
  		... * 20000
  	}
  }
  
  // 数据B
  someModelData = {
  	m1: [...* 200],
  	m2: [...* 200],
  }
  ```

- 点击按钮，右侧抽屉打开，抽屉是两个 table ，并且分别有两个按钮，查询和自定义列名

- 多条件查询功能，通过 5.3.7 获得构件 key

- 点击查询，再出来一个抽屉，用于收集多条件数据，点击确定，抽屉消失，table显示多条件数据，table显示数据通过数据A + 5.3.7 接口获取

  Table的 dataSource 

  ```
  [{name: "xxx", key: "yyy", type: "zzz"}...]
  ```

  Table 的columns

  ```
  [
  {title: "name", key: "name", dataIndex: "name"},
  {title: "key", key: "key", dataIndex: "key"}
  ]
  ```

  

- 点击 自定义列名，出来一个抽屉，该抽屉展示一个树组件，树组件数据通过数据B得到。

- 选择完成树组件之后，table会多相应的列

# 2019.7.16

- 分页思路
  - 进入页面，请求第0页，100条component数据A
  - 使用数据A+createTreeComponentData函数，生成树组件
  - 用户通过点击树组件，获得用户想要展示的数据B
  - 使用数据B + createTableColumnData 函数，生成table 所需的表头数据
  - 使用数据B + createTableDataSource 函数，生成 table 所需的表体数据
  - 点击第二页，???

- 函数命名
  - Createxxxx：生成某个数据
  - getxxx：获取某个数据
  - editxxx：修改某个数据
  - Fetch：远程加载数据
  - Computedxxxx: 通过计算获得数据,将此数据返回
- 

# 2019.7.15

## 知道为什么没有收获了

- 写的时候没有想清楚
- 遇到bug只向逃避

## typescirpt 全局安装与项目安装区别

如果全局安装，可以在电脑任意路径使用相应命令



## 什么情况需要定义类型？

- 函数的输入参数与输出结果
- 对象

# 2019.7.12

## 数据处理问题

```javascript
const array = [
	{
		name: "基本屋顶:常规 - 400mm:314275",
		attribute: {
			BaseQuantities: {
        		// 			"Perimeter": "134120.032649328",
		// 			"GrossArea": "36.670854086856",
      }
		}
	}
]
```

https://jsbin.com/bebotubuzo/1/edit?js,output

# 2019.7.11

## 数据结构选择问题

最大的问题：选择数组还是对象

有顺序，用数组；

其他都用对象



# 2019.7.10

## 工具栏类

- getFlag：获取工具栏状态集合
- postil：批注
- 快照（snapshot）、批注(postil)、标签(mark)类似
  - 都需要进行类声明，获得对象实例
  - 属性
  - 方法
  - 监听方法



## 二维带连线标签DOMMARK（及其）之后的都没有看

## react + antd-pro + bos 搭建展示demo的框架

- 在 create-react-app 搭建的项目中，有几种引入库的方式？分别如何引入？

  - import 与 script 引入有什么不同？？为什么bos不能通过 import引入

  - 如何引入 本地文件？？？？？？？？为什么要这样引入？？

    1b545dcc7e2b98faa8eee55b9792ca92164199b7



## 切换淘宝源的方法

https://zhuanlan.zhihu.com/p/35856841



## 为什么network没有某些请求？

清除缓存







# 2019.7.9

## three.js 知识结构图

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190709092151.png)



## three.js 执行过程

[http://ushiroad.com/3j/](http://ushiroad.com/3j/)

## 解决昨日遗留后台管理项目的问题

## 学新东西，第一步永远是抄袭

## 如何展示业绩？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190709165439.png)bosf可以玩哪些demo?   

1、数据的查询

2、模型的解析

3、文档的管理

4、多条件的查询

## demo

- demo的作用：因为你还要描述你这个demo制作的目的的，领导是要看你为什么要做这个demo

- 如何说明demo的作用：按点说明

## 构件 ，模块 api 的英文单词 + 不懂的 api

- transparent：透明
- colorful：变色；colorfulComponentsByKey 为构件设置颜色
- wireFrame： 线框
- isolate：隔离
- sort：筛选；`sortComponentsByKey(["M123456_123456","M123456_123457"],"门")`
- Attribute：信息属性；
- explosion：离散(爆炸)
- translate：x，y，z轴平移
- scale：缩放
- rotate：旋转
- cancelTransform：取消变换，包括 translate， scale， rotate
- restore：重置
- showComponentTransformOnAxis



## 相机、动画 api

- zoomToBox
- adaptive：视图缩放(适应)
- getBoxByComponentsKey
- enabledCameraRotateOfVerticalPolarAngle
- polarAngle：最大(小)角度

# 2019.7.8

## 完成一次模块加载

- 上传文件，获取 fileKey

- 解析文件，输入 fileKey，输出 modelKey: M1562740933854

- 创建场景（创建模型默认场景接口），输入 modelKey，输出 相同的 modelKey

- 模型浏览

  ```
  <!DOCTYPE html>
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>Model Display Page</title>
  <link href="http://bos3d.bimwinner.com/static/latest/BIMWINNER.BOS3D.min.css" rel="stylesheet">
  </head>
  <body>
  <div id="viewer" style="width:100%; height:100%"></div>
  <!-- 引用BOS3D提供的显示组件库 -->
  <script src="http://bos3d.bimwinner.com/static/latest/BIMWINNER.BOS3D.min.js" charset="utf-8"></script>
  <script type="text/javascript">
   var option = {host: "http://bos3d.bimwinner.com", viewport: "viewer"};
  
   var viewer3D = new BIMWINNER.BOS3D.Viewer(option);
  
   var modelKey = "M1541058376596";//在此指定模型key，请更换modelKey以查看自己上传的模型
   var projectKey = "test";
  
   var tool = new BIMWINNER.BOS3D.UI.ToolBar(viewer3D);
   tool.createTool();
  
   viewer3D.addView(modelKey, projectKey);
  
  </script>
  </body>
  </html>
  ```

  





## react router 如何完成组件外跳转

在该组件定义处，使用 withRouter 高阶组件进行包裹，那么在该组件的this.props可拿到history等属性

## 新的跳转的方式

```javascript
this.props.history.push({
	pathname: "/test",
})
```







# 第一周知识点汇总

- 所有功能由数据结构开始想

- 在 postman 中创建全局变量

- none, form-data, x-www-form-urlencoded, raw, binary 是什么？区别是什么？

  - 一般只用 form-data 或者 raw

  - form-data 指的是上传文件或者传输表单内容。

  - raw 指的是传输的是 JSON 

- http 400，401， 405

  - 401：用户未验证
  - 400：服务器无法理解请求内容
  - 405：调用方式错误

- token 的理解

  想操作数据库，必须要

  1. 指定数据库： appKey

  2. 获取权限： access_token

  access_token 是用户通过登录网站之后，响应内容返回的 token 作为 access_token 

- api 中比较重要的接口

  - 11：多条件获取对象表内的实例数据（获取所有对象数据）
  - 24：获取关系表内所有的实例数据（获取所有关系数据）
  - 12：批量增加对象表内实例数据
  - 28：批量增加关系表内实例数据
  - 27：根据对象表内实例数据获取指定关联方向的实例数据



