# 代码实现需求

## 防抖和节流

### 节流 （技能冷却时间）

  - 实现思路：设置一个flag
  - 使用场景：一段时间，只能执行一次代码
  - [例子](https://jsbin.com/giralanuki/1/edit?html,js,console,output)

### 防抖（等待一段时间，一起做）

 - 实现思路：定时器内总是保存最新的定时器
 - 使用场景：等你一段时间不再触发，我再执行
 - [例子](https://jsbin.com/behunokime/edit?html,js,output)



## 对象拷贝

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190518100432.png)

#### es6的对象复制

1. `Object.assign` 浅拷贝
2. `扩展运算符` 浅拷贝

#### 实现一个深拷贝（有bug）

[递归 + 判断类型实现深拷贝](https://jsbin.com/cofevazaci/1/edit?js,console,output)

## 数组拍平，去重，排序

### 数组拍平

### 去重

#### 其他方法

1. indexOf去重(推荐！)

   新建一个 array，使用 indexOf 判断，如果不在 array 中，就 push 进去

   https://jsbin.com/qupimiqoju/1/edit?js,console,output

2. 对象属性去重(bug：得出来的是 string)

   新建一个对象，对象的 key 就是 array 的值

   https://jsbin.com/dixefugoni/1/edit

3. ES6 set 数据结构

   https://jsbin.com/quposulora/1/edit

   https://jsbin.com/xekojimayi/1/edit?html,js,console,output

### 三者一起使用

[例子](https://jsbin.com/nuyeficaba/1/edit)

## 函数柯里化



## 获取 url 的所有参数

https://jsbin.com/cisoyajilu/1/edit

## 斐波那契数列

[例子](https://jsbin.com/solehacopo/1/edit?js,console,output)



## 事件委托

[例子](https://jsbin.com/peditemope/1/edit?html,js,console,output)

## 一维数组与嵌套数组转化

- [一维数组转嵌套数组](https://jsbin.com/gexabiyuqu/1/edit?js,console,output)

  思路：

  - 添加一个 object，该 object 的 key 是 id，value 是 item。
  - 这个 object 可以完成 『获取 item， 并且获取 item 的父 item』

## 递归实现的需求

- 输入 5， 输出 5 * 4 * 3 * 2 * 1 的结果

  ```javascript
  function xxx(number){
    if(number === 1) return 1;
    if(number === 0) return 0;
  
    return number * xxx(number - 1);
  }
  
  console.log(xxx(0));
  console.log(xxx(1));
  console.log(xxx(2));
  console.log(xxx(3));
  console.log(xxx(4));
  console.log(xxx(5));
  ```

- 输入 x，n。输出 x 的 n 次方。

  ```javascript
  // pow(3, 4) === 3*3*3*3
  function pow(x, n){
    if(n === 1) return x;
  
    return x * pow(x, n - 1)
  }
  console.log(pow(3, 4));
  ```

- 数组扁平

  输入[[1,2,3], [4,[5]], [6, [7, [8]]]，输出[1,2,3,4,5,6,7,8]

  ```javascript
  function fn(arr){
    let arr1 = []
    arr.forEach((val)=>{
      if(val instanceof Array){
        arr1 = arr1.concat(fn(val))
      }else{
        arr1.push(val)
      }
    })
    return arr1
  }
  console.log(fn([[1,2,3], [4,[5]], [6, [7, [8]]]));
  ```

- 跳台阶

  > 一只青蛙可以一次跳 1 级台阶或者一次跳 2 级台阶，例如：
  >
  > 跳上第 1 级台阶只有一种跳法：直接跳 1 级即可。
  >
  >  跳上第 2 级台阶有两种跳法：每次跳 1 级，跳两次；或者一次跳 2 级。 
  >
  > 问要跳上第 n 级台阶有多少种跳法？

  ```
  function jump(stageNumber){
  	if(stageNumber === 1)return 1;
  	if(stageNumber === 2)return 2;
  	return jump(stageNumber - 1) + jump(stageNumber - 2);
  }
  ```

  