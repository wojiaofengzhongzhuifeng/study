# 知识点

- Event Loop：是一种运行机制，用于控制同步与异步运行顺序。
- **宏任务（Macrotask）**：`script`（整体代码）、`setTimeout`、`setInterval`、`XMLHttpRequest.prototype.onload`、`I/O`、UI 渲染
- **微任务（Microtask）**：`Promise`、`MutationObserver`

- Event Loop 核心流程
  1. 主线程(调用栈)之外，存在一个 **任务队列**(先放的函数，先执行)
  2. 走主线程的时候，如果碰到异步任务，那么就在 任务队列 中放置这个异步任务。注意区分宏微任务。
  3. 等待主线程运行完毕后，查看宏微任务队列是否存在任务，先运行完所有微任务，**才(核心！！！)**运行宏任务。

- 栈（堆栈）：先进后出
  
- 队列：先进先出
  
- 题目 1

  ```
  setTimeout(function callback5() {
    console.log('timeout1');
    Promise.resolve().then(function callback6(){
     console.log('tttttt')
    })
  }, 0);
  
  console.log('start');
  
  Promise.resolve().then(function callback1() {
    console.log('promise1');
    
    Promise.resolve().then(function callback2() {
      console.log('promise2');
      setTimeout(function callback8(){
       console.log('ppppp')
       Promise.resolve().then(function callback7(){
        console.log('aaaa')
       })
      });
    });
    
    setTimeout(function callback3() {
     console.log('fffff')
      Promise.resolve().then(function callback4() {
        console.log('promise3');
      });
      
      console.log('timeout2')
    }, 0);
    
  });
  
  console.log('done');
  ```

- 题目 2

  ```
  console.log("script start");
  
  setTimeout(function() {
    console.log("setTimeout---0");
  }, 0);
  
  setTimeout(function() {
    console.log("setTimeout---200");
    setTimeout(function() {
      console.log("inner-setTimeout---0");
    });
    Promise.resolve().then(function() {
      console.log("promise5");
    });
  }, 200);
  
  Promise.resolve()
    .then(function() {
      console.log("promise1");
    })
    .then(function() {
      console.log("promise2");
    });
  Promise.resolve().then(function() {
    console.log("promise3");
  });
  console.log("script end");
  ```

- 题目 3

  ```
  setTimeout(()=>{console.log(1)}, 0)
  console.log(2)
  const promise2 = new Promise((resolve)=>{
   console.log(3)
   resolve(4)
  })
  console.log(6)
  promise2.then((res)=>{console.log(5)})
  ```
  
- 题目 4
  
  ```
  const p1 = function(){
  return new Promise((resolve)=>{
  // 这里正常执行，执行 2️⃣ 代码
  // 如果这里抛出错误，执行 3️⃣ 代码
  resolve(100)
  })
  }
  p1().then(()=>{
  // 2️⃣
  console.log(111)
  })

  const p2 = function(){
  return new Promise((resolve)=>{
  throw new Error('error')
  resolve(100)
  })
  }
  p2().then(()=>{
  console.log('4343')
  }).catch(()=>{
  // 3️⃣
  console.log('33')
  })
  ```
  
- 题目 5

  ```
  Promise.resolve().then(()=>{
  	console.log(1)
  }).catch(()=>{
  	console.log(2)
  }).then(()=>{
  	console.log(3)
  })
  ```

