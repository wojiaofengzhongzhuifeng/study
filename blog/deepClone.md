# 深拷贝

## 过程代码
 
- 测试代码总结

  凡是基本类型,都相等;凡是引用类型,都不相等  
    
- 遇到的问题, 四步走

  - 需求
  
    能复制对象环(自己引用自己)
    
  - 问题
  
    因为是对象环,所以会导致很多次的 clone,最后导致栈溢出
    
  - 思路
  
    声明一个数据,用于判断是否之前已经 clone 过, 如果是, 直接返回引用,否则才 clone
  
  - 伪代码
  
- 当对象是日期对象, 为什么克隆的对象没有 getDate 方法?

  console.dir 打印对象

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191019144855.png)
  
  看颜色, 深颜色, test 属性是可枚举(可以通过 for in 或者 Object.keys 获取)
  
  浅色是不可枚举

- 生成对象的方法

  - Object.defineProperties
  
  - Object.create
  
- 描述「对象属性」的属性

  
  
  - data descriptors and accessor descriptors 的区别
  
    ![image](https://user-images.githubusercontent.com/25478678/67140150-2879f280-f28a-11e9-94bd-227be87fb115.png)
  
    ```javascript
    var objName = "rjj";
    var obj = Object.defineProperties({}, {
      name: {
        get(){
          return objName
        },
        set(value111){
          objName = value111
        }
      },
    });
    console.log(obj.name); // 返回 rjj
    obj.name = "test";
    console.log(obj.name); // 返回 test
    Object.keys(obj) // 返回 []
    ```
  
- 如何修改对象属性的「可枚举属性」?

直接 `Object.defineProperties`;


     

