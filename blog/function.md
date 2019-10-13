# 函数的深入理解

### ✅函数内变量取值依据

1. 依据
 
    如果「函数内变量」与「函数定义处变量」名称一致，使用 params 法（函数调用时确定值） ，否则使用 environment 法（函数定义时确定值）

    ![image](https://user-images.githubusercontent.com/25478678/66710269-7af97180-eda7-11e9-83b9-5f2e9ffc1656.png)

2. 测试题

    ```javascript
    let x = "x";
    let a = "1";
    function f1(x){
      return x + a
    }
    a = "3";
    {
      let a = "2"
      console.log(f1("y")) // 打印什么？
    }
    a = "4";
    ```

## 闭包

### ✅闭包是什么？

如果函数内使用了函数外的变量（environment 法），那么函数 + 变量 === 闭包

### ✅闭包的作用是什么？

维持变量，将相关联的变量放到一起

例子
```javascript
// 通过对象保存 age，name
let person = {
  age: 12,
  name: '明'
}

// 通过闭包保存 age, name
function Person(age, name){
  return (key)=>{
    if(key === 'age'){
      return age
    } else if (key === 'name'){
      return name
    }
  }
}

console.log(' 「点运算符」获取值', person.name);

const person1 = Person(18, '红');
console.log('「函数调用」获取值', person1('name'));
```

### ✅闭包与对象的关系是什么？

都用来「维持变量」，看语言支持哪一种方式

## 特殊的变量： this（markdown 范本）

### ✅「特殊」是什么意思？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191013112341.png)

### ✅如何确定 this 的值

因为 this 变量是在函数定义处声明的（虽然你看不见），所以使用 params 法，即在函数调用时确定 this 的值。

一般函数变量，通过`test(1)`指定函数定义处变量。

但是 this 是特殊的函数变量，只能通过 `test.call({name: 123}, 1)` 指定函数定义处变量。

### ✅具体方法

1. 常用的转化

    ```javascript
    fn(1,2)
    fn.call(undefined, 1, 2)
    
    obj.method('hi')
    obj.method.call(obj, 'hi')
    
    array[0]('hi') 
    array[0].call(array, 'hi')
    ```

2. 测试

    - button 测试1
    
        https://jsbin.com/vutatuluwa/1/edit?html,js,output
        
    - 测试 2
    
        ```javascript
        let length = 10;
        function fn(){
          console.log(this.length);
        }
        
        let obj = {
          length: 5,
          method(fn){
            fn();
            arguments[0]();
          }
        }
        
        obj.method(fn , 1) // 输出什么
        ```

## 递归

## 记忆化

### ❌记忆化的核心思想是什么？

### ✅记忆化在 React 的应用，React 性能优化

1. React.memo

    - 需求
    
        点击按钮时，子组件不应该重新渲染，因为子组件没有任何变化
    
    - 代码
    
        https://codesandbox.io/s/weathered-paper-ynlg6

2. React.useCallback
    
    - 需求
    
        点击右侧按钮时，子组件才渲染
    
    - 核心
    
        ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191013120226.png)
    
    - 代码
    
        https://codesandbox.io/s/funny-vaughan-c30mf

## 柯里化

### ✅作用

经过柯里化处理的多参数函数，变成单参数函数

### ✅单参数函数如何接受两个参数？

1. 这个单参数是一个对象

    ```javascript
    let add1 = ({a,b})=>{
      return a + b
    };
    
    console.log(add1({a: 1, b:2}))
    ```

2. 使用闭包

    例子
    ```javascript
    let add2 = (a)=>{
      return (b)=>{
        return a + b
      }
    };
    
    // add2 简写为
    let add3 = a => b => a + b;
 
    console.log(add2(1)(3));
    console.log(add3(1)(3));
    ```

3. 如何理解「返回函数的函数」

    现有函数 add6
    ```javascript
    let add6 = a => b => c => d => e => f => a+b+c+d+e+f;
    console.log(add6(1)(2)(3)(4)(5)(6));
    ```
    
    add6 **分别单独**接受 6 个参数

### ❌柯里化测试题

1. 简单测试题

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
    
2. 复杂测试题

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

### ✅什么是高阶函数

把函数作为**参数**或者**返回值**的函数，两个条件，满足一个即可

### ✅为什么 apply 是一个高阶函数？

假设有函数 test

```javascript
function test(a, b){
  console.log(this);
  console.log(a, b);
}

// 普通调用
test(1,2);

// apply 调用
test.apply({name: '1'}, [1,2]);
```
使用 apply 调用的时候，既没有把函数作为参数，也没有把函数作为返回值抛出，为什么还说 apply 是高阶函数？？

如果你要判断函数 this 的指向，必须找到函数是如何进行 call 调用的。

同理，如果要判断一个函数是否是高阶函数，必须找到函数是如何进行 call 调用的。

总结：**如果要深入分析代码，必须把函数调用方式改成 call 的方式，而不是简写的方式。**

如`test(1,2,3)`改成`test.call(undefined, 1,2,3)`

### apply.call 的理解

```javascript
function test(a, b){
  console.log(this);
  console.log(a, b);
}

// apply 调用
test.apply({name: '1'}, [1,2]);

// 上面不看，已经明白

// ① apply 改成 call 调用
test.apply.call(test, {name: '1'}, [1,2]);

// ② 因为 test.apply === Function.prototype.apply
let apply = Function.prototype.apply;
apply.call(test, {name: '1'}, [1,2]);
```

因为 test 是一个函数，所以 apply 是高阶函数

### ✅与 apply 相似的函数

bind、call

### ✅其他的高阶函数

sort、reducer、map

## pipe 操作

### ❌解决的问题

解决函数组合时，代码语义不好读懂的问题

解释了为什么单参数函数这么重要

## 在 React 的应用

### ❌将函数作为参数传给子组件

1. 代码

    https://codesandbox.io/s/nifty-butterfly-tgs28

2. 在什么情况下使用

    子组件想传数据或者函数给父组件的另一种方法














