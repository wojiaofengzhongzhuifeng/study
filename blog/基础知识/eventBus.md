# 手写一个 EventBus 

## 目的

- 学会「发布订阅」模式

- 完成需求，需要步骤

  * 获取最终的结果（确定真实需求）
  
  * 根据结果推导数据结构
  
  * 写代码

- 使用 TDD 写代码

## 过程笔记

- which 命令的使用

- ts-node 安装，并且运行一个最简单的 ts 文件

- 如何全局卸载一个包

- 使用 console.assert 测试「new EventHub 还是一个对象」

- -27.26开始优化代码

    * || 确保变量有值
    
    * 声明一次，立即使用 === 不需要声明一个变量
    
- 如何测试函数是否被调用？

    * 使用 called
    
- 快速输入 函数的输入输出注释

- emit 传递两个值

- off要传入一个函数

## 重点

- 下列代码，先打印 1 还是 2
  
  ```javascript
  event.on('test',()=>{
    console.log(1)
  })
  event.emit('test');
  console.log(2)
  ```
  1， 2
  
- 如何测试函数是否被调用

  https://github.com/wojiaofengzhongzhuifeng/eventHub/commit/83effc1b5d2071481b9c86346ff15d20a4e1edbf

- class 如何定义「类变量」和 「实例变量」

  ```javascript
  class Student {
    test = {};
    constructor(test1){
      this.test1 = test1
    }
  }
  ```
- on 函数有个陷阱

  this.events.test1 为什么是 undefined？
  ```javascript
  class Person {
    events = {};
    on(){
      let test = this.events.test1;
      if(!(test)){
        test = [];
      }
      test.push(123321);
      console.log(test);
      console.log('this.events[eventName]', this.events.test1);
    }
  }
  
  let test= new Person();
  test.on();
  ```


