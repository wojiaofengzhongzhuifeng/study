## 重点

1. 对函数的理解
2. 知道函数的调用,只能用一种方法
3. 作用域的作用: 告诉浏览器,在哪个作用域取变量
4. 函数声明方法
5. 变量提升的方法
6. this是什么?arguments是什么?
7. call stack是什么?  执行一个函数,则跳到这个函数的内部开始执行`执行区域的函数`
8. 闭包的概念
9. 在本文搜索`代码1`,有个特殊情况:①在本作用域有`a = 3333333`并且在本作用域没有`var a`,该怎么办?







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

```
var f = function(x, y){return x + y}
f.call(undefined, 2, 5)
```



# 什么是 call stack

看面试题的第四题,为什么打印出来的分别是test2,test1,test3,知道为什么,就大概了解什么是call stack



# this 和 arguments

```
var f = function(x, y){return x + y}
f.call(undefined, 2, 5)//this是call的第一个参数, arguments是[2,5]
```



# 作用域

1. 理解作用域: 

   1. 我们只能根据作用域来确定变量是哪个变量,但是不能确定变量的值

      比如在面试题中,每个作用域都有a,那么我们就只能通过作用域来确定我们使用哪个a

2. 使用作用域:

   1. 作用域范围 == function`{}`所包围的范围 
   2. 如果在本作用域找不到变量,那么在父作用域找
   3. 什么才能是父作用域?答案: 谁**包含**了本作用域?谁就是父作用域



## 变量提升方法

1. 拿到代码,首先进行变量提升

2. 变量提升方法:

   1. 对于`var a = 2` 
      - 复制原`var a = 2`的`var a`,放在该作用域的最前面(可以认为是紧接`}`之后)
      - 将原`var a = 2`删去`var `
   2. 对于`function f(){}`
      - 直接放在该作用域的最前面(可以认为是紧接`}`之后)
   3. 将变量提升与执行代码区域用空格分开

   ​

# 闭包

```
var a = 1
function f4(){
  console.log(a)
}
```

如果一个函数,使用了它范围外的变量,那么 **(这个函数 + 这个变量)** 就叫闭包







## 面试题

1. 题目: 

```
var a = 1
function f1(){
    alert(a) // 是多少
    var a = 2
}
f1.call()
```

先进行变量提升:

```
var a
a = 1
function f1(){
  var a
  alert(a)//是多少
  a = 2
}
f1.call()
```

接着选定好作用域,确定是哪个a,发现是作用域是函数f1,所以按照变量提升之后的代码逐行执行,得a = undefined



2. 题目

   ```
   var a = 1
   function f1(){
       var a = 2
       f2.call()
   }
   function f2(){
       console.log(a) // 是多少
   }
   f1.call()
   ```

   先进行变量提升

   ```
   //变量提升代码开始
   var a 
   function f1(){
     var a
     a = 2
     f2.call()
   }
   function f2(){
     console.log(a)
   }
   //变量提升代码结束

   a = 1
   f1.call()
   ```

   先执行a = 1,然后执行f1.call(),在执行f1.call()的时候,发现要执行f2.call(),执行f2.call()发现在本作用域没有a,就去全局作用域找a,最终打印a = 1







3. 题目:

   ```
   var liTags = document.querySelectorAll('li')
   for(var i = 0; i<liTags.length; i++){
       liTags[i].onclick = function(){
           console.log(i) // 点击第3个 li 时，打印 2 还是打印 6？
       }
   }
   ```

   先进行变量提升

   ```
   var liTags
   var i

   liTags = document.querySelectorAll('li')
   for(i = 0; i<liTags.length; i++){
       liTags[i].onclick = function(){
           console.log(i) // 点击第3个 li 时，打印 2 还是打印 6？
       }
   }
   console.log(i)
   ```

   看到console.log(i)的时候,发现本作用域没有i,所以父作用域(for)找,父作用域也没有,就去全局作用域找,所以console.log(i)的i应该在全局作用域的i,那么全局作用域的i等于多少呢?经过for循环,在全局作用域的i必然是第一个不符合`i<liTags.length`的值,容易知道i = 6



