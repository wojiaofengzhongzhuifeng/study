# 2019.10.15

## 输入 modelKey,输出 allComponentKey

`viewer3D.viewerImpl.modelManager.models["M1570783317812"].getComponentlist();`

## 使用 js 修改 style 

`div.style = "color: red";` 通过这个修改, 导致 div 的 style 只有`color: red`,之前的 style 都消失

## geometry , mesh

geometry === 物体形状(如长方体,立方体,球体)

mesh === 网格 === geometry + material 

## 


# 2019.10.14

## 对象添加 key：valu 的陷阱

https://jsbin.com/havomewozi/1/edit?js,console,output

## three 渲染核心

scene，camera，renderer

放到 scene 的组件：camera，spotLight，对象（方块，球体）

## mesh 组成

mesh(网格) === geometry（骨架） + material （材质）

## scene

### scene如何生成

`window.scene = new THREE.Scene();`

### 是什么？有什么用

是一个数组，用来保存在这 scene 渲染的 obj

![image](https://user-images.githubusercontent.com/25478678/66735411-db1c1080-ee98-11e9-88eb-118f6aee3e11.png)

### 常用方法

scene.getObjectByProperty 根据 mesh 的 key:value, 获取 mesh obj

scene.children 获取场景的所有子对象

## 

# 2019.10.13

笔记模板

## 这是知识点的集合

### ✅知识点 1

- 知识点 1.1

  xxx

- 知识点 1.2

  - 知识点 1.2.1
    
    yyy
      
    实例代码
      
    ```javascript
    console.log(1)
    ```


### ❌知识点 2

# 2019.10.11

## first-scene

`renderer.render(scene, camera);`

- 创建 renderer

- 创建 scene

- 创建 camera

- 往 scene 添加 axe

- 往 scene 添加 plane

- 往 scene 添加 cube

## 

## 常见疑惑：为什么在代码获取不到数据，在控制台就可以？

基本都是因为异步，需要在相应回调中获取数据

# 2019.10.10

### 函数深入理解

- [function](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/function.md)

# 2019.10.9

### 「改」操作需要「选定表格数据」，再修改

### 如何进行「跨表查询表格数据」？

1. 建立「关系类」的作用

| id      | From                          | to                            |
| ------- | ----------------------------- | ----------------------------- |
| Jfdkasl | 对象类1/对象类1的实例对象 key | 对象类2/对象类2的实例对象 key |

2. 使用 「实体多对象关联查询」接口获取多表数据

### 实体多对象关联查询 接口怎么用？？

### git rebase 使用方法修改

https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/git.md

### google 搜索小技巧

 `Math.floor(1.2)  === 1` ，如何搜索可以知道`Math.xxxx(1.2) === 2`?

 `opposite`对立



### 什么情况下使用「策略模式」

有很多个 if else，并且还可能再添加多个 if else 

### 阶乘，第一个递归例子

```
j = (n) => n === 1 ? 1 : n * j(n - 1)
```
 
递归 = 递（压栈）+ 归（弹栈）

### 斐波那契，第二个递归例子

### 调用栈作用：记忆「回到哪」

### 如何优化递归效率

- 尾递归优化：在函数的尾巴进行递归（迭代），完全不会

- 记忆化函数：保存之前计算过的值

### react 性能优化

1. React.memo: https://codesandbox.io/s/gallant-poitras-nvv63

2. React.useCallback（-3.38）: https://codesandbox.io/s/distracted-herschel-muxk1

 ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191010220756.png)



# 2019.10.8

### BOS几个key 的获取

1. {appKey}: 用户创建时生成的 key
2. {modelKey}:在预览应用中，点击某个构件，在控制台会显示`M1570503801966`
3. {componentKey}: 在预览应用中，点击某个构件，在控制台会显示`M1570503801966_1j0rmjKBzDgf5LrV6wtpk0`
4. {projectKey}:  ???
5. {dataBaseKey}: 
   1. 用户通过 bosf 的 3.7.11 接口登录，在响应内容，找到 「modelDB」，这个就是 dataBaseKey
   2. 用户进入「用户预览」，打开「获取属性tab」，点击某个构件，红色就是 dataBaseKey

