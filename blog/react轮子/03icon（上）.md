## 为什么手机的ui框架不好用

## React.FunctionComponent 与 IconProps

### ✅函数组件如何定义prop类型

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190804153655.png) 

### ❎定义组件函数时，为什么不能按照函数的输入输出定义方式进行定义？

函数的输入输出定义，定义组件函数可以通过这种方法吗？
```typescript
const sum: (k1:number, k2: number)=>number = (sum1, sum2)=>{
  return sum1+ sum2
}
```

函数是xxx函数类型定义，代码的意思是：Icon 函数是 React.FunctionComponent 函数类型，也就是帮你定义好了 Icon 的输入，输出值
```typescript jsx
const Icon: React.FunctionComponent<Props> = ({iconName}) => {
  return (
    <div>
      {iconName}
    </div>
  );
};
```

### ✅函数的输入输出类型定义有几种方法？

https://codesandbox.io/s/festive-lehmann-uipce

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190804183318.png)


## 消除IDE的所有警告

### ✅什么时候需要加相应的 loader ？

后缀不是 js html css 都需要加相应 loader，如图片，svg

### ✅将 *.svg 文件放到项目中，在 icon 组件打印 *.svg 文件内容



## 使用svg-sprite-loader并翻车

## 现场把车扶起来

## 路径里面的星星是什么意思 

## 根据name展示不同的icon

## svg定义文件有什么用

## importAll

## tree-shaking

## 总结 
