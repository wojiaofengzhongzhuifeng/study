## Array是特殊的对象,怎么理解?什么才能称为数组?

我们都知道对象是由一个或者多个`key:value`组合而成的数据类型

**特别**地,当①某个对象的key为0,1,2,3,4,5...n.某个key为length.②并且某个对象的\__proto__等于Array.prototype

我们才能称这个对象为Array.

因此:数组的条件是:

1. key=0,1,2,3,4...n   和  length = n + 1
2. 某个对象的原形链中的\__proto__指向Array.prototype

## 定义Array的特殊之处

前面知道了Array的本质, 然而我们在定义一个数组的时候,有些特殊,如

```
var a = Array(3)  //特殊
var b = Array(3,3)
var c = new Array(3)
var d = new Array(3,3)
```

用`console.dir()`可以知道内存图

总结:

1. 构造函数有`String,Boolean,Number,Object,Array,Function`
2. 基本类型有`String,Boolean,Number`
3. `new 构造函数()`一定返回一个对象
4. ` 构造函数()`如果是构造函数是基本类型,返回这个基本类型;如果是Object,那么返回Object类型(a变量除外)







## 什么是伪数组?常用的伪数组有哪些?

数组条件中,不符合第二个条件的就是伪数组

函数传入的参数`arguments`是伪数组

`var divs = document.querySelectAll('div')`,divs是伪数组

## 常用的Array的API

先做以下规定

```
//参数是一个函数,规定该传入的函数名为zzz,并且除了sort,其他都返回一个新的对象,也就是不会改变array的值
array.forEach(zzz(x, y))
array.sort(zzz(x, y))
array.map(zzz(x, y))
array.filter(zzz(x, y))
array.reduce(zzz(x, y), v)
//参数不是函数,并且都是在array上操作的,也就是会改变array的值
array.reverse()
array.join()
array.concat()
```

1. forEach对数组内每个值执行同一个函数,不能获得执行函数的结果
   1. `zzz(x, y)`的 x 只能表示array的 value
   2. `zzz(x, y)`的 y 只能表示array的 key
   3. 不需要自己写return
2. sort创建一个新数组,新数组的值是原数组的,按升序或者降序排列
   1. `zzz(x, y)`的 x 只能是0,2,4...以此类推
   2. `zzz(x, y)`的 y 只能是1,3,5...以此类推
   3. return 后面接的是两个值相减
3. map创建一个新数组,对原数组内每个值执行同一个函数,并且可以获得执行函数后的新数组结果
   1. `zzz(x, y)`的 x 只能表示array的 value![]()
   2. `zzz(x, y)`的 y 只能表示array的 key
   3. 与forEach一样,唯一不同的是你要写return, 内容是新数组内的值(newValue)
4. filter用于过滤,创建一个新数组,数组内是 return 为 true 的值
   1. `zzz(x, y)`的 x 只能表示array的 value
   2. `zzz(x, y)`的 y 只能表示array的 key
   3. return 后面接的是 boolean 
5. array.reduce(zzz(x, y), v)
   1. `zzz(x, y)`的 x 只能表示麻袋,作为被zzz函数return的值
   2. `zzz(x, y)`的 y 只能表示原数组内的每一个值
   3. v 表示一开始麻袋的钱
6. concat: 可用于数组的复制`var a = [1,2,3,4,5,6];var b = a.concat([]); a === b//返回false`





##  



## 草稿

1. 函数最重要的两个值: 参数和返回值,如果有返回值,一般要用一个变量去接

2. 现在已知的构造函数有`Function,String,Boolean,Object,Number,Array`
   `String,Boolean,Number`属于基本类型
   那么`new 构造函数()`与`构造函数()`的区别是什么呢?

   1. `new 构造函数()`一定返回一个对象
   2. ` 构造函数()`如果是基本类型,返回这个基本类型;如果是Object,那么返回Object类型

