# Form

###异步验证的踩坑过程

1. 同步验证中， errors的数据结构是

```javascript
const errors = {
	password: ["太短"],
	username: ["太短"]
}
```

2. 那么异步验证过程中，errors 的数据结构是

```javascript
const errors = {
	password: ["太短"],
	username: ["太短", Promise]
}
```

3. 异步校验完成，期待的 errors 的数据结构是

```javascript
const errors = {
	password: ["太短"],
	username: ["太短", "名字已经被占用"]
}
```

4. 从 2 到 3 步，在 React 是无法实现的。

   第二步，将 errors 对象传入 Form 组件

   第三步，只是修改了**array 的其中一个 item**，因此 react 认为 Form 组件的 props 没有变化（地址没有发送变化）。这时候，只能修改数据结构实现需求。

5. 改成这样的数据结构

```javascript
const errors = [["password", "太短"], ["username", "太短"], ["username", Promise]]
```



