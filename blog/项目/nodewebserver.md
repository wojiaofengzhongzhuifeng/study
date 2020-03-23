## commit 

- 安装相应依赖,完成最简单请求



## 功能

- 搭建简单易用的koa初始化框架
  - 热加载
  - 使用 ts 对数据类型约束
  - 使用验证器对参数进行校验
  - 自动加载路由
- 符合洋葱模型, 便于用户调试
- 用户系统(密码加盐处理)
- 使用 jwt 进行权限控制
- 使用 ORM 的思维方式初始化数据库字段(field), 操作数据库
- 使用后端接口对数据库的增删改查(对一个 todo 进行增删改查)
- 使用全局异常处理的方式处理错误和处理成功
- 日志功能
- 使用命令行可视化界面, 添加新代码
- 标准的 RESTful 风格
- 使用高级的数据库知识解决问题
  - In 操作: 「解决获取多个数据库数据」
  - Group: 删除不必要的数据库返回字段
- JSON 序列化: 对数据库返回的字段数据进行统一处理



## 新知识与疑问与重点

- Static 与 普通定义的方法有什么区别
- 为什么中间件用 class, 而不是 func
- 调试中: step over 与 setp into 的区别

- trycatch 是如何执行的?

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

- async / await 语法会如何执行

  在 async / await  语法中获取 reject 的数据, 需要借用 trycatch 语法

  ```
  function Promise2() {
    return new Promise((resolve, reject) => {
      reject(321321);
    });
  }
  async function test2(){
    try{
      const result = await Promise2();
      console.log(result);
    }catch (e) {
      console.log('e', e);
    }
  }
  test2();
  ```

- 要用代码连接服务器的数据库, 必须有五个配置数据: host, port, userName, password, dbName, 并且需要服务器提前创建数据库名称





