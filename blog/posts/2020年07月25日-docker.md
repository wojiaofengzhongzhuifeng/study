## 目标

- 使用 docker 生成一个 mysql 环境, 并且通过 GUI 和 Node 操作数据库



## 流程

- 使用 docker 生成 mysql 环境
- 使用 Navicat 连接 mysql,并且进行操作
- 使用 sequelize 连接 mysql, 并且进行操作



## docker 常见命令

- 查看当前 docker 容器情况

  docker ps -a

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20200718174928.png)

- 关闭 docker 容器服务

  docker kill [containerID]

- 开启 docker 容器服务

  docker container start [containerID]

- 删除 docker 容器

  docker rm [containerID]

- 进入到 docker 容器

  docker exec -it [containerID] bash

- 生成docker 容器

  docker run  --name mysql-rjj -e MYSQL_ROOT_PASSWORD=123456  -p 3307:3306 -d mysql:5.7.27



## navicat 的操作



## node 操作 mysql

![image-20200718183052131](/Users/raojj/Library/Application Support/typora-user-images/image-20200718183052131.png)

使用代码连接 mysql + 定义表+ 定义字段 + 增删改查



## 







