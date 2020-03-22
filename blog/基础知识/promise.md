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

