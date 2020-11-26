# 变更分析组件的收获与教训

## 出现问题

- 后端数据结构一旦改变，前端无法根据后端进行修改（mock 数据与真实数据的联通开发）

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



- 接口核心结束



- 后端返回的数据，前端需要从 a 字段改成 b 字段

  ```
  假设后端返回
  const resData = {
  	code: 123321,
  	key:1111
  }
  
  前端直接使用 code 作为前端视图数据
  
  但是需要使用 key 作为前端视图数据
  
  
  ```

  

- 命名变量的时候， 如果是 array， 使用 xxxList；如果是 obj， 使用 xxxinfo, xxxData, xxxObj 好不好？

- 出现这种代码，需要注意，应该如何处理？

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

  





## 变更分析组件其中一个例子

- tagUpList

  - 含义：通过接口获取构件上游构件数据
  - 是否有计算数据？有，因为获取上游构件数据后，需要根据上游数据渲染 echarts 关系图标，这两者数据类型肯定不同，所以需要进行数据转化
  - 什么时候需要修改？ 其中一个需要修改的时机：当用户选择不同构件需要重新获取 tagUpList 862
  - 如果 tagUpList （或者计算数据） 发生变化，会造成什么影响？ 需要重新渲染 echarts 关系

  

- 前端数据应该如何存储？
  - 有 3 个存储点：store 、 组件 state + 「经过 store 计算而来的数据」
    只有满足：①多个组件都在使用该数据 ②该数据无法通过其他数据计算而来 才能将数据放入到 store 中
  - 组件应该有 props 吗？还是在组件内直接使用 store？
  - 



## 步骤

- 根据原型图划分组件范围
- 在 postman 拼接请求，保存所有所需接口
- 对数据放置位置进行判断









