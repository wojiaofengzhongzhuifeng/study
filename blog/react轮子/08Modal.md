# React Dialog

### 如何搭建 example 架子

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/1745406e438eb34579a51891e40b170ebeedbbd5

### 这个报错如何解决？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190824110148.png)

你输入的是一个函数，而 React 想要的是的组件

### 经验：遮罩层与组件不是父子组件关系

### 构建高阶函数 scopeClass

输入 prefix，输出一个函数。用于封装 prefix。注意与函数 classes 的区别

### props 添加 buttons

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/0179cf59c018aca841028711e680e979dc5e84cd

### props 添加 onClose 函数

当点击右上角和 mask（可以配置 props：closeOnClickMask） 时生效会触发该函数（注意，这个函数不能控制组件的「显示隐藏」,只能触发用户在这个函数编写的代码）

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/733d8ff75545622a56a960e847280d3b03714efd

### 为什么要使用传送门？如何使用？

因为 modal-div 不能出现在任何元素的内部(层叠上下文)，也就是说，modal-div 必须出现在 document.body

### 如何动态创建一个组件

### 动态创建的组件，一旦点击了button, 组件帮你关闭。

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/75ca1e2d36e2fc2743c726cd419e4b6dba4b5c19

### 我封装了一个组件，如何把组件内部的函数给外部使用

闭包的应用

https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/23d31b7005e4638bb4bf836eef7decc9c0690815







