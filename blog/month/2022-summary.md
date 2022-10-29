记录真正有价值的点

请全局搜索「」的内容，即可找到原需求



## 通过环境变量区分不同环境（staging，production）

- 最简单的 get / set environment variable （后面省略为 env ） 情况

  - 核心流程

    使用 node 构建的前端应用，可以理解为一个容器，在运行这个容器时，可以设置环境变量，通过环境变量 + dotenv 为 process.env 注入变量

  - set：在运行 node 程序之前，设置 env 

  - get：直接通过 `process.env.TEST_1` 

  - 例子

    ![image-20220625100649318](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220625100649318.png)

- 工程如何处理环境切换问题

  - 安装 dotenv 包

  - 创建 .env.dev / .env.staging / ..env.production 文件，定义环境变量

  - 在 node 执行的文件，初始化 dotenv 包引入，注意设置配置为

    ![image-20220626114442357](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220626114442357.png)

    

  - 在 script 设置 NODE_ENV= development  / staging / production

- 如何借助 dockerfile 打镜像？

  - 预期

    在 dockerfile 指定 NODE_ENV，然后在 package.json 读取 NODE_ENV

  - 【猜测】正确

    如果在打镜像的时候，设置了 NODE_ENV，那么在运行的时候，是否也设置了同样的 NODE_ENV ?

    ![image-20220626124159941](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220626124159941.png)

    ![image-20220626124225638](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220626124225638.png)

- 目标





## mobx 固定业务思考流程

- mobx 命名需要固化下来
  - 请求函数 requestxxxx
    - 想在 view 层得到 state 层的结果，通过 return new promise 的方式解决
  - 请求参数 xxxRequest
  - 响应数据 xxxResponse 





## 后台管理固定需求

- 如何做接口转发
- 如何做多环境切换
- 数据如何管理
- 如何使用数据 mock
- 如何封装请求与响应
- 如何做权限





## 加快开发速度

- 引入本目录下的包，使用相对路径；引入非本目录下的包，使用 alias 路径

  这样操作，可以在复制 page 的时候，不需要修改 page 内的引入路径





## 处理所有响应

- 有三种响应数据结构

  需要做到：在第一种错误和第二种错误，能提示用户错误结果。

  ![image-20220621212904310](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220621212904310.png)

  ![image-20220621212928303](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220621212928303.png)

  ![image-20220621213012675](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20220621213012675.png)







## 处理数字选择器的固定思路

如何处理查询条件为 packId = number 的 input ？

- 后端 searchForm.packId number
- 前端 searchForm.packId string
- 前端 antd  form 组件输入时，拦截 input动作，将 input 输入的内容先转为纯 number
- 前端实际保存的是字符串，可能是空字符串 or 字符串数字

###  docker ENV ,npm install 不同点

docker ENV=PRODUCTION ，那么 npm install 的时候不会安装**开发依赖**( package.json devDependencies)

```
FROM 130132914922.dkr.ecr.us-east-1.amazonaws.com/ci-base/node14/v1:14.15.4-alpine3.10 AS builder
WORKDIR /app
COPY . .


ENV NODE_ENV=production
RUN npm cache clean --force
RUN rm -rf node_modules
RUN rm -f package-lock.json
RUN npm install
RUN npm run build
RUN npx next telemetry disable

CMD ["node_modules/.bin/next", "start", "-p", "8080"]

EXPOSE 8080

```

---

### 逻辑判断

如果 inputValue 为 y or Y => if(inputValue === 'y' || inputValue === 'Y''){}

取反的话

是

如果 inputValue 不为 y and Y => if(inputValue !== 'y' && inputValue !== 'Y'){}

不是 

如果 inputValue 不为 y or Y => if(inputValue !== 'y' || inputValue !== 'Y'){}

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

### git 使用

如果正在开发 feature ，突然有线上 bug，那么应该

- git stash save feature 此时代码回退到没有 feature 的代码
- 正常切分支，然后提交
- 切到 feature 分支，执行 git stash apply 0



git stash 的使用

- git stash save commit1
- git stash list
- git stash apply ${id}
