
## 第一周新知识

- 所有功能由数据结构开始想

- 在 postman 中创建全局变量

- 

# 2019.7.5

## 通用接口查询，非常重要的接口

- 11：多条件获取对象表内的实例数据（获取所有对象数据）

- 24：获取关系表内所有的实例数据（获取所有关系数据）

- 12：批量增加对象表内实例数据

- 28：批量增加关系表内实例数据

- 27：根据对象表内实例数据获取指定关联方向的实例数据

# 2019.7.4

## 关联查询

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190704175210.png)

步骤：

1. 创建两张对象表（file， folder），使用「创建对象实例」接口

2. 创建两张关系表（folder -> file，folder -> folder），使用「创建关系实例」接口

3. 

## http 405 禁用请求中指定的方法

## postMan 设置 global variable

需求：用户通过「登录接口」获取 token，然后用户需要复制响应内容的 token ，对数据库进行操作，这样很麻烦，有没有什么方法可以简化

步骤：

    1. 在用户成功获取 token 后，将 token 保存到一个全局变量中
    
    2. 下次使用 token 的时候，只需要使用这个全局变量就可以了
    
## 对数据库进行增删改查

    想操作数据库，必须要
      
    1. 指定数据库： appKey
    
    2. 获取权限： access_token
    
    access_token 是用户通过 「登录接口」，设置「用户名， 密码，appKey」获取权限

## http 400 服务器不理解请求的语法

反正就是你发送的数据错误，可能是格式错误，有可能是key拼写错误

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190704103344.png)


# 2019.7.3

## api 文档笔记

- 响应内容中，http 状态码是如何使用的？

- 如何通过 bos 发送第一个请求？

- postman 响应内容的 body 格式是什么意思？如何选择？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190703224813.png)


# 2019.7.2

## 学东西，完成这几个问题

- 属于哪个类别？

1. 如果是一个新概念

    - 这个东西是什么
    
    - 这个东西有什么用

2. 如果是一个步骤

   - 如何xxxxx
   
   - 实现功能的步骤

# 2019.7.1

## yarn 下载源

https://zhuanlan.zhihu.com/p/35856841
