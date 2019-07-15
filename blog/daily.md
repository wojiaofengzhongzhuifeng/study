# 2019.7.15

## 知道为什么没有收获了

- 写的时候没有想清楚
- 遇到bug只向逃避

## typescirpt 全局安装与项目安装区别

如果全局安装，可以在电脑任意路径使用相应命令

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



