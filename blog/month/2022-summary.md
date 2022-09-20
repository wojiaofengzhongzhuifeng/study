记录真正有价值的点

请全局搜索「」的内容，即可找到原需求

### 8 月

- [git 使用](./2022-08.md#git)

- [完成 Andy 数据看板需求](./2022-08.md#完成 Andy 数据看板需求)

- [自己给自己加的需求，后台管理系统常用需求](./2022-08.md#自己给自己加的需求，后台管理系统常用需求)

- 按照什么模板接手新项目
    - 项目背景
    - 项目解决什么问题 or 项目承担什么功能
    - 项目是什么类型？
        - 后台管理
    - 本地如何开发
    - 本地如何保证开发体验舒适
    - 有几个环境，访问路径分别是什么
    - 如何触发 cicd

- 日志类型区分

    - 修复 bug
    - 功能
    - 新知识
    - 经验
    - 疑问
    - 英语
    - 工具优化

- 当window挂载了 x 变量，才执行回调函数

    https://codesandbox.io/s/charming-chatelet-j9uihs?file=/index.html



##  9 月

### 编写健壮性代码 - 读取数组 / 点操作

凡是遇到点操作，都需要添加 ? 符号，如下面两个demo

```javascript
const list = [{a: 1}, {a: 2}]
// 需求是读取 list item 的 a ，正常肯定这样读取
// let firstItem = list[0].a
// let secondItem = list[1].a

// 但是考虑到 list 可能是这样的const list = [{a: 1}] or null ，使用上面的代码读取，会抛出错误，因此应该使用如下的代码进行读取变量
let firstItem = list?.[0]?.a || 0
let secondItem = list?.[1]?.a || 0


// demo2
const response = {
	message: 'success',
	data: {
		data: {
			spotifySong: " All Too Well"
		}
	}
}
// 需求是读取 spotifySong 的数据，可能这样写
const spotifySong1 = response.data.data.spotifySong || ''
// 这样写才是对的
const spotifySong2 = response?.data?.data?.spotifySong || ''
```

---

### 【持续更新】后端分层

- controller
- service
- module

---

### 【持续跟新】后端的各种对象及其含义

- DTO 
- entity

---

### 新知识：使用 nest 操作数据库

全局搜索

---

### 【todo 】nest 的模块

---

### 新知识： 多个 promise ，如何按照单个顺序执行？

---

### 经验：添加新包的时候，切记安装固定版本的包

---

### 

