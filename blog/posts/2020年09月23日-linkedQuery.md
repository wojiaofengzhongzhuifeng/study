## 实体多对象关联查询接口理解

### 用处

- 根据关联表数据获取实体表数据


### 用法





### 例子

```json
{
    "condition": [
        {
            "bosclass": "documents",
            "alias": "d1",
            "subCondition": []
        },
        {
            "bosclass": "tags",
            "alias": "t1",
            "subCondition": [
                {
                    "field": "code",
                    "operator": "==",
                    "value": "b6c75f1386614ad18a865ac893c10e2d",
                    "logic": "or"
                }
            ]
        },
        {
            "bosclass": "irTagDocument",
            "alias": "ir1",
            "type": "relationship",
            "from": "t1",
            "to": "d1",
            "subCondition": []
        }
    ],
    "select": {
        "test": "d1.name"
    }
}
```

condition 代表的含义

1. 想获取 documents 实体表的数据
2. 有过滤条件，条件是：
   1. 在 irTagDocument 关系表中，寻找 tag.code === b6c75f1386614ad18a865ac893c10e2d 
   2. 寻找条件 1 关联的 documents
   3. 将 documents 实体数据返回





### 