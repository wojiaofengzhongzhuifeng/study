# jira项目观看过程笔记



## 第三章

### ❌public 是静态资源文件，内部的%public% 是什么东西？

？？？

### ❌使用 prettier 在提交之前格式化代码

- 使用 prettier 命令手动格式化代码
- 使用 lint-staged + kusky 在commit 前运行 prettier 命令

### ✅使用json-server 作为 mock 工具

- 将 json-server 通过 `yarn add json-server --dev`安装

- 添加 db.json

- 然后 package.json 添加 script 

  ```diff
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
  +   "mock": "json-server --watch __mock__data__/db.json -p 3001"
    },
  ```

### ✅react组件编写的过程是什么

- 划分组件
- 组件输入
- 组件输出（产生）数据
- 思考组件输出需要触发什么操作，如果触发其他组件操作，需要将该数据提升

### ✅ mock 数据与环境变量的联合使用

- 在 create-react-app 中使用

- setData

  在根目录创建`.env`文件，文件内容如下
  注意变量必须以 `REACT_APP_xxx`开头

  ```
  REACT_APP_API_URL = 'http://localhost:3001'
  REACT_APP_PROD_API_URL = 'http://baidu.com'
  
  ```

- getData

  ```
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
  ```

### ✅经验：收集 url query 最佳数据结构

#### 需求

需要根据用户的操作生成如下 url

`http://localhost:3000/projects?projectName=1&handlerId=2`;

那么应该使用一个**对象**去保存数据，而不是使用**几个分散的变量**保存

```diff
+ let filterData = {
+	 projectName: 1,
+	 handlerId: 2,
+ }

- let projectName = 1
- let handlerId = 2
```

为什么呢？因为如果用了下面的数据结构，那么拼接http 的时候，必须手动写 filterKey，这样要经常修改。如果换成对象，直接遍历对象的 key 与 value 生成 filterKey 和 value 就行了

### ✅常见需求

删除一个对象为 falsey 值的 key&value，（不包含 0）

### ❌react组件渲染优化

父组件更新，子组件一定更新，所以对每一个子组件包裹 React.memo(sonComponent)?

### ✅useDebounce使用

3-3-14:08

useEffiect 的回调函数什么时候执行？

重新执行该函数的时候执行



## 第四章

### ✅需要定义什么方面的接口

凡是变量都需要定义 interface.包括函数`输入参数`,`输出参数`, `用户自定义变量`

### 常见的typescript使用案例

#### 如何定义react hooks组件props?

```diff
+ interface Props{
+	 todoList: todo[]
+ }
+const Todo = ({todoList}: Props)=>{
	return (<div></div>)
}
```

#### case1

```
interface Test{
	params: string[]
	fn: (test: Test['params'])=>void
}
```

#### tuple + interface key 的使用

无法在 create-react-app 中使用ts-transformer-keys将 interface key 换成 []

需求： 做信息收集功能，需要收集用户的 username 与 password。

```
interface

优化
const UserInfoType = tuple('username', 'password');
```

### window 挂载 test 变量，但是 ts 提示报错

```typescript
declare global {
    interface Window { API_URL: string; }
}

window.API_URL = "test123321";
```





### 4-5

封装自定义 hooks 的好处

- 将 ui 与逻辑进行分离
- 追加新功能更加简单

使用 hooks 实现useArray，该 hooks 输入原始数组，输出`value` `clear` `removeIndex` `add`

```typescript
interface Person {
  name: 1
}
function useArray<T>(initialArray: T[]): {
  value: T[],
  setValue: (valueList: T[]) => void,
  add: (value: T)=>void,
  clear: () => void,
  removeIndex: (needRemoveIndex: number)=> void
}{
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
}
// get
const {value, setValue, add, clear, removeIndex} = useArray<Person>([])
```



## 第五章

- auth-provider.ts 文件的作用

  与 token 有关，用于处理 token 的 `get` `set` `remove`

- auth-context.tsx 文件的作用

  导出 useAuth。

  useAuth 是一个 custom hooks，抛出了 user，login， resgister， logout 属性或者方法。

  使用 login， resgister， logout 方法可以设置 user 的值。

  并且 useAuth 经过了 context 的处理，使得 useAuth 的值是**全局可获取**并且**数据共用**

- 如何使用 useContext

  - AuthContext：通过 `React.createContext` 生成

  - AuthProvider：通过 `AuthContext.Provider` 生成
  - useAuth：通过 `React.useContext` 生成



### 5-4

为什么要把 useAuth 放到 useContext，直接在组件中引入不就 ok 了吗？

这里有一个误区：**如果引用同一个 customhooks，复用逻辑，不共用数据。**

即组件son与组件sonSon都引用了 useCount，在组件 son 设置 count + 1 ，并不会影响 sonSon 的 count 数据

那么如何共用数据呢？使用useContext

