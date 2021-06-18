##  原 interface 删除某些 key 生成新 interface

```
interface Student{
	name: string
	grade: string
}

// 现需要生成 Person，Person 只有 name 属性
interface Person extends Omit<Student, 'grade'>{}
```



## type 转化为 interface key

```
type Kind = 'info' | 'positive' | 'negative' | 'warning';
type KindMap = Record<Kind, string>;

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};
```



## type vs interface

