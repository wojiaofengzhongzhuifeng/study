# 第一个 Nodejs 应用

## 需求

1. 提供前后端
2. 当用户请求*http://domain/start*时，可以看到一个欢迎页面，页面上有一个文件上传的表单。
3. 用户可以选择一个图片并提交表单，随后文件将被上传到*http://domain/upload*，该页面完成上传后会把图片显示在页面上。



## 笔记

- nodejs 同时有server.js 与 index.js？
- nodejs 的模块使用
- 创建 index 模块
- 创建server模块
- 创建router模块
- 将 router 与 server 组合
- 创建 requestHandlers，根据请求 path 不同，执行不同的函数
  1. index 定义事件
  2. route判断是否注册事件

- 不仅仅返回 hello world

- 完成第一个阶段：根据路由展示不同的 string，此时项目结构

  ```shell
  .
  ├── index.js
  ├── requestHandlers.js
  ├── router.js
  └── server.js
  ```

- 阻塞与非阻塞

  先打开 `/start`，再打开`/upload`

  发现`/upload`居然要 10s 才能获得响应

  这就是阻塞

- 如何处理阻塞情况？：发送响应代码由 requestHandlers 文件相应函数完成

- 一定先生成代码，再写自己的代码

  