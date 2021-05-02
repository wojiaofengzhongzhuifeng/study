# 树形组件

## 功能

- 展示数据
- 选中数据
  - 单选
  - 多选

## 笔记



### sourceData API 展示树形数据



### 如何升级库的版本（typescript）

- yarn info typescript version
  确定在线最新 ts 版本
- 在 package.json 修改版本号，然后安装

  1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x



### 递归渲染树形数据

使用函数 renderItem 递归渲染树形组件

为什么是函数而不是组件？

因为函数 renderItem 

### selected API 表示当前选择树 item

### onChange API 表示触发选择树 item

(item: treeItem, clicked: boolean)=>void

item 表示触发选择树 item 的数据，

### mutiple API 表示树组件单选、多选

### ts 联合类型的使用

- 使用场景

  树组件现有两个 API ，分别是selected（当前勾选的树 item）与 mutiple（树组件单选与多选）

  一般来说，这两个 API 的组合方式如下：

  - selected: [’1.1‘, '1,2']    |     mutiple: true
  - selected: '1.1'    |     mutiple: false

  但是，用户也可能这样组合

  - selected: [’1.1‘, '1,2']    |     mutiple: false

  需要使用联合类型阻止用户如上组合

- 如何使用？
  https://codesandbox.io/s/ecstatic-lumiere-dg10k



### 重新设置 onChange API 的参数

(selected: string[] | string)=>{void}



### sc 函数支持对象传入方式





### 展开折叠功能







  



 





