## 函数的声明

```
//1. 具名法
function f1(x, y){
  return x + y
}
//2. 匿名法
var f2 = function(x, y){
  return x + y
}
//3. 匿名赋值法
var f3 = function xxxxx(x, y){
  return x + y
}
//4. new法
var f4 = new Function("x" , "y", "return x + y")
//5. 箭头函数法
var f5 = x => x*x  
```

注意: 箭头函数省略了3处

1. 如果只有一个参数,可以省略括号
2. 如果只有一句代码,只能同时省略return和{},不能只省略一个
3. //相当于  var f = (x) => {return x * x}

没什么用的知识

```
f1.name
f2.name
f3.name //特殊,返回的是'xxxxx'
f4.name //特殊,返回的是"anonymous"
f5.name
```



## 如何调用函数

1.    函数在内存图是什么存储的? 

   ​

```
var f = function(x, y){}
f.call(undefined, 2, 5)
```



# 什么是 call stack

# this 和 arguments

# 作用域

# 闭包

```
var a = 1
function f4(){
  console.log(a)
}
```

如果一个函数,使用了它范围外的变量,那么 (这个函数 + 这个变量) 就叫闭包





```
var a = 1
function f1(){
  var a = 2
  f2.call()
  console.log(a)
  
  function f2(){
    var a = 3
    console.log(a)
  }
}
f1.call()
console.log(a)

 
var a = 1
function f1(){
  var a = 2
  f2.call()
  console.log(a)
  
  function f2(){
    var a = 3
    console.log(a)
  }
}
//新加的,问题: 下面a = 2指的是那个 a ?  指的是一开始var a = 1那个a
a = 2 
f1.call()
console.log(a)



var a = 1
function f1(){
  var a = 2
  //新加的,问题: 下面的 a = 3指的是那个 a ?  指的是var a = 2那个a
  a = 3
  f2.call()
  console.log(a)
  
  function f2(){
    var a = 3
    console.log(a)
  }
}
f1.call()
console.log(a)



var a = 1
function f1(){
  //新加的, 问题: a = 3的a指的是哪个a?  指的是var a = 1那个a
  a = 3
  f2.call()
  console.log(a)
  
  function f2(){
    var a = 3
    console.log(a)
  }
}
f1.call()
console.log(a)





//问题1:标记1的a是多少?  undefined   
var a = 1
function f1(){
 

  f2.call()
  console.log("标记1"+a)//标记1
  var a = 2
  
  
  function f2(){
    var a = 3
    console.log(a)
  }
}
f1.call()
console.log(a)

//问题2: 标记1的a是多少?   
var a = 1
function f1(){
  console.log(a)
  var a = 2
  f4.call()
}

function f4(){
  console.log("标记1"+a)
}

f1.call()
console.log(a)


//问题3: ?????有一行代码,问: 有没有可能使得遮住的代码令标记1打印出2   可能 a = 2 即可
var a = 1
function f1(){
  console.log(a)
  var a = 2
  f4.call()
}

function f4(){
  console.log("标记1"+a)
}

????????
f1.call()
console.log(a)


//???有一行代码,问:　a一定是1吗?   不是  如果????代码是  a = 2那么打印出的是2
//这说明: 作用域说的是这个a是哪个a,并没有说这个a的值是哪个a的值,
var a = 1
function f4(){
  console.log(a)
}
????
f4.call()

//
http://js.jirengu.com/nicawehuso/1/edit?js,output
```



总结: 

1. 拿到代码,首先进行变量提升

2. 变量提升方法:

   1. 对于`var a = 2` 
      - `var a`放在该作用域的最前面(可以认为是紧接`}`之后)
      - `a = 2`放在原`var a = 2`的位置
   2. 对于`function f(){}`
      - 直接放在该作用域的最前面(可以认为是紧接`}`之后)

3. 看题目要什么

4. 作用域范围 == function`{}`所包围的范围 

5. 如果在本作用域找不到a,那么在父作用域找

6. 什么才能是父作用域?答案: 谁**包含**了本作用域?谁就是父作用域

   ​

   ​



## 总结

1. 函数的调用: `fn.call(undefined, 1, 2)`
2. 作用域的作用: 告诉浏览器,在哪个作用域取变量
3. 函数声明





http://latentflip.com/loupe/?code=ZnVuY3Rpb24gc3VtKG4pewogICAgCiAgICBpZihuID09IDEpewogICAgICAgIHJldHVybiAxCiAgICB9ZWxzZXsKICAgICAgICByZXR1cm4gbiArIHN1bS5jYWxsKHVuZGVmaW5lZCwgbi0xKQogICAgfQp9CgpzdW0uY2FsbCh1bmRlZmluZWQsIDEwMCkgLy8gNSArIHN1bSg1KQovL3N1bSg0KSAvLyA0ICsgc3VtKDMpCi8vc3VtKDMpICAvLyAzICsgc3VtKDIpCi8vc3VtKDIpICAvLyAyICsgc3VtKDEpCi8vc3VtKDEp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D







## 草稿

1. 函数最重要的两个值: 参数和返回值,如果有返回值,一般要用一个变量去接
2. function和Function的区别? function是关键字,Fucntion是对象??
3. 函数必有return,如果你没写,那么浏览器会在函数的最后加一句`return undefined`