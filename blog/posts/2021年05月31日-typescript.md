## typescript interface 删除某些key 生成新 interface

```
interface Student{
	name: string
	grade: string
}

// 现需要生成 Person，Person 只有 name 属性
interface Person extends Omit<Student, 'grade'>{}
```



