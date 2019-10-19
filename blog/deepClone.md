# 深拷贝

## 过程代码

- 第一时间难转弯的点
  - 如果是基本类型, `deeClone(1) === 1`;(第一时间以为是`不等于`)
  - 如果是引用类型,`deepClone(obj) !== obj`
  - 总结: 凡是基本类型,都相等;凡是引用类型,都不相等
      
- 遇到的问题, 四步走

  - 需求
  
    能复制对象环(自己引用自己)
    
  - 问题
  
    因为是对象环,所以会导致很多次的 clone,最后导致栈溢出
    
  - 思路
  
    维持一个数据cache = [[之前的 obj,clone 后的 Obj]],用于保存 cloneObject, 当发现之前已经 clone 过, 直接返回 obj 的地址,而不是重新 clone
    
  - 伪代码
  
- falsy 值 

- 当对象是日期对象, 为什么克隆的对象没有 getDate 方法?

  console.dir 打印对象

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191019144855.png)
  
  看颜色, 深色的是可枚举的(可以通过 for in 或者 Object.keys 获取)

- 对象的理解不够深

  - 生成对象的方法
  
    - Object.defineProperties
    
    - Object.create
    
  - 有什么描述「对象属性」的属性
    
  - 如何修改对象属性的「可枚举属性」?
    
  - 常见的内置对象有什么


     

