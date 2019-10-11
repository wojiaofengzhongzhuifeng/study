# 函数的深入理解

## 函数内的变量取值依据

## 闭包是什么

### 闭包与对象的关系是什么？？？

## 特殊的变量： this

## 阶乘递归

## 记忆化的核心思想是什么？

## 记忆化的核心思想在 React 的性能优化，React.memo 和 React.useCallback

## 柯里化

### 作用

让所有函数只接受一个参数

### 单参数函数如何接受两个参数？

1. 这个单参数是一个对象

2. 使用闭包

3. 例子

    ```javascript
    let add1 = ({a,b})=>{
      return a + b
    };
    
    console.log(add1({a: 1, b:2}))
    ```

    ```javascript
    let add2 = (a)=>{
      return (b)=>{
        return a + b
      }
    };
    console.log(add2(1)(3))
    ```

4. 如何阅读柯里化的代码？

    `let add = a => b => a + b`

### 柯里化函数

1. 含义
  
   把多参数函数，变成单参数函数
   
2. 测试

    现有函数 add 
    ```javascript
    let add = (a, b, c)=>{
      return a + b + c
    };
    ```
    
    将 add 函数的调用方式从`add(1,2,3)`改成`curriedArr(1)(2)(3)`
    
    答案
    ```javascript
    let add = (a, b, c)=>{
      return a + b + c
    };
    
    let curriedArr = a => b => c => add(a, b, c);
    ```
    
3. 测试 2

    现有函数
    ```javascript
    const addTwo = (a, b)=>{
      return a + b; 
    };
    const addThree = (a, b, c)=>{
      return a + b + c;
    };
    const addFour = (a, b, c, d)=>{
      return a + b + c + d;
    }
    ```
    写一个函数 currify，使得这三个函数可以单独接受 2、3、4 次参数（即从 `addTwo(1, 2) 变成 xxx(1)(2)`）
    
    ```javascript
    const currify = ()=>{};
    
    currify(addTwo)(1)(2) // 返回 3;
    ```

## 高阶函数

### 什么是高阶函数

把函数作为**参数**或者**返回值**的函数

### javascript 内置高阶函数

1. bind

    `bind.call`如何理解
    
    1. `bind.call` 是函数
    
    2. `bind.call` 的参数分别是：函数A，this，函数 A 的 arguments
    
    3. `bind.call` 返回一个函数，并且这个函数已经指定好了 this，arguments
    
    4. 所以 `bind.call` 是一个高阶函数
    
    推理过程
    ```javascript
    var bind = Function.prototype.bind
    
    
    var f1 = function(){
      console.log('this')
      console.log(this)
      console.log('arguments')
      console.log(arguments)
      console.log('-----')
    }
    
    var newF1 = f1.bind({name:'frank'}, 1,2,3)
    
    // obj.method(a,b,c,d,e)
    // obj.method.call(obj,  a,b,c,d,e)
    
    // 设 obj = f1
    // 设 method = bind
    
    // 代入
    // f1.bind(a,b,c,d,e)
    // f1.bind.call(f1,  a,b,c,d,e)
    
    // 代入参数
    // a = {name:'frank'}
    // b,c,d = 1,2,3
    // f1.bind({name:'frank'},1,2,3)
    // f1.bind.call(f1, {name:'frank'},1,2,3) // 这个式子
    
    // f1.bind === Function.prototype.bind
    // var bind = Function.prototype.bind
    // 所以 f1.bind 就是 bind
    // bind.call(f1, {name:'frank'},1,2,3) // 这个式子
    
    // 总结
    // bind.call 接收一个函数 fn，this，其他参数
    // 返回一个新的函数，会调用 fn，并传入 this 和 其他参数
                    
    ```

2. apply

`apply.call`如何理解

3. call

`call.call`如何理解

4. sort

5. reducer

6. map

## pipe 操作

### 解决的问题

解决函数组合时，代码语义不好读懂的问题

解释了为什么单参数函数这么重要

## 在 React 的应用

### 代码

https://codesandbox.io/s/nifty-butterfly-tgs28

### 在什么情况下使用








