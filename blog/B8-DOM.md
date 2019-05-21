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

```
btn.addEventListener("click", function(){
  //这个函数就是事件处理函数
  console.log(1)
})
```

- 事件 === 用户的动作 ===在上面的代码就是 "click"

- 事件监听 === 上面的整个代码 === 事件 + 事件处理函数

- 事件处理函数 === 在上面的代码就是`console.log(1)`

- 事件流 === 事件在 DOM 节点树传播的顺序,可以是冒泡或者捕获

  

## 冒泡阶段和捕获阶段

1. 冒泡和捕获阶段测试 demo : http://js.jirengu.com/tofisalewa/1/edit?

2. DOM 

   ![未命名文件 (9).png](http://upload-images.jianshu.io/upload_images/5529438-3ca1cd80186bc2c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 问题: 点击4区域,解释打印结果

   注意点: 

   1. div3 有两个函数,注意执行顺序
   2. div3 之后有个×, 他的实现的代码是什么?

4. 问题: 如果我点击3区域,打印什么?

   打印`冒泡2222, 3 ,33333`

5. 事件处理程序顺序测试demo: http://js.jirengu.com/qoyobenoxu/1/edit?

   点击 3 区域,解释打印内容

6. 总结: 一个 DOM 结点事件处理程序的顺序: 

   1. 先捕获后冒泡
   2. 哪个代码在前面, 哪个代码就先执行
   3. 一般情况下, 是先看1,如果1相同,再看2
   4. 但是当 DOM 结点(如 demo 的 div4 )之后没有 DOM 结点, 那个按照第2条规则处理




## 事件处理函数内添加事件监听  

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