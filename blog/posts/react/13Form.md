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



## 数据结构变更

```javascript
{
	username: ['太短', promise1], // 太短是同步校验的结果、promise1 是用户自己的校验方法，可能是 resolve、也可能是 reject
}

=>

[['username', '太短'], ['username', promise1]]

=> 转化过程： https://codesandbox.io/s/dazzling-snow-7ym9b?file=/src/index.js

// promise11 是 promise1 生成的，promise11 必返回 resolve 状态
// ['username', promise1] => promise11 这个转化过程，后面的人再看可能会觉得是错误的，但就是这样，没有错，有两个原因
// 1. promise.all(array) array 中必须是 promise
// 2. promise1 的关联关系保存到 promise11 的返回值，所以
[['username', '太短'], promise11 ] 

=> 使用 Promise.all 的方式实现

[['username', '太短'], ['username', '用户名称已经存在']]

```



