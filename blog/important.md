# 每周重点知识汇总



## 

## webstorm 查看源代码结构

structure

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191202091848.png)


## typescript 自己的 input 组件需要继承 html input 的所有属性

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}
```

## react 项目, 如何引入图片?

- 新建 src/asset 目录, 图片放到 asset 目录
- 通过 import img from '到图片路径'
- 使用 img 变量



## 如何往 array 指定的 index 放置指定的值

需求: 现有['1-1', '2-4', '0-6', '3-7'], 返回[6, 1, 4, 7]

new Array() 创建数组

```
function sort (array){
  const resultArray = new Array(array.length - 1)
  array.forEach((string)=>{
    const [index, answer] = string.split('-');
    resultArray[index] = answer
  })
  return resultArray
}

```



