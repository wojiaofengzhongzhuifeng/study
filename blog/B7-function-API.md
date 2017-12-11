## 重点

1. 函数的调用: `fn.call(undefined, 1, 2)`
2. 作用域的作用: 告诉浏览器,在哪个作用域取变量
3. 函数声明方法
4. this是什么?argument是什么?
5. 闭包的概念







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

# this 和 arguments

```
var f = function(x, y){return x + y}
//只能用下面的方法调用函数
f.call(undefined, 2, 5)//this是call的第一个参数, arguments是[2,5]
```



# 作用域

我们只能确定变量是哪个变量,但是不能确定变量的值

根据作用域来判断变量在哪里取

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

   看到console.log(i)的时候,发现本作用域没有i,所以父作用域(for)找,父作用域也没有,就去全局作用域找,所以console.log(i)的i应该在全局作用域找,那么全局作用域的i等于多少呢?经过for循环,在全局作用域的i必然是第一个不符合`i<liTags.length`的值,容易知道i = 6



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
       
       a = 3
       console.log("test2:"+a)
     }
     
     a = 2
     f2.call()
     console.log("test1:"+a)
   }
   //变量提升结束

   //执行代码区域
   a = 1
   f1.call()
   console.log("test3:"+a)
   ```

   过程:

   1. js直接执行代码区域的代码
   2. 执行f1.call()
   3. 在f1中发现要执行f2.call()
   4. 执行f2.call()
   5. 从f2的代码知道要使用a变量,首先在f2的作用域找有没有a变量,发现有a,并且a = 3,因此第一个输出`test2:3`
   6. 执行完f2.call(),接着执行`console.log("test1:"+a)`
   7. 上一步要使用a变量,首先在f1的作用域找有没有a变量,发现有a,并且a = 2,因此第二个输出`test1:2`
   8. `console.log("test1:"+a)`执行完之后,说明执行代码区域的`f1.call()`也执行完了,接着执行`console.log("test3:"+a)`
   9. 同样的,发现要使用a变量,在全局作用域找有没有a变量,发现有,并且a是1,因此输出第三个`test3:1`































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
   3. 将变量提升与执行代码区域用空格分开

3. 看题目要什么

4. 作用域范围 == function`{}`所包围的范围 

5. 如果在本作用域找不到a,那么在父作用域找

6. 什么才能是父作用域?答案: 谁**包含**了本作用域?谁就是父作用域

   ​

   ​







http://latentflip.com/loupe/?code=ZnVuY3Rpb24gc3VtKG4pewogICAgCiAgICBpZihuID09IDEpewogICAgICAgIHJldHVybiAxCiAgICB9ZWxzZXsKICAgICAgICByZXR1cm4gbiArIHN1bS5jYWxsKHVuZGVmaW5lZCwgbi0xKQogICAgfQp9CgpzdW0uY2FsbCh1bmRlZmluZWQsIDEwMCkgLy8gNSArIHN1bSg1KQovL3N1bSg0KSAvLyA0ICsgc3VtKDMpCi8vc3VtKDMpICAvLyAzICsgc3VtKDIpCi8vc3VtKDIpICAvLyAyICsgc3VtKDEpCi8vc3VtKDEp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D







## 草稿

1. 函数最重要的两个值: 参数和返回值,如果有返回值,一般要用一个变量去接
2. function和Function的区别? function是关键字,Fucntion是对象??
3. 函数必有return,如果你没写,那么浏览器会在函数的最后加一句`return undefined`