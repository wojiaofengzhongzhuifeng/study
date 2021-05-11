# 树形组件

## 功能

- 展示数据
- 选中数据
  - 单选
  - 多选

## 笔记



### ✅sourceData API 展示树形数据



### ✅如何升级库的版本（typescript）

- yarn info typescript version
  确定在线最新 ts 版本
- 在 package.json 修改版本号，然后安装

  1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x



### ❌解决源代码与调试代码行数对不上问题





### ❌递归渲染树形数据

- renderItem 应该是函数还是组件?

  第一想法是组件，但是使用的时候给我报了一个错误

  ![image-20210502105508213](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210502105508213.png)

  因为自己写的组件不允许传入 key 属性

- renderItem 的 props 应该是 treeItem 还是 key、value、children
  两者都可以，只不过使用组件的方式会有细微不同

  建议使用 treeItem 的传入方式，因为 key 这个属性是内置，如果定义 key 属性的话，会报上图的错误

- 如果传给组件一个 key 属性，key 会被吞掉？？

  https://codesandbox.io/s/kind-cdn-nnvzz

  是的，因为 key 属性是 react 自有属性，你不应该定义组件的时候，要求用户传入 key 

  

  



### ✅sc 函数支持对象传入方式



### ❌根据树形组件的层级添加 className

需要根据需求做进一步修改



### ❌完成组件的单选功能

- ✅包含 selected、onChange API
- 如何定义传入 treeItem 的 onChange 函数？
- ✅设置 `e: React.ChangeEvent<HTMLElement>` ，e.target.checked 获取不到
  应该设置 `e: React.ChangeEvent<HTMLInputElement>`

### ✅完成组件的多选功能





### ❌mutiple API 表示树组件单选、多选

没有这个 API 的必要，因为单选还是多选在 selected API 的时候已经指定好了

### ✅ts 联合类型的使用

- 使用场景

  树组件现有两个 API ，分别是selected（当前勾选的树 item key ）与 mutiple（树组件单选与多选）

  一般来说，这两个 API 的组合方式如下：

  - selected: [’1.1‘, '1,2']    &&     mutiple: true
  - selected: '1.1'    &&     mutiple: false

  但是，用户也可能这样组合

  - selected: [’1.1‘, '1,2']    |     mutiple: false

  需要使用联合类型阻止用户如上组合

- 如何使用？
  https://codesandbox.io/s/ecstatic-lumiere-dg10k



### ❌重新设置 onChange API 的参数

不做，我觉得这样 API 更不好用

(selected: string[] | string)=>{void}





### ✅展开折叠功能

- 如何使用数据记录折叠数据？

  使用 useState记录折叠数据



### ✅什么时候要在组件添加 key 属性？

只有一种情况，循环方法（比如 map）内的组件才需要添加 key，其他都不需要！

![image-20210502154632259](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210502154632259.png)







  ### useSecondUpdate

- 作用

  监听state 数据的变化，执行相应预设函数

- 与 useEffect 的区别是什么？

  useEffect 是数据改变，就执行

  useSecondUpdate是数据第二次改变，才执行（因为第一次很有可能在做初始化，那么此时不应该执行） 



### updateDataSource API





 





