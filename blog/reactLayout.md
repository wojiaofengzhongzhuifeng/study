# Layout 组件


## 过程笔记

- 使用 webstorm 创建模板文件

  1. 双击`shift`, 搜索 `file and code...`
  
  2. 新建文件，必须通过 右键 => new => 选择一个文件模板

- layout 组件接受两个 prop 分别是 style， className

- layout 接口需要继承 html 的所有属性

  1. 为什么 layout 接口要继承 html 所有属性？？ 
  
     因为 layout 必须在继承了所有 html 的属性的情况下，追加其他的属性。
     
  2. 最终的答案
  
    ```typescript
    interface Props extends React.HTMLAttributes<HTMLElement>{
      children: ReactElement | Array<ReactElement>
    }
    ```
  
    她的意思是：Props 接口，继承了 React 封装的 html 属性接口，并且指定（覆盖） props 接口的 children 属性为 ReactElement | Array<ReactElement>

- 使用 reducer 代替 let？

    https://jsbin.com/vofaqalaro/1/edit?js,console,output `[1,2,3].reduce((total, number)=>{return number + total}, 0)`

- 作用域问题 && || 
  
    ```javascript
    const flag = true;
  
    if(flag){
      const a = 1
    }
  
    // 想在作用域外部使用 a 变量
    console.log(a)
    ```
    
    ```javascript
    const flag = true;

    const a =  flag && 1;
        
    console.log(a)

    ```
    
    &&: 寻找第一个 falsy 值`var a = 1 && 2 && null && 3;`
    
    如果都是 true，那么a是最后一个 truely值`var a = 1 && 2 && 3 && 4`
    
    
- ts 声明接口：X是一个对象，对象的key数量未知，只知道他是字符串，value是boolean类型，这怎么定义？

   ```typescript
   interface X {
     [K:string]: boolean;
   }

   ```
   
- 关于构建 className 函数的测试用例

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190608150446.png)

## 在实际过程遇到的问题

- 使用 函数式思想，流式操作数据

https://jsbin.com/nuwemeceta/1/edit

- 常用的函数式操作
  
    1. filter： https://jsbin.com/migobicowe/1/edit?js,console,output
    
    2. Object.entries(对象 => 数组): 将对象的 key：value 变成数组的item 如 Object.entries({a: 1, b: 2}) 返回的是 [["a", 1], ["b", 2]]
    
- 第四个例子如何实现？？

    1. 如果layout（className="rao-layout"）内部有aside组件，"rao-layout" 改成 "rao-layout-hasAside" 
    
       这里稍微比较复杂，需要解释一下，核心代码如下：
       
       ```typescript
         let hasAside: boolean = false;
         const children = props.children as Array<ReactElement> | ReactElement;
         "length" in children && children.forEach((node)=>{
           if(node.type === Aside){
             hasAside = true
           }
         });
  
         // 某个地方使用 hasAside 变量

       ```
       
       ①为什么要断言：因为 props.children 的类型是 ReactNode， 而 type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
       
       ②断言是什么意思：我根据实际情况，提前预知类型
       
       ③为什么要 "length" in children：因为 children 变量还可能是 ReactElement，此时 children 是一个对象。写 "length" in children 的目的是为了保证children一定是数组
       
       ④如何判断某个 children 节点是 Aside 组件：`node.type === Aside` Aside需要引入

    
    2.  rao-layout-hasAside 的样式是 flex-direction: row;
    
    3. layout（className="rao-layout-hasAside"）内部有 layout 组件，内部的 layout 组件的flex-direction： column
      
- 组件模块化，为什么要这样处理？



  
    
    

## 功能

## 知识点