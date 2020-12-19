# 使用 TypeORM 操作 PostgreSQL

### 前置条件

需要有 PostgreSQL 数据库，参考这个[链接](https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/posts/2020%E5%B9%B408%E6%9C%8815%E6%97%A5-docker.md#%E4%BD%BF%E7%94%A8-docker--postgresql--typeorm-%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83)



### 需求

- 使用 TypeORM 添加 table，并且定义列
- 使用 TypeORM 增删改查 table 的内容
- 使用 idea 查看数据

### 过程

```sh
mkdir test-type-demo
cd test-type-demo
npm init -y
yarn add typeorm reflect-metadata pg
npx typeorm init --database mysql
# 修改 ormconfig.json，填写数据库配置
yarn start # 测试 TypeORM 是否正常
```



## ORM数据库常识

- model === database table