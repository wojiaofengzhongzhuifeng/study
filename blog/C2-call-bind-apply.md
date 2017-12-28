1. 参考:https://www.cnblogs.com/coco1s/p/4833199.html

2. ```
   function Fruits(){}
   Fruits.prototype = {
     	say: function(){
         console.log("my color is " + this.color)
   	}
   }

   var apple = {
     color: "red"
   }

   var banana = {
     color: "yellow"
   }

   //使用以下方法进行调用
   Fruits.prototype.say.call(apple)
   Fruits.prototype.say.call(banana)
   ```

   解释`Fruits.prototype.say.call(apple)`意思

   1. `Fruits.prototype.say`是找到say这个函数,并没有执行
   2. `call(apple)`指的是执行say这个函数,并且让say内的this变成apple

3. call()的使用方法: 

   1. 使用 某个函数AAA.call() 代替 某个函数AAA() 

   2. 如果没有给call传入第一个参数,则默认函数AAA的this指的是window对象

   3. call()之前是一个函数AAA

   4. call()内传的第一个参数 === 函数AAA中的this,this必须是一个对象

   5. call()内传的第二个参数及其之后的参数 === 函数AAA的参数

   6. call()的作用: 使用已经存在的函数, 并且函数内的this你可以指定

   7. call()的使用场景

      1. 将伪数组变成数组,并且使用数组的方法

         ` Array.prototype.slice.call(伪数组)`

   8. 我们使用的函数,大体可以分为两种: 一种是作为独立的函数(如你写一个冒泡排序函数),还有一种是作为某个对象的方法

      当我们在使用存在于某个对象的方法的时候,如

      ```
      function Cat(){}
      Cat.prototype = {
        food:"fish",
        say: function(){
          alert("i love " + this.food)
        }
      }
      var blackCat = new Cat()
      blackCat.say()
      ```

      `blackCat.say()`我们以前正常思维的写法

      但是我们使用这个更好`blackCat.say.call(blackCat)`

      当对象A的方法被另一个对象B引用的时候

      ```
      function Dog(){}
      Dog.prototype = {
        food:"gutou"
      }
      var whiteDog = new Dog()
      Cat.prototype.say.call(whiteDog)
      ```

      ​

4. apply()的使用方法:

   1. 和call()几乎一样,唯一不同的就是call()内传的第二个参数必须是数组

5. bind