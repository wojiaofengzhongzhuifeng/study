# 异步编程



## 异步编程重点

使用 promise 与 async/await  进行比较

1. 不使用 promise：https://jsbin.com/vakomiyuto/1/edit?js,console,output
2. 最简单的  promise 与 async/await  使用：https://jsbin.com/luwuyicodu/1/edit?js,console,output

3. 处理reject：https://jsbin.com/cerapolutu/edit?js,console,output

4. 连续 then：https://jsbin.com/qifiwokaga/1/edit?js,console,output

5. promise.all([promise1, promise2, promise3]).then(f1, f2)执行规律是什么？

   Promise1, 2, 3 **全部**执行 resolve，才执行 f1

   Promise1, 2, 3只要有一个执行 reject，就执行 f2

   https://jsbin.com/tudocabego/edit?js,console,output

6. promise.race([promise1, promise2, promise3]).then(f1, f2)执行规律是什么？

   看哪个 promise 执行最快，根据那个 promise 的状态执行 f1 或者 f2

   https://jsbin.com/fuqaporira/1/edit?js,console,output

