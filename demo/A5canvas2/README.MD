canvas思路:

1. 画圆形

2. 模拟用户涂鸦过程,思考监听什么事件

3. 点击canvas的时候,应该画一个圆

4. 在canvas中移动也应该跟随鼠标画圈

   1. 套路:如何在点击canvas的情况下,在canvas中移动才跟随鼠标画圈?

      方法: 1. 声明一个锁`var paint = falses` 2. 在点击canvas时改变锁的状态`paint = true` 3. 在canvas移动的时候用if判断`if(paint){//画圆}`

5. 写一个画一条线的函数,传入四个参数,分别是第一个点的(x,y)和第二点的(x,y)

6. 想正常模拟涂鸦效果,必须在两个圆之间画线,同时只要mousemove了,就必须更新第一点,第二点的坐标

   1. 更新方法: 让第一个点 = 第二个点即可

7. 增加功能: 让canvas充满屏幕

   1. 获取页面宽度: `document.documentElement.clientWidth`
   2. 给canvas添加属性,注意不是样式

8. 当页面宽度变化时候,依然能充满屏幕

9. 添加功能: 橡皮差,(和铅笔按钮公用)

   1. 当我点击橡皮差btn 的时候,才使用橡皮差功能,再次点击,使用铅笔,



canvas问题: 

1. 代码

   ```
   var firstPoint = {
       x: undefined,
       y: undefined
   }
   yyy.onmousedown = function(eee){
       paint = true
       var x = eee.clientX
       var y = eee.clientY
       firstPoint.x = x
       firstPoint.y = y    
       drawCircle(x,y,10)
   }
   //为什么把firstPoint放到onmousedown里面,onmousemove函数取不到firstPoint的值?
   ```

   如果一个变量在n个函数使用,就应该放在全局变量中

   如果一个变量在一个函数使用,就应该放在那个函数中