- sh如何把数据从第二个中间件传递到第一个中间件?

![image-20200205205158132](/Users/raojj/Library/Application Support/typora-user-images/image-20200205205158132.png)

- 看视频学习流程

  - 需求
  - 实现思路(自己去想)
  - 新知识

- 写一个 demo 代码, 有如下功能(多路由拆分)

  - 区分 v1, v2, v3 版本
  - 接口路径是`/class/list`, v1 版本返回 list1, v2 版本返回 list2

- npm 包如果安装到全局与非全局的区别

- 如何自动加载路由?

  `require-directory`

- hash === object === config

- js Class 的静态方法是什么? 

  ```
  class Person {
  	// 静态方法
    static test(){
    	console.log(0)
    }
    static test1(){
  		// 通过这种方式调用静态方法
      Person.test()
      console.log(1)
    }
    // 实例方法
    test2(){
    	console.log(2)
    }
   	test3(){
   		this.test2()
  		console.log(3)
   	}
  }
  
  Person.test1()
  let p = new Person()
  p.test3()
  ```

- 为什么要创建一个 class, 而不是写一个函数

- 相对路径经常需要改, 如何解决?

  `process.cwd()`返回的是项目的绝对路径

- http params传入方式

  - Query parameter: 参数在query`/blog?id=1`
  - Params: 参数在path`/blog/1`
  - Header parameter:参数在 request.header
  - Body parameter: 需要中间件, 参数在ctx.request.body

- 异常处理代码 1

  ```
  function func1(){
    console.log(1)
    func2()
    console.log(2)
  }
  
  function func2(){
    try{
      func3()
      console.log(3)
    }catch(error){
      console.log("func2")
      throw error
    }
  }
  
  function func3(){
    try{
      console.log(a)
    }catch(error){
      throw error
    }
    return 's'
  }
  
  func1()
  ```

  

  ![image-20200207110745861](/Users/raojj/Library/Application Support/typora-user-images/image-20200207110745861.png)

- await 的意义

  - 对函数进行表达式求值: 如果这个函数是异步的, 也会等到异步任务完成后(拿到 promise 的结果)才执行 await 后面代码
  - 对 reject 函数进行错误抛出

- async 的意义: 标志这个函数返回的是一个 promise

- 全局异常处理的中间件

- 写 try catch 的意义

  现状:如果你执行 `console.log(a)`, 依然会抛出异常错误, 那么trycatch 语句的意义是什么呢?

  答案: 可以在 catch 中, 对错误结果进行**处理**

- 错误分为两类: 已知错误, 未知错误

  - 已知错误: 由用户主动抛出错误, 比如获取书名不存在, 就需要抛出一个错误
  - 未知错误: 

- 需求: 请求`/v1/:id/classic/latest` 时, id 必须为正整数

  写校验: `/app/validator/validator.js`

- 当使用 Student继承 Person 时, 不执行 super(), 发现不会报错, 解决这个问题

  区分开发环境与生产环境

- 创建 /model/user.js 用于操作数据