4. 题目:

   ```
   var a = 1
   function f1(){
     var a = 2
     f2.call()
     console.log("test1:"+a)
     
     function f2(){
       var a = 3
     console.log("test2:"+a)
     }
   }
   f1.call()
   console.log("test3:"+a)
   ```

   变量提升:

   ```
   //变量提升开始
   var a
   function f1(){
     var a
     function f2(){
       var a
       //执行代码区域CCCCC
       a = 3
       console.log("test2:"+a)
     }
     //执行代码区域BBBBBB
     a = 2
     f2.call()
     console.log("test1:"+a)
   }
   //变量提升结束

   //执行代码区域AAAAA
   a = 1
   f1.call()
   console.log("test3:"+a)
   ```

   过程:

   1. js**直接**执行代码区域AAAAA的代码,现在不管变量提升的代码!
   2. 执行`a = 1`
   3. 执行`f1.call()`,跳到f1的执行代码区域BBBBBB第一句(即`a = 2`),开始执行
   4. 发现要执行`f2.call()`
   5. 执行`f2.call()`,跳到f2的执行代码区域CCCCC第一句(即`a = 3`),开始执行
   6. 执行`console.log("test2:"+a)`,需要a变量,所以首先在f2的作用域找有没有`var a`,发现有,并且a = 3,因此第一个输出`test2:3`
   7. 执行完`console.log("test2:"+a)`,说明f2.call()执行完毕,接着执行`console.log("test1:"+a)`
   8. 上一步的代码`console.log("test1:"+a)`要使用a变量,首先在f1的作用域找有没有`var a`,发现有,并且a = 2,因此第二个输出`test1:2`
   9. `console.log("test1:"+a)`执行完之后,说明执行代码区域的`f1.call()`也执行完了,接着执行`console.log("test3:"+a)`
   10. 同样的,发现要使用a变量,在全局作用域找有没有`var a`,发现有,并且a是1,因此输出第三个`test3:1`



5. 题目(获得新知识):

   ```
   var a = 1
   function f1(){
     //新加的, 问题: a = 3333333的a指的是哪个a?  指的是var a = 1那个a
     a = 3333333
     f2.call()
     console.log("test1:" + a)
     
     function f2(){
       var a = 3
       console.log("test2:" + a)
     }
   }
   f1.call()
   console.log("test3:" + a)
   ```

   变量提升

   ```
   var a
   function f1(){
     function f2(){
       var a

       a = 3
       console.log("test2:" + a)
     }
     
     a = 3333333    //代码1
     f2.call()
     console.log("test1:" + a)
     
     
   }

   a = 1       //代码2
   f1.call()
   console.log("test3:" + a)
   ```

   再次改写代码,注意代码1位置的变化:

   ```
   var a
   function f1(){
     function f2(){
       var a

       a = 3
       console.log("test2:" + a)
     }
     
     f2.call()
     console.log("test1:" + a)
     
     
   }

   a = 1       //代码2
   a = 3333333    //代码1
   f1.call()
   console.log("test3:" + a)
   ```

   1. 为什么代码1的位置变?怎么变的?
      1. 第一个问题: 代码1`a=333333`在变量提升的时候,发现本作用域并没有`var a`(这就是和上面所有面试题都不同的地方),所以代码1会找到父作用域,看看有没有`var a`,发现有了,因此就知道代码1要换位置了.
      2. 第二个问题: 我在执行变量提升的代码1的时候,发现代码1是在f1函数中,所以我把代码1的位置放在**紧贴**f1函数之前.









```
var a = 1
function f1(){
  var a = 2
  f2.call()
  console.log("test1:"+a)
  
  function f2(){
    var a = 3
  console.log("test2:"+a)
  }
}
f1.call()
console.log("test3:"+a)

 
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
    console.log("标记2:"+a)
  }
}
f1.call()
console.log("标记3"+a)

//问题2: 标记1的a是多少?   
var a = 1
function f1(){
  console.log("标记1:"+a)
  var a = 2
  f4.call()
}

function f4(){
  console.log("标记3"+a)
}

f1.call()
console.log("标记2:"+a)


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












http://latentflip.com/loupe/?code=ZnVuY3Rpb24gc3VtKG4pewogICAgCiAgICBpZihuID09IDEpewogICAgICAgIHJldHVybiAxCiAgICB9ZWxzZXsKICAgICAgICByZXR1cm4gbiArIHN1bS5jYWxsKHVuZGVmaW5lZCwgbi0xKQogICAgfQp9CgpzdW0uY2FsbCh1bmRlZmluZWQsIDEwMCkgLy8gNSArIHN1bSg1KQovL3N1bSg0KSAvLyA0ICsgc3VtKDMpCi8vc3VtKDMpICAvLyAzICsgc3VtKDIpCi8vc3VtKDIpICAvLyAyICsgc3VtKDEpCi8vc3VtKDEp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D







## 函数理解

1. 函数最重要的两个值: 参数和返回值,如果有返回值不是undefined,一般要用一个变量去接
2. function和Function的区别?
   1. function是一个关键字,主要用来定义一个函数
   2. Function是一个构造函数,对象
3. 函数必有return,如果你没写,那么浏览器会在函数的最后加一句`return undefined`