### 

# 2019.10.7

### 子程序（routine）的分类

1. 函数：有返回值
2. 过程（procedure）：没有返回值
3. 方法（method）：放到类或者对象中

在 js 中只有函数和方法

### 编程的「函数」与数学的函数是不同的

1. 编程的函数 === 子程序
2. 数学的函数 === x 与 y 的对应关系，它的特点是：无论什么条件下输入 x，输出的 y 都是不变的
3. js的函数式的函数指的是数学的函数



`return x + a`，a 变量属于「定义函数的环境（environment）」情况，所以 a 为 1



### 定义函数代码块中，变量如何确定值？

1. 调用时输入参数（params） => 变量（桶）随时会变 => x 变量
2. 定义时环境（environment） => 变量（桶）不会变，但是桶内的值随时会变 => 变量

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





### 闭包的作用

1. 让函数维持变量，不能维持变量的值



### 实现「维持变量」的需求，有什么方法？

1. 对象
2. 闭包

### 



### 函数变量的类别（非箭头函数）

1. 变量  === 桶，用于存放值
2. 隐式变量（this）：只能通过 call调用时确定 this
3. 显示变量（arguments）：容易指定



### 普通调用转化为 call 调用

```
1. fn(1,2)
	 fn.call(undefined, 1, 2)
2. obj.method('hi')
   obj.method.call(obj, 'hi')
3. array[0]('hi') 
   array[0].call(array, 'hi')
```



### this指向的测试题

1. button指向:https://jsbin.com/vutatuluwa/1/edit

2. 测试题 2

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

   1. 调用 method 这个函数，并且method 函数的参数是 fn 函数
   2. 因为 method 函数通过 `fn()`调用 fn 函数，可以转变成`window.fn.call(window)`，所以 fn 定义函数内的 this 是 window！！！！
   3. `window.length`根据不同页面，取值会不同（其他知识）
   4. 因为 method 函数通过 `arguments[0]();`调用 fn 函数，可以转变成`arguments[0].call(arguments)`，所以 fn 定义函数内的 this 是 arguments！！！！
   5. 因为`obj.method(fn , 1) `，可以简单知道 arguments 有两个参数

###  





### 箭头函数不支持 this 的意思是什么？

没有隐式变量（this），this 的值 environment 确定，不由 params 定义



### 总结

1. 如果「函数内的变量」与「函数定义参数」同名，使用「调用时确定值，params 法」，否则，使用「定义时确定值，environment 法」
2. environment 法，引出闭包概念
3. 变量分为隐式变量（this）与 arguments，隐式的意思是「函数定义参数有this，没有显示出来」，也就是说，this的值由params确定
4. arguments的值很简单指定，fn(1)  / this 的值这样指定fn.call(this, 1)







---





# 2019.10.4

### MVC的 C 作用

>  A controller's purpose is to receive specific requests for the application

### rails 如何添加一个 controller？（添加一个条件判断的分支）

```
$ rails generate controller Welcome index
```

### rails 如何get所有的路由？（获取所有的条件判断的条件）

 `config/routes.rg`

### resource 是什么？

> A resource is the term used for a collection of similar objects, such as articles, people, or animals，就是 obj？？

### 如何使用 resource？



# 2019.9.30

### 联调与 mock 数据

1. 后端给接口文档，前端在 _mock.ts 返回内容

2. 使用 mock 的数据进行开发

3. 将 mock 地址 proxy

# 2019.9.29


# 2019.9.27

### 状态管理

1. 状态 === 数据 === 与后端有关的数据（ui） + 与后端有关的数据（用户状态）

2. 最简单的状态管理很简单，parent 组件与 son 组件

    - parent 组件保存 number,handleClick 
    
    - son 组件通过 props，拿到两个属性：number + onClickButton
    
     

# 2019.9.26

### antd pro 在哪里控制 header main  footer 的渲染？

layout 目录下

### 最简单的 git 操作

目标：需要往远程 master 修改 bug / 添加代码 