- 第四章

  - 4.1 

    - 请求参数有几种传输方法?koa 如何获取这些请求参数的?
      - query: query string
      - path: context.params
      - header: request.header
      - body: Request.body

    - 我的猜想
      - 如果是 get 请求, 使用第一种传输方式, 如 `/v1/book/list?id=1`;
      - 如果是 post 请求, 使用 context.params 指定某条数据, 使用 request.body 传输主要的数据
        ![image-20200217221802268](/Users/raojj/Library/Application Support/typora-user-images/image-20200217221802268.png)

  - 4.2

    - 如果代码出现异常, 会如何执行?

      - 如果在出现异常代码的外部没有 try catch, 导致两个结果①js 抛出错误②同时停止后续代码运行, 如

        ```javascript
        console.log(a)
        console.log('我不会被打印出来')
        ```

      - 在实际过程中, 我们需要①对错误进行处理, ②继续后续代码运行, 此时代码如下

        ```javascript
        try{
        	console.log(a)
        } catch(error){
            if(error instanceof ReferenceError){
                console.log('你出现了引用错误')
            }
        }
        console.log('我会被打印出来')
        ```

    - 15:55 全局异常处理

      对所有抛出的异常进行统一处理

    - 18:00 为什么要捕捉错误

      使用 try catch 捕捉错误, 将错误进行包装处理, 经过处理的包装信息会返还给前端, 利于前端检查错误.

  - 4.3 异步异常处理方案

    - 6:58 如何把 promise 与 async/await 结合

      - Asycn === 函数返回的是promise 对象

      - await === 对后续的函数进行求值

      - 例子, 不使用 await 

        ```javascript
        function f2(){
        	f3().then((message)=>{console.log(message)}, (error)=>{console.log(error)})
        }
        async function f3(){
        	return new Promise((resolve, reject)=>{
        		if(Math.random()<0.5){
        			reject('太小')
        		} else {
        			resolve('正常')
        		}
        	})
        }
        f2()
        ```

      - 例子, 使用 await

        ```javascript
        async function f2(){
          try{
           	const result = await f3();
            console.log('result', result)
          }catch(error){
            console.log('error', error)
          }
        }
        async function f3(){
        	return new Promise((resolve, reject)=>{
        		if(Math.random()<0.5){
        			reject('太小')
        		} else {
        			resolve('正常')
        		}
        	})
        }
        f2()
        ```

        

    - 9:40 resolve, reject 与错误的结合

      reject 相当于 抛出了错误

  - 4.4 全局异常中间件的编写

    - 1:20 使用 await + try 可以获取 reject 的数据

    - 4:56 结合一个接口, 使用全局异常中间件, 输出一段有意义的错误信息

    - 9:11 不使用全局异常中间件, 服务器返回的结果

      ![image-20200218094617804](/Users/raojj/Library/Application Support/typora-user-images/image-20200218094617804.png)

      虽然会报错, 但是错误信息不明确

  - 4.5 已知错误和未知错误

    - 0:43 对错误进行集中处理

    - 4:12 httpCode(400) 只能表示大概的响应结果, 详细的响应结果应该是前端与后端共同约定的状态码errorCode(10001)

    - 4:46 真实场景中, 后端应该给前端返回的数据结构(4 个)

      - requestUrl
      - httpCode
      - errorCode
      - message

    - 8:43 已知错误的流程, 以参数类型错误为例

      - 在某个接口中, 如果有异常, 主动抛出错误

      - 在异常处理中间件中, 管理错误

      - 接口的返回经过处理的错误信息

        ![image-20200218100131411](/Users/raojj/Library/Application Support/typora-user-images/image-20200218100131411.png)

        ![image-20200218100223768](/Users/raojj/Library/Application Support/typora-user-images/image-20200218100223768.png)
        ![image-20200218100314752](/Users/raojj/Library/Application Support/typora-user-images/image-20200218100314752.png)

    - httpCode 和 errorCode 应该如何传递?

      httpCode通过改变 ctx.response.status

      errorCode 和 error.message 一样处理

  - 4.6 定义异常返回格式

  - 4.7 定义 HttpException class

  - 4.8 特定异常类与 global 全局变量

    - 为什么异常类, 要有同时有 httpCode, errorCode?

      代码统一管理

- 第五章  LinValidator校验器与Sequelize Orm生成MySQL数据表

  - 5.1 lin-validator 使用指南

    - 最简单的参数校验流程

      - validator.js 定义

        ![image-20200225203953661](/Users/raojj/Library/Application Support/typora-user-images/image-20200225203953661.png)

      - 使用上一步定义好的 validator

        ![image-20200225102131966](/Users/raojj/Library/Application Support/typora-user-images/image-20200225102131966.png)

  - 5.2 lin-validator 获取 http 请求参数

  - 5.3 配置文件与在终端显示异常

  - 5.4 过

  - 5.5 navicat 管理数据库

    - 后端连接服务器数据库流程
      - 服务器开启数据库服务(命令行)
      - 获取连接数据库所需 host, port, username, password
      - 在服务器新建一个数据库(命令行), character Set = utf8mb4; collation = utf8mb4_0900_ai_ci
      - 总结下, 要用代码连接服务器的数据库, 必须有五个数据: host, port, userName, password, dbName

  - 5.6  sequelize 管理数据库

    - 使用 sequelize 连接服务器的数据库并且进行配置 

  - 5.7 User模型与唯一标识设计
    
    - 表名 === model
  - 5.8 sequelize 个性化配置与数据维护策略
  - 5.9 写一个注册接口, 将数据保存到mysql 中

