## ES6 语法知道哪些，分别怎么用？

1. 使用 let / const 代替 var

   - var 变量提升

     1. 什么是变量提升：

        **使用 var 声明的变量**，JavaScript 会在预编译的时候将变量提升到最上面

        ```javascript
        console.log(a) // 打印 undefined
        var a = 1
        
        // 预编译后
        var a
        console.log(a)
        a = 1
        ```

        ```javascript
        b() // 打印 b is not a function 
        var b = function(){console.log(2)}
        
        // 预编译后
        var b
        b()
        b = function(){console.log(2)}
        ```

        ```javascript
        c() // 打印 3
        function c(){console.log(3)}
        
        // 预编译后
        function c(){console.log(3)}
        c() // 打印 3
        ```

        https://segmentfault.com/a/1190000003114255

   - let 可变 / const 不可变

2. 箭头函数的使用

   - 箭头函数内部的 this 就是外部的 this
   - 没有 arguments，只能借助 ES6 的『剩余参数』，拿到参数数组[例子](https://jsbin.com/xosoyewoqa/1/edit?js,console,output)

3. 解构赋值

   **获取变量**

   - 获取函数配置参数变量

     ```javascript
     function test(props){
       const {name, age} = props
     }
     ```

   - 数组

     ```javascript
     let [number1, number2, number3, number4] = [1,2,3,4]
     console.log(number1)
     ```

4. 操作参数

   - 剩余参数： 不确定函数有多少个参数时，使用展开运算符

     ```javascript
     function test(...a){
     	console.log(a)
     }
     
     function test1(a, b, ...c){
     	console.log(a)
     	console.log(b)
     	console.log(c)
     }
     
     test(1,2,3,4,5)
     test1(6,7,8,9,10)
     ```

   - 设置默认参数

   - 展开运算符：用于函数执行指定参数或者生成对象或者数组 https://jsbin.com/sayabasoci/edit?js,console,output

5. 对象的扩展使用

   - 例子代码

     1是3的简写

     ```javascript
     const b = "2"
     const c = "test1"
     
     const obj = {
     	a: 1,
     	b,
     	[c]: "test2",
     	hi(){console.log(this)}, //1
     	hi1: ()=>{console.log(this)},
     	hi2: function(){console.log(this)}, //3
     }
     obj.hi()
     obj.hi1()
     obj.hi2()
     ```

6. promise

   - promise 与 callback 的关系

     1. 一个函数test1的参数是另一个函数test2，另一个函数test2叫回调函数

        ```javascript
        function test1(fn){
          fn("这是带上的数据")
        }
        function test2(data){
          console.log(data)
        }
        test1(test2)
        ```

     2. 回调函数与 ajax 的结合使用

   - promise 的三种状态

     padding， resolve， reject

   - 读懂 promise 代码

     下面的代码如何运行？

     **then 的参数的参数，由前一个的 return 确定**

     **second 函数的 num 参数，是 first 函数 return 的结果**

     ```javascript
     var fn = function(num) {
         return new Promise(function(resolve, reject) {
             if (typeof num == 'number') {
                 resolve(num);
             } else {
                 reject('TypeError');
             }
         })
     }
     
     fn(2).then(function(num) {
         console.log('first: ' + num);
         return num + 1;
     })
     .then(function(num) {
         console.log('second: ' + num);
         return num + 1;
     })
     .then(function(num) {
         console.log('third: ' + num);
         return num + 1;
     });
     ```

     如何改造代码，使得第二个 then 执行 reject ？

     **在第一个函数中， 返回一个 promise， 在这个 promise 中，执行 reject**

     ```javascript
     var fn = function(num) {
       return new Promise(function(resolve, reject) {
         if (typeof num == 'number') {
           resolve(num);
         } else {
           reject('TypeError');
         }
       })
     }
     
     fn(2).then(function(num) {
       // 将 return num + 1; 改成下面的代码
       return new Promise(function(resolve, reject) {
         if (typeof num !== 'number') {
           resolve(num);
         } else {
           reject("1234567");
         }
       })
     })
     .then(function(num) {
       console.log('second: ' + num);
       return num + 1;
     }, function(number){
       console.log("执行 reject 函数")
       console.log(number)
       return number
     })
     .then(function(num) {
       console.log('third: ' + num);
       return num + 1;
     })
     ```

7. Proxy

   **实现数据劫持**

8. Symbol

   **新的数据类型，认为是独一无二的字符串**

9. class

10. new Set()数据结构

  ​    

    