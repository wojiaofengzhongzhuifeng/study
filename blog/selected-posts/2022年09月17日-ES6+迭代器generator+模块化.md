##  预习笔记

### 【疑问】：proxy 的使用场景 这俩个没有接触过

- - 控制变量访问权限，实现变量私有化

- - 防止污染外部变量（如 js 沙盒执行环境）

### Set 对象的作用：存储任何类型的唯一值，可以使用 set 实现数组去重

### weakSet 与 set 的区别是啥？

### 这句话是什么意思？

![image-20220917085121612](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220917085121612.png)

### Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

### weak 的意思：如果使用 weakmap 或者 weakset 保存对象时，如果对象被垃圾回收了，那么保存在 weak 的数据就会消失

### for of  vs for in 

- for of 用于遍历具有迭代器属性的对象，但是不能遍历普通 obj
- for in 用于遍历普通对象的 key

### 模块化目前有三类

- es6 import export
- commonjs require module.exports
- AMD/CMD defined 

### 模块与静态分析关系

### es6 打包后的产物

### 浏览器如何处理 script

- **遇到 script 需要下载 + 执行，这两个步骤都会阻碍 html 解析**
- script async 属性含义
- script defer 属性含义
- 如果新增了 async ，那么下载不会阻碍 html 解析，但是一旦下载完毕后，执行 script 依然会阻碍解析
- 如果新增 defer ，那么下载不会阻碍 html 解析，并且等待 html 解析完毕后，才会执行 script 
- 两者的下载过程都不会阻塞 html 解析
- `defer`是“**渲染完再执行**”，`async`是“**下载完就执行**”。

- 为什么这里会报错？

  为什么控制台没有 export 关键字？

  ![image-20220917162424317](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220917162424317.png)

  ![image-20220917162433437](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220917162433437.png)

---

### 模块标识符是所有模块系统通用的概念。模块系统本质上是键/值实体

---



## 直播笔记

### weakmap 

- key 如果没有，那么 key和 value 都会被删除
- 使用场景：如果 key 是 obj，当 obj 被删除，那么这个 key 和 value 都需要被删除，这样能节省内存

- 课前思考题，使用 weakmap 实现，涉及缓存

  ```javascript
    var $ = {
      domMap: new Map(),
      // 可以给 $ 增加其他变量
      getById: function(id) {
        return document.querySelector(id)
      },
      setData: function(dom, key, value) {
  
        if(!this.domMap.has(dom)){
          this.domMap.set(dom, new Map())
        }
  
        if(!this.domMap.get(dom).has(key)){
          this.domMap.get(dom).set(key, new Map())
        }
  
        this.domMap.get(dom).set(key, value)
      },
      getData: function(dom, key) {
        return this.domMap.get(dom).get(key)
      },
    }
    // 使用
    // 给dom设置clickCount=10，记录此dom被点击的次数
    $.setData($.getById('myId'), 'clickCount', 10);
    // 给dom设置其关联的用户数据
    $.setData($.getById('myId'), 'userInfo', {name: '张三', age: 18});
  
    // 获取dom的被点击次数
    console.log($.getData($.getById('myId'), 'clickCount'));
    // 获取dom关联的用户数据
    console.log($.getData($.getById('myId'), 'userInfo'));
  ```

  

---

### 缓存的基本思路

- get 
- set
  - 确定是几层缓存，确定缓存的 key 和 value
  - 判断 key 是否在缓存中，如果不在，设置初始值；
  - 全部缓存都初始化完成后，执行 set 操作

---

### WeakMap 键是弱引用的。其键必须是对象，而值可以是任意的。

---

###如何让普通对象支持 for of 遍历

---

### 为什么 commandjs 不适合浏览器

- commandjs 是同步加载

---

### commanjs 导出方式

```
// 方式 1 可以
module.exports = {
	a: 1
}

// 方式 2 可以
exports.a = 2

//方式 3 不行
exports = {
	a:3
}
```

---

### 为什么 es6 的 esmodule 可以 tree shaking；command.js 不可以？

es module 是编译阶段加载，因此能分析出哪些变量未被使用，也就是说，ES6 Module不是对象，import命令被JavaScript引擎静态分析，在编译的时候就引入模块代码。而不是在代码运行时加载，所以无法实现条件加载。也就使得静态分析成为可能。

command 在运行阶段才加载，不能分析哪些变量未被使用

