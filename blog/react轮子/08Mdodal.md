# React Dialog

## 视频要点

### dialog 分类

dialog 分为 modal，confirm，alert

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

### 如何设置组件props 的默认值