[点击+1，复用逻辑，不共用数据](https://codesandbox.io/s/compassionate-glitter-2x0vn)

[通过 useContext，复用数据](https://codesandbox.io/s/friendly-joliot-kq5z8?file=/src/App.tsx:504-518)

### ✅5-5

使用 useAuth 判断是否登录状态，根据这个状态显示「未登录组件」与「登录组件」

### 5-6 5-7

使用 fetch api 封装 http ，完成登录注册功能

期待的 http 封装

```javascript
http('projects', {
    method: 'get',
    headers:{
      'Content-Type': 'application/json'
    }
}).then((data)=>{
    // 完全没有错误的 data, 所有错误处理都在 http 进行处理 , data
    console.log('完全没有错误的 data',data);
});
```



### 5-8 常见 utility type 的使用

type的使用1

```diff
- let youFavoriteNumber: string | number = 1
- let myFavoriteNumber: string | number = 2

+ type favoriteNumber = string | number;
+ let youFavoriteNumber: favoriteNumber = 1;
+ let myFavoriteNumber: favoriteNumber = 2;
```

utility type 1：Parameters



```typescript
const http = (
  test1: number,
  test2: string
)=>{
  console.log(1)
}
type test = Parameters<typeof http>
let t1: test = [1, '3']
```

utility type 2：partial

使用场景：选择原接口的 0 到 n 个属性

```typescript
interface UserInfo{
  username: string
  password: string
}
let person: Partial<UserInfo> = {username: '1'}
```

utility type 2：omit

使用场景： 去除原接口的指定属性 

```typescript
type UserInfo = {
  username: string
  password: string
  age: number
}
type test = Omit<UserInfo, 'username' | 'age'>
let t1: test = {password: '1'} // ✅
let t2: test = {age: 1} // ❌
```

如何限定函数的输入参数个数？

```javascript
function test(...[number1, number2]){
	return number1 + number2
}
test(1,2,3) // 3
test(1,2) // 3
```



### 第五章小结

- 登录功能
- 注册功能
- 登录/注册后设置 token 到 localstorage
- 区分未登录页面与登录页面
- 如果 401，清除 token，返回登录页面
- 请求接口都要带上 token
- 登录完成后刷新页面，页面保持登录状态
- 封装了 useAuth 借助 useContext 
- 封装了 useHttp 



### useAuth

- 出现的问题

  react 组件中，需要在任意层级获取变量A，以及修改变量A的函数，那么必须将这个变量以及函数放到根组件，并且通过 props 进行传递，太麻烦

- 解决方法

  使用 context + custom hooks 解决全局状态共用问题

- 是什么

  useAuth 是一个 custom hooks，抛出了 user，login， resgister， logout 属性或者方法。

  使用 login， resgister， logout 方法可以设置 user 的值。

  并且 useAuth 经过了 context 的处理，使得 useAuth 的值是**全局可获取**并且**数据共用**









### useAsync作用

- 出现问题

  http 封装未处理loading 与 error 状态，需要统一处理 loading 与 error 状态

- 解决方法

  使用 custom hooks，抛出如下对象

  ```
  {
  	error: Error | null, // 如果出现错误的错误对象
  	data: null, // 接口返回的数据
  	stat: "idle" | "loading" | "error" | "success"; // 当前请求的状态
  	run: // 将接口请求放入这里，即可获取数据
  	setData: 
  	setError: 
  	isIdle: ,
    isLoading: ,
    isError: ,
    isSuccess:,
  }
  ```

  useAsync => useHttp => useAuth + http 

  



### 使用 hooks 封装 http 请求需求

这样使用

```
const {data: projectList, run, status, error, } = useAsync<Project[]>();
run(axios.get('project'));
```

- useProjects
  - useHttp
    - useAuth
      - useContext
  - useAsync







## 第七章

### 最简单的方法处理 loading 与 error

```typescript
const ProjectList = ()=>{
	const [projectList, setProjectList] = useState<Project[]>();
	const [fetchProjectListing, setFetchProjectListing] = useState(false);
	useEffect(()=>{
		setFetchProjectListing(true)
		fetch('project').then((response)=>{
			if(response.ok){
				response.json().then((data)=>{
					setProjectList(data)
				})
			}
		}).finally(()=>{
      setFetchProjectListing(false)
    })
	}, [])
	return (
		<Table dataSource={projectList} loading={fetchProjectListing}/>	
	)
}
```

### 使用 useAsync hooks 处理 loading 与 error

使用最简单的方法获取接口数据时，需要在相应位置多添加两个 state（error 与 loading）。

```typescript
const ProjectList = ()=>{
	// useAsync 用于统一处理异步请求错误与 loading 状态，由泛型可知改 useAsync 如无意外，返回的是 Project[] 数据
	const {loading, data, run} = useAsync<Project[]>()
	useEffect(()=>{
    // 需要保证 promise1 返回值是 Project[] 
		run(promise1)
	}, [])
	return (
		<Table dataSource={data} loading={loading}/>	
	)
}
```

### 使用 useAsync 与不使用 useAsync 的区别

不使用 useAsync ，只是用代码将需求实现；一般情况下都不需要使用 cushooks

如果多处都有这个需求，那么应该把这个需求逻辑使用hooks 封装

简单来说就是逻辑是否封装的问题；



## 第八章

###hooks 闭包陷阱，使用useRef 解决



### useDocumentTitle

- 需求

  创建 3 个路由 /my /project /todo 

  默认是 react

  /my => 个人信息

  /project => 项目

  /todo => react 

  如果离开该组件。应该显示之前的title

- 实现过程

  - [最简单实现](https://github.com/wojiaofengzhongzhuifeng/useDocumentTitle-demo/commits/main)
  - 

### 为什么登录注册的 error 需要特殊处理(与 projectList error 作比较)

```javascript
const App = ()=>{
	const [number, setNumber] = useState(0)
	const handleClick = ()=>{
		setNumber(number + 1)
		console.log(number) // 打印 0，登录注册 error 的数据
	}
	return (
		<div>
			{number}  // 打印 1 ，projectList error 的数据
			<button onClick={handleClick}> + 1</button>	
		</div>
	)
}
```



### 实现 Error Boundaries， 捕获边界错误

下面的图在研发环境中，如果在生产环境中，会显示空白页面。

现在需要在生产环境中依然显示研发环境的错误（或者自定义错误页面）

![image-20210215122431592](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210215122431592.png)

### 实现需求：用户按照条件过滤项目名称与负责人信息，需要体现在 url 上，反之亦然

自己写的过程代码

```typescript
  const [searchParams, setSearchParam] = useSearchParams();
  useEffect(()=>{
    // 当用户选择不同过滤条件时, 修改 url 的数据
    setSearchParam(cleanObject(param) as URLSearchParamsInit)
  }, [param, setSearchParam]);
  useEffect(()=>{
    // 当页面加载后, 根据 url 设置 params 的数据
    let projectName = searchParams.get('name') || '';
    let handlerId = searchParams.get('personId') || '';
    setParam({
      ...param,
      name: projectName,
      personId: handlerId,
    })
  }, [])
```

自己写的 hooks

```
// usage
  useQuery(param, setParam)

// set
const useQuery = (param: {[key: string]: string}, setParam:any)=>{
  const [searchParams, setSearchParam] = useSearchParams();
  useEffect(()=>{
    // 当用户选择不同过滤条件时, 修改 url 的数据
    setSearchParam(cleanObject(param) as URLSearchParamsInit)
  }, [param, setSearchParam]);
  useEffect(()=>{
    // 当页面加载后, 根据 url 设置 params 的数据
    let paramsKeyList = Object.keys(param);
    let test = paramsKeyList.reduce((pre, next)=>{
      return {...pre, [next]: searchParams.get(next) || ''}
    }, {})
    setParam({
      ...param,
      ...test
    })
  }, [])
}

```





### React hooks 的坑

依赖的数据不能是普通的引用类型数据， 只能是通过 useState 处理后返回的数据

https://codesandbox.io/s/festive-bash-s9wru



##select 面临的问题和解决方法

- 面临问题

  - 前后端 id 格式不一致

    后端返回的 id 是 number；前端 select 处理后的 id 是 string

  - 默认值应该是什么，怎么取

    可以是 0 或者 undefined 空字符串，建议空字符串

- 解决方法

  封装 ant select 





### && || 返回值

&& 返回最后一个 truely 值，没有返回第一个falsey 值

|| 返回第一个 truely 值，没有返回最后一个 falsey 值





### 收藏功能前端实现

封装 antd 原本的组件

https://codesandbox.io/s/hardcore-https-3uwh4

# Webpack 原理

## 第一课-（AST）

### 编译过程

- parse：代码 code => AST
- traverse：遍历 AST 进行修改
- generate：AST => code2

### 工具

- babel 将高级语法翻译为 ES5
- @babel/parser
- @babel/traverse
- @babel/generrator
- @babel/core 包含前三者
- @babel/preset-env内置很多规则



### 代码技巧

- 使用哈希表存数据
- 通过检测 key 避免重复



### 循环依赖

- 有的循环可以正常执行
- 有的循环不可以
- 都可以做静态分析

### ES Modules VS CommonJS

- CommonJS 模块输出的是一个值的**拷贝**，ES6 模块输出的是值的**引用**
- CommonJS模块在运行时加载，ES6 模块编译时执行
  - CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
  - ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成，通过 AST 进行静态分析，可以执行 Tree Shaking





## 第二课-bundle（打包）















## 2020.02.28

### react hooks 如何实现 computed 属性？

注意使用 useMemo 封装原数据即可

- 需求

  - 现有 state {firstName: 'rao'} state {secondName: 'jiajun'}，现需要在视图中渲染出 rao-jiajun 的 div 
  - 并且有一个按钮，可以修改 firstName 的值
  - name 变化后，需要 setState name info 数据

- 实现

  https://codesandbox.io/s/upbeat-einstein-ozqpe

  

  

### react fiber 架构的作用









## 2020.02.27

### 在函数中，如果有意外，先把意外使用 return 处理，然后再处理作出逻辑

```javascript
// 只能打印 Number 类型的数据
function logNum(needLog){
	// 1️⃣ 函数边界条件
	if(typeof needLog === 'number')return
	
  // 2️⃣ 这里是函数主逻辑
	console.log(needLog)
}
```

## useUndo

- 需求：

  初始值1，点击 4 次，current 是 5

  点击2 次 undo，current 是 3

  点击 1 次 redo，current 是 4

- [自己写的](https://codesandbox.io/s/agitated-germain-ktstr)

- [使用 useCallback 包裹自定义函数](https://codesandbox.io/s/reverent-tu-1o8id)

- [由于history 与 historyHistory 关系密切，可以将他们合并到一个对象]()

  16：22

## idea 字体颜色含义

![image-20210227110303014](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210227110303014.png)

## 2020.02.26

### 如何 extends antd 的 Button props？

❌

### hooks 使用注意事项

hooks是一个生成器 用于生成相关函数 而不能作为业务函数直接调用

### useState 懒加载

https://codesandbox.io/s/confident-microservice-zn2ey



### 如何保存函数组件的函数？

- 通过 useState 保存，然而usestate传入函数有自己的作用 用于state懒初始化，所以这条路有问题

- 通过 useRef 保存

  注意 get ref 容器调用方式，其中一个调用方式是错误的

  官方建议：`onClick={()=>{xxxx()}}` 代替 `onClick={xxxx}`

  https://codesandbox.io/s/exciting-volhard-5ro35

### 点击收藏后，发送了请求，但是前端页面需要重新获取数据

不会

### 处理组件 A 还未挂载 or 已经卸载，依然执行 setState 爆出的错误

- 报错信息

  ![image-20210226134226611](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210226134226611.png)

- 解决方法

  创建 useMountRef，使用 useRef + useEffect 去判断组件是否已经挂载到 dom 



### useEffect 依赖项重复渲染的问题

- 场景重现
  - [依赖项是 fn](https://codesandbox.io/s/festive-sun-mzp7l)
  - [依赖项是 obj or array](https://codesandbox.io/s/cocky-jepsen-2yk50)

### 坑：useCallBack useState 依赖项的问题

useCallback 的函数中使用了useState，使用函数参数代替 state

```diff
- useCallback(()=>{
-	 setState({...state, name: 1})
- }, [state])

useCallback(()=>{
+	 setState(prevState => ({...preState, name: 1}))
+ }, [])
```

### 经验：写自定义 hooks 的时候，如果返回的是对象或者函数，都应该使用useCallback 或者 useMemo 进行封装后再返回

- 返回的函数

  ```diff
  // setState 在 hooks 中，并且通过 hooks 返回
  
  - const setState = (newState)=>{
  - 	setHistory([...history, newState]);
  - }
  
  + const setState = useCallback((newState)=>{
  +   setHistory([...history, newState]);
  + }, [])
  
  ```

- 返回对象

  https://codesandbox.io/s/upbeat-einstein-ozqpe

### 变量提升(暂时性死区)

- 使用 var 定义变量

  ```javascript
  console.log('a', a); // 打印 undefined
  var a = 1 
  ```

- 使用 const 定义变量

  const 与 let 也有变量提升，但不是设置为 undefined，而是放在「暂时性死区」

  ```javascript
  console.log('b', b); 
  // 报错 Uncaught ReferenceError: Cannot access 'b' before initialization 
  // 注意报错信息是不能获取 b 变量在初始化之前，并不是 b 未定义
  // 这说明引擎知道你后面声明了 b 变量
  const b = 1  
  ```

- 直接打印 c 变量

  ```javascript
  console.log(c)
  // 报错 VM608:1 Uncaught ReferenceError: c is not defined
  ```

### 组件共享状态（函数与变量）

- 假设需求

  现有应用 App，现需要在非常深的子组件可以获取到 App 组件的方法，并且调用

- 状态提升到公共组件，然后一层一层透传方法

  https://codesandbox.io/s/reverent-aryabhata-4dde3

- 假设 App 改变调用方式，那么需要修改所有调用方法

  https://codesandbox.io/s/upbeat-meadow-o5iwt

  ```diff
  - setModalOpen(true)
  + setModalOpen({
  	flag: true
  })
  ```

- composition component（组件组合）

  只需要透传一个组件即可，组件挂载需要的函数，如果需要添加挂载的函数，只需要改变调用方（p1,p2,p3）和设置方(App)，其他都不需要管

  https://codesandbox.io/s/mutable-brook-z6r8z?file=/src/App.tsx



### composition component（组件组合）蕴含的设计模式-控制反转

- 不使用 组件组合 ，那么需要多少个函数或者变量，就需要都手动传入，最大的问题就是每一层都需要改变传入函数或者变量数量
- 如果使用组件组合，把组件当成容器，将函数或者变量放到组件中，然后传递组件即可。并且改变传入的函数或者变量时，不需要改变每一层的传入





### 







## 2020.02.25

### 定义数组内部类型

- 需求

  假设我定义一个 array,内部类型分别为 string,number,string 如何定义？

- 解决方法

  变量后添加 as const

  未添加

  ![image-20210225105313589](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210225105313589.png)

  添加 as const 

  ![image-20210225105353425](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210225105353425.png)

### useQueryParam 为什么会出现无限渲染的问题

原因：

1. useEffect 依赖项是普通的引用类型
2. 在 useEffect 中执行 setState 操作

经验：

1. useEffect 的依赖项必须是经过 useState (数据是 ui 数据)或者 useMemo（普通数据） 返回的数据

```
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
    // 1️⃣ useEffect 依赖项使用了 useDebounce 函数的第一个参数
  }, [value, delay]);

  return debouncedValue;
};

export const useQueryParam = (keyList: string[])=>{
  const [searchParams, setSearchParam] = useSearchParams()

	// 5️⃣ 应该使用 useMemo 对 searchParamObj 进行封装
  // let searchParamObj = useMemo(()=>(
  //   keyList.reduce((pre, key)=>{
  //     return {...pre, [key]: searchParams.get(key) || ''}
  //   }, {} as {[key in string]: string})
  // ), [searchParams])
  // 4️⃣直接返回 searchParamObj，会导致无限调用
  let searchParamObj =  keyList.reduce((pre, key)=>{
    return {...pre, [key]: searchParams.get(key) || ''}
  }, {} as {[key in string]: string})

  return [searchParamObj, setSearchParam] as const


}

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // 2️⃣ 传入的 param 没有问题，因为 param 是由 useState 产生
  const debouncedParam = useDebounce(param, 200);
  return (
		<div>{param}</div>
  );
};

export const ProjectListScreen = () => {
  let [searchParamObj] = useQueryParam(['name', 'personId'])

  // 3️⃣ 传入的 searchParamObj 有问题，因为 searchParamObj 是普通对象，会造成无限渲染
  const debouncedParam = useDebounce(searchParamObj, 200);
  return (
		<div>{param}</div>
  );
};

```



### id-select.tsx(学习如何创建组件流程)

- 这个组件的作用是什么？

  后端传数据A 给组件，组件可以供用户选择，并且输出值只能是 number | undefined， 如果输出值是 undefined，说明选择的是默认值

- https://codesandbox.io/s/eager-fermat-9uks8

### 编程题

https://leetcode-cn.com/problems/two-sum/

https://cloud.tencent.com/developer/article/1483443



##2020.02.24

### 环境变量注入不同配置文件

- create-react-app + dotenv 出现问题

  需要在 `.env` 中添加如下的 preload

  ```diff
  - TEST=123321
  + REACT_APP_TEST=333333
  ```

### react hooks 闭包陷阱

- react hooks

  - [例子](https://codesandbox.io/s/interesting-swanson-pks22)

  - 原因

    - 页面加载完毕后，会为 Test 组件生成第一个快照，此时 count = 0

    - 点击 + 号后，会为 Test 组件生成第二个快照，此时 count = 1 

    - 离开 Test 组件后，会执行第一个快照的useEffect 的回调函数，在这个回调函数中获取 count，此时 count = 0

- [原生 js 例子1](https://jsbin.com/sewadozadi/1/edit)

- [原生 js 例子2](https://jsbin.com/tavatumima/1/edit?js,console,output)















## 2020.02.22

### 使用二分查找法确定 bug

- 如果发现最终定位的 commit 是 **merge commit**，那么需要分别进入merge commit进行定位
  ![image-20210222105900148](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210222105900148.png)



### webpack 报错

![image-20210222171022116](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210222171022116.png)

出现这个错误，并不是需要`yarn add webpack-cli/bin/config-yargs D `而是因为命令错误

```diff
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
-    "dev": "webpack-dev-server"
+    "dev": "webpack server"
  },
}

```



## 2020.02.21

### react 组件复用

- HOC

  要理解 HOC 需要先理解柯里化

  https://segmentfault.com/a/1190000018180159

  https://codesandbox.io/s/runtime-morning-gyoxg

  https://codesandbox.io/s/elastic-grass-eb93o

  https://juejin.cn/post/6844904050236850184#heading-1

- render props

- hooks

## 2020.02.14



## 2020.02.10

### 准备工作

- 硬盘休眠关闭
- mac 开机密码



## 2020.02.07

### 封装 useAsync

## 2020.02.06

### 函数

[链接](../posts/2021年02月06日-function.md)



## 2020.02.05

### ❌jquery无法深拷贝

？？？

### ✅函数注入泛型

```typescript
const log = <T>(a: T): T=>{
  return a
} 
function log1<T>(a: T): T{
  return a
}
```



### ✅useAsync

[链接](../posts/2021年01月23日-jira.md#useAsync作用)

### ✅promise

[测试 1 then 第二个参数与 catch 等效](https://jsbin.com/fizofihibi/1/edit?js,console,output)

[测试 2](https://jsbin.com/zapiziwera/1/edit)













## 2020.02.04

### ✅解决需求要有入口

写 hooks 的时候先假设如何调用这个 hooks

### ✅学东西要分类别，不同类别的知识学习方式都不一样

- 学习一个新框架，新技术（术）
  - 面临什么问题
  - 这个新技术怎么解决的
  - 这个东西是什么
  - 如何使用

## 2020.02.03

### ✅第三方登录出现了 bug 的原因以及解决方法

- 原因

  ```diff
  let res = {
    code: "SUCCESS",
    message: "成功",
  -	data: {
  -		login: {...}
  -	}
  +	data: {
  +		login: {...}
  +   wxEOpenID: "",
  +   qqUnionID: "",
  +	}
  }
  ```

  我取数据的时候， 直接这样取的，后端为 res.data 注入其他数据，导致报错

  ```javascript
  Object.keys(res.data)[0] 
  ```

  建议与这个[一起](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/posts/2020%E5%B9%B407%E6%9C%8825%E6%97%A5-%E6%B4%BB%E5%8A%A8%E6%80%BB%E7%BB%93.md#%E6%88%91%E8%B8%A9%E4%BA%86%E4%BB%80%E4%B9%88%E5%9D%91)总结

- 总结

  **使用对象 or 数组，要假定内部的内容是变化的**

  **如果数据是一个对象，要假定对象 key 的数量是不定的** [链接](https://jsbin.com/pitikiziho/2/edit?js,console,output)

  **如果数据是一个数组， 要假定内部的顺序是变化的** [链接](https://jsbin.com/karucinado/1/edit)

### ✅useAuth 

[链接](../posts/2021年01月23日-jira.md#useAuth)





## 2020.02.02

<p>
<details>
<summary>✅ git 折叠 语法</summary>



<p>
</p>


## 标题1

- 水果

- 吃法

- 学习

**test**

~~tset11~~


如果 PDF 未成功生成, 需要在本地使用命令生成 PDF, 然后将本地生成的 PDF 放到服务器编译之后的代码的文件夹

> PDF 文件名称是确定的 test 

```shell
$ gitbook pdf ./ './_book/业务数据服务 API.pdf'1
$ gitbook pdf ./ './_book/业务数据服务 API.pdf'2
```

[链接](https://www.google.com)

![图片](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200725151755080.png)

</details>
</p>






## 2020.02.01

### ✅ 完成功能函数-某个数据初始化为 null，经过 x 秒后才设置值，如何保证使用该数据的时候已经设置好值了？

局限性太大

```javascript
  function listenDataChange(data, key, fn, delay) {
    let timeId = null;
    if (!data[key]) {
      timeId = setInterval(() => {
        console.log('xxxxx')

        if (data[key]) {
          clearInterval(timeId);
          fn(data)
        }
      }, delay)
    }

  }


  let data = {};
  setTimeout(()=>{
    data.test1 = 1111
  }, 5000)
	// 参数 1：被监听变量只能是对象
	// 参数 2：需要监听的对象 key
	// 参数 3：数据改变的回调函数
	// 参数 4：查看数据变更间隔时间
  listenDataChange(data, 'test1',(newData)=>{
    console.log(newData)
  }, 1000)
```









# 使用 typeorm + typescript 在 next.js 中获取数据库数据

## 背景

使用 next 脚手架创建的项目，引入 typeorm + typescript 库。

## 目标

在 next 的 posts 页面中使用 typeorm 加载数据库数据。



## 过程

- 查看 [connection文档](https://typeorm.io/#/connection)

  ![image-20200827113855991](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827113855991.png)

  写了如下代码，报了如下错误

  ```
  EntityMetadataNotFound: No metadata for "Post" was found.
  ```

  ![image-20200827113954804](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827113954804.png)

- 拿着报错去搜索解决方法

  搜索到[这个](https://stackoverflow.com/questions/51562162/no-metadata-for-user-was-found-using-typeorm)，按照他说的，试了之后发现还是不行。
  ![image-20200827114502194](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114502194.png)

  但是可以确定的信息是：**报错与 typeOrm 配置有关**

  ![image-20200827114802946](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114802946.png)

  上面代码在文档中，默认导入的是 ormConfig.json 的配置，ormConfig.json 的配置如下：

  ![image-20200827114904317](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114904317.png)

  感觉都没有问题呀。

- 使用手动配置 ormConfig 代替文件配置
  既然能确定配置问题，我直接使用手动配置的方法测一下，代码如下：

  ![image-20200827115254682](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827115254682.png)

  可以拿到数据库数据啦。

- 随便改了代码，又发现报错

  ```
  AlreadyHasActiveConnectionError: Cannot create a new connection named "default", because connection with such name already exist and it now has an active connection session.
  ```

  ![image-20200827135325145](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827135325145.png)

  看提示，原因应该是不能重复执行 `createConnection` . 这样的话，应该需要知道以下 api :

  - 创建 connection
  - 判断是否有 connection
  - 获取 connection 

  （这种问题与 「localStorage 是否保存了某个属性，如果有，获取属性值，如果没有，写入属性值」逻辑很相似）

  

  







# blog系统

- typeorm 需要做的事情（按顺序）

  - 连接数据库
  - 使用 migration 创建表
  - 使用 entity 对表进行操作
    - 声明 entity 类型
    - 创建数据关联   

- 如何使用 typeorm migration 对表进行追加 column 操作

- 数据库统一风格模板表格

  studentRanks

- | id   | rank | studentName | createdAt | updateAT |
  | ---- | ---- | ----------- | --------- | -------- |
  |      |      |             |           |          |





## 操作记录

- 使用 docker 起一个postgresql 服务

  执行的操作， 

  ```
  docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d b98d1e0a90de
  
  ```

- 常用 PostgreSQL 命令行

  ```
  # 以 用户名为 blog 密码为 123 的账户进入数据库
  psql -U blog -W 123
  
  # 显示所有数据库
  \l
  
  # 进入某个数据库
  \c xxxx
  
  # 显示数据库表格
  \dt
  
  # 删除数据库表格
  drop table xxxx
  
  # 生成数据库
  CREATE DATABASE blog_dev_1 ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
  ```

- 在 next 中引入 ts，目标yarn dev 正常

  - 添加 tsconfig.json 
  - yarn dev 发现报错
  - 安装依赖，将某个文件从 jsx 换成 tsx
  - 发现 tsx 都是报错，原来是tsconfig.json 没有配置好

  

- 在 next 中导入 pg，目标是能在 next 中打印 connect 

  ```
  yarn add typeorm reflect-metadata pg
  
  yarn add @types/node --dev
  ```

- 出现的问题

  现有项目 next ，使用 babel 将ts 转成 js；

  typeorm 使用 ts-node 将 ts 转成 js；

  应该统一使用 babel 将 ts 转成 js；

- typeorm 不能做的事情

  无法创建数据库

- 需求：typeorm migration 创建表格 + 定义表格列属性， 目标通过typeorm 提供的api 能为数据库创建表格

  - cli 生成初始化migration 模板代码

    ```sh
    typeorm migration:create -n CreateTtttt
    ```

  - 通过 migration 定义 table columns

  - 使用 babel 将 ts 转为 js

    ```
    babel ./src --out-dir dist --extensions .ts,.tsx
    ```

  - 运行migration
    这个代码会根据json 文件的配置运行 js 文件

    ![image-20200822060329110](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200822060329110.png)

    ​	typeorm migration:run + ormconfig.json 的运行结果是：

    ​	运行 dist/migration/\*\*/*.js 所有文件

    ​	简写为

- package简写操作

  ```sh
  # 原命令
  typeorm migration:create -n CreateTtttt
  
  # 简化命令
  yarn m:c -n CreateTtttt
  ```

- 创建 entity(使用类和对象操作)

  ```
  typeorm entity:create -n Student
  ```

- 重新整理一下创建数据流程

  目标： 创建一个 Person 表格，内部 column 是 id，name，age，并且需要往这个表格填入数据

  1. yarn m:c -n Person（但是别人是 createPersons）

  2. 修改 src/migration/Persons.ts 的代码(特别注意，必须是 person ，需要小写，并且是复数，错了好多次了)(但是别人是 persons)

     ![image-20200822090213072](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200822090213072.png)

  3. yarn m:r

  4. yarn e:c -n Person

  5. 修改 src/entity/Person.ts 的代码

  6. 在 src/index.ts 中使用 Person entity 类

  7. node ./dist/index.js

- seed 数据

- 重新开机，发现数据库连不上，使用 docker ps 发现没有运行的容器，

  ```
  docker restart containerId
  ```

- --- 【博客系统】数据库设计与搭建开始 --- 

- 如何为追加 columns？

  目标：需要为 posts 表追加 create_at, update_at columns

- 如何修改 columns 名称？

  目标：需要将 posts 的 create_at 改成 createAt， update_at 改成 updateAt

- 为何要创建数据关联？
  现有的表格 column

  comments

  | id   | content |
  | ---- | ------- |
  |      |         |

  posts

  | id   | title | content |      |
  | ---- | ----- | ------- | ---- |
  |      |       |         |      |

  users

  | id   | username | passwordDigest |
  | ---- | -------- | -------------- |
  |      |          |                |
  |      |          |                |
  |      |          |                |

- post 为什么会这样定义
  ![image-20200824175806007](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200824175806007.png)

  ![image-20200824175854465](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200824175854465.png)

- createAt 的数据类型的最佳实践是什么

- 先定义 migration， 在定义 entity

- --- 【博客系统】数据库设计与搭建结束 --- 













# next 渲染方式



## 解决的问题

**根据实际情况选择最优的渲染方式**

渲染什么？

渲染用户视图，而用户视图是由 HTML 决定的，所以问题变成：根据实际情况选择最优的 HTML 生成方式



## 根据实际需求，渲染方式的优化过程

- 用户想看文章内容
  文章内容的特点是文章内容不会变（假定）

  服务器直接返回如下的 HTML 即可

  ```html
  <!doctype html>
  <body>
    <h2>美好的一天</h2>
    <p>内容内容内容内容内容</p>
  </body>
  </html>
  ```

  这种方式叫**静态渲染**

- 用户想看每日文章列表

  每日文章列表的特点是「每天的数据都不一致 + 每个用户请求内容都是一致的」，所以服务器返回如下 HTML

  ```html
  <!DOCTYPE html>
  <html>
  <body>
  <div id="__next">
    <ul class="container"><a href="/blogs/第一篇文章">第一篇文章</a></ul>
  </div>
  <script id="__NEXT_DATA__" type="application/json">{
    "props": {
      "pageProps": {
        "responseData": {
          "code": 0,
          "message": "成功",
          "data": [
            {
              "title": "第一篇文章",
              "id": 0.9721849214661944
            }
          ]
        },
        "test": 12321123321123320
      },
      "__N_SSG": true
    },
    "page": "/posts",
    "query": {},
    "buildId": "ja1khOUfCR3o27RKMY0tp",
    "nextExport": false,
    "isFallback": false,
    "gsp": true
  }</script>
  </body>
  </html>
  ```

  这个 HTML 由「普通的标签 + 每日博客列表数据」组成，不同用户请求每日博客时，会直接拿到上面的 HTML 文件，浏览器拿到这个 HTML 渲染即可 

  这种方式叫**动态内容静态化**

- 用户想查看订阅的博客列表

  订阅的博客列表的特点是「根据用户的订阅数据，返回不同的博客列表」，也就说响应数据（简化为 HTML ）是根据请求数据生成，所以服务器返回如下 HTML

  ```html
  <!DOCTYPE html>
  <html>
  <body>
  <div id="__next">
    <ul class="container"><a href="/blogs/第一篇文章">饶家俊订阅的第一篇文章</a></ul>
  </div>
  <script id="__NEXT_DATA__" type="application/json">{
    "props": {
      "pageProps": {
        "responseData": {
          "code": 0,
          "message": "成功",
          "data": [
            {
              "title": "饶家俊订阅的第一篇文章",
              "id": 0.9721849214661944
            }
          ]
        },
        "test": 12321123321123320
      },
      "__N_SSG": true
    },
    "page": "/posts",
    "query": {},
    "buildId": "ja1khOUfCR3o27RKMY0tp",
    "nextExport": false,
    "isFallback": false,
    "gsp": true
  }</script>
  </body>
  </html>
  ```

  这种方式叫**用户相关动态内容静态化**

- 上述所有渲染情况，都可以用客户端进行方式实现，返回的 HTML 如下

  ```html
  <!doctype html>
  <body>
  <div id="app"></div>
  <script>
    let h1 = document.createElement('h1')
    h1.innerText = '文章'
    app.appendChild(h1)
  </script>
  </body>
  </html>
  ```

  这种方式叫**客户端渲染**

  这样的方式存在的问题有

  - 无法 SEO
  - 产生白屏



## 对上面内容的疑问

- 「每日文章列表」与「订阅的博客列表」返回的 HTML 看起来都一样，他们区别在哪里？

  - 不同用户返回的订阅数据不同的

    用户 1 返回的「每日文章列表」是 1

    用户 1 返回的「订阅的博客列表」 2

    用户 2 返回的「每日文章列表」是 1

    用户 2 返回的「订阅的博客列表」 3

  - 数据构建时机不同
    ![image-20200804102523608](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200804102523608.png)

    红框的数据，如果是 build 阶段（从源代码编译成生产环境代码）生成的，不管用户请求多少次，都返回上面的 HTML 文件，那么是动态页面静态化渲染

    如果是在用户请求过程中，用户请求多少次，就在服务器生成多少个 HTML 再返回给用户浏览器渲染，那么就是动态页面静态化渲染

  

## 给上述的渲染过程起一个专业词汇

- 静态渲染 => 无
- 动态内容静态化 => SSG
- 用户信息动态内容静态化 => SSR
- 客户端渲染 => BSR



其中 SSG 和 SSR 属于服务端渲染





## 在 next 如何实现服务端渲染

- SSG = getStaticProps + getStaticPaths
- SSR = getServerSideProps



## 如何选择渲染方式（思考模型）

- 动态内容与「客户端」相关的话只能用 BSR 渲染
- 动态内容与「请求 request or 用户信息」相关的话只能用 SSR 或者 BSR 渲染



- 优先渲染

  静态渲染  =①> SSG =②> SSR =③> BSR

  ①的情况：有动态数据

  ②的情况：有「请求 request or 用户信息」

  ③的情况：所有情况都可以使用

## 理解服务端渲染的 demo需求

- 需求 1：包含文章列表
- 需求 2：点击文章列表，展示文章详情

- 不懂的点
  ![image-20200804212430236](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200804212430236.png)







## 2020.12.19 根据 next 官网记录的知识点

- Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. **The difference is in when it generates the HTML for a page.**

  - [**Static Generation (Recommended)**](https://nextjs.org/docs/basic-features/pages#static-generation-recommended): The HTML is generated at **build time** and will be reused on each request.This HTML will then be reused on each request

    生成 html 的操作只会在项目构建时运行一次，比如官网首页

  - [**Server-side Rendering**](https://nextjs.org/docs/basic-features/pages#server-side-rendering): The HTML is generated on **each request**

    

- pre-render

  - Static Generation
    - without data
    - with data
      - getStaticProps
      - getStaticPaths
  - Server-side Render（SSR or Dynamic Rendering）
    - getServerSideProps

- `getServerSideProps` is similar to `getStaticProps`, but the difference is that `getServerSideProps` is run on every request instead of on build time.

  其实 getStaticxxx 就已经说明了只会在 build 后运行一次

- 







## stream

- stream, 流, 可以理解为水流

- pipe === 管道, 用于将两个流进行连接

  stream1.pipe(stream2) 

  把 stream1 管道的末端连接到 stream2 管道的开端

  ```javascript
  server.on('request', (req, res)=>{
  	const stream1 = fs.createReadStream('./big.txt')
    // 把读流连接到响应流
  	stream1.pipe(res)
  })
  ```

- 在 chrome 上调试 node 代码

  node --inspect-brk 1.js 

- drain 

  - drain: 大 chunk 写完触发的事件

    遇到比较大的 chunk1, 会导致写流出现拥堵, 导致写流停止写入其他chunk, 如果触发 drain 事件, 说明已经写完了 chunk1, 可以继续写入其他 chunk 了

  - finish: 全部数据写完触发的事件

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20200720224049.png)

- stream 的分类

  - writable
  - readable
  - duplex
  - transform

- readable 的状态

  - 有两种状态: 静止态 paused 和流动态 flowing
  - 默认处于 paused 态
  - 添加 data 事件监听, 变为 flowing 态
  - 删除 data 事件监听, 变为 paused 态
  - pause()可以变为 paused 态
  - resume() 可以变为 flowing 态

- writable 的事件 drain

  - drain 需要写入的数据(大量)已经处理完毕,可以继续执行写入数据操作
  - 调用 const flag = stream.write(chunk) 的时候, 当 chunk 数据很大时, 会导致 flag 为 false
  - false 表示的意思是: 由于需要写入的数据量很大, 导致数据积压
  - 此时不能再写入数据, 需要监听 drain 事件, 等待 drain 触发, 才能继续执行写数据操作

- writable 的事件 finish

  - ①调用 stream.end()之后 + ②缓冲区数据都已经传给底层系统之后, 触发的事件







## stream 第二次理解

- stream === 流，核心是生成读流或者写流时从哪里来，这个需要指定

  ```
  const stream = fs.createWriteStream('/var/test1/big_file.txt');
  ```

  创建一个写流，写入的路径 `/var/test1/bug_file.txt`

- 









## 2020.04.31


- 近期最重要的事情

    封装请求
    
    阅读 antd-pro 的代码
    
    断点调试

- 为什么要 reducer?? 尝试解决这个问题

    使用 reduce 可以少写一个变量, 其他没有区别
    
    需求: 

    let obj = {
      number: "zhangsan9888",
      test: "23321"
    }
    
    写一个函数, 根据 obj 生成 number=zhangsan9888&test=23321 的字符串
    
    不使用 reduce
    
    ```javascript
    function createUrl1(obj){
      let resultString = ''
      Object.keys(obj).forEach((key)=>{
        let value = obj[key]
        resultString += `${key}=${value}&`
      })
      return resultString
    }
    ```
  
    使用 reduce
    
    ```javascript
    function createUrl2(obj){
        return Object.keys(obj).reduce((preString, key)=>{
          let value = obj[key]
          return preString += `${key}=${value}&`
        }, '')
    }
    ```

## 2020.04.26

- 两个 boolean  

## 2020.04.24

- 简单的 SQL 优化流程

    - 需求(搜索单张表数据): 现有学生 3 名, 现需要保存学生的 姓名, 分数, 性别, 并且能通过 SQL 语句读取数据
    
    - 新增需求(搜索多张表数据): 学生需要与班级数据产生关联关系, 有两种方式可以表示: 外键关联, 建立关系表关联

        - 外键关联: 在学生表中新增一个 class_id 的字段, 通过 join 语法从学生表和班级表获取想要字段
        
        - 关系表关联: 新建一个表, 表中只有两个字段: from, to, 其中 from 是学生的 id, to 是 班级的 id, 通过后端可以从两个表中获取想要的数据

- curl 命令

    curl "网页" -H "请求key: 请求 value"

- 注册

    163
    邮箱: raojiajun444@163.com
    密码: sj15702097950
    
    小程序
    邮箱: raojiajun333@163.com
    密码: sj15702097950


- 地址

    研发环境： http://alpha-bos.bimwinner.com/
    账号密码: raojiajun / sj15702097950
    demo 环境： http://bos-demo.rickricks.com/
    1570209705 / sj15702097950  
    正式环境： http://bos.boswinner.com/
    1570209705 / sj15702097950  


## 2020.04.23


- 表的数据分为两种

    - 实体类(entity)数据(students, classes): 用于存储数据的原本的数据

    - 关系类(relationship)数据(students_classes): 用于表示两个表实例数据的关系

## 2020.04.22

- 查全 => 查全条件 => 查一 => 增一

- typescript Partial 是什么

    ```
    interface Props{
        test1: number,
        test2: number
    }
    type Props1 = Partial<Props>
    // 相当于下面的定义
    interface Props1{
        test1?: number,
        test2?: number
    }
    ```


## 2020.04.21

- 常见的 crud 需求所需接口

    - 查全: get /api/lotteryConfigs

    - 查全条件: get /api/lotteryConfigs?count=5
    
    - 查一: get /api/lotteryConfigs/:id
    
    - 增一: post /api/lotteryConfigs
    
    - 改一: patch /api/lotteryConfigs/:id  (put 需要指定全部数据字段; patch只需要指定想更新的数据字段)
    
    - 删一: delete /api/lotteryConfigs/:id
  
- 常识: params 是一个**对象**, 作为 url 的查询参数使用(parameters)

    ```
    request('/api/fake_list', {
        params: {
          count: 2,
          id:4
        },
      })
    ```

    如上的代码等价于 `get /api/fake_list?count=2&id=4`

- 常识: 

    router params = /api/fake_list/1

    query params = /api/fake_list?count=1

## 2020.04.20

- 熟悉一个项目, 从接口开始.

- 熟悉文件, 看他导出什么

- 熟悉一个项目, 从入口文件开始



## 2020.04.17



## 2020.04.16


## 2020.04.15

- `var answer = 42;` 

    - var(keyword, 关键字)；
    - answer(identifier， 标识符，用于存放变量)；
    - ;(semicolon, 分号)

- 使用 立即执行函数 + async 获取异步结果

    ```
    (async ()=>{
      const column = await getZhiHuColumn('feweekly');
      console.log('column async', column.description);
    })();
    ```




## 2020.04.14

- redis 管理

    现有 2 个项目， 第一个项目要使用的 key 是： accessToken （企业微信接口所需 token）；h5_gzh_token（调用微信公众号所需 token）；jsApiTicket（调用微信公众号所需 ticket）

    第二个项目所使用的不能与第一个一样

## 2020.04.13



## 2020.04.12

- 常识： url 带协议，域名不带协议

- 把 rjj -> h5_1

## 2020.04.11

## 2020.04.10


- typescript 一个最简单但全面的例子

    ```typescript jsx
    interface Props {
    }
    
    const StateHooksComponent: React.FC<Props> = ({}) => {
    
        const [name, setName] = useState<string>('');
    
        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(name);
        };
    
        const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
        };
    
        return (
            <Form layout="inline" onSubmit={handleSubmit}>
        )
    }
    
    export default StateHooksComponent;
    ```

## 2020.04.09

- react hooks 代替 componentDidMount 和 componentWillUnMount

    ```javascript
    useEffect(() => {
      window.addEventListener('mousemove', () => {});
    
      // returned function will be called on component unmount 
      return () => {
        window.removeEventListener('mousemove', () => {})
      }
    }, [])
    ```

- react 讲究的就是「监听」, 

    - 最简单的是「监听按钮点击事件, 如果按钮被点击了, 执行某个函数」
    
    - 与之对应的就是「监听某个数据, 如果数据被改变了, 执行某个函数」
    
    - 特殊的函数就是「监听 state 内的书, 如果数据被改变了, 重新渲染视图」
    
## 2020.04.08


- 如何本地测试 npm 包?(npm link)

    - 「发布 npm 包处」执行 npm link , 假设待发布包的名称为 test-123321
    
    - 「使用 npm 包处」执行 `npm link test-123321`
    
    - 更新: test-123321 直接改代码, 在「使用 npm 包处」执行 `npm link test-123321`
## 2020.04.07

- git 改变 url 的位置, 场景是: 提交的 git 仓库地址是 baidu.git, 后面改成了 google.git

    git change url 

    可以直接修改 .git/config 文件 或者 `git remote set-url origin new.git.url/here`

- webpack 的作用

    - 用户通过 webpack.config.js **指导** 相应 loader **打包生成**在浏览器不报错的代码

    - 如果一个项目要使用 ts,我很容易知道需要安装相应的 loader 来解释我写的 ts 代码, 但是经常忘记需要安装 webpack , 只有装了这个包, 才会将 ts 生成 js

 


## 2020/040/03

- 接入企业微信 SDK

    - 输入 code, 输出 accessToken
    
    - 输入 accessToken, 输出 jsapi_ticket: https://work.weixin.qq.com/api/doc/90000/90136/90506
    
    - 输入 noncestr(随机字符串), jsapi_ticket, timestamp, url, 拼接成 string1, 对 string1 进行加密, 输出 signature
    
    - 上述操作在服务端进行
    
    - 前端调用 post/sdkToken 输入 url , 返回 {timestamp, nonceStr, signature}
    
    - 前端调用下面的 js 代码
    ```javascript
    wx.agentConfig({
        corpid: '', // 必填，企业微信的corpid，必须与当前登录的企业一致
        agentid: '', // 必填，企业微信的应用id （e.g. 1000247）
        timestamp: , // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名，见附录1
        jsApiList: ['selectExternalContact'], //必填
        success: function(res) {
            // 回调
        },
        fail: function(res) {
            if(res.errMsg.indexOf('function not exist') > -1){
                alert('版本过低请升级')
            }
        }
    });
    ```


## 2020.03.31

- 在一个函数定义多个函数好不好??

## 2020.03.30

- 多人合作 git 操作流程(未涉及开分支操作, 直接在 dev 分支写代码)

    - webstorm 右键 origin/dev 分支. 新开一个本地 dev 分支, 用于关联 origin/dev 分支
    
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20200330174217.png)
    
    - 正常提交代码
    
    - 在提交代码到远程之前, 需要 git pull, 拉取远程最新代码, 并且解决冲突
    
    - git push 即可
    
- 多人合作 git 操作流程(涉及开分支, 一个功能需要对应一个分支) 不会

## 2020.03.29

- 命令行如何阅读


```shell
$ http-server -p 3001
```

用户指定配置项-p, 并且指定配置参数是 3001
    
- 停止 nginx  

```shell
$ sudo nginx -s stop
```

- 开始 nginx

```shell
$ sudo nginx的安装路径
```

- linux 如何查看软件的安装路径

```shell
$ which nginx
```

## 2020.03.28

- ubuntu 目录权限问题

    - 参考文章

    http://xahlee.info/linux/linux_file_perm_system.html

    - 查看当前目录权限
    
    ```shell
    $ ls -la
    ```
  
    - 修改文件拥有者
    
    ```
    $ chown userName fileOrDirName 
    ```
  
- 英文

$prompt$: 提示, 弹出一个提示框, 可以用于收集用户输入数据
    
- chrome 调试 node 代码
  
```shell
$ node --inspect-brk index.js 
```

- 英文

    $prompt$: 提示, 弹出一个提示框, 可以用于收集用户输入数据
    
- chrome 调试 node 代码
  
    ```shell
    $ node --inspect-brk index.js 
    ```
  
- 如何知道函数的参数的类型?? 直接打印 参数.constructor  

未验证是否可行

## 2020.03.27

- bug: 用户 1 使用 token 可以操作用户 2 的数据

解决方法: 用户带上的 token 进行解码,获取到用户 1 的特有数据(如 userName ), 与用用户实际请求的 userName 进行比较


## 2020.03.26

- google network 搜索 404 状态码的请求

如何搜索: google network filter status 404

## 2020.03.24

- 获取本机 ip

ifconfig

- `~`: 当前用户的家目录

- if 与 return 的使用

    ```javascript
    function test(){
         if(1){
           return;
         }
        console.log(2)
    }
    test()
    ```
  
- 代码优化: 使用「函数对象 + 字符串」代替 switch case

## 2020.03.23

- 后端常用的功能: 获取请求的参数    

- restful 风格接口例子

    - 查全: get /students

    - 查全有条件: get /students?gender=male
    
    - 查一: get /students/:id
    
    - 增一: post /students
    
    - 改一: patch /students/:id  (put 需要指定全部数据字段; patch只需要指定想更新的数据字段)
    
    - 删一: delete /students/:id

- 使用工具生成接口文档

使用 api doc, 但是使用不好

- ssh 流程(github 为例)

    - 先用账号密码登录网页
    
    - 开发机生成密钥, 把 pub 传给 github



## 2020.03.31

- 在一个函数定义多个函数好不好??

## 2020.03.30

- 多人合作 git 操作流程(未涉及开分支操作, 直接在 dev 分支写代码)

    - webstorm 右键 origin/dev 分支. 新开一个本地 dev 分支, 用于关联 origin/dev 分支
    
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20200330174217.png)
    
    - 正常提交代码
    
    - 在提交代码到远程之前, 需要 git pull, 拉取远程最新代码, 并且解决冲突
    
    - git push 即可
    
- 多人合作 git 操作流程(涉及开分支, 一个功能需要对应一个分支) 不会

## 2020.03.29

- 命令行如何阅读


```shell
$ http-server -p 3001
```

用户指定配置项-p, 并且指定配置参数是 3001
    
- 停止 nginx  

```shell
$ sudo nginx -s stop
```

- 开始 nginx

```shell
$ sudo nginx的安装路径
```

- linux 如何查看软件的安装路径

```shell
$ which nginx
```

## 2020.03.28

- ubuntu 目录权限问题

    - 参考文章

    http://xahlee.info/linux/linux_file_perm_system.html

    - 查看当前目录权限
    
    ```shell
    $ ls -la
    ```
  
    - 修改文件拥有者
    
    ```
    $ chown userName fileOrDirName 
    ```
  
- 英文

$prompt$: 提示, 弹出一个提示框, 可以用于收集用户输入数据
    
- chrome 调试 node 代码
  
```shell
$ node --inspect-brk index.js 
```

- 英文

    $prompt$: 提示, 弹出一个提示框, 可以用于收集用户输入数据
    
- chrome 调试 node 代码
  
    ```shell
    $ node --inspect-brk index.js 
    ```
  
- 如何知道函数的参数的类型?? 直接打印 参数.constructor  

未验证是否可行

## 2020.03.27

- bug: 用户 1 使用 token 可以操作用户 2 的数据

解决方法: 用户带上的 token 进行解码,获取到用户 1 的特有数据(如 userName ), 与用用户实际请求的 userName 进行比较


## 2020.03.26

- google network 搜索 404 状态码的请求

如何搜索: google network filter status 404

## 2020.03.24

- 获取本机 ip

ifconfig

- `~`: 当前用户的家目录

- if 与 return 的使用

    ```javascript
    function test(){
         if(1){
           return;
         }
        console.log(2)
    }
    test()
    ```
  
- 代码优化: 使用「函数对象 + 字符串」代替 switch case

## 2020.03.23

- 后端常用的功能: 获取请求的参数    

- restful 风格接口例子

    - 查全: get /students

    - 查全有条件: get /students?gender=male
    
    - 查一: get /students/:id
    
    - 增一: post /students
    
    - 改一: patch /students/:id  (put 需要指定全部数据字段; patch只需要指定想更新的数据字段)
    
    - 删一: delete /students/:id

- 使用工具生成接口文档

使用 api doc, 但是使用不好

- ssh 流程(github 为例)

    - 先用账号密码登录网页
    
    - 开发机生成密钥, 把 pub 传给 github



# AJAX 目录



## AJAX 发送请求过程

Jesse James Garrett 讲如下技术取名叫做 AJAX：异步的 JavaScript 和 XML

AJAX 技术包括以下四步:

1. 创建 AJAX 对象, 即 XMLHttpRequest 

2. 使用 XMLHttpRequest 发请求

3. 服务器返回 XML 格式的字符串

4. JS 解析 XML，并更新局部页面

   

## AJAX原生代码

readystate === 4 表示连接成功

status >= 200 && status <= 300 表示服务器能正确返回数据

```javascript
//自己写的第一版
myButton.addEventListener('click', function(){
  ajax()
})

function ajax(){
//相当于告诉浏览器我要set Http 请求了
  var request = new XMLHttpRequest()
//对应 http 请求的第一部分
  request.open("POST", "/xxx")
//对应 http 请求的第二部分
  request.setRequestHeader("name", "rjj")
  request.setRequestHeader("name", "zzz")
//对应 http 请求的第三部分，仅仅是为了便于记忆
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      console.log("请求完成")
      if(request.status >= 200 && request.status < 300){
        console.log("请求成功")
        //request包含着所有后端返回给前端的信息
        console.log(request)
      }else{
        console.log("请求失败")
        //request包含着所有后端返回给前端的信息
        console.log(request)
      }
    }
  }
//对应 http 请求的第四部分
  request.send("xxxxxxxxx")
}
```

---

# DOM



## 我认为的重点

1. 事件，事件监听，事件处理函数，事件流的定义
2. 事件流的冒泡和捕获阶段是什么?
3. DOM 节点有多个事件处理程序，他们的执行顺序怎么确定?搜索`程序的顺序`
4. 事件处理函数内添加事件监听  
5. 阻止默认事件和阻止冒泡的代码
6. 结合事件知识点写一个 demo

## 定义

对于一个经典的事件监听函数,明确一些概念

```javascript
funtion clickHandler(){
	console.log(1)
}

btn.addEventListener("click", clickHandler)
```

- 事件(event) === 用户的动作 ===在上面的代码就是 "click"

- 事件监听 === 上面的整个代码 === 事件 + 事件处理函数

- 事件处理函数(eventHandler) === clickHandler 函数

- 事件流 === 事件在 DOM 节点树传播的顺序,可以是冒泡或者捕获

  

## 冒泡阶段和捕获阶段执行函数顺序

- [demo](https://jsbin.com/wilowiciru/1/edit?html,css,js,console,output)

  点击 3 ，说明为什么会这样打印

  重点：

  - `冒泡3`为什么在`捕获3`的前面
  - `冒泡3`为什么在`冒泡33333`的前面

  总结：

  - **DOM 是终点，谁先监听，先执行谁**：如果这个 DOM 节点是事件传播的终点（如上述的 div3 就是事件传播的终点），并且该 DOM 挂载了捕获和冒泡回调函数，那么谁先监听，谁先执行
  - **DOM 不是终点，先执行捕获，再执行冒泡**：如果这个 DOM 节点**不**是事件传播的终点（如上述的 div2 就不是事件传播的终点），并且该 DOM 挂载了捕获和冒泡回调函数，那么一定**先执行捕获回调，再执行冒泡回调**
  - DOM 同一个挂载两个回调，谁先监听，先执行谁


## 事件处理函数套事件监听

1. 点击3区域, 解释打印内容

   - 代码如下: http://js.jirengu.com/bonacobaxi/1/edit?


   - 根据代码画出 DOM

     ![未命名文件 (3).png](http://upload-images.jianshu.io/upload_images/5529438-d7be74202afc287a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

     从 div3 开始冒泡, 所以打印3, 2

2. 改变需求: 点击3区域的时候, 只打印3, 第二次点击3区域的时候,打印3, 2

   - 代码: http://js.jirengu.com/jiresoyidu/1/edit?

   - 根据代码画出 DOM 

     ![未命名文件 (7).png](http://upload-images.jianshu.io/upload_images/5529438-39889d12c9a167a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 总结: 

   - 当你给 DOM 节点的事件处理函数内添加了一个事件监听A, 那么事件监听A是马上添加到 DOM 中(也就是说刚添加的事件监听A在第一次点击就能激活, 看第一个例子)
   - 如果你想让添加的事件监听A不是马上添加到 DOM 中(也就是说刚添加的事件监听A在第二次点击才能激活)那么可以使用setTimeout解决. (看第二个例子)

   

## dismissible propover

1. 效果: http://js.jirengu.com/nanepevube/1/edit?

2. 列出所有情况

   ![选区_110.png](http://upload-images.jianshu.io/upload_images/5529438-65b3f6618403fad1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 注意点: 

   - 什么时候用**事件处理函数内添加事件监听**? 

     第二次与第一次的 DOM 结构函数不同 + 第二次是在第一次的某种情况下(红圈)






## event.target 和 event.currentTarget 的区别

event.target返回**触发**事件的元素

event.currentTarget返回**绑定**事件的元素
[例子](http://jsbin.com/nesuduwoti/edit)





## fragment 优化 DOM 插入

[优化前](https://jsbin.com/wixapotiwo/1/edit?html,js,output)

[优化后](https://jsbin.com/jojayufuka/1/edit?html,js,output)

---

# 手写 bind

## 过程代码

- 实现以下 api 

  - fn.bind1({name: 1})
  
  - fn.bind1({name: 1}, 1, 2)
  
  - fn.bind({name: 1}, 1)(2)

- bind + new 的使用

  ```javascript
  let fn = function(a){
    this.a = a;
  };
  let fn1 = fn.bind({name: 123});
  
  let test1 = new fn('x');
  let test2 = new fn1('y');
  
  console.log(test1);
  console.log(test2);
  ```
  
- new 的时候, 会帮你隐式 return this, 什么情况下就不会?

  return 引用类型

  ```javascript
  let fn = function(a){
    this.a = a;
    return {fjdksalfjdsa: 123}
  //   return "tet"
  };
  
  let p1 = new fn('123');
  console.log(p1);
  ```
  
- bind1 分为传 this 和 undefined

- -38.58

- 按照现有的代码, 为什么会把属性挂到 window 上

- new 隐式执行的代码

  ```javascript
  var this = {};
  this.__proto__ = fn.prototype;
  fn.call(this, arguments);
  return this;
  ```
  
- 没有解决 new 的问题

---

# 深拷贝

## 过程代码

- 测试代码总结

  凡是基本类型,都相等;凡是引用类型,都不相等  
  
- 遇到的问题, 四步走

  - 需求
  
    能复制对象环(自己引用自己)
    
  - 问题
  
    因为是对象环,所以会导致很多次的 clone,最后导致栈溢出
    
  - 思路
  
    声明一个数据,用于判断是否之前已经 clone 过, 如果是, 直接返回引用,否则才 clone
  
  - 伪代码
  
- 当对象是日期对象, 为什么克隆的对象没有 getDate 方法?

  console.dir 打印对象

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191019144855.png)
  
  看颜色, 深颜色, test 属性是可枚举(可以通过 for in 或者 Object.keys 获取)
  
  浅色是不可枚举

- 生成对象的方法

  - Object.defineProperties
  
  - Object.create
  
- 描述「对象属性」的属性

  
  
  - data descriptors and accessor descriptors 的区别
  
    ![image](https://user-images.githubusercontent.com/25478678/67140150-2879f280-f28a-11e9-94bd-227be87fb115.png)
  
    ```javascript
    var objName = "rjj";
    var obj = Object.defineProperties({}, {
      name: {
        get(){
          return objName
        },
        set(value111){
          objName = value111
        }
      },
    });
    console.log(obj.name); // 返回 rjj
    obj.name = "test";
    console.log(obj.name); // 返回 test
    Object.keys(obj) // 返回 []
    ```
  
- 如何修改对象属性的「可枚举属性」?

  直接 `Object.defineProperties`;

---

# ES6

- 作用域

- 箭头函数

- 展开运算符`...`

  1. [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)：多个参数 item 变成参数 array，在函数定义的地方用
  2. [函数参数]()：array 变成多个参数 item，在函数使用的地方用
  3. 对象/数组复制：将对象/数组变成 `key:value`

- 对象属性加强

  1. 支持相同 key，value 简写
  2. key 是变量 `let obj = {["baz" + "ffffff" ]: 42}`

- 解构赋值

  1. 数组匹配 `[ b, a ] = [ a, b ]`

  2. 对象匹配 `let { a, b, c } = objABC`

  3. 参数匹配 `function g ({ name: n, val: v }) {}`

- 模块

- Class

- 新增的数据类型

  1. Symbol：基本数据类型，表示永远不同的 string

- 新增的对象

  1. Set：存储任何类型的**唯一**值，如`const array =  Array.from(new Set([1,1,1,2,3]))`
  2. Map：key 值可以是引用类型





## 详细

1. 使用 let / const 代替 var

   - var 变量提升

     1. 什么是声明提升：

        **使用 var 声明的变量或者声明一个函数**，JavaScript 会在预编译的时候将声明提升到最上面

        ```javascript
        console.log(a) // 打印 undefined
        var a = 1
        
        // 预编译后
        var a
        console.log(a)
        a = 1
        ```

        ```javascript
        b() // 打印 b is not a function 
        var b = function(){console.log(2)}
        
        // 预编译后
        var b
        b()
        b = function(){console.log(2)}
        ```

        ```javascript
        c() // 打印 3
        function c(){console.log(3)}
        
        // 预编译后
        function c(){console.log(3)}
        c() // 打印 3
        ```

        https://segmentfault.com/a/1190000003114255
        
     2. 为什么要进行变量提升？
     
        - 提高性能
        
        - 容错性更好

   - let 可变 / const 不可变

2. 箭头函数的使用

   - 箭头函数内部的 this 就是外部的 this
   - 没有 arguments，只能借助 ES6 的『剩余参数』，拿到参数数组[例子](https://jsbin.com/xosoyewoqa/1/edit?js,console,output)

3. 解构赋值

   **获取变量**

   - 获取函数配置参数变量

     ```javascript
     function test(props){
       const {name, age} = props
     }
     ```

   - 数组

     ```javascript
     let [number1, number2, number3, number4] = [1,2,3,4]
     console.log(number1)
     ```

4. 操作参数

   - 剩余参数： 不确定函数有多少个参数时，使用展开运算符

     ```javascript
     function test(...a){
     	console.log(a)
     }
     
     function test1(a, b, ...c){
     	console.log(a)
     	console.log(b)
     	console.log(c)
     }
     
     test(1,2,3,4,5)
     test1(6,7,8,9,10)
     ```

   - 设置默认参数

   - 展开运算符：用于函数执行指定参数或者生成对象或者数组 https://jsbin.com/sayabasoci/edit?js,console,output

5. 对象的扩展使用

   - 例子代码

     1是3的简写

     ```javascript
     const b = "2"
     const c = "test1"
     
     const obj = {
     	a: 1,
     	b,
     	[c]: "test2",
     	hi(){console.log(this)}, //1
     	hi1: ()=>{console.log(this)},
     	hi2: function(){console.log(this)}, //3
     }
     obj.hi()
     obj.hi1()
     obj.hi2()
     ```

6. promise

   - promise 与 callback 的关系

     1. 一个函数test1的参数是另一个函数test2，另一个函数test2叫回调函数

        ```javascript
        function test1(fn){
          fn("这是带上的数据")
        }
        function test2(data){
          console.log(data)
        }
        test1(test2)
        ```

     2. 回调函数与 ajax 的结合使用

   - promise 的三种状态

     padding， resolve， reject

   - 读懂 promise 代码

     下面的代码如何运行？

     **then 的参数的参数，由前一个的 return 确定**

     **second 函数的 num 参数，是 first 函数 return 的结果**

     ```javascript
     var fn = function(num) {
         return new Promise(function(resolve, reject) {
             if (typeof num == 'number') {
                 resolve(num);
             } else {
                 reject('TypeError');
             }
         })
     }
     
     fn(2).then(function(num) {
         console.log('first: ' + num);
         return num + 1;
     })
     .then(function(num) {
         console.log('second: ' + num);
         return num + 1;
     })
     .then(function(num) {
         console.log('third: ' + num);
         return num + 1;
     });
     ```

     如何改造代码，使得第二个 then 执行 reject ？

     **在第一个函数中， 返回一个 promise， 在这个 promise 中，执行 reject**

     ```javascript
     var fn = function(num) {
       return new Promise(function(resolve, reject) {
         if (typeof num == 'number') {
           resolve(num);
         } else {
           reject('TypeError');
         }
       })
     }
     
     fn(2).then(function(num) {
       // 将 return num + 1; 改成下面的代码
       return new Promise(function(resolve, reject) {
         if (typeof num !== 'number') {
           resolve(num);
         } else {
           reject("1234567");
         }
       })
     })
     .then(function(num) {
       console.log('second: ' + num);
       return num + 1;
     }, function(number){
       console.log("执行 reject 函数")
       console.log(number)
       return number
     })
     .then(function(num) {
       console.log('third: ' + num);
       return num + 1;
     })
     ```

7. Proxy

   **实现数据劫持**

8. Symbol

   **新的数据类型，认为是独一无二的字符串**

9. class

10. new Set()数据结构

---

# 手写一个 EventBus 

## 目的

- 学会「发布订阅」模式

- 完成需求，需要步骤

  * 获取最终的结果（确定真实需求）
  
  * 根据结果推导数据结构
  
  * 写代码

- 使用 TDD 写代码

## 过程笔记

- which 命令的使用

- ts-node 安装，并且运行一个最简单的 ts 文件

- 如何全局卸载一个包

- 使用 console.assert 测试「new EventHub 还是一个对象」

- -27.26开始优化代码

    * || 确保变量有值
    
    * 声明一次，立即使用 === 不需要声明一个变量
    
- 如何测试函数是否被调用？

    * 使用 called
    
- 快速输入 函数的输入输出注释

- emit 传递两个值

- off要传入一个函数

## 重点

- 下列代码，先打印 1 还是 2
  
  ```javascript
  event.on('test',()=>{
    console.log(1)
  })
  event.emit('test');
  console.log(2)
  ```
  1， 2
  
- 如何测试函数是否被调用

  https://github.com/wojiaofengzhongzhuifeng/eventHub/commit/83effc1b5d2071481b9c86346ff15d20a4e1edbf

- class 如何定义「类变量」和 「实例变量」

  ```javascript
  class Student {
    test = {};
    constructor(test1){
      this.test1 = test1
    }
  }
  ```
- on 函数有个陷阱

  this.events.test1 为什么是 undefined？
  ```javascript
  class Person {
    events = {};
    on(){
      let test = this.events.test1;
      if(!(test)){
        test = [];
      }
      test.push(123321);
      console.log(test);
      console.log('this.events[eventName]', this.events.test1);
    }
  }
  
  let test= new Person();
  test.on();
  ```
  
---

# 函数的深入理解

### ✅函数内变量取值依据

1. 依据

    如果「函数内变量」与「函数定义处变量」名称一致，使用 params 法（函数调用时确定值） ，否则使用 environment 法（函数定义时确定值）

    ![image](https://user-images.githubusercontent.com/25478678/66710269-7af97180-eda7-11e9-83b9-5f2e9ffc1656.png)

2. 测试题

    ```javascript
    let x = "x";
    let a = "1";
    function f1(x){
      return x + a
    }
    a = "3";
    {
      let a = "2"
      console.log(f1("y")) // 打印什么？
    }
    a = "4";
    ```

## 闭包

### ✅闭包是什么？

如果函数内使用了函数外的变量（environment 法），那么函数 + 变量 === 闭包

### ✅闭包的作用是什么？

维持变量，将相关联的变量放到一起

例子
```javascript
// 通过对象保存 age，name
let person = {
  age: 12,
  name: '明'
}

// 通过闭包保存 age, name
function Person(age, name){
  return (key)=>{
    if(key === 'age'){
      return age
    } else if (key === 'name'){
      return name
    }
  }
}

console.log(' 「点运算符」获取值', person.name);

const person1 = Person(18, '红');
console.log('「函数调用」获取值', person1('name'));
```

### ✅闭包与对象的关系是什么？

都用来「维持变量」，看语言支持哪一种方式

## 特殊的变量： this（markdown 范本）

### ✅「特殊」是什么意思？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191013112341.png)

### ✅如何确定 this 的值

因为 this 变量是在函数定义处声明的（虽然你看不见），所以使用 params 法，即在函数调用时确定 this 的值。

一般函数变量，通过`test(1)`指定函数定义处变量。

但是 this 是特殊的函数变量，只能通过 `test.call({name: 123}, 1)` 指定函数定义处变量。

### ✅具体方法

1. 常用的转化

    ```javascript
    fn(1,2)
    fn.call(undefined, 1, 2)
    
    obj.method('hi')
    obj.method.call(obj, 'hi')
    
    array[0]('hi') 
    array[0].call(array, 'hi')
    ```

2. 测试

    - button 测试1
    
        https://jsbin.com/vutatuluwa/1/edit?html,js,output
        
    - 测试 2
    
        ```javascript
        let length = 10;
        function fn(){
          console.log(this.length);
        }
        
        let obj = {
          length: 5,
          method(fn){
            fn();
            arguments[0]();
          }
        }
        
        obj.method(fn , 1) // 输出什么
        ```

## 递归

## 记忆化

### ❌记忆化的核心思想是什么？

### ✅记忆化在 React 的应用，React 性能优化

1. React.memo

    - 需求
    
        点击按钮时，子组件不应该重新渲染，因为子组件没有任何变化
    
    - 代码
    
        https://codesandbox.io/s/weathered-paper-ynlg6

2. React.useCallback
  
    - 需求
    
        点击右侧按钮时，子组件才渲染
    
    - 核心
    
        ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191013120226.png)
    
    - 代码
    
        https://codesandbox.io/s/funny-vaughan-c30mf

## 柯里化

### ✅作用

经过柯里化处理的多参数函数，变成单参数函数

### ✅单参数函数如何接受两个参数？

1. 这个单参数是一个对象

    ```javascript
    let add1 = ({a,b})=>{
      return a + b
    };
    
    console.log(add1({a: 1, b:2}))
    ```

2. 使用闭包

    例子
    ```javascript
    let add2 = (a)=>{
      return (b)=>{
        return a + b
      }
    };
    
    // add2 简写为
    let add3 = a => b => a + b;
 
    console.log(add2(1)(3));
    console.log(add3(1)(3));
    ```

3. 如何理解「返回函数的函数」

    现有函数 add6
    ```javascript
    let add6 = a => b => c => d => e => f => a+b+c+d+e+f;
    console.log(add6(1)(2)(3)(4)(5)(6));
    ```
    
    add6 **分别单独**接受 6 个参数

### ❌柯里化测试题

1. 简单测试题

    ```javascript
    let add = (a, b, c)=>{
      return a + b + c
    };
    ```
    
    将 add 函数的调用方式从`add(1,2,3)`改成`curriedArr(1)(2)(3)`
    
    答案
    ```javascript
    let add = (a, b, c)=>{
      return a + b + c
    };
    
    let curriedArr = a => b => c => add(a, b, c);
    ```
    
2. 复杂测试题

    现有函数
    ```javascript
    const addTwo = (a, b)=>{
      return a + b; 
    };
    const addThree = (a, b, c)=>{
      return a + b + c;
    };
    const addFour = (a, b, c, d)=>{
      return a + b + c + d;
    }
    ```
    写一个函数 currify，使得这三个函数可以单独接受 2、3、4 次参数（即从 `addTwo(1, 2) 变成 xxx(1)(2)`）
    
    ```javascript
    const currify = ()=>{};
    
    currify(addTwo)(1)(2) // 返回 3;
    ```

## 高阶函数

### ✅什么是高阶函数

把函数作为**参数**或者**返回值**的函数，两个条件，满足一个即可

### ✅为什么 apply 是一个高阶函数？

假设有函数 test

```javascript
function test(a, b){
  console.log(this);
  console.log(a, b);
}

// 普通调用
test(1,2);

// apply 调用
test.apply({name: '1'}, [1,2]);
```
使用 apply 调用的时候，既没有把函数作为参数，也没有把函数作为返回值抛出，为什么还说 apply 是高阶函数？？

如果你要判断函数 this 的指向，必须找到函数是如何进行 call 调用的。

同理，如果要判断一个函数是否是高阶函数，必须找到函数是如何进行 call 调用的。

总结：**如果要深入分析代码，必须把函数调用方式改成 call 的方式，而不是简写的方式。**

如`test(1,2,3)`改成`test.call(undefined, 1,2,3)`

### apply.call 的理解

```javascript
function test(a, b){
  console.log(this);
  console.log(a, b);
}

// apply 调用
test.apply({name: '1'}, [1,2]);

// 上面不看，已经明白

// ① apply 改成 call 调用
test.apply.call(test, {name: '1'}, [1,2]);

// ② 因为 test.apply === Function.prototype.apply
let apply = Function.prototype.apply;
apply.call(test, {name: '1'}, [1,2]);
```

因为 test 是一个函数，所以 apply 是高阶函数

### ✅与 apply 相似的函数

bind、call

### ✅其他的高阶函数

sort、reducer、map

## pipe 操作

### ❌解决的问题

解决函数组合时，代码语义不好读懂的问题

解释了为什么单参数函数这么重要

## 在 React 的应用

### ❌将函数作为参数传给子组件

1. 代码

    https://codesandbox.io/s/nifty-butterfly-tgs28

2. 在什么情况下使用

    子组件想传数据或者函数给父组件的另一种方法

---

# JavaScript 数据类型



## 分类

- 基本类型
  1. string
  2. number
  3. boolean
  4. undefined
  5. null
  6. symbol(ES6 新增)
- 引用类型
  1. object



## 区别数据类型的 api

- typeof: 不能判断`null`和`函数`

- instanceof

    1. 使用范围：只能判断引用类型

    2. 原理：通过原型链

        ```javascript
        a instanceof b
        // 那么会这样比较
        // a.__proto__ === b.prototype ? 如果正确，返回 true
        // a.__proto__.__proto__ === b.prototype ? 返回 true
        // 直到 a.__proto__.__proto__ ...  === null 返回 false
        ```
    
- Object.prototype.toString.call([]) => 返回 "[object String]"


## 按值传递与按引用传递的区别，进阶版

```javascript
var a = {n:1}
var b = a
a.x = a = {n: 2}
console.log(b)
console.log(a)
```

重点是`a.x = a = {n: 2}`如何处理？

1. 从左向右执行

2. 执行 a.x = a，就是让变量 a 指代的对象添加一个 x key, 并且让 x value 指向变量 a

3. 执行 a = {n: 2}

   ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190523182558.png)
   
   
   
## falsy 值

   1. 数字0
   2. 数字NaN
   3. 字符串空
   4. undefined
   5. null

---


# 异步编程



## 异步编程

### 理解
  1. promise 对象是一个状态机，内部保存着将来的结果（异步的结果）。
  2. 可以手动指定promise状态，如在异步代码中执行resolve(a)，表示执行promise对象then的第一个callback
  3. 可以手动指定promise状态，如在异步代码中执行reject(a)，表示执行promise对象then的第二个callback
  4. then 执行哪一个 callback：看 then 之前返回值A，只有当返回值A返回一个promise对象，并且这个对象执行 reject，才会执行then的第二个参数
     否则都是执行 then 的第一个参数
  5. Promise.all：当所有 promise 都执行 resolve 时，才会执行 Promise.all 的第一个callback
     有一个执行 reject，执行 Promise.all 的第二个callback
  6. Promise.race

### 例子
  - 在 callback 拿到异步结果 https://jsbin.com/hasotadila/1/edit?js,console,output
  
  - 使用 promise 对象代替 callback https://jsbin.com/vegebaruju/1/edit?js,console,output
  
  - 处理 reject https://jsbin.com/sereqaruti/1/edit
  
  - 处理多个 then https://jsbin.com/divinuwame/1/edit?js,console,output
  
  - Promise.all https://jsbin.com/cikodudona/1/edit
  
  - Promise.race https://jsbin.com/dizocagade/1/edit?js,console,output

---

# Git



## merge some commit into one commit

- 注意， 下面的commit，不能使用本方法，(需求是将 rebase1，2，3合并成rebase1)

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530193126.png)

- 需求：将rebase1，rebase2，rebase3合并成一个commit，并且该 commit 的名称为 rebase1 合并

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185255.png)

- 过程

  - 获取 init commit, 一定是 `init`!!!!!

  - `git rebase -i f210`，弹出互动界面
  
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191009162008.png)

  - 使用 vim 修改(删除单词`de`)，修改后如下：

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185731.png)

  - `:wq`退出后，会继续弹出一个界面，在这里可以修改 commit 信息

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185929.png)

  - 完成合并commit操作

  - 如果想取消 rebase 操作

    `git rebase --abort`

---

# 工具使用

## shell 添加alias方法

- 进入根目录

  ```shell
  $ cd .
  ```

- 打开`.bash_profile`文件

  ```shell
  $ open .bash_profile
  ```

- 添加一个函数，我以blog发布的commit为例，只有函数才能获取到 alias 的参数

  ```
  aa() {
      git add .
      git commit -m $1
      git push
  }
  ```

- 配置生效

  ```shell
  $ source .bash_profile
  ```

- Ok



## 使用命令行打开webstorm

- 在webstorm中，双击 shift ，输入`create command-line`，复制路径

- 添加脚本到 `.bash_profile` 中，函数内容是

  ```
  ws() {
      /usr/local/bin/webstorm $1
  }
  ```

- 配置生效

  ```shell
  $ source .bash_profile
  ```
  
---

# this





## this 的指向

1. 对象函数或者函数调用

   变量 a 是函数的参数，只有当函数调用时，才能确定 a 的值

   **变量 this 是函数的参数，只有当函数调用时，才能确定 this 的指向**

   ```javascript
   function test1(a){
     console.log("a", a)
     console.log("this", this)
   }
   let obj = {
     name: "rjj"
   }
   test1("a")
   test1.call(obj, "b")
   ```

2. 构造函数

   **this 指向实例**

3. 箭头函数

   箭头函数的 this 是外部作用域（注意不是外部{}）指向的 this，使用call指向无效
   
   - 「使用call指向this无效」的例子：
   
       ```javascript
       let obj = {
         a: "123"
       }
       let _this = "我是 window";
       // 页面加载时，会执行 var this = window;
       let test = ()=>{
         console.log(this)
       }
       function test3(){
         console.log(_this)
       }
       function test1(){
         console.log(this)
       }
       
       test.call(obj) // 重点：指向什么？
       test1.call(obj)
       test3()
       ```
       
   - 「this 是外部作用域（注意不是外部{}）指向的 this」的例子
   
       ```javascript
        let obj = {
          b: ()=>{
            console.log(this)
          },
        };
        obj.b() // 打印什么？？
       ```

---

# Event Loop

## 任务分类

- microTask：①process.nextTick②promise.then()

- macroTask: ①setTimeout②setInterval③setImmediate

## 执行原则

- 先执行 microTask 后执行 macroTask

### 示例代码

```javascript
console.log('main1');

process.nextTick(function() {
    console.log('process.nextTick1');
});

setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});

console.log('main2');

```


```javascript
setTimeout(()=>{
  setImmediate(()=>{
    console.log("1")
    setTimeout(()=>{
      console.log("2")
    }, 0)
  })

  setTimeout(()=>{
    console.log('3');
    setImmediate(()=>{
      console.log('4');
    })
  }, 0)
}, 1000)
```






```javascript
console.log('a');
setTimeout(() => {
    console.log('b');
}, 0);
console.log('c');
Promise.resolve().then(() => {
    console.log('d');
})
.then(() => {
    console.log('e');
});
console.log('f');

/*
重点：

执行完微任务 console.log("d") 后

立即向微任务队列中添加微任务 console.log("e")，紧接着执行微任务 console.log("e")。

并不是先执行宏任务 console.log("b")
* */
```





```javascript
async function async1(){
  console.log(1)
  // A，使用 async
  /*
  await async2()
  console.log(2)
  setTimeout(()=>{
    console.log(6)
  }, 0)
  */
  async2().then(()=>{
    console.log(2)
    setTimeout(()=>{
      console.log(6)
    }, 0)
  })
}

async function async2(){
  console.log(3)
}

async1()

new Promise(function(resolve){
  console.log(4)
  resolve()
}).then(()=>{
  console.log(5)
})

/*
1. await 后面的代码，全是 then 的内容

   ``` JavaScript
   // A async 代码
   await async2()
   console.log(2)
   setTimeout(()=>{
    console.log(6)
   }, 0)
   
   // 转化成 promise 的代码
   async2().then(()=>{
     console.log(2)
     setTimeout(()=>{
       console.log(6)
     }, 0)
   })
   2. 遇到 async2，直接执行即可(同步)
```

---

# 代码实现需求



## 防抖和节流
### 节流 （技能冷却时间）
  - 实现思路：设置一个flag
  - 使用场景：一段时间，只能执行一次代码
  - [例子](https://jsbin.com/giralanuki/1/edit?html,js,console,output)
### 防抖（等待一段时间，一起做）
 - 实现思路：定时器内总是保存最新的定时器
 - 使用场景：等你一段时间不再触发，我再执行
 - [例子](https://jsbin.com/behunokime/edit?html,js,output)



## 对象拷贝

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190518100432.png)

#### es6的对象复制
1. `Object.assign` 浅拷贝
2. `扩展运算符` 浅拷贝

#### 实现一个深拷贝（有bug）
[递归 + 判断类型实现深拷贝](https://jsbin.com/cofevazaci/1/edit?js,console,output)







## 数组拍平，去重，排序

### 数组拍平

#### 思路

使用 concat + 递归实现

`array12 = array12.concat(flat(item))`

### 去重

#### 其他方法

1. indexOf去重(推荐！)

   新建一个 array，使用 indexOf 判断，如果不在 array 中，就 push 进去

   https://jsbin.com/qupimiqoju/1/edit?js,console,output

2. 对象属性去重(bug：得出来的是 string)

   新建一个对象，对象的 key 就是 array 的值

   https://jsbin.com/dixefugoni/1/edit

3. ES6 set 数据结构

   https://jsbin.com/quposulora/1/edit

   https://jsbin.com/xekojimayi/1/edit?html,js,console,output



### 三者一起使用

[例子](https://jsbin.com/nuyeficaba/1/edit)

## 函数柯里化



## 获取 url 的所有参数



## 斐波那契数列

[例子](https://jsbin.com/solehacopo/1/edit?js,console,output)



## 事件委托
[例子](https://jsbin.com/peditemope/1/edit?html,js,console,output)



## 一维数组与嵌套数组转化

- [一维数组转嵌套数组](https://jsbin.com/gexabiyuqu/1/edit?js,console,output)

  思路：

  - 添加一个 object，该 object 的 key 是 id，value 是 item。
  - 这个 object 可以完成 『获取 item， 并且获取 item 的父 item』

## eventBus

- https://jsbin.com/pecexaroxi/1/edit?js,console,output

  思路：

  - on    函数根据事件名称，注册回调函数
  - emit 函数根据事件名称，执行回调函数(带上 data)





## 获取数组最大值

- Math.max + ES6 展开参数`Math.max(...[1,2,3,5])`

## 删除数组的 falsey 值

filter(Boolean)

[例子](https://jsbin.com/siyoruqipe/1/edit?js,console,output)

---

# 原型链



## 原型链总结

只须知道以下知识点

1. `prototype`是函数才有的属性, 这个属性叫原型, 保存着共有属性和方法的对象。
2. `__proto__`是所有对象都有的属性, 作用是指向对象的原型。
3. 公式:`对象AAAAA.__proto__ === 构造函数BBBBB.prototype`
4. 构造函数BBBBB只能从`Function,String,Boolean,Object,Number,Array, 自己创造的构造函数`选择
5. 对象AAAAA不同，则构造函数BBBBB也不同
   1. 当对象AAAAA是`实例`，构造函数BBBB是`Function,String,Boolean,Object,Number, Array,自己创造的构造函数`
   2. 当对象AAAAA是`xxx.prototype`，构造函数BBBBB只能是`Object`
   3. 当对象AAAAA是`构造函数`，构造函数BBBBB只能是`Function`(即：构造函数的`__proto__`指向`Function.prototype`)

## 画图总结注意点

1. 实例的`__proto__`指向`构造函数的prototype`，不指向`构造函数`
2. 如果构造函数有属性（比如 name），那么实例会复制 name 属性到自己的位置中

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190522102857.png)

---

# 对象





## 数组

### Mutating API(修改原数组的 API)

|         |                           Mutating                           |                         No-Mutating                          |
| :-----: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|   add   | [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)<br />[unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)<br />[扩展运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax) |
| remove  | [pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)<br />[shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)<br />[splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) |
| replace | [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) |                                                              |

**重点区分：splice 是 Mutating，slice 是 No-mutating**

## 遍历对象

1. 使用 `for...in`遍历普通对象：会遍历到 Object.prototype 可枚举的属性，[例子](https://jsbin.com/lifarujubi/1/edit?js,console,output)

2. 使用`Object.keys(obj)`遍历普通对象：不会遍历到 Object.prototype 可枚举的属性，[例子](https://jsbin.com/vabowucaza/1/edit?js,console,output)

3. `for...of`
- ❓具有 iterator 接口都可以使用
   - 使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。

4. `forEach, map, reducer`





## 伪数组

- 特点：拥有length属性，key 值是0，1，2... ，可惜 `__proto__` 指向`object`

- 常见伪数组：arguments， document.querySelectorAll

- 伪数组转化为数组方法，[例子](https://jsbin.com/vuxefolezi/1/edit?js,console,output) [为什么 slice 可以执行](https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work)

---

# 继承

## 实现继承方法

### 1. 原型链继承

思路：子构造函数（Student）的 prototype 指向父构造函数（Person）的实例

代码：https://jsbin.com/leforiponu/1/edit?js,console,output

🌟⭐图示继承重点：

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190516145755.png)

对应的图示是

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190516142623.png)

缺点

 1. 属性是引用类型，实例之间相互影响

    如果父构造函数类型（Person）的实例属性是引用类型（body）， 那么每个子构造函数（Student）的实例对象A，实例对象B的实例属性（body）都会互相影响。

2. 无法传递参数

   创建子构造函数（Student）的实例，不能向父构造函数（Person）中传递参数（name）。

### 2. 借用构造函数

思路：调用父构造函数，继承父构造的实例属性

代码：https://jsbin.com/nicobusava/1/edit

缺点：只能继承实例属性，无法继承公共方法

### 3. 组合继承

思路：使用原型链，继承父构造函数的公共属性；借用构造函数，继承父构造函数的实例属性

代码：https://jsbin.com/miripucafa/1/edit

缺点：调用两次父构造函数

### 4. 原型继承

🚧

### 5. 寄生式继承

🚧

### 6. 寄生组合式继承

🚧

### 7. ES5 完美的继承

思路：以组合继承为基础，更好的实现继承

代码：https://jsbin.com/febasodaxi/1/edit?js,console,output

## new 做了什么？

1. 生成对象：生成临时对象 tempObj
2. 指向共有属性：令 `tempObj.__proto__ === Test.prototype`
3. 执行构造函数执行 Test 函数，并且内部的 this 指向 tempObj
4. 进行判断，如果无返回值或者返回一个非对象值，则将 tempObj 作为返回值返回出去；如果返回一个对象值，那么将该对象作为返回值返回出去。
       


[例子](https://jsbin.com/hakiwomuno/1/edit?js,console,output)



### 问题

1. 组合继承/完美继承时， 为什么不直接Student.prototype = Person.prototype，而是要Student.prototype = new Person() / new F()？

   Student.prototype.study 的 study 方法会在 Person，而不是 Student 中

   https://jsbin.com/kugogogugo/1/edit?js,console,output

---

# HTTP 缓存

## 缓存的定义

数据保存在客户端，能重复使用

## 缓存的分类


- 强制缓存

  1. 过程
  
      针对 JS 和 CSS 文件，图片，和任何类型的二进制文件的静态资源，在第一次 HTTP 响应 header 中添加
    
      表示在某段时间内，使用客户端的数据即可。**不发送请求**
    
  2. http 头
  
      ```http request
      Cache-Control: public, max-age=31536000
      Expires: (一年后的今天)
      ```
      
  
- 协商缓存

  1. 过程
  
      在请求内容中添加缓存标识
      
      后端根据缓存标识，判断是否需要更新文件
      
      如果不需要更新文件，返回 304
      
      如果需要更新文件，返回文件内容
    
  2. http 头
  
      ```http request
      ETag: (基于内容生成)
      Last-Modified: (过去某个时间)
      ```
  
---

跨域





## 同源策略

- 同协议：如都是http或者https
- 同域名：如都是[http://jirengu.com/a](https://link.zhihu.com/?target=http%3A//jirengu.com/a) 和[http://jirengu.com/b](https://link.zhihu.com/?target=http%3A//jirengu.com/b)
- 同端口：如都是80端口

上述有一个不同，浏览器会限制你在不同源的服务器活动，如果你想正常活动，需要**跨域**





## 跨域的几种方法

### JSONP

#### 实现过程

1. 直接输入 [url](https://photo.sina.cn/aj/index?page=1&cate=recommend)， 可以正常访问

2. 使用 ajax 获取数据

   https://jsbin.com/papiviralu/edit?html,js,console,output

   打开开发者工具，发现报错

   ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190514104204.png)

3. 可以通过这样的方式获取数据

   https://jsbin.com/cunapalemo/edit?html,js,console

   **jsoncallback=__ffffdsftest__, jsoncallback是后端提供的，__ffffdsftest__是前端自己定义的**

   此时后端返回的响应如下：

     ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190612134927.png)

     响应的意思是：执行 `__ffffdsftest__` 函数，函数的参数是响应内容

4. 封装函数

   https://jsbin.com/hoxitehedu/1/edit?js,console,output



### CORS

#### 思路

简略：

1. 浏览器发起简单请求，请求内容添加 `origin`，

2. 服务器检查`origin`，响应内容添加`Access-Control-Allow-Origin`
3. 浏览器解除限制

详细：

1. 跨域， 是浏览器阻止的

2. 为了实现跨域，需要服务端，客户端协同配合

3. 客户端**总是**会发起请求，但是能否获得响应，必须通过浏览器的检查

4. 对于简单的 ajax 请求，响应相应简单，浏览器对响应的检查相对少，不需要发送 CORS 预请求

5. 以下是简单的 ajax 请求

   - **HEAD**，**GET**，**POST**

   - 请求第二部分只有以下字段

     Accept

     Accept-Language

     Content-Language

     Last-Event-ID

     Content-Type（只能为`application/x-www-form-urlencoded`，`multipart/form-data`和`text/plain`其中一种）

6. ajax 请求是简单请求，它会为你的请求第二部分添加一个头部信息`Origin: 你的域名`（解释可能不正确）；

7. ajax 请求是非简单请求，需要在正式请求前发送一个「预检请求」，该请求 http 包含：

```http request
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

   该请求的意思是：

   1. 我发送一个请求方法为 options 的请求
   
   2. 我的请求 url 是 http://api.bob.com
   
   3. **我正式请求的方法是 PUT**
   
   4. **我正式请求 header 部分包含X-Custom-Header字段**

8. 服务端接受你的请求，并且在响应内容 header 写上这些字段

```http request
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: *
Access-Control-Allow-Credentials: *
Access-Control-Max-Age: 1728000
```

[例子](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/daily.md#跨域问题)

### ❓如果客户端需要携带 cookie 跨域怎么办

1. 客户端，设置 XMLHttpRequest 实例的 withCredentials 属性为 true

   ```javascript
   var xhr = new XMLHttpRequest()
   xhr.withCredentials = true
   ```

2. 服务端，设置第二部分

   ```
   Access-Control-Allow-Credential: true
   Access-Control-Allow-Origin: 不能指定为 * ，必须明确设定一个域
   ```

---

# 闭包



## 最简单的闭包例子

声明一个变量，声明一个函数

```javascript
var test = "test";
function test1(){
	console.log(test);
}
```

将代码放到一个函数中，在这个函数中将函数 test1 返回

```javascript
function x(){
  var test = "test";
  return function test1(){
  	console.log(test);
  }
}

// 执行 test1 函数
x()();
```

**test 变量 + test1 函数 === 闭包**

## 闭包作用

**暴露一个访问器test1（函数），让别人通过访问器「间接访问」重要变量test。**

函数 x 只是为了①构建出一个局部作用域，②并且让别人能使用访问器函数，与闭包无关。





## 如何构建一个立即执行函数

①声明匿名函数②执行③使用符号通过语法检查

```
!function(){console.log(1)}()
```



## 立即执行函数有什么用

- **创造一个局部作用域**

  之前：https://jsbin.com/jahiyomihi/1/edit?html,js,console,output

  之后：https://jsbin.com/hopefovowi/1/edit?html,js,console,output

- **内部的变量不被外部代码读取，内部代码能读取外部变量**

  ```javascript
  var name = 'name';
  (function() {
    console.log("name", name); // 打印 "name", name
    var a = 1
  })();
  console.("a", a) // 报错 a 未定义
  ```

---







## 新增需求

- 接入微信验证

- 使用加密方式对用户的操作进行校验, 防止其他人恶意向数据库注入数据

- 接入平安公众号

- localStorage 如何保证保存最新的 token?

  - 情况

    - 没有 key: 直接 setItem

    - 有 key 有 value: 直接 setItem

      


## 如何把本地代码 push 到服务器的某个目录下

- 预期效果

    开发机器通过 `git push`, 可以将代码推送到服务器中 

- 核心流程
  
    - 服务器创建用户
    
        ```
        sudo adduser git-test # 创建 git-test 用户
        ```
        
    - 服务器创建 bare 仓库
    
        ```
        mkdir /data/nginx-new/html/git-hooks # 根据实际修改位置
        cd /data/nginx-new/html/git-hooks
        git init --bare back-h5-git.git
        ```
    
    - post-receive 修改
    
        ```
        #!/bin/sh
         
        unset GIT_DIR
        cd /data/nginx-new/html/back-h5-git  # 代码仓库的位置
        git pull
        ```
    
    - 创建代码仓库
    
        ```
        cd /data/nginx-new/html
        git clone /data/nginx-new/html/git-hooks/back-h5-git.git
        ```
    
    - 添加权限
    
        ```
        cd /data/nginx-new/html/git-hooks/back-h5-git.git/hooks
        chmod +x post-receive
        sudo chown -R git-test:git-test /data/nginx-new/html/git-hooks/back-h5-git.git # bare 仓库路径
        sudo chown -R git-test:git-test /data/nginx-new/html/back-h5-git # 代码仓库路径
        sudo chown -R git-test:git-test /home/git-test # 用户路径
        ```
    
    - 开发机器 git clone
    
        ```
        git clone git-test@203.195.221.250:/data/nginx-new/html/git-hooks/back-h5-git.git
        ```
    
## 请求参数

请求参数, 有几种方式

- 将参数放到 url 的 path 中

    前端这样请求 `/video/1`
    
    后端这样获取
    
    ```javascript
    app.get('/getVideoUrl/:id', async (req) => {
      console.log(req.params.id);
    });
    ```
  
- 将参数放到 url 的 query 中

    前端这样请求 `/video?id=1`
    
    后端这样获取
    
    ```javascript
    app.get('/getVideoUrl', async (req) => {
      console.log(req.query);
    });
    ```
  
- 前端为了区分每一期, 使用 `/info/1`

- 后端为了区分每一期, 不能使用 `/info/1` 
  



## 定义变量需要注意的地方

现有如下代码

```javascript
try {
  // 可能是 userData = [{lotteryTime: 1, prizeLevel: 1}]
  const userData = [];
  
  // 如果是 [], 下面的 2 句代码会报错, 所以要进行防御性编程
  // const lotteryTime = userData[0].lotteryTime;
  // const prizeLevel = userData[0].prizeLevel;
  
  // 防御性代码
 	const lotteryTime = userData && userData[0] && userData[0].lotteryTime || 0;
  const prizeLevel = userData && userData[0] && userData[0].prizeLevel || 0;

  if(userData.length !== 0 && lotteryTime < 5 - 1 && prizeLevel == 0){
    console.log(1)
  } else {
    console.log(2)
  }
} catch (e) {
  console.log(e)
}
```



## 数据库大小写

![image-20200122102436540](/Users/raojj/Library/Application Support/typora-user-images/image-20200122102436540.png)





## git push 之前必须保证服务器退出 vim 编辑





## 通过 select SQL 获取的是数组

```
const result = await sql(`select * from md5_${id} where used=0 order by rand() limit 1;`);
result 是一个数组
```



## SQL 数据类型与 js 数据类型对应

| SQL  | js     |
| ---- | ------ |
| int  | number |
|      |        |
|      |        |



## 对象数据结构关系

现有如下代码

```javascript
const response = await axiosInstance.get(`/lottery?id=${id}&number=${window.userNumber}`);
```

在 postman 返回的是

![image-20200122153953267](/Users/raojj/Library/Application Support/typora-user-images/image-20200122153953267.png)

`response.data` === postman 返回的数据





## 抽奖逻辑

1. 全对, 使用`get/user`获取用户数据, 只有当「number 合法 + 次数不超过最大抽奖次数 + 未中奖」, 才可以抽奖
   1. 不合法人员, 直接进入感谢观看
   2. 合法人员
      1. 可以抽奖, 进入抽奖页面
         1. 调用 `get/lottery`
            1. 中奖, 进入邮寄信息页面, 使用 `post/info` 进行记录数据
            2. 未中奖, 进入结算页面
      2. 不可以抽奖, 进入结算页面



## 如何收集用户的中奖信息

- 直接在表`users_id`记录用户的中奖信息即可
- 前端需要收集 以下数据
  - phone
  - address(级联选择收集数据)
  - 收货人



## 数据库返回的数据格式

1. select 语句

   ![image-20200127120336619](/Users/raojj/Library/Application Support/typora-user-images/image-20200127120336619.png)







## ubuntu 下如何结束 node 服务??

- 端口号与进程id(PID)的区别

  - 端口号用来表示「这个特殊进程是用于通信的」, 即**PID范围比端口号大**
  - 例子: 你在 3333 端口开启一个 chrome 服务, 每一个 tab 都对应一个 PID

- 输入进程名称, 输出PID

  `ps -ef | grep node`

  返回如下内容

  ```
  ubuntu    5377  5301  0 21:58 pts/0    00:00:00 node lottery-backend.js
  ubuntu   13950 13919  0 22:53 pts/2    00:00:00 grep --color=auto node
  ```

  可知 PID = 5377

- 根据PID, 结束服务

  `kill -9 PID`

- 输入 PID, 输出端口号

  `netstat -nap | grep 5377`

- 输入端口号, 输出PID

  `netstat -nap | grep 8081`









## 使用企业微信的过程

- 获取 access_token

  https://work.weixin.qq.com/api/doc/90000/90135/91039

- 构造网页授权链接, 获取 code

  https://work.weixin.qq.com/api/doc/90000/90135/91022

- 获取访问用户身份, 获取 userId
  https://work.weixin.qq.com/api/doc/90000/90135/91437

- 读取成员, 获取 number

  https://work.weixin.qq.com/api/doc/90000/90135/90196







## 需要做的事情

- 代码流程再看一遍

- 苹果, 安卓手机缩略图

- 重点: 添加接口「post/userData」, 如果经过企业认证, 往表格内添加数据, **这个接口非常重要, 需要一定安全性**

- users_id 表格数据可能的情况

  - | 数据含义               | number(工号) | lotteryTime(抽奖次数) | prizeLevel(中奖等级) | haveInputInfo(是否填写邮寄信息) | lotteryMD5(中奖 MD5) | phone | address | name(收件人) | 结果 |
    | ---------------------- | ------------ | --------------------- | -------------------- | ------------------------------- | -------------------- | ----- | ------- | ------------ | ---- |
    | 验证通过               | test1        | 0                     | 0                    | 0                               |                      |       |         |              |      |
    | 未中奖                 | test2        | 5                     | 0                    | 0                               |                      |       |         |              |      |
    | 中奖                   | test3        | 2                     | 2                    | 1                               | fdafdsfdsa           | 110   | 深圳    | 饶家俊       |      |
    | 中奖且未填写           | test4        | 3                     | 2                    | 0                               | Fffffccbvbvb         |       |         |              |      |
    | 未中奖且未使用全部次数 | test5        | 2                     | 0                    | 0                               |                      |       |         |              |      |
    |                        |              |                       |                      |                                 |                      |       |         |              |      |

    

- 手动验证改成进入应用后, 静默验证

  经过企业验证后, 使用接口「addUsers_id」往 users_id 表添加数据, 并且设置 window.number = 'anbo'





## 流程

- 需求: 使用企业微信获取用户信息(不考虑 access_token)

  1. 获取 code : https://work.weixin.qq.com/api/doc/90000/90135/91022

     前端写一个函数, 获取 url 的 code, 并且把 code 放到 window 上即可

  2. 获取 access_token: https://work.weixin.qq.com/api/doc/90000/90135/91039
     - 获取token接口在后端
     - 在redis搜索有没有 token(使用 redis 代替mysql)
       - 如果没有 token, 调用微信提供的接口, 将 token 放到数据库中, 并且设置过期时间(7200), 将 token 返回给前端
       - 如果有,直接返回数据库保存的 token

  3. 获取详细信息: https://work.weixin.qq.com/api/doc/90000/90135/91023#10019
    
     - 获取 userId: https://work.weixin.qq.com/api/doc/90000/90135/91023

- 需求: 如何安装 redis?

  ```
  $ apt-get update
  $ apt-get install redis-server
  ```

- 需求:如何配置jenkins ,可以让 jenkins 知道我 push 了代码?

  - https://juejin.im/post/5dca691ff265da4d4b5ff2f5#heading-10 不要 gitwebhooks

- 需求: 前端部署, 如果package.json 没有发生变化,那么不执行 yarn 

- 需求: 如何将服务器的表格下载到本地 mac?

  ![image-20200311103129082](/Users/raojj/Library/Application Support/typora-user-images/image-20200311103129082.png)

  ![image-20200311103216169](/Users/raojj/Library/Application Support/typora-user-images/image-20200311103216169.png)

- 需求: 目前的流程是怎么样的?

  - 进入页面, 点击第二期

    修改后的流程: 进入页面, 发送 `post/userData` 初始化员工数据

  - 观看湾完视频, 进入 check 组件,用于判断是否是内部员工

    修改后的流程: 看完视频后, 后台检查是否内部员工

  - 抽奖逻辑

- 数据库设计

    - | 数据含义               | number(工号) | lotteryTime(抽奖次数) | prizeLevel(中奖等级) | haveInputInfo(是否填写邮寄信息) | lotteryMD5(中奖 MD5) | phone | address | name(收件人) | 结果 |
      | ---------------------- | ------------ | --------------------- | -------------------- | ------------------------------- | -------------------- | ----- | ------- | ------------ | ---- |
      | 验证通过(初始化)       | test1        | 0                     | 0                    | 0                               |                      |       |         |              |      |
      | 未中奖                 | test2        | 5                     | 0                    | 0                               |                      |       |         |              |      |
      | 中奖                   | test3        | 2                     | 2                    | 1                               | fdafdsfdsa           | 110   | 深圳    | 饶家俊       |      |
      | 中奖且未填写           | test4        | 3                     | 2                    | 0                               | Fffffccbvbvb         |       |         |              |      |
      | 未中奖且未使用全部次数 | test5        | 2                     | 0                    | 0                               |                      |       |         |              |      |
      |                        |              |                       |                      |                                 |                      |       |         |              |      |

  







## 问题

- 进入「欢乐 PA应用」方式是「微信」还是「企业微信」?

  我的理解是只能「企业微信」,因为只有企业微信才知道你是不是「企业内部员工」







## bug 的复现

- 进入应用后, 超过 10 分钟才看完有没有问题?

---

## commit 

- 安装相应依赖,完成最简单请求



## 功能

- 搭建简单易用的koa初始化框架
  - 热加载
  - 使用 ts 对数据类型约束
  - 使用验证器对参数进行校验
  - 自动加载路由
- 符合洋葱模型, 便于用户调试
- 用户系统(密码加盐处理)
- 使用 jwt 进行权限控制
- 使用 ORM 的思维方式初始化数据库字段(field), 操作数据库
- 使用后端接口对数据库的增删改查(对一个 todo 进行增删改查)
- 使用全局异常处理的方式处理错误和处理成功
- 日志功能
- 使用命令行可视化界面, 添加新代码
- 标准的 RESTful 风格
- 使用高级的数据库知识解决问题
  - In 操作: 「解决获取多个数据库数据」
  - Group: 删除不必要的数据库返回字段
- JSON 序列化: 对数据库返回的字段数据进行统一处理



## 新知识与疑问与重点

- Static 与 普通定义的方法有什么区别
- 为什么中间件用 class, 而不是 func
- 调试中: step over 与 setp into 的区别

- trycatch 是如何执行的?

  ```
  function func1(){
    console.log(1)
    func2()
    console.log(2)
  }
  
  function func2(){
    try{
      func3()
      console.log(3)
    }catch(error){
      console.log("func2")
      throw error
    }
  }
  
  function func3(){
    try{
      console.log(a)
    }catch(error){
      throw error
    }
    return 's'
  }
  
  func1()
  ```

- async / await 语法会如何执行

  在 async / await  语法中获取 reject 的数据, 需要借用 trycatch 语法

  ```
  function Promise2() {
    return new Promise((resolve, reject) => {
      reject(321321);
    });
  }
  async function test2(){
    try{
      const result = await Promise2();
      console.log(result);
    }catch (e) {
      console.log('e', e);
    }
  }
  test2();
  ```

- 要用代码连接服务器的数据库, 必须有五个配置数据: host, port, userName, password, dbName, 并且需要服务器提前创建数据库名称