1. git checkout master 切换到本地的 master 分支
2. git pull origin master 拉取远程仓库的 master 分支代码，如果不执行，可能会导致代码冲突
3. git checkout -b "fixbug" 以最新远程仓库的 master 分支为基础，开一个分支，分支名称为 fixbug
4. 写代码
5. git add .  添加到暂存区
6. git commit -m "改完分支了" 添加到本地 git 中

7. git branch  查看当前分支，确保在 fixbug 分支

8. git pull origin master 将远程 master 分支拉到 fixbug 分支中，目的是当别人和你修改了同一个文件时，会产生冲突，这时候需要本人解决冲突，保证远程没有冲突

9. 手动查看冲突，解决冲突
10. git add .  
11. git commit -m "解决完冲突" 
12. git push origin fixbug:fixbug1 将本地的 fixbug 分支推送到远程 fixbug1 分支

### antd 核心

1. 添加一个路由 + 页面

2. 没有登录，跳到 /user/login 

3. mock 数据

4. 权限验证

5. 如何接入 bos3d 库？库有可能是线上地址，有可能是本地文件，这两种情况分别怎么处理？

6. css 作用域的问题（全局作用域，局部作用域）

```css
.first {
  color: red
}

:global(.title) {
  color: green;
}
```

第一种，必须这样使用：`import style from './style.less' className={style.first}`

第二种，只要 css 文件被加载了，并且 element 指定了 title，就能正常使用

7. 如何使用 dva？

ui => model => 将 ui 与 model 通过 connect 串联起来

8. 前端数据管理

    - 前端项目的数据结构就是一个 {}

    - 


### 如何提问

问「需求是什么」，不要问「需求的实现方法如何实现」


# 2019.9.24

# 2019.9.23

### 面试需要

1. 表现出「学习主动性」
2. 项目，这些是亮点
3. 工作内容，这些是亮点
4. xx 的原理，按照这几步走
   1. 遇到了什么问题
   2. 在 xx 之前，用的是什么
   3. xx 是如何解决的
5. site:juejin.im 阿里 前端  面试

### Webpack 引入 css 的两种方法，有何不同

`import './style.css'`

`import test from './style.css'`

### webstorm 键盘打开文件`command + o`

### webstorm 如何使用键盘代替 `command + 鼠标左键`?

`Command + b`



# 2019.9.20

### script 引入问题

现有项目有 3d 库，通过 `<script src="库的地址" type="text/javascript"></script>` 引入，发现报错

`Uncaught SyntaxError: Unexpected token <`

应该怎么办？


# 2019.9.18

# 2019.9.16

### 使用 node.js, 创建一个新的组件

# 2019.9.13

### button

# 2019.9.12

### 

# 2019.9.11

### ts 中。partial 有什么用

[链接](https://typescript-play.js.org/#code/JYOwLgpgTgZghgYwgAgEJwM4VQVzGAexAAUoCAHDAbwChl7kAjTCALmQzClAHMaBfGjVCRYiFADk4YYADdseQiTKVkEAB6QQAEwxoWufEVIVqdBiGly2HLrwFCR0eEmQBBEAgAWBKIaUmqmqaEDp66Fj+xipmDMhwnj5Q7JzcIHyCjuDO4miK0abBWrruib5RyqYANMhSMvIVgWaZYACe5CiNMQCMyAC8yMRwUDJwADYAPB7e5fmVqgBktVYNc00AfEI0CEScyJCc7F2FA7SZOyB7B2DdR2s9-ci0DluvW0A)


### bos3d bosf

1. bosfoudation 环境

生产环境官网（浏览器访问）：http://bos.bimwinner.com

生产 api（结合文档，用于拼接请求 url）： http://bosgw.bimwinner.com
                
研发环境官网（浏览器访问）： http://bos-demo.rickricks.com 

研发 api（结合文档，用于拼接请求 url）： http://bosapi-demo.rickricks.com
                
2. bos3d 环境

生产环境官网（浏览器访问）：http://bos3d.bimwinner.com/bos3d

生产 api（结合文档，用于拼接请求 url）： http://bos3d.bimwinner.com/api
                
研发环境官网（浏览器访问）： 不需要

研发 api（结合文档，用于拼接请求 url）： http://bos3d-alpha.bimwinner.com      
                
                
3. **用户通过 bosf 的 3.7.11 登录之后，在登录的响应内容中，找到 modelDB，这就是 bos3d 文档的 dataBaseKey**

4. bos3d 不需要带上 token


# 2019.9.10

### 500 错误是什么意思？？

比如有一个后端提供一个post 接口，他需要前端在 body 写如下的数据结构
```js
{
  type: "add",
  matrix: [1,2,3,4,5,6,7,8,9,10],
}
```

但是实际前端发了这样的数据
```js
{
  type: 'add',
  matrix: {
    element: {
      matrix: [1,2,3,4,5,6,7,8,9,10],
    }
  }
}
```

就会返回 500 错误

# 2019.9.9

### 

# 2019.9.7

### react 如何实现「当 state 某个数据变化时，执行某代码」

`componentDidUpdate`

`useEffect(()=>{}, [data])`

# 2019.9.6

### 这个报错的原因是什么

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190906100853.png)

