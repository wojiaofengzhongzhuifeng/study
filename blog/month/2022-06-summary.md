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