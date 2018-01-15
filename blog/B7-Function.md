## 重点

1. 对函数的理解
2. 知道函数的调用,只能用一种方法
3. 作用域的作用: 告诉浏览器,在哪个作用域取变量
4. 声明函数的三种方法及其调用函数,
5. 变量提升的方法
6. this是什么?arguments是什么?
7. call, apply, bind的使用区别
8. call stack是什么?  执行一个函数,则跳到这个函数的内部开始执行`执行区域的函数`
9. 闭包的概念
10. 在本文搜索`代码1`,有个特殊情况:①在本作用域有`a = 3333333`并且在本作用域没有`var a`,该怎么办?
11. 搜索`局部变量`，知道 ES6 之前 js 使用局部变量语法实现和 ES6 使用局部变量语法.
12. 搜索`依附`,知道函数可以分为两类
13. callback === 函数 ,在ajax那篇博客有







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
  //1111
  return x + y
}
//特殊,返回的是'xxxxx'
f3.name 
//直接报错	
console.log(xxxxx)

//4. new法
var f4 = new Function("x" , "y", "return x + y")
//特殊,返回的是"anonymous"
f4.name 


//5. 箭头函数法
var f5 = x => x*x  
```

1. 注意: 箭头函数省略了3处
   1. 如果只有一个参数,可以省略括号
   2. 如果只有一句代码,只能同时省略return和{},不能只省略一个
   3. //相当于  var f5 = (x) => {return x * x}
2. 注意第三个情况: 匿名赋值法
   1. 可以在全局作用域使用 f3 这个函数
   2. 只能在1111内的区域使用 xxxxx 这个函数



## 如何调用函数

目前有三种声明函数的方法:

构造函数 === Function,String,Boolean,Object,Number,Array

```
function newPush(value, array){
	array.push(value)
	return array
}
Array.prototype.newPush = function(value, array){
	array.push(value)
	return array
}
Array.newPush = function(value, array){
	array.push(value)
	return array
}
```

那个他们的调用方法分别是

```
newPush.call(undefined, 55555, [1,2,3,4,5])
Array.prototype.newPush.call(undefined, 55555, [1,2,3,4,5])
[].newPush.call(undefined, 55555, [1,2,3,4,5])//这是第二种函数声明的第二种调用方法,这是不会的
Array.newPush.call(undefined, 55555, [1,2,3,4,5])
```

他们的区别是

1. 第一个是挂在window对象
2. 第二个是挂在构造函数.prototype对象,
3. 第三个是挂在构造函数中



# 什么是 call stack

1. 重点: call stack  === 遇到执行函数`fn()`就跳到函数体内部`function fn(){}`, 执行完函数`function(){}的}`就跳到执行函数`fn()`后一行
2. 看面试题的第四题,为什么打印出来的分别是test2,test1,test3,知道为什么,就大概了解什么是call stack
3. 看一个例子http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYSgpewogICAgY29uc29sZS5sb2coJ2ExJykKICAgIGIoKQogICAgY29uc29sZS5sb2coJ2EyJykKICByZXR1cm4gJ2EnICAKfQpmdW5jdGlvbiBiKCl7CiAgICBjb25zb2xlLmxvZygnYjEnKQogICAgYygpCiAgICBjb25zb2xlLmxvZygnYjInKQogICAgcmV0dXJuICdiJwp9CmZ1bmN0aW9uIGMoKXsKICAgIGNvbnNvbGUubG9nKCdjJykKICAgIHJldHVybiAnYycKfQphKCkKY29uc29sZS5sb2coJ2VuZCcp!!!

# this 和 arguments

1. this 的由来

   想象没有 this 的 js 代码

   ```
   var person = {
     name: 'frank',
       sayHi: function(person){
       console.log('Hi, I am' + person.name)
     },
     sayBye: function(person){
       console.log('Bye, I am' + person.name)
     },
     say: function(person, word){
       console.log(word + ', I am' + person.name)
     }
   }
   ```

   调用其中的方法为

   ```
   person.sayHi(person)
   person.sayBye(person)
   person.say(person, 'How are you')
   ```

   这实在是太麻烦了,我能不能像这样调用?

   ```
   //这段代码的意思是: 以person为this调用sayHi这个函数
   person.sayHi()
   person.sayBye()
   person.say('How are you')
   ```

   可以的,我们可以通过以下方法达到目的

   1. 修改源代码
      1. 让之前的`person.name`变成了`xxxx.name` 
      2. 规定: person 内的方法不再传参数
      3. 规定: 谁(①"谁"是一个对象②"谁" === `.之前的对象`)调用了`sayHi`,`sayBye`,`say`,那么xxxx就是"谁"
      4. 把 xxxx 换成 this

   ```
   var person = {
     name: 'frank',
     sayHi: function(){
     	console.log('Hi, I am' + this.name)
     },
     sayBye: function(){
     	console.log('Bye, I am' + this.name)
     },
     say: function(word){
     	console.log(word + ', I am' + this.name)
     }
   }
   ```

   在使用过程中,发现第三点规定并不好,有的时候 this 不一定是`.之前的对象`,我们需要自己指定 this 是谁

   完整的函数调用

   ```
   //这段代码的意思是: 以person为this调用sayHi这个函数
   person.sayHi.call(person)
   person.sayBye.call(person)
   person.say.call(person, 'How are you')
   ```

   这咋一看回到了一开始调用函数的方法,但是多了一个非常重要的功能: "你只可以写一次`sayHi`,`sayBye`,`say`, 通过this来让不同的对象使用`sayHi`,`sayBye`,`say`函数"

2. 题目:

```
var f = function(x, y){return x + y}
f.call(undefined, 2, 5)
//this是call的第一个参数, arguments是[2,5]
//为什么是undefined? 因为函数可以分为两种, 一种是依附于某些对象的函数,如sayHi,还有一种是不依附于对象的函数, 如果是不依附于对象的函数,那么其中的this就没有任何意义, 写undefined



