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

   1. 当我点击橡皮差btn 的时候,才使用橡皮差功能,再次点击,使用铅笔,这里用状态锁
   2. 对于之前所有的mouse事件里面的代码,我都认为是使用铅笔的代码,所以我使用if(){}来区分使用橡皮差和铅笔
   3. 在mouse事件里面的代码中,有一些代码是使用铅笔和使用橡皮差都会执行的,把他们提取出来,放到if(){}语句的上面或者下面.
   4. 橡皮差的功能本来应该是当我点击橡皮差btn和点击canvas视图两个情况下才能使用,但是测试的时候,发现我点击橡皮差btn时,不需要点击canvas视图就能使用,说明在mousedown的时候,应该给if(){}中使用橡皮差这条路添加一个状态锁,查看代码发现使用铅笔这条路本身有一个状态锁paint,因此我们将paint换成usingTool.
   5. 自然的,在mousemove的时候,使用橡皮差需要点击btn和点击canvas两个条件,而现在的代码之只有点击btn一个条件,说明缺少了一个if(){}来控制橡皮差的使用

10. 封装代码

11. 添加功能: 总共两个btn,其中一个btn的名字叫橡皮差,另一个的名字叫画笔,并且在使用橡皮差的时候,不能出现画笔btn

   1. 一个功能对应一个btn
   2. js控制逻辑,css控制样式,如果想js控制样式,那么用js控制class即可
   3. 先写只显示画笔的css,再写只显示橡皮差的css,并且让这两个css的class有所不同.用js控制class,执行相应代码即可,注意css文件的选择器`.action.xxx`在html是这样显示的`<div class="action x"></div>`

12. 添加功能: 在移动端使用

   1. 停止移动端的页面缩放



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