# 知识点

- **宏任务（Macrotask）**：`script`（整体代码）、`setTimeout`、`setInterval`、`XMLHttpRequest.prototype.onload`、`I/O`、UI 渲染

- **微任务（Microtask）**：`Promise`、`MutationObserver`

- Event Loop 核心流程
  1. 主线程(调用栈)之外，存在一个 **任务队列**(先放的函数，先执行)
  2. 走主线程的时候，如果碰到异步任务，那么就在 「任务队列」 中放置这个异步任务。注意区分宏微任务。
  3. 等待主线程运行完毕后，查看宏微任务队列是否存在任务，先运行完所有微任务，**才(核心！！！)**运行宏任务。

- 队列：先进先出

- 看到 a().then(fn1) ，同步执行 a 函数，并且将 fn1 放入到微任务队列，先不执行 fn1

- 遇到**执行 async 函数**转化为 promis

  ```javascript
  async function async1(){
  	console.log(1)
  	await async2()
  	console.log(2)
  }
  async function async2(){
  	console.log(3)
  }
  async1()
  console.log(4)
  	
  ```

  ```diff
  
  async function async1(){
  	console.log(1)
  +	async2().then(()=>{
  +		console.log(2)
  +	})
  }
  async function async2(){
  	console.log(3)
  }
  + async1().then(()=>{
  +	 console.log(4)
  + })
  ```

  

## 题目

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
  
  setTimeout(function callback1() {
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

- 题目 6

  ```
  for(var i=0;i<5;i++){
  	setTimeout(function(){
  		console.log(new Date(), i)
  	}, 1000)
  }
  console.log(new Date(), i)
  ```

- 题目 7

  ```
  async function async1(){
  	console.log(1);
  	await async2();
  	console.log(2);
  }
  async function async2(){
  	console.log(3)
  }
  async1();
  new Promise((resolve)=>{
  	console.log(4)
  	resolve()
  }).then(()=>{
  	console.log(5 )
  })
  ```

- 题目 8 （题目 7 变种）

  ```
  async function async1(){
  	console.log('start')
  	await async2()
  	console.log('end')
  }
  async function async2(){
  	console.log('async2')
  }
  console.log('script start ')
  setTimeout(()=>{
  	console.log('setTimeout')
  }, 0)
  async1()
  new Promise((resolve)=>{
  	console.log('promise1')
  	resolve()
  }).then(()=>{
  	console.log('promise2')
  })
  console.log('scrpit end')
  ```

  

## 注意点



### event loop nodejs 的阶段

1. timers
2. poll
3. check

setTimeout => timer 阶段

setImm => check 阶段

nextTick=> 当前阶段的下个阶段



### event loop 浏览器 阶段

1. 宏任务（一会）
2. 微任务（马上）

setTimeout => 宏任务

promise => 微任务

