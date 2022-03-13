# 前端 -> sprint boot 学习

## 需求

- artist 表

  | 字段名 | 类型                |
  | ------ | ------------------- |
  | id     | long                |
  | name   | String              |
  | level  | Enum S A B C        |
  | cover  | String              |
  | status | ENUM ONLINE OFFLINE |
  |        |                     |

- track 表

  | 字段名 | 类型                |
  | ------ | ------------------- |
  | id     | long                |
  | name   | String              |
  | cover  | String              |
  | status | ENUM ONLINE OFFLINE |

- album 表

  | 字段名 | 类型                |
  | ------ | ------------------- |
  | id     | long                |
  | name   | String              |
  | status | ENUM ONLINE OFFLINE |

  

- playlist 表

  | 字段名 | 类型 |
  | ------ | ---- |
  | id     | long |
  |        |      |
  |        |      |

- artist <=> album <=> track 一对多
- playList 与 track 多对多

## 知识点(从请求到响应链路)

- 请求参数校验

- 数据库 crud 操作

  - 单表 crud

  -  一对多 crud

  - 多对多 crud

    

    

- model -> vo 



- 错误处理
- 
- 多对多查询
- 

---

### 一对多关联

- 明确一方与多方
- 在多方 model 添加外键
- 在一方添加 oneToMany 与 joinColumn 注解

---



### commit 

- artist =>album 一对多查询
- album => track 一对多查询
- artist =>album 查询结果过滤
- album => track 查询结果过滤