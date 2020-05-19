## Javascript 的函数

### 函数是什么?

- 一个程序可以由多个子程序(routine)组成

- 子函数定义

    由一个或者多个语句(statement)组成, 用于完成特定任务

- 子程序可以分为三类

    - 函数: 有返回值
    
    - 过程: 无返回值
    
    - 方法: 在类或者对象中声明

- 


### 知识点

- 函数定义

    由一个或者多个语句(statement)组成, 用于完成特定任务

- 函数和方法的区别

- 函数体内的变量取值权重

    - 总结
     
        如果函数内的变量是参数, 看函数调用;如果变量不是参数, 看函数声明的环境

    - **调用**时输入的参数, 如 c = 'x' 变量
    
    - **定义**时函数时的环境 , 如 a = '4' 变量
    
    - 例子1

        ```javascript
        let a = 'x';
        function f1(c){
          let d = '1';
          return d + c + a;
        }
        a = '4';
        {
          let a = '2';
          f1('x');
        }
        a = '5';
        ```
    
    - 例子 2
    
        ```javascript
        let x = 'x'
        let a = '1'
        function f1(c){
            c()
        }
        {
            let a = '2'
            function f2(){
                console.log(x + a)
            }
            f1(f2)
        }
        ```
      
- 常识

    - 函数内语句访问函数外变量, 不是所有编程语言都可行的, js 可以, ruby 不行
    
    - 变量 a + 变量 b + 函数 log = 闭包
    
    - 例子

        ```javascript
        let a = 1;
        let b = 2;
        function log(){
          console.log(a, b)
        }
        log();
        ```
- 闭包的理解

    - 闭包 ≈ 对象
    
    - 闭包用于**维持**变量
