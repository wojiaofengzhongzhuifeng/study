# Input

### React.ReactNode 与 React.ReactElement 区别

<details>
<summary>答案</summary>

Node 范围大于 Element

node 是节点，他甚至可以是 undefined

element 是元素，他只能是 button 或者 Button

</details>

### input 的 onChange 是 e 是什么？

<details>
<summary>答案</summary>

e 是 event（事件）

`e: React.ChangeEvent<HTMLInputElement>` 翻译：e 是 React 封装的「改变事件」，是由「input 元素触发的」

</details> 

### input 监听 onPressDown 函数，打印 event，有问题

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190918090530.png)

**chartCode 是一个属性，不是函数，函数前面都有 set 或者 get** 

### ts 报错如何处理

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190918092458.png)
 