function f(){
  console.log(this)
}
f.call(1)
//打印出多少?   答案是 Number对象1 

function f(){
    'use strict'
    console.log(this)
}
f.call(1)
//打印出多少    答案是 1

function f(){
    console.log(this)
}
f.call()
//打印出多少    答案是 window对象,大写的和小写的有什么区别?

function f(){
    'use strict'
    console.log(this)
}
f.call()
//打印出多少   答案是undefined,不是"undefined",为什么不是undefined??  因为this必须是对象



function f1(){
    console.log("第一个 this"+this) // 第一个 this
    function f2(){
        console.log("第二个 this"+this) // 第二个 this
    }
    f2.call()
}
var obj = {name: 'obj'}
f1.call( obj )

var person = {
  name: 'frank',
  sayHi: function(){
  	console.log('Hi, I am' + this.name)
  }
}
var fn = person.sayHi
fn() //这个输出什么? 输出 "Hi, I am"
//因为fn() === window.fn()    或者fn()  等价于  fn.call()  然后按照总结的第2点  
//而window.name又没有指定,所以this.name没有值
```

3. 总结:
   1. 使用严格模式,call 第一个参数是什么,this就是什么
   2. 没有使用严格模式  + call调用没有第一个参数,那么 this === window
   3. 没有使用call调用(如`person.sayHi()`), sayHi 函数内的 this === `.之前的对象`
   4. 使用严格模式 + call 调用没有第一个参数,this === undefined
   5. this必须为对象



## call, apply, bind

1. call 和 apply 都是直接调用函数, 两者作用只有一点不同,下面以 call 为例

2. call 的第一个参数一定为 this . 

3. 当不确定传入的参数或者穿入的参数很多的时候,使用apply.

4. bind是返回一个新函数(并没有调用原来的函数),这个函数会call原来的函数,call的参数由你决定

5. 对于bind的理解和使用场景

6. ```
   var view = {
     element: $("#div1"),
     bindEvents: function(){
       this.element.onclick = function(){
         //这里想调用onClick函数,应该怎么写?
       }
     }
     onClick: function(){
       //实现代码,假设已经实现了
     }
   }
   ```

   如果这样写,是错误的

   ```
   var view = {
     element: $("#div1"),
     bindEvents: function(){
       this.element.onclick = function(){
       //这里的this是被点击的元素
         this.onClick.call(this)
       }
     }
     onClick: function(){
       //实现代码,假设已经实现了
     }
   }
   ```

   因为要调用onClick这个函数,必须是`view.onClick()`,而现在的代码中,this指向的是被点击的元素(浏览器规定),所以可以这样解决

   ```
   var view = {
     element: $("#div1"), 
     bindEvents: function(){
     	var _this = this//右边的this表示view, _this将view对象保存,给onclick中的函数使用
       this.element.onclick = function(){
         _this.onClick.call(_this)  //1
       }
     }
     onClick: function(){
       //实现代码,假设已经实现了
     }
   }
   ```

   但是这样好麻烦, 我能不能直接将代码1写成类似具有正常思维的代码?例如: `this.onClick.call(this)`

   ```
   var view = {
     element: $("#div1"), 
     bindEvents: function(){
       this.element.onclick = this.onClick.bind(this)
     }	
     onClick: function(){
       //实现代码,假设已经实现了
     }
   }
   ```

   我对bind的理解: 重新指定call的this,下面是我的解释:

   对于第一次错误的代码来说,它错的原因: js 规定, 如果是 onclick 事件,那么 onclick 内的函数的 this 只能为被点击的元素. 那么, 我们就使用 bind , 去重新指定 onclick 内的函数 this 为 view 对象.



# 作用域

1. 理解作用域: 

   1. 我们只能根据作用域来确定变量是哪个变量,但是不能确定变量的值

      比如在面试题中,每个作用域都有a,那么我们就只能通过作用域来确定我们使用哪个a

2. 使用作用域:

   1. 作用域范围 == function`{}`所包围的范围 
   2. 如果在本作用域找不到变量,那么在父作用域找
   3. 什么才能是父作用域?答案: 谁**包含**了本作用域?谁就是父作用域

3. 代码

   ```
    var global1 = 1
    function fn1(param1){
        var local1 = 'local1'
        var local2 = 'local2'
        function fn2(param2){
            var local2 = 'inner local2'
            console.log(local1)
            console.log(local2)
            console.log(test)
        }
   	 fn2()

        function fn3(){
            var local2 = 'fn3 local2'
            fn2(local2)
        }
        fn3()
    }
   fn1()
   ```

   通过上面的代码可以画出下面的词法树

   ![未命名文件 (19).png](http://upload-images.jianshu.io/upload_images/5529438-3ab0263f191aa0ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   注意点:

   1. 声明的变量, 函数, 函数的输入参数都是一个结点
   2. 打印的第一个local1的过程:
      1. 首先先找到fn2函数内部有没有local1这个变量
      2. 没有,就去fn2的同级找,找到了,是fn1函数内部的local1这个变量,然后就看代码,找到了"local1"
   3. 怎么样让test取得值? 把`var test = "test"`放在除fn3函数内部都可以
   4. 怎么样让test取不到值? 把`var test = "test"`放在fn3函数内部



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



## 闭包

1. 闭包 = 函数 + 函数内部能访问的变量

2. ```
   var local = "变量"
   function foo(){
     console.log(local)
   }
   ```

   这就是最简单的一个闭包

   但是这样不好,不好在我本来明明只想 foo 函数中使用 local  

   但是你却把它放到了全局作用域中, 这样 local 在其他的函数也能修改了.

   所以我在闭包的基础上添加一些代码,使得变量 local 只能在 foo 使用

   ```
   !function(){
     var local = "变量"
     function foo(){
     	console.log(local)
     }
   }()
   foo()
   ```

   但是这样写的代码是错误的,因为在全局作用域中没有 foo 这个函数,所以我们现在要通过一些手段把 foo 函数放到全局作用域中,方法有三种

   ```
   !function(){
     var local = "变量"
     window.foo = function (){
     	console.log(local)
     }
   }()
   foo()
   ```

   ````
   var a = function(){
     var local = "变量"
     function foo(){
       console.log(local)
     }
     return foo
   }
   a()()
   ````

   ```
   var a = (function(){
     var local = "变量"
     function foo(){
     	console.log(local)
     }
     return foo
   })()
   a()
   ```

   这样,你就可以在全局使用 foo 函数,而 foo 函数可以访问到 local 变量,并且在其他的函数不能访问到 local 这个变量

   现在来回答关于闭包的问题: 

   1. 什么是闭包

      ```
      var local = "变量"
      function zzz(){
        console.log(local)
      }
      ```

      函数zzz + 变量local  = 闭包

   2. 闭包的作用是什么?

      **间接**访问一个变量AAAAAA,具体实现过程如下

      ![未命名文件 (17).png](http://upload-images.jianshu.io/upload_images/5529438-bd75d714558bf2e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

      这样,你就可以通过全局的函数BB来访问变量AA,并且变量AA不能被其他作用域的函数所访问.

      ​



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

   ​







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
4. 函数内有this和arguments







## 局部变量

1. ES6之前

   1. 推论: 不能使用全局变量,因为全局变量会相互覆盖 => 如果想使用局部变量,必须有一个函数 => 所以我们声明这个函数,并且立即调用它 => 如果直接写立即执行函数,会报错,所以要添加一个字符串
   2. 总结: **使用局部变量 === 通过立即执行函数实现**
   3. 例子

   ```
   !function(){
     var a = 11111
     console.log("在局部作用域的a:"+ a)
   }()
   console.log("在全局作用域的a:"+ a)
   ```

   4. ES6之前使用局部变量 = 函数 + 函数后直接加() + 函数加某些字符串
      1. `(function(){}())`
      2. `(function(){})()`
      3. `-function(){}()`
      4. `+function(){}()`
      5. `!function(){}()`

2. ES6

   1. 总结: 使用局部变量 = let + `{}`
   2. 例子

   ```
   {
     let a = 1
     console.log("在局部作用域的a:"+ a)
   }
     console.log("在外部作用域的a:"+ a)
   ```

   ​



