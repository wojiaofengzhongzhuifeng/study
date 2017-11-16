1. 代码:

   ```
   canvas.addEventListener('mousedown', function(){
       console.log(11)
   },false) 
   //
   canvas.onmousedown = function(){
       console.log(222)
   }
   ```

   1. 前者叫添加事件监听(不确定呀),其中mousedown是从https://developer.mozilla.org/zh-CN/docs/Web/Events#找到的
   2. 后者叫事件处理函数,其中onmousedown是从https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers找到的

2. 事件监听要注意的

   1. 在什么地方(前面代码的canvas)
   2. 监听什么事情(前面代码的onmousedown)

3. 如果做一件事情需要在某某状态下,那么加状态锁

4. 这么多宽度和高度,我怎么选?

5. btn有个取反的套路,如果你想在一个键设置两个功能时用\

6. 我想实现resize窗口,画的东西存在,通过搜索,发现使用`getImageData`和`putImageData`,然后我做了一个demo,来验证我的猜想http://js.jirengu.com/hajegejugo/1/edit?html,js,output,猜想是:如果canvas修改了,那么就应该用`getImageData`来保存进度,如果检测到resize了,就重新获取width和height最后使用`putImageData`把之前的进度放到新的窗口中

7. 当我写画笔颜色的控制台时,我应该用html生成还是用js生成?

8. 刷新会闪屏,怎么办






########3#########