3. `var a = Array(3)`在内存图是什么样的?  这是最特别的!
   ![选区_100.png](http://upload-images.jianshu.io/upload_images/5529438-c674655a18c795a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. `var a = Array(3)`返回`[]`
   `var a = Array(3,3)`返回`[3,3]`

   `var a = new Array(3)`返回`[]`

   `var a = new Array(3,3)`返回`[3,3]`

5. function和Function的区别? function是关键字,Fucntion是对象??

6. 函数必有return,如果你没写,那么浏览器会在函数的最后加一句`return undefined`

7. ?函数的内存图

8. 实例,构造函数,构造函数原形区别与关系>\??画图

9. 数组是特殊的对象怎么理解?

   我们都知道,对象是由`key:value`构成的,那么当key是从数字零开始,按照整数的顺序组合,并且有个特殊的key=length,这样形式的对象叫数组

   两个条件符合才是数组: 

   1. key=0,1,2,3,4...n   和  length = n + 1
   2. 实例 原形链中的\__proto__指向Array.prototype

10. 伪数组是什么意思?有什么特征

11. 只符合两个数组条件的第一个

12. 现在知道的数组:`arguments`和`document.querySelectAll('div')`

13. 如果你不知道内存图存了什么,就`console.dir()`

14. `var a = [1,2,3] ; a.xxx="xxx"`

15. 两种遍历方式   for和forIn区别

13.  数组的API,理解函数A的参数是函数B

14.  forEach函数接受函数B的理解过程

    1. 重点:

       没有返回值

   ```
   //非常正常的一个函数
   function f(x,y){
     return x + y
   }

   //函数接受参数为另一个函数,但是不做任何处理
   function f2(fn){
     console.log("我接受一个函数")
     //就算你不写,就算你不写,也会帮你加
     return undefined
   }

   //上面的即时你传入的参数是字符串,它还是以为你是函数,所以要把传入的参数进行判断类型
   function f2(fn){
     if(typeof fn !== "function"){
       console.log("滚")
       return true
     } else {
       console.log("我接受到一个函数")
       return true
     } 
   }

   //关键点,接受一个函数并且执行一个函数,如果参数传入的是函数,那么我就执行这个函数
   function f2(fn){
     if(typeof fn !== "function"){
       console.log("滚")
       return true
     } else {
       console.log("我接受到一个函数")
       fn()
       console.log("并且我执行了这个函数")
       return true
     } 
   }

   ///关键点,接受一个函数并且执行同时传参给一个函数,重点是作为参数的函数可以使用数组的值作为参数
   //这个代码的意思是: f2函数接受一个函数B作为参数,并且我让函数B的参数为666
   function f2(y){
     y(666)
   }

   //自己写一个forEach函数,通过前一个的例子
   //现在我知道forEach的作用,传入函数B作为参数,并且函数B的第一个参数只能是数组的value,第二个参数只能是数组的key
   //a.forEach()接受一个函数B作为参数
   //函数B的第一个参数一定是a的value
   //函数B的第二个参数一定是a的key
   function forEach(array, fn){
     for(var i= 0; i < array.length;i++){
       fn(array[i], i)
     }
   }
   //调用forEach方法
   forEach([1,2,3], function(value, key){
     console.log(value)
     console.log(key)
   })

   //尝试理解下面的内容,现在不要求理解
   var obj = {0: "a", 1:'b', 'ength':"2"}
   obj.forEach = function(x){
     for(var i = 0; i < this.length;i++){
       x(this[i], i)
     }
   }
   //调用forEach方法
   [1,2,3].forEach(function(valu e, key){
     console.log(value)
     console.log(key)
   }
   ```

15.  array.sort()

16.  重点是

    1. 返回这个array,这个array经过排序,只有它改变了array

    2. sort的使用方法和forEach的一样,都是传入一个函数B,只不过函数B的第一个参数是0,第二个参数是1,以此类推

       ```
       var array = [23,432,432,32,423,3,21,3,2]
       //升续
       array.sort(  function(x,y){return x- y}  )

        
       //比较马云: 100; 马化腾: 200; 李红: 300的资产
       var a  = [  "马云","马化腾","李红"]
       var hash = {
         "马云": 100,
         "马化腾": 200,
         "李红": 300
       }

       a.sort(  function(x, y){return hash[y] - hash[x]} )
       ```

17.  array.reverse()    英文: 反转

    1.  重点:

        返回array处理后的数组

18.  array.join()     英文 : 连接

    1. 重点: 
        1. 返回一个新的字符串,

        2. 传参,则返回一个用参数连接的字符串,

          ```
          var array = [32,4,321]
          var array2 = array.join("xxxxxxx")
          array2  //"32xxxxxxx4xxxxxxx321"
          ```

    ​	3. 不传参,默认用逗号连接

19.  array.concat()    英文: 合并

    1. 重点: 
       1. 返回新数组

       ```
       var a = [1,2,3]
       var b = [4,5,6]
       var c = a.concat(b)
       c  // [1,2,3,4,5,6]
       ```
    ​	2. 复制一个数组

          ```
          var a = [12,5,6]
          var aCopy = a.concat([])
          a === aCopy//false
          ```

20.  array.map()    英文 : 映射

    1. 重点: 

       与forEach几乎相同,只不过map返回一个经过函数B处理后的新数组,forEach没有返回任何值

       ```
       var array = [2,3,4]
       var arrayB = array.map(  function(value, key){
         var newValue;
         newValue = value * value;
         return newValue
       })
       arrayB//[2,4,6]
       ```

21.  array.filter()   英文: 过滤器

    1. 重点: 

       与forEach几乎相同, 只不过filter返回一个经过函数B判断后为true的新数组

       ```
       var array = [2,3,4,5,6,7,8]
       var arrayB = array.filter(  function(value, key){
         //if(value % 2 == 0){
        //   return true
        // }
        return value % 2 == 0
       } )
       arrayB//[2,4,6,8]
       ```

22.  array.reduce()  英文: 减少, 

    1. 重点:  

       与forEach几乎相同,只不过reduce有两个参数,第一个是函数B,但是函数B的第一个参数是sum表示的是之前函数处理的结果,第二个参数是n表示下一个array的值.reuduce的第二个参数是第一次的sum,返回的数据类型要根据reduce的第二个参数决定

       ```
       //map可以用reduce代替
       var a = [3,4,5]
       a.reduce( function(arr, n){
         arr.push(n * 2)
         return arr
       }, [])
       // filte可以用reduce代替
       //不太明白return arr 是什么意思?
       var a = [2,3,5,6,7,6,6,5,5,5]
       var b = a.reduce( function(arr, n){
         if(n % 2 === 0){
           arr.push(n)
         }
         return arr
       } ,[])
       //练习题
       //使用reduce计算所有奇数之和
       var a = [1,2,3,4,5,6,7,8,9]
       a.reduce(function(sum, y){
    	if(y % 2==1){
    		sum = sum + y
    	}
    	return sum
    	}, 0)
       ```

       ​

    ​
