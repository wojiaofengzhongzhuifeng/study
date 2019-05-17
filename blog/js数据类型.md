## 概括图

[![未命名文件 (2).png](https://i.loli.net/2017/11/21/5a13f5980f978.png)](https://i.loli.net/2017/11/21/5a13f5980f978.png)


2. `typeof`注意:

   1. `typeof`的作用是给一个变量,返回`'string','number','boolean','object','function','undefined',`
   2. bug： `function(){}`竟然返回`'function'`,**明明`function`不是数据类型。**
   3. bug：`null`竟然返回`'object'`.

4. `typeof`和`instanceof`使用区别

   `typeof`返回的是七种数据类型

   `instanceof`已经知道是 object 类型,想知道是哪一种 object 类型

   常见的 object 有Array, Object, NodeList
   
5. 如何靠谱的确定数据类型

6. falsy值（要背）
   1. 数字0
   2. 数字NaN
   3. 字符串空
   4. undefined
   5. null
   
6. 使用 `Object.prototype.toString.call()`判断类型

