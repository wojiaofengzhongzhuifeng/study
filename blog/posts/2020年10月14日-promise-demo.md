## 解决复杂 Promise 需求

### 需求

 将 转化为 

```
现有数据（该数据是异步获取）[1,2,3,'a', 'b', 'ss']，将其转化为以下数据，转化过程是异步：
{
	number: [1.232345, 102.323, 3.1235465],
	string: ['a+string','b+string', 'ss+string+double']
}
```





转化逻辑如下：

1. 如果是数字 + 奇数 => ①添加随机数
2. 如果是数字 + 偶数 => ①添加随机数 + ② + 100
3. 如果是字符 + 单个字符 => ①添加字符串 `+string`
4. 如果是字符 + 两个字符 => ①添加字符串 `+string` ②添加字符串 `+double`

并且限定，所有添加行为都是异步

### 实现思路（从数据结构角度出发）

- 数据转化过程

  ```
  [1,2,3,'a', 'b', 'ss'] =>
  
  // Promise1()指的是 asyncAddRanDomNumber 返回的 promise 对象，
  // Promise4()指的是 asyncAddString 返回的 promise 对象，其他 promise 对象以此类推
  let result = {
  	number: [Promise1(), Promise2(), Promise3()],
  	string: [Promise4(), Promise5(), Promise6()],
  } =>
  
  [1.2671584084864802, 102.01443069799504, 3.1154056016218865, "*****", "a+string", "b+string", "ss+string+double"]
  ```

  

![image-20201014162247607](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201014162247607.png)

### demo 代码

https://codesandbox.io/s/new-resonance-5jvre



## Promise.all 存在的问题及解决方法

### 问题

只要有一个promise 失败，那么后面的promise不会再执行

### 解决方法

```javascript
let errorPromise1 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('第一个接口错了')
    }, 3000)
  })
}

let errorPromise2 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('第二个接口错了')
    }, 4000)
  })
}

let successPromise3 = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({name: 12321})
    }, 5000)
  })
}
let tastList = Promise.all(
  [
    // 1️⃣ errorPromise1 是原本的 promise，现在为 errorPromise1 处理 reject，返回一个必 resolve 的 promise
    errorPromise1().then((result)=>({message: '获取数据正常', data: result}), (result)=>({message: result, data: null})),
    errorPromise2().then((result)=>({message: '获取数据正常', data: result}), (result)=>({message: result, data: null})),
    successPromise3().then((result)=>({message: '获取数据正常', data: result}), (result)=>({message: result, data: null}))
  ]
).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
})
```





## Promise.catch 是语法糖

https://codesandbox.io/s/awesome-https-nx8fp

## Promise 手写

### 使用场景

```javascript
let fn1 = (resolve,reject)=>{
	resolve(111)
}
let p1 = new Promise(fn1)
p1.then(fn2, fn3)
```

### promise 对象含有的属性和方法

- 属性

  - status
  - callbacks

- 方法

  - constructor

    同步执行fn1代码，并且将 resolve, reject 与fn2, fn3 绑定，当运行 resolve(), reject()时，就会执行 fn2, fn3

  - then

    将fn2, fn3 收集到 callbacks中

  - reject

    修改 status

    执行 callbacks的 fn3 函数

  - resolve

    修改 status

    执行 callbacks的 fn2 函数



### 代码

```javascript
class Promise2 {
  state = "pending";
  callbacks = [];

  resolve(result) {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    // 2️⃣ 为什么要 setTimeout ？
    // 因为需要先为 callback 推入函数，经过 setTimeout 后，确保推入完毕，才会执行 resolve
    setTimeout(() => {
      // 遍历 callbacks，调用所有的 handle[0]
      this.callbacks.forEach(handle => {
        if (typeof handle[0] === "function") {
          handle[0].call(undefined, result);
        }
      });
    }, 0);
  }

  reject(reason) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    setTimeout(() => {
      // 遍历 callbacks，调用所有的 handle[0]
      this.callbacks.forEach(handle => {
        if (typeof handle[1] === "function") {
          handle[1].call(undefined, reason);
        }
      });
    }, 0);
  }

  constructor(fn) {
    if (typeof fn !== "function") {
      throw new Error("我只接受函数");
    }
    // 1️⃣ 这句话什么意思？把 this.resolve 内存地址给 fn 函数的第一个参数
    // 「fn」 就是 new Promise1 时传入的函数（也就是 fn1）
    // 「fn 函数的第一个参数」就是 new Promise1 时传入的函数的第一个参数(也就是 fn2)，
    fn(this.resolve.bind(this), this.reject.bind(this)); 
  }

  then(succeed, fail) {
    const handle = [];
    if (typeof succeed === "function") {
      handle[0] = succeed;
    }
    if (typeof fail === "function") {
      handle[1] = fail;
    }
    this.callbacks.push(handle);
    return undefined;
  }
}

let p2 = new Promise2((resolve, reject) => {
  resolve(1)
});
p2.then((number) => {
  console.log(number)
})
```



