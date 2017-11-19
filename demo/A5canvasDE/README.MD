预览: canvas预览: https://wojiaofengzhongzhuifeng.github.io/study/demo/A5canvasDE/

## canvas思路

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

12. 一个功能对应一个btn

13. js控制逻辑,css控制样式,如果想js控制样式,那么用js控制class即可

   先写只显示画笔的css,再写只显示橡皮差的css,并且让这两个css的class有所不同.用js控制class,执行相应代码即可,注意css文件的选择器`.action.xxx`在html是这样显示的`<div class="action x"></div>`

14. 添加功能: 在移动端使用

15. 停止移动端的页面缩放,记住就好,html文件: `meta:vp`+tab

16. 鼠标事件在移动端用不了,所以用if(){}来分别走PC端和移动端,并且查mdn移动端的事件是`ontouchstart`,`ontouchmove`,`ontouchend`,所以console.log一下测试能不能用.

17. 在上一步,我的电脑有个坑,在chrome使用移动端的时候,控制台还是pc端的,所以上一步的touch事件不能用,我移动端用火狐代替chrome

18. 成功使用touch事件,现在的问题是if(){}中的判断语句应该写什么?

19. 使用**特性检测**!在pc端`'ontouchstart' in document.body;`返回false;在移动端,`'ontouchstart' in document.body;`返回true,		

20. 把mouse的代码复制一份给touch,发现运行不了,这时候的下意识就应该**打印出touch的eee** .然后在eee这个对象把坐标找到

21. 给铅笔,橡皮差添加icon:

22. 当点击铅笔的时候,铅笔icon变大,与13步相同.

23. 添加功能: 铅笔颜色

   1. 有个问题,关于添加画笔的颜色,我是在全局变量中加一个`var penColor = "black"`然后在后面分别设置    `context.fillstyle = penColor`和  `context.strokestyle = penColor`,最后如果点击redbtn,那么令`penColor = 'red'`为什么不行?


## canvas问题

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

2. 移动端开发中,为什么`yyy.ontouchstart = function(e){console.log("开始摸")}`不起作用?

3. 为什么我的`document.body.ontouchstar`在移动端和pc端都是undefined?

4. 为什么我的`'ontouchstart' in document.body`在移动端是false