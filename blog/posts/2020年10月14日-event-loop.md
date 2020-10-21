# 知识点

- **宏任务（Macrotask）**：`script`（整体代码）、`setTimeout`、`setInterval`、`XMLHttpRequest.prototype.onload`、`I/O`、UI 渲染
- **微任务（Microtask）**：`Promise`、`MutationObserver`

- 先执行完微任务，再执行宏任务

- 栈（堆栈）：先进后出
  ![image-20201016161549942](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201016161549942.png)

- 队列：先进先出
  ![image-20201016161620564](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201016161620564.png)

- 主线程之外，存在一个 **“任务队列”**（task queue），在走主流程的时候，如果碰到异步任务，那么就在 **“任务队列”** 中放置这个异步任务。**先放进去的异步任务先执行**

- 异步任务分为宏任务、微任务

- 优先执行微任务，再执行宏任务。

- 题目 1

  ```
  // 位置 1
  setTimeout(function () {
    console.log('timeout1');
  }, 0);
  
  // 位置 2
  console.log('start');
  
  // 位置 3
  Promise.resolve().then(function () {
    // 位置 5
    console.log('promise1');
    // 位置 6
    Promise.resolve().then(function () {
      console.log('promise2');
    });
    // 位置 7
    setTimeout(function () {
      // 位置 8
      Promise.resolve().then(function () {
        console.log('promise3');
      });
      // 位置 9
      console.log('timeout2')
    }, 0);
  });
  
  // 位置 4
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

  







