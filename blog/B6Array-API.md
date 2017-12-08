1. ## 草稿

   1. 函数最重要的两个值: 参数和返回值

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

   5. function和Function的区别?

   6. 函数必有return,如果你没写,那么浏览器会在函数的最后加一句`return undefined`

   7. ?函数的内存图

   8. 实例,构造函数,构造函数原形区别与关系>\??画图

   9. 数组是特殊的对象怎么理解?

      我们都知道,对象是由`key:value`构成的,那么当key是从数字零开始,按照整数的顺序组合,并且有个特殊的key=length,这样形式的对象叫数组

      两个条件符合才是数组: 

      1. key=0,1,2,3,4...n   和  length = n + 1
      2. 实例 原形链中的\__proto__指向Array.prototype

   10. 伪数组是什么意思?有什么特征

      1. 只符合两个数组条件的第一个
      2. 现在知道的数组:`arguments`和`document.querySelectAll('div')`

   11. 如果你不知道内存图存了什么,就`console.dir()`

   12. `var a = [1,2,3] ; a.xxx="xxx"`

      两种遍历方式   for和forIn区别

   13. 数组的API,理解函数A的参数是函数B

   14. forEach函数接受函数B的理解过程

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

      ///关键点,接受一个函数并且执行同时传参给一个函数,重点是作为参数的函数可以带自己的参数
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

      ​
