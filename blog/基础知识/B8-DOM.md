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

```javascript
funtion clickHandler(){
	console.log(1)
}

btn.addEventListener("click", clickHandler)
```

- 事件(event) === 用户的动作 ===在上面的代码就是 "click"

- 事件监听 === 上面的整个代码 === 事件 + 事件处理函数

- 事件处理函数(eventHandler) === clickHandler 函数

- 事件流 === 事件在 DOM 节点树传播的顺序,可以是冒泡或者捕获

  

## 冒泡阶段和捕获阶段执行函数顺序

- [demo](https://jsbin.com/wilowiciru/1/edit?html,css,js,console,output)

  点击 3 ，说明为什么会这样打印

  重点：

  - `冒泡3`为什么在`捕获3`的前面
  - `冒泡3`为什么在`冒泡33333`的前面

  总结：

  - **DOM 是终点，谁先监听，先执行谁**：如果这个 DOM 节点是事件传播的终点（如上述的 div3 就是事件传播的终点），并且该 DOM 挂载了捕获和冒泡回调函数，那么谁先监听，谁先执行
  - **DOM 不是终点，先执行捕获，再执行冒泡**：如果这个 DOM 节点**不**是事件传播的终点（如上述的 div2 就不是事件传播的终点），并且该 DOM 挂载了捕获和冒泡回调函数，那么一定**先执行捕获回调，再执行冒泡回调**
  - DOM 同一个挂载两个回调，谁先监听，先执行谁


## 事件处理函数套事件监听

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