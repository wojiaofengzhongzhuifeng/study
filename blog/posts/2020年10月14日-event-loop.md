# 知识点

- Event Loop：是一种运行机制，用于控制同步与异步运行顺序。
- **宏任务（Macrotask）**：`script`（整体代码）、`setTimeout`、`setInterval`、`XMLHttpRequest.prototype.onload`、`I/O`、UI 渲染
- **微任务（Microtask）**：`Promise`、`MutationObserver`

- Event Loop 核心流程
  1. 主线程(调用栈)之外，存在一个 任务队列（task queue）
  2. 走主线程的时候，如果碰到异步任务，那么就在 任务队列 中放置这个异步任务。注意区分宏微任务。
  3. 等待主线程运行完毕后，查看宏微任务队列是否存在任务，先运行完所有微任务，**才(核心！！！)**运行宏任务。先放进去的任务先执行。

- 栈（堆栈）：先进后出
  ![image-20201016161549942](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201016161549942.png)

- 队列：先进先出
  ![image-20201016161620564](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201016161620564.png)

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

