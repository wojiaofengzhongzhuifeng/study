# 原型与原型链

## 作用

保存对象共有的属性与方法，实现继承



## 知识点

- `prototype`是函数才有的属性, 这个属性叫原型, 保存着共有属性和方法的对象。
- `__proto__`是所有对象都有的属性, 作用是指向对象的原型。
- 公式:`对象AAAAA.__proto__ === 构造函数BBBBB.prototype`
- 构造函数BBBBB只能从`Function,String,Boolean,Object,Number,Array, 自己创造的构造函数`选择
- 对象AAAAA不同，则构造函数BBBBB也不同
  1. 当对象AAAAA是`实例`，构造函数BBBB是`Function,String,Boolean,Object,Number, Array,自己创造的构造函数`
  2. 当对象AAAAA是`xxx.prototype`，构造函数BBBBB只能是`Object`
  3. 当对象AAAAA是`构造函数`，构造函数BBBBB只能是`Function`(即：构造函数的`__proto__`指向`Function.prototype`)



## ES5 与 ES6 继承方式

❌



