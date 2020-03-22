# 手写 bind

## 过程代码

- 实现以下 api 

  - fn.bind1({name: 1})
  
  - fn.bind1({name: 1}, 1, 2)
  
  - fn.bind({name: 1}, 1)(2)

- bind + new 的使用

  ```javascript
  let fn = function(a){
    this.a = a;
  };
  let fn1 = fn.bind({name: 123});
  
  let test1 = new fn('x');
  let test2 = new fn1('y');
  
  console.log(test1);
  console.log(test2);
  ```
  
- new 的时候, 会帮你隐式 return this, 什么情况下就不会?

  return 引用类型

  ```javascript
  let fn = function(a){
    this.a = a;
    return {fjdksalfjdsa: 123}
  //   return "tet"
  };
  
  let p1 = new fn('123');
  console.log(p1);
  ```
  
- bind1 分为传 this 和 undefined

- -38.58

- 按照现有的代码, 为什么会把属性挂到 window 上

- new 隐式执行的代码

  ```javascript
  var this = {};
  this.__proto__ = fn.prototype;
  fn.call(this, arguments);
  return this;
  ```
  
- 没有解决 new 的问题
