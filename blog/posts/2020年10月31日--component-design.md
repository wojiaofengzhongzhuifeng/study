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

- ✅请求数据时，通常需要做字段判断，如果是success，表示获取成功，有没有什么办法可以统一处理？(如何做请求的统一处理)？

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

- 数据 mock

- 



## 步骤

- 根据原型图划分组件范围
- 在 postman 拼接请求，保存所有所需接口
- 对数据放置位置进行判断



## 重新写一次变更分析组件

### 如何为现有项目接入typescript

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

- 不需要加入文件后缀配置

  ```diff
  - import TagList from "./components/TagList/index.tsx"
  + import TagList from "./components/TagList/index"
  ```

  在`webpakc.config.js ` 

  ```diff
  resolve: {
  -	extensions: ['.js', '.jsx',],
  +	extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  ```

  

### 实现需求步骤

- 划分组件
- 

### 划分组件需要思考组件方面

- 渲染组件需要哪些数据
- 组件触发事件，产生了数据，数据会触发哪些函数执行；如果是本组件的函数，那么这个数据应该是 state，如果非本组件函数，数据应该提升







### 如何数据 mock



### 如何查看postman真实请求

![image-20210117155127779](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210117155127779.png)

#### 统一处理请求结果

请求数据时，通常需要做字段判断，如果是success，表示获取成功，有没有什么办法可以统一处理？(如何做请求的统一处理)？

```javascript
function handlePromiseReject(promise){
	return new Promise((resolve)=>{
		promise.then((res)=>{
			if(res.code !== 'SUCCESS'){
				message.error(res.message);
				return
			}
			resolve(res);
		}, (res)=>{
			console.log('res', res);
		}).catch((e)=>{
			console.log('e', e);
		})
	});
}

    handlePromiseReject(getSubAttributeNames(postData)).then((res)=>{
			console.log(res)
    });
```





### useEffect使用async函数

```diff
useEffect(()=>{
-	getModelTree();
+    (async function () {
+      await getModelTree();
+    })();
}, []);
```



### 接口获取数据使用流程

```diff
+ // 1: 获取数据
const modelRes: IResponse<IModelResData> = await linkedQuery(modelPostData);
+ // 2: 处理特殊情况
if (modelRes.code !== 'SUCCESS') {
	message.error(modelRes.code);
	return
}
+ // 3: 处理后端返回的数据
let modelTreeList = convertToTreeList(modelRes.data.data);
+ // 4: 使用经过处理后的数据
setModelTree(modelTreeList)
```



### 数据应该如何选择存放位置

存放位置

- state
- 数据管理工具，如 mobx



### diff 组件的核心接口

#### 获取模型的构件数据过程

- postman 接口测试

- 观察 postData 数据来源，可以把postData 作为一个计算属性

  ```json
  {
      "scope": [   // 这个数据由 ModelSelector 组件产生
          "all"
      ],
      "condition": [ // 这个数据由 AdvanceSearch 组件产生
          {
              "bosclass": "tags",
              "field": "_key",
              "operator": "notNull",
              "logic": "Or"
          }
      ],
      "sort": [ // 这个数据由 table 交互产生
          {
              "order": "asc",
              "sortby": "name"
          }
      ] 
      // 还有 page per_page 数据, 也是由 table 交互产生
  }
  ```

- 也就是说：上面属性发生变化，就需要执行「获取模型构件数据」接口
- 接口 => 判断什么时候运行调用接口



#### 获取构件关联的数据

- ✅tag-tag、tag-document、tag-wbs 三个数据可以正常获取（通过接口）
- ✅mobx 设置  selectComponentObj ，发生变化时，获取这三个数据，



### 封装组件-高级搜索

该组件的作用：用户通过可视化的页面拼接搜索条件，也就是 condition

该组件所需数据：

1. 空间树结构
2. 其他选项中的树形组件数据

该组件产出数据：

1. condition





### 函数命名

- fetchxxx：通过接口获取数据
- convertxxxx：let newData = convertxxxx(oldData)
- handlexxxx：处理用户交互事件`<Button onClick={this.handleClickBtn}>点我<Button/>`



### mobx避免无限调用

#### 解决方法

- 条件调用 set 

  https://codesandbox.io/s/competent-christian-sn2eq





### 数据or函数应该由什么方式传给组件

目前有一个组件 ModelSelector，组件内部使用 `selectModelList`，`setSelectModelList`。那么这两个东西应该

1. 在ModelSelector组件定义处，通过 import 的方式引入
2. 在ModelSelector组件使用处，通过 props 的方式引入

应该选择哪一种？

应该第二种才对





### 需要解决的事情

- ✅请求数据有重复代码
- 组件需要外面的数据，应该从 props 传给组件而不是通过 import store



### 构件关联数据

#### 背景与需求

现有实体表： tags（构件）、documents（文档）、wbs（进度），关联表：tag_tag、tag_document、tag_wbs

需要实现以下的需求：

1. tag 与 tag 进行关联
2. tag 与 documents 进行关联
3. tag 与 wbs 进行关联

简单来说，就是通过 tagKey，获取与这个 tagKey 关联的 tag、document、wbs 数据

#### 细节

- 通过数据配置定义的关联表
  ![image-20210121105800571](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210121105800571.png)

- tag 与 document 关联的数据可以存放的方式

  - 系统自带关系类（irTagDocument）
    在关联表中，内置 tag_document 关联表，表中 bosclass 字段为为 irTagDocument
    ![image-20210121105644288](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210121105644288.png)

  - 继承自 irTagDocument 关系类的关系类（uirTagDocumentSon）

    同样在 tag_document 关联表中，只不过表内的数据的 bosclass 字段为 uirTagDocumentSon

    ![image-20210121110055022](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210121110055022.png)

  - 用户自定义的 tag 与 document 的关系类（uirTagDocumentNoSon）

    创建一张 uirTagDocumentNoSon 关联表
    ![image-20210121110406553](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210121110406553.png)

  - 总结
    - 如果用户**自定义**关系类（uirTagDocumentNoSon），数据库会生成一张 uriTest 关系表，并且表内的数据 bosclass 字段是 uirTagDocumentNoSon 
    - 如果用户定义的关系类（uirTagDocumentSon）**继承**自另一个关系类（uirTagDocument），不会生成一张表，而是在被继承的表内的 bosclass 设置为 uirTagDocumentSon 以作区分

- tag 与 tag 关联的数据可以存放的方式

  关系表存在 from 属性和 to 属性，存在方向性，现做如下规定：

  1. from 是当前选择的构件，to 是关联构件，那么这种情况是后序
  2. from 是关联构件，to 是当前选择的构件，那么这种情况是前序
  3. 同级构件：只存在于用户自定义的 tag 与 tag 关系表

  







### React深层state数据如何 setState

```
this.setState({
	treeData: [...this.state.treeData]
})
```



###最高层级数据UI逻辑

#### 数据从什么接口获取？

```
https://bigbos-alpha.bimwinner.com/bosdesignservice/{{appKey}}/tags/{{tagKey}}/getUpAndDown?type=up&level=1
```

通过这个 url 可以知道，需要两个数据才知道能获取最高层级数据

必须保证 tagKey 和 type 不为空， 才能调用接口获取最高层级数据

1. tagKey
2. type

#### 数据结果获取逻辑

前序和后序分别会返回一个数据层级，需要设置两者中较大的值作为最大数据层级





### 调用接口的时候需要做事情

需要判断 postData 是否为空，不为空才调用接口获取数据



### 数据放置位置

- UI 数据放到组件 state

- 用户交互中产生数据放到 store

  