### BIMWINNER 库如何接入到 React 应用中



# 2019.9.5

# 2019.9.4

### 如何让 webstorm refresh



# 2019.9.3

### 这两个引入 css 区别？

```js
import style from 'style.css';
import 'style.css'
```



# 2019.9.2

### 写了 modal 组件

# 2019.8.29

### 设置 cookie key: value，设置 cookie 过期时间

### 创建函数，判断用户的身份


# 2019.8.28

无

# 2019.8.27

### 用户未登录，进入到登录页面（重定向）功能思路

1. 用户登录之后，保存 token 到 cookie 中

2. 登录成功之后，重定向到 / ,使用 token 发送请求

# 2019.8.26

### postman 如何自动保存 token ？

1. 选择一个 environment 

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190826083800.png)

2. 登录注册接口中，执行以下：

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190826084026.png)

3. 在其他地方使用第二步定义的变量即可

注意：如何在raw 使用 token 变量

将 row 改成x-www-form-urlencoded

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190826091757.png)

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190826092535.png)



### extract 是什么意思？

获取

### represents 是什么意思？

The key represents the name of the variable. 代表


# 2019.8.23

### 如何根据 postman 编写 axios 代码？

如果不能在前端正常发送，一般是跨域问题。

### 后端数据展示到前端的流程（添加 ts ）

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190823145737.png)

细节：

  1. `service.ts`需要执行的事情：
  
      - 使用 ts 定义后端返回的数据结构
      
      - 如果后端返回的数据不是成功的，需要全局提示
      
      - 将全球封装成函数，通过 promise 返回后端接口。
  
  2. `demoList.tsx`需要执行的事情：
  
      - 使用 ts 定义组件需要的数据结构
      
      - 使用函数获取后端数据
      
      - 创建「转化数据结构」函数，输入后端数据，输出前端组件需要数据。

### 如何定义一个接口，接口内部接受泛型？泛型接口

```typescript
interface Test<T>{
  code: string    
  message: string
  data: T
}
const test123321: Test<{count: number, data: Array<string>}> = {
  code: 'test',
  message: "test",
  data: {
    count: 1,
    data: ["test","test","test"]
  }
}
```

# 2019.8.22

### hooks 如何模拟 this.setState 

红框代码翻译：监听 obj 变量，如果 obj 变量的值变化了，执行 useEffect 的代码。

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190825095929.png)

# 2019.8.21


# 2019.8.20

### mac 查看 ip

`ifconfig | grep "inet " | grep -v 127.0.0.1`

### markdown 测试

<details>
<summary>点我展开详细内容</summary>
Hi~ o(*￣▽￣*)ブ
</details> 

# 2019.8.19


# 2019.8.16

### hooks 模拟 componentdidUpdate



### hooks useState 存 obj



# 2019.8.15

### 同步与异步的 action 有什么区别？

```javascript
const actions = {
  // 同步 action
  test: (data)=>{
    return {type: "TOGGLE_TODO",data: data}
  },
  
  // 异步 action
  loadLikes: ()=>{
    return (dispatch, getState)=>{
      dispatch({type: 'FETCH_DATA'});
      return axios({...}).then((response)=>{
        dispatch({type: 'FETCH_DATA_SUCCESS', data: response});
      },(reject)=>{
        dispatch({type: 'FETCH_DATA_FAIL', data: reject});
      })
    }
  }
}
```

