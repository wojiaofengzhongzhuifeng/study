# JavaScript 数据类型



## 分类

- 基本类型
  1. string
  2. number
  3. boolean
  4. undefined
  5. null
  6. symbol(ES6 新增)
- 引用类型
  1. object



## 区别数据类型的 api

- typeof: 不能判断`null`和`函数`

- instanceof

    1. 使用范围：只能判断引用类型

    2. 原理：通过原型链

        ```javascript
        a instanceof b
        // 那么会这样比较
        // a.__proto__ === b.prototype ? 如果正确，返回 true
        // a.__proto__.__proto__ === b.prototype ? 返回 true
        // 直到 a.__proto__.__proto__ ...  === null 返回 false
        ```
        
- Object.prototype.toString.call([]) => 返回 "[object String]"





6. falsy值（要背）
   1. 数字0
   2. 数字NaN
   3. 字符串空
   4. undefined
   5. null
2. 使用 `Object.prototype.toString.call()`判断类型





## 按值传递与按引用传递的区别，进阶版

```javascript
var a = {n:1}
var b = a
a.x = a = {n: 2}
console.log(b)
console.log(a)
```

重点是`a.x = a = {n: 2}`如何处理？

1. 在 a 变量指代的对象，添加x这个key。

2. x的value**指向a变量，注意，没有指向确定地址，只是单纯指向a变量，即a变量是什么，a.x就是什么！！！**。

3. a变量保存新对象地址

   ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190523182558.png)

