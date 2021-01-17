# 变更分析组件的收获与教训

## 出现问题

- 后端数据结构一旦改变，前端如何统一修改？

  ```
  const person = [
  	{
  		name:"1",
  		desc: "2"
  	}
  ]
  
  
  并且我根据 name 与 desc 生成了前端视图，但是后端返回的数据如下
  
  //
  const resData = [
  	{
  		name1: "1",
  		des: '2'
  	}
  ]
  
  解决的就是上面的问题
  ```

  解决办法：获取的数据，统一经过变换函数处理

- 请求数据时，通常需要做字段判断，如果是success，表示获取成功，有没有什么办法可以统一处理？(如何做请求的统一处理)？

- 定义了 store 某个数据的修改方法，并且在多处执行了修改方法，有没有办法知道是在哪个地方执行了修改？
- ===

- 核心接口开始
- 重要接口 /prototype/query/{entity} 多条件查询实体数据

- 重要接口 /linked/query 实体多对象关联查询

  - 接口目的：跨表获取用户指定的字段
  - 获取条件：①用户指定的

- 重要接口 /egde-batch 批量增加关系实例数据（为关系表添加数据）

- 重要接口 /relationByType  获取{entity}对象类指定的key的指定关联方向{type}的所有关联实例数据

- arrangodb 数据库

- 数据库核心

  - 进度数据（实体数据）放在实体表
  - 两个实体数据经常需要产生关联关系数据，关联关系数据保存在关系表

  - 

  ![image-20201111161238072](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201111161238072.png)

  ![image-20201111163451158](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201111163451158.png)

- /linked/query 测试：获取模型对应文件路径

- /linked/query 测试：获取同级业务构件数据

- ===接口核心结束

- 命名变量的时候， 如果是 array， 使用 xxxList；如果是 obj， 使用 xxxinfo, xxxData, xxxObj 好不好？

- 处理 a.b.c.d.e 中 某个变量不存在的情况

  ```javascript
  class Demo extends React.Component{
  	render(){
  		return (
  						{
  							this.state.smallAreaList.map((smallArea)=>{
  								return (
  									<div>{smallArea.name}</div>
  								)
  							})
  						}
  		)
  	}
  }
  
  
  // 如果渲染过程中 this.state.smallAreaList === undefined, 会直接抛出异常，所以要对 this.state.smallAreaList 进行判断
  
  class Demo extends React.Component{
  	render(){
  		return (
  						{
  							this.state.smallAreaList && this.state.smallAreaList.map((smallArea)=>{
  								return (
  									<div>{smallArea.name}</div>
  								)
  							})
  						}
  		)
  	}
  }
  ```

  

- 组件需要考虑
  - 输入数据是什么？输入数据从哪里来？
  - 输出数据是什么？如果输出数据变了，需要做什么事情？

- 组件划分

  ![image-20201102120357230](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201102120357230.png)

  

- 在主站中打开多个用户的应用，发现第一个应用所有 bos3d 接口存在问题

- store.tagUpList

  - 含义：通过接口获取构件上游构件数据
  - 是否有计算数据？有，因为获取上游构件数据后，需要根据上游数据渲染 echarts 关系图标，这两者数据类型肯定不同，所以需要进行数据转化
  - 什么时候需要修改？ 其中一个需要修改的时机：当用户选择不同构件需要重新获取 tagUpList 862
  - 如果 tagUpList （或者计算数据） 发生变化，会造成什么影响？ 需要重新渲染 echarts 关系

  

- 前端数据应该如何存储？
  - store 
  - 组件 state
  - 组件 this.xxxx

- 父组件与子组件如何调用对方函数？兄弟间如何调用函数？

- 固定思路：组件内的函数分为三个部分：①定义变量②转换变量③使用变量

- 组件内 @observer 到底有什么用？

- class 组件函数位置放置固定思路

  ```
  class TodoList extends React.Component{
  	constructor(){}
  	
  	// 生命周期组件
  	componentDidMount(){}
  	
  	// 渲染函数
  	render(){
  		const {visible} = this.state
  		const {info} = this.props
  		return (
  			<div>{visible}</div>
  		)
  	}
  	
  	// 普通函数
  	getUserInfo(){}
  }
  ```

- 事件委托

- 大组件分割成小组件

- 使用node 脚本一件部署研发环境



## 步骤

- 根据原型图划分组件范围
- 在 postman 拼接请求，保存所有所需接口
- 对数据放置位置进行判断



## 重新写一次变更分析组件

### 如何为现有项目接入 ts？

- 安装 typescript

  `yarn add typescript`

- 生成 tsconfig.json 文件

  `npx tsc --init`

- 安装 ts-loader，用于处理后缀名为`.ts`或者`.tsx`的文件

  `yarn add -D ts-loader`

- 需要在 webpack 中加上 ts 的 loader 配置

  ```javascript
  module.exports = {
      //省略部分代码...
      module: {
          rules: [
              {
                  test:/\.tsx?$/,
                  loader:'ts-loader'
              }
              //省略部分代码...
          ]
      }
      //...省略部分代码
  }
  ```

  