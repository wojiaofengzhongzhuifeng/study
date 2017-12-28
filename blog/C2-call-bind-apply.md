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

3. call(0的使用方法: 

   1. call()之前是一个函数AAA
   2. call()内传的第一个参数 === 函数AAA中的this,this必须是一个参数
   3. call()内传的第二个参数及其之后的参数 === 函数AAA的参数