---





## 作业 - 自己做的

### 简单描述下commonJS 和 es6 的模块区别

- 语法区别
  - command.js 通过 require + module.exports 语法
  - es6 通过 import + export 语法
- 运行时机
  - command.js 是运行时代码
  - es6 是编译时代码，可以进行静态分析
- 运行环境不同
  - command.js 主要运行在node 环境
  - es6 主要运行在浏览器环境

---

### 说一下 for of 的作用，它能遍历哪些对象，为什么。如何能让普通对象也能通过for of遍历

- 作用

  用于遍历具有迭代器接口的对象

- 他能遍历普通数组、类数组，因为这些对象具有迭代器属性

- 为普通对象新增迭代器属性

  ???

---

### 描述一下 map 和 weakmap 的作用和区别

- 作用

  构建一个特殊的对象，对象的 key 可以是任何数据类型，常用于缓存

- 区别

  对于 weakMap，如果 key 是一个引用类型，当这个引用类型被垃圾回收（即设置为 null），那么这个 key 和 value 会从 weakMap 删除

  ```javascript
  let m1 = new Map()
  let w1 = new WeakMap()
  let obj1 = {a: 1}
  m1.set(obj1, "111")
  w1.set(obj1, "111")
  obj1 = null
  m1.has(obj1)
  w1.has(obj1)
  ```

---

### 举一个实际使用proxy的场景，并针对此场景写一个proxy的简单demo（默写，不能和课中的一样）

```javascript
let obj = {
  name: "xiaoming",
  age: 18,
}

let proxyHandler = {
  set: function(obj, key, value){
    // 对 set 操作做拦截
    if(key  === 'name'){
      console.error("无法修改 name")
      return 
    }
    obj[key] = value
  },
  get: function(obj, key){
    return obj[key]
  },
}

let objProxy = new Proxy(obj, proxyHandler)

console.log(objProxy.age);

```

---

### 补充代码，让下面的代码按预期输出结果（添加迭代器）

```javascript
// todo
Object.prototype[Symbol.iterator] = function* (){
  let objKeyList = Object.keys(this)
  for (let i = 0; i < objKeyList.length; i++) {
    let key = objKeyList[i];
    let value = this[key]
    if(value % 2 === 0){
      yield value
    }
  }
}

const obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6
}
// 预期是输出2，4，6，即输出值为偶数的value，输出顺序可以不一样
for (let item of obj) {
  console.log(item)
}
```

---

### 使用 proxy 实现，a === 1 & a=== 2 

---



## 笔记

### map 与 weakMap 的区别？weak 如何理解？

---

###for of 遍历哪些对象？如何让普通对象支持 for of 遍历？

---

### 各种模块化的比较

|            | AMD 和 CMD                                                | CommonJS                                                     | ES Module       |
| ---------- | --------------------------------------------------------- | ------------------------------------------------------------ | --------------- |
| 语法       | defined                                                   | module.exports / require                                     | export / import |
| 加载方式   | 异步                                                      | 同步                                                         | 异步            |
| 环境       | 浏览器                                                    | node                                                         | node +浏览器    |
| 加载时机   | 运行时加载                                                | 运行时加载                                                   | 编译时加载      |
| 引入值特点 |                                                           | 基本数据类型：复制，可以重新赋值<br />复杂数据类型：浅拷贝，模块之间修改值会影响其他模块 | 动态只读引用    |
| 备注       | AMD 推崇依赖前置、提前执行<br />CMD推崇依赖就近、延迟执行 |                                                              |                 |

备注：

- 【？？】`exports` 是模块文件内的私有局部变量

- 动态只读属性的理解

  - 对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

  - 对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型

- command.js 的缓存机制

  ```javascript
  // script3.js
  module.exports = {
    name: "script3"
  }
  
  // script4.js
  var a = require("./script3")
  console.log(a.name) // script3
  a.name="script4"
  console.log(a.name) // script4
  // delete require.cache[require.resolve("./script3")]
  var a2 = require("./script3")
  console.log(a2.name) // script4
  console.log(a2 === a);
  ```

- command.js 的导出语法

  ```javascript
  const number = 1
  const obj = {name: 2}
  module.exports = {
    number,
    obj
  }
  module.exports.test = 123
  
  // 这种是错误的
  exports.test1 = 3333
  
  ```


---

### 如何在现代浏览器直接使用 export import 语法？