最大的区别：

action.test 函数返回的一个对象
action.loadLikes 返回的是一个函数，并且函数的第一个参数是 dispatch，为什么能这样，因为我使用了 redux-thunk 中间件

### 跨域问题

1. 问题

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190815161216.png)

翻译：请求 header 的 content-type 字段在后端返回的 access-control-header 是不被允许的


2. 如何判断请求是否是简单请求？必须符合以下两个条件
```
（1) 请求方法是以下三种方法之一：

HEAD
GET
POST
（2）HTTP的头信息不超出以下几种字段：

Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
```

3. 实际代码中，content-type 是 application/json ，所以在发送 post 请求之前，需要发送一个 options 请求

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190815173949.png)

4. 解释

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190815174450.png)


# 2019.8.14

### 对请求进行封装

https://codesandbox.io/s/patient-sunset-4q45v

### mac 下全局寻找文件

`sudo mdfind -name "文件名，支持模糊搜索"`

`j 文件名，支持搜索`

### 如何为搜狗添加 alia

### 如何取消 qq 的截图

### utils/request.js 的作用是什么？

对 axios 的二次封装，统一处理错误 + 统一对数据进行格式化

### 7-8 的目的


### 

# 2019.8.13

### redux 在 app 的应用

- app 的状态（数据）

  1. entity 领域状态，从后端发送过来的数据一般是[{}, {}, {}], 经过前端 normalizeData 处理，entity 一般是一个对象，对象的 key 是 id，value 是 id 对应的 obj
  
  2. ui 状态，如 home 页面中，需要维持一个 ids 数据，用于保证页面的 item 顺序
    
  3. 全局通用状态，如当获取数据失败时，提示用户

  4. home.js 与 products.js 有什么区别？？
  
    home.js 是 ui 状态 / products.js 是领域状态


# 2019.8.12

### ✨对于 promise，我无法控制promise 执行函数

```javascript
promise.then(f1, f2).catch(f3);
```

如何控制promise执行哪个函数？无法控制执行 f2 与 f3

### ✨前后端如何处理错误请求

我认为比较好的通信方式：

只要前后端通信成功，前端获取的信息就只有以下一种
```javascript
// 正常获取数据
{
  code: 200,
  message: success
  data: [...]
}
// 获取数据失败
{
  code: xxx,
  message: fail,
  data: null
}
```

---

# 2019.8.10

### 前端数据分类

- 领域实体状态：保存在数据库的数据

- 页面状态 + 通用前端状态：登录态，全局异常信息

# 2019.8.9

### 📒如何对 axios 进行二次封装

### bug1: 没有子节点的不应该显示下标

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/C4C0466C-6F42-4906-8903-7B9240BFF5B0.png)

### 右键选择文件夹，

# 2019.8.8

### ✅模型加载步骤

- 获取用户需要的文件，文件类型是以下类型：

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808094650.png)

- 文件夹的处理

    - ifc 不需处理
    
    - OBJ，iModel，FBX 需要转化为 zip 包（直接通过压缩软件即可，不需要其他软件）
    
    - Rvt 需要在 window 下的 revit 软件进行「导出模型」操作，导出的结果是一个 zip 包

- [链接](http://bos.bimwinner.com)，选择某一个应用，选择「应用预览」

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808094824.png)

- 将 zip 或者 IFC 文件进行上传

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/E34872AF-9B15-400B-8654-789CB7F1CAF9.png)

- 点击红框，弹出模型加载页面

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190808103939.png)

- 替换 url

http://demo.bimwinner.com:7787/showAllComponentsInfo?host=🚧host🚧&3dAppKey=🚧appKey🚧&modelKeys=["🚧modelKey🚧"]

http://bos3d.bimwinner.com

ed87a9bedb9443f4a20b02d5affa1706

M1565231850397

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

### ✅如何定义 react state 为 number 的初始值？

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



