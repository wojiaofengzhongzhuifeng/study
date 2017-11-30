## 做简历的历程

要做的的效果的英文名称

```
1. sticky navbar
2. auto highlight navbar
3. auto scroll smoothly
4. menu
5. auto hide aside
6. gapless slides
7. loading animation
8. animate when scroll
```

1. 如何从github中将项目拷到电脑

2. 第一个效果：loading animation（未完成加载时，加载动画）

3. 如何将动画的速度变慢

   在`elements`，选中你想要查看的元素，点击3点 -> moretool ->animation

4. 绝对居中（使用绝对定位法，前提：有父div和子div，父div和子div元素的height和width都已知）方法一，以前的可以作废了

   给父元素加`position: relative`，给居中元素加

   ```
   position: absolute;
   top: 0;
   left:0;
   right: 0;
   bottom: 0;
   margin: auto;
   ```

5. 添加一个动画过程

   1. 设立关键帧
   2. 在元素的css加`animation: 动画名 秒数 

6. 优化动画loading动画代码，通过伪类

7. 在vscode中，将两行合并成一行，快捷方法是什么？

8. 看了css之后，以后应该怎么写css

   1. 选择器的第一个，用`div.test`代替`.test`，之后的用`.test`
   2. 不同部分之间使用空格隔开

9. 如何让一个div充满全屏

   ```
   position: fixed;top: 0;left:0;width:100%;height:100%;
   ```

10. 绝对居中（使用绝对定位法，前提：有父div和子div，父div和子div元素的height和width都已知，但子div的position已经确定了）方法二

    对父div

    ```
    display: flex;justify-content: center;align-items:center;
    ```

11. 符合**触发某事件，某元素的css从一个状态变成另一个状态**，就是套路

    方法如下：

    1. 写好开始的css：xxxxx
    2. 开始的css的选择器后面紧接着`.active`，写变化的css
    3. 用js控制class名

12. js给div**追加**class忘了

13. chrome模拟慢网速方法

14. 第二个效果：sticky navbar

15. 当鼠标滑动的时候，打印1，第一想到的是滚动事件（scroll）

16. 上面有个问题，就是我不知道用户滚动的高度。

17. 大文章： 浏览器的各种高度和宽度的区别！

18. ===

19. `transition: all 1s`应该写在哪里，transition表示过渡

20. 改变关于，技能，作品等等的字体的样式，当不滑动的时候，字体颜色是灰色的，滑动之后的颜色是黑的

21. 套路的操作

    1. 给div添加id
    2. 给div添加变化的css，注意选择器有`.active`
    3. 给js添加代码，作用是给div动态添加`class=active`

22. 第三个效果：鼠标进入关于博客技能作品的时候，底部有红线从左到右

23. `a:hover::after{}`是什么意思？

24. 当我在css的hover写了中文字符串，应该字母检查错误？

25. ===

26. `http://js.jirengu.com/fobigixafu/1/edit?html,css,output`   为什么不要用`bottom:0`

27. 有关动画的英文单词都是什么,都是什么意思?

    ```
    transition: all 0.3s
    animation: xxx 1s
    transform: translateX()
    ```

28. 在写html的时候,没有把关于,技能等等放在一个li中,这是错误的

29. `float:left`的作用是什么??

30. 如果遇到浏览器给你自动换行  `white-space: nowrap`

31. 我想把鼠标移到作品和博客时,给作品和博客的slideWords添加一个active

    1. 首先我们应该监听元素,有以下选项

       1. 监听`<a>作品</a>`  `<a>博客</a>`

          - 通过新学的DOMapi`document.getElementsByClassName("xxx")`可以获得所有符合class为xxx的元素,用来给js操作,学英语element === 元素

          - 那我想知道我mouseenter的是作品element还是博客element,应该怎么办?

            ```
            用户操作的元素
            console.log(x.target)
            监听的元素
            console.log(x.currentTarget)

            如
            <a>
            	<span>作品</span>
            </a>

            我对a监听,然后点击的是span,那么x.target打印出spanelement,x.currentTarget打印出aelement
            ```

            所以应该使用`x.currentTarget`来获得你操作的element

          - 我想找到`<a>作品</a>`element的下一个element(即`<ul></ul>`),应该怎么办??

            ​

32. 当我把js文件放在最上面的时候,出现问题了,我获取不到博客,作品的element,问题就出在把js引入放在最前面,那么浏览器当然搜索不到element啦,所以js文件都应该放在`</body>`之前

33. ```
    mouseenter/mouseleave   指针移到有事件监听的元素内
    mouseover/mouseout      指针移到有事件监听的元素或者它的子元素内
    两组区别
    ```

34. `a.nextSibling is not a function`说明nextSibling不是函数,在js文件中把()去掉

35. ##