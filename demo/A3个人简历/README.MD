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

18. `transition: all 1s`应该写在哪里，transition表示过渡

19. 改变关于，技能，作品等等的字体的样式，当不滑动的时候，字体颜色是灰色的，滑动之后的颜色是黑的

20. 套路的操作

    1. 给div添加id
    2. 给div添加变化的css，注意选择器有`.active`
    3. 给js添加代码，作用是给div动态添加`class=active`

21. 第三个效果：鼠标进入关于博客技能作品的时候，底部有红线从左到右

22. `a:hover::after{}`是什么意思？

23. 当我在css的hover写了中文字符串，应该字母检查错误？