- 第五章总结

  - 未知异常的一般处理方式
  - 写接口的流程: ①校验传入参数(通过创建 validator)②使用 validator 获取参数
  - sequelize 连接服务器需要五个数据: host, port, username, password, dbName
  - sequelize 可以生成表名(model), 列名(filed)
  - koa-router prefix

- 第六章重点

  - 需求: 完成用户的注册与登录
  - 什么时候对密码进行加密操作比较好? 使用了观察者模式
  - 如果正常返回数据, 返回一个成功错误

- 第七章

  - 7.1

    - jwt 是什么? 输入用户的信息(id), 用户的权限, secretKey(用户指定的 key), 过期时间, 输出一个 token
    - 需求: 生成 jwt
    - 问题: 在什么时候生成 token

  - 7.2

    - 需求: 将 token 传递给后端
    - 11
    - 为什么要用类编写中间件
    - 中间件获取请求的 token

  - 7.3 

    - 需求: 验证 token 的合法性

    - 实现方式

      - 生成 error 类
      - 如果 token 不存在, 直接抛出 error
      - 如果 token 经过验证不合法, 直接抛出 error

    - 新知识:

      - 响应信息的处理流程![image-20200229112212565](/Users/raojj/Library/Application Support/typora-user-images/image-20200229112212565.png)

        

      

  - 7.4

    - 需求: 使用 scope区分用户角色, 按照角色限制 api 的访问
    - 实现方式
      - 生成token时, 带上scope, 假设是 8
      - 在某个接口中的 auth 处理中, 带上接口的权限等级, 与 token 携带的 scope 进行比较即可
    - 新知识: 如何往中间件传递参数, 非常重要!使用类代替函数作为中间件
    
  - 7.5 7.6 7.7 
  
    - 需求: 在小程序中, 点击按钮, 可以获取用户的信息, 下次点击时,还是获取这个用户信息
      - 实现方式
        - 接入 wx 库
        - 在 handleMiniProgram 函数中, 通过微信接口获取 openId
        - 数据库搜索 openId 对应数据
          - 有: 直接返回 openId 对应数据
          - 没有: 根据 openId 创建一个数据
    
  - 第七章总结
  
    - 接口鉴权的实现方式
      - 用户登录, 后端生成 token
      - 用户调用接口, 带上 token, 后端根据 token 判断能否调用该接口
    - 小程序登录与普通登录区别
      - 普通的登录流程
        - 用户输入 email, password 注册用户
        - 用户输入 email, password 登录用户
        - 服务端根据 email 生成 token, 返回给小程序
      - 小程序的登录流程
        - 小程序发送 code(小程序内部方法生成), appId, appSecreat给微信服务器, 它返回 openId(每个用户独有) **openId === 普通登录流程的 email**
        - 后端代码检查数据库是否有「以 openId 为数据的用户信息」的数据, 如果没有, 根据 openId 写入一条数据, 如果有, 不做处理
        - 服务端根据 openId 生成 token, 返回给小程序
  
  - 架构总结
  
    - 目前接口有
      - `/user/register`: 普通方式的用户注册接口
      - `/token`: 登录接口(分为不同登录方式), 为前端返回 token
      - `/:id/v1/book/list`: 用于测试接口鉴权的接口.
  
  - 8.3 写一个接口,用于测试 token 的合法性
  
  - 8.4 
  
    -  我设计的数据库
  
      music 表
  
      id playUrl content picUrl title liked publishDate(createTime) flowTime(何时显示在期刊)
  
      
  
      Movie 表
  
      id content picUrl title liked publishDate(createTime) flowTime(何时显示在期刊)
      
  
  
      sentence 表
  
      id content picUrl title liked publishDate(createTime) flowTime(何时显示在期刊)
  
    - 数据库需要改进的地方
  
      - 解决bug: 表的设计有问题, 不知道是什么类型
  
        新增一个 type 数据, 用于区分是 music(100), movie(200), sentence(300)
  
      - 优化: 不应该保存 flowTime 数据, 数据量过于冗杂
  
        新增一个表, 专门用于处理推荐功能
  
        flow
  
        id type id flowTime
  
      
  
      
  
       
  
    
    
  
  - 8.5 
    - 使用代码完成 movie,sentence,music 表的 filed 定义
    - 导入数
  - 8.7
    - 
