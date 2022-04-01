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
- playList 与 track 多对多查询结果
- 

## 知识点

- 请求参数校验
- 数据库 crud 操作
  - 单表 crud
  -  一对多 crud
  - 多对多 crud

- model -> vo 
- 分页处理
- 如何调用 class 定义的方法
  添加 static 

- 错误处理
- 多对多查询
- 构造函数的职责: 初始化成员变量

---

### 一对多关联

- 明确一方与多方
- 在多方 model 添加外键
- 在一方添加 oneToMany 与 joinColumn 注解

---

### list 接口添加分页配置

---



