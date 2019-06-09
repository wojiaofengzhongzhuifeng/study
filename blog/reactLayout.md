# Layout 组件

    
## 功能

- 组件（Layout，Header，Content，Footer，Aside）都能接受 style 和 className 属性。

## 知识点

- layout 组件的 props 需要继承 html 的所有属性

  1. 为什么继承 html 所有属性？？ 
  
     因为 layout 以 div 元素为基础，进行封装，那么必须要有 div 元素的所有属性。
     
     我自己封装的 input 组件也是一样道理。
     
  2. 最终的答案
  
      ```typescript
      interface Props extends React.HTMLAttributes<HTMLElement>{
        children: ReactElement | Array<ReactElement>
      }
      ```
  
      她的意思是：Props 接口，继承了 React 封装的 html 属性接口，并且指定（覆盖） props 接口的 children 属性只能为 ReactElement | Array<ReactElement>
      
      
- reduce 的使用

  https://jsbin.com/vofaqalaro/1/edit?js,console,output
  
- 使用 && 和 || 代替 if 语句

  https://jsbin.com/bohacohasu/1/edit?js,console,output
  
  && 的特点：
    
    ①寻找第一个 falsy 值；
    
    ②如果都是 truely，返回最后一个 truely 
    
    
- ts 声明接口需求：X是一个对象，对象的key数量未知，只知道他是字符串，value是boolean类型

   ```typescript
   interface X {
     [K:string]: boolean;
   }

   ```
   
- 使用 函数式思想，流式操作数据

    1. https://jsbin.com/nuwemeceta/1/edit
    
    2. filter： https://jsbin.com/migobicowe/1/edit?js,console,output
        
    3. Object.entries(对象 => 数组): 将对象的 key：value 变成数组的item 如 Object.entries({a: 1, b: 2}) 返回的是 [["a", 1], ["b", 2]]
    
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