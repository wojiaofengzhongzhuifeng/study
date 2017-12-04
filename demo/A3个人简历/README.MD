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

1. ~~如何从github中将项目拷到电脑~~

2. ~~第一个效果：loading animation（未完成加载时，加载动画）~~

3. ~~如何将动画的速度变慢~~

   在`elements`，选中你想要查看的元素，点击3点 -> moretool ->animation

4. ~~绝对居中（使用绝对定位法，前提：有父div和子div，父div和子div元素的height和width都已知）方法一，以前的可以作废了~~

   给父元素加`position: relative`，给居中元素加

   ```
   position: absolute;
   top: 0;
   left:0;
   right: 0;
   bottom: 0;
   margin: auto;
   ```

5. ~~添加一个动画过程~~

   1. 设立关键帧
   2. 在元素的css加`animation: 动画名 秒数 

6. ~~优化动画loading动画代码，通过伪类~~

7. ~~在vscode中，将两行合并成一行，快捷方法是什么？~~

8. 0%{

       top: 0;
       left: 0;
       transform: transparent(-100%)
     }

9. ~~看了css之后，以后应该怎么写css~~

   1. 选择器的第一个，用`div.test`代替`.test`，之后的用`.test`
   2. 不同部分之间使用空格隔开

10. ~~如何让一个div充满全屏~~

11. ​

   ```
   position: fixed;top: 0;left:0;width:100%;height:100%;
   ```

12. ~~绝对居中（使用绝对定位法，前提：有父div和子div，父div和子div元素的height和width都已知，但子div的position已经确定了）方法二~~

   对父div

   ```
   display: flex;justify-content: center;align-items:center;
   ```

13. 符合**触发某事件，某元素的css从一个状态变成另一个状态**，就是套路

   方法如下：

   1. 写好开始的css：xxxxx
   2. 开始的css的选择器后面紧接着`.active`，写变化的css
      3. 用js控制class名

   3. js给div**追加**class忘了
   4. chrome模拟慢网速方法

   5. 第二个效果：sticky navbar

   6. 当鼠标滑动的时候，打印1，第一想到的是滚动事件（scroll）

   7. 上面有个问题，就是我不知道用户滚动的高度。

   8. 大文章： 浏览器的各种高度和宽度的区别！

   9. ===

   10. `transition: all 1s`应该写在哪里，transition表示过渡

   11. 改变关于，技能，作品等等的字体的样式，当不滑动的时候，字体颜色是灰色的，滑动之后的颜色是黑的

   12. 套路的操作

   13. 给div添加id
      2. 给div添加变化的css，注意选择器有`.active`
      3. 给js添加代码，作用是给div动态添加`class=active`

   14. 第三个效果：鼠标进入关于博客技能作品的时候，底部有红线从左到右

   15. `a:hover::after{}`是什么意思？

   16. 当我在css的hover写了中文字符串，应该字母检查错误？

   17. ===

   18. `http://js.jirengu.com/fobigixafu/1/edit?html,css,output`   为什么不要用`bottom:0`

   19. 有关动画的英文单词都是什么,都是什么意思?

   ```
   transition(过渡): all 0.3s
   animation: xxx 1s   使用@keyframes名为 xxx 的动画,并且持续时间为1s
   transform(改变): translateX(转化)()
   ```

30.    在写html的时候,没有把关于,技能等等放在一个li中,这是错误的

31.    `float:left`的作用是什么??

32.    如果遇到浏览器给你自动换行  `white-space: nowrap`

33.    我想把鼠标移到作品和博客时,给作品和博客的slideWords添加一个active

34.    监听`<a>作品</a>`  `<a>博客</a>`

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

      - 我想找到`<a>作品</a>`element的下一个element(即`<ul></ul>`)

        ​

35.    当我把js文件放在最上面的时候,出现问题了,我获取不到博客,作品的element,问题就出在把js引入放在最前面,那么浏览器当然搜索不到element啦,所以js文件都应该放在`</body>`之前

36.    ```
      mouseenter/mouseleave   指针移到有事件监听的元素内
      mouseover/mouseout      指针移到有事件监听的元素或者它的子元素内
      两组区别
      ```
   ```

36. `a.nextSibling is not a function`说明nextSibling不是函数,在js文件中把()去掉

37. `xxx.nodeType` 返回数字,用于判断xxx是element,返回1,text返回3

38. 使用递归,获得ul  

   如果不等于ul,就继续找,直到找到ul为止.  

39. `xxx.tagName`获得element的名字,返回的大写

40. `Cannot read property 'tagName' of null`

   不能读null的`属性tagName`

   说明`xxx.tagName`的xxx是null

41. ```
   html
   <div>
   	<ul></ul>
   	<ul></ul>
   	<ul></ul>
   	<ul></ul><ul></ul>
   	<ul></ul>
   	<ul></ul>
   	<ol></ol>
   </div>

   我怎么找ol?

   while(ul.tagName !== 'UL'){
   	ul = ul.nextSibling
   }
   这代码的意思
   ```

42. 如果监听的是a标签,那么就有bug,我想点击作品1,只要我移出了a标签,那么作品1 就会消失,所以我应该监听的是li标签,注意,虽然li标签的面积只有li这么大,实际上是看html的结构,如果li包含了a和ul那么你在a和在ul移动都是在li里面移动

43. 写一个li a ul的demo

44. 新增的DOM操作`xxx.getElementsByTagName("ul")`在xxx元素**里面**查找元素为ul,查找的结果返回一个数组

45. 为什么position为absolute的还可以设置margin?

46. 新增DOM操作`xxx.querySelectorAll("yyy")`返回数组,里面包含所有符合yyy的元素,在xxx元素里面找yyy,yyy符合css的选择器规则

47. 新增api,阻止默认事件`xxx.preventDefault()`

48. js获得html的属性值`xxxxelement.getAttribute("属性名")`

49. debug

50. 获得element在页面(??)的位置 `xxx.offsetTop`

51. 获得element在浏览器视口(??)的位置 `xxx.getBoundingClientRect()`获得一组数据,里面包含xxx在浏览器视口的位置

52. 新增的DOM操作`xxx.querySelector("yyy")`返回一个元素,在xxx元素中找yyy,其中yyy符合css选择器规则,xxx可以是document

53. `window.scrollY`浏览器视口与页面的滚动距离

54. ===

55. js添加html的属性 `xxx.style.position = "relative"`给xxx元素添加属性为`position: relative`

56. 记单词 `tween.js`渐变移动

57. 添加效果:  auto highlight navbar当我移到技能上面,导航栏会显示相近的颜色

58. 在html的元素添加自定义属性的作用是类似与id 的作用,让js更简单的知道有用data-x的元素

   寻找的方法`document.querySelectorAll("[data-x]")`即可获得拥有属性为data-x的html 元素

59.   还是上面的,在css如何选 择`<div data-x></div>`,使用`[data-x]{border:1px solid black}`即可

60.   我不知道heightlight的时候,我不知道removeoutline的代码应该写在哪里

61.   js的变量取名字的时候,如果变量是 html 的元素,取名字的时候最后是Tag

62.   js的主要作用: 找html的元素

63.   通过html 的id,class 属性找
     2. 已经拥有html元素,通过这个元素的节点关系找(如父节点,子节点,兄弟节点)

64.   ```
        heightTags[closeIndex].id
        document.querySelector("a[href='#skill']")
        
        
        
        其中  heightTags[closeIndex].id   想代替 skill 应该怎么做?
        去掉 - 加引号 - 加加号 - 加变量
         document.querySelector("a[href='#skill']")
         1. 去掉skill,变成
         document.querySelector("a[href='#']")
         2. 根据字符串的首位和末位使用的是双引号还是单引号来添加单双引号
         document.querySelector("a[href='#""]")
         3. 在新加的单双引号加两个加号
         document.querySelector("a[href='#"++"]")
         4. 在两个加号中加heightTags[closeIndex].id
         document.querySelector("a[href='#"+heightTags[closeIndex].id+"]")
     ```
   ```

64. 添加`class=active`的时候,一个动作对应一个class名,如对于技能来说,当我鼠标悬浮上去的时候,红色的进度条从左到右,当我浏览到技能div的时候,也是效果也是红色的进度条从左到右.那么这两个动作添加的名字就不能一致.    

   一个动作对应添加一个class名

65. 出现的bug: 当我从页面开始往下滑动到底的时候,三个div红色的进度条一直保留

66. 解决办法: 

   ```
   <ul>
   	<li>关于</li>
   	<li>技能</li>
   	<li>作品</li>
   	<li>博客</li>
   	<li>日历</li>
   	<li>联系方式</li>
   	<li>其他</li>
   </ul>
   ```

   你已经获得某个lixxx,但是你想获取的是ul 的所有li,怎么办??

   xxx.parentNode.children即可获取

   问题: 使用xxx.parentNode.childNodes会返回text节点,很傻比

67. 添加效果: 当我打开网页的时候,红色的进度条就有了,而不是需要滑动才能激活进度条,套路

68. 添加效果: 关于, 技能,作品三个div从下面往上划出来

69. 因为我想要的效果是div一开始是看不见的,当我滑到某个页面距离的时候,div才显现出来,所以我们一开始给div一个`class=offset`,滑到页面的时候,再把offset删除.

70. translateY(100px)表示

71. #

   
   ```







## CSS动画

1. 用 CSS3 写一个动画的过程:

   1. 写关键帧

      ```
      @keyframes aaa{
        0%{
          xxx
        }
        100%{
          yyy
        }
      }
      ```

   2. 把`animation: aaa 1s`写到你想要添加动画的div,其中animation === 











## CSS3 动画

1. `transition` ===  过渡

2. `transition: 1s height 2s ease` 

   1. `1s`: 过渡持续时间
   2. `height`: 过渡执行的属性,如果想让所有的属性都添加过渡:`all`

3. 以下属性是没有过渡效果的 `display: none, height: 为auto `

4. transition的缺点

   1. 必须有事件触发
   2. 只有起始和结束两个状态
   3. 只能执行一次,除非你再次触发

5. 引入`animation: 1s 2s xxx linear 3 forwards normal;`

   1. `1s`: 动画持续时间

   2. `2s`: 动画延时时间

   3. `xxx`: 动画名

   4. `linear`: 动画播放速度

      - linear：匀速


      - ease-in：加速


      - ease-out：减速


      - cubic-bezier函数：自定义速度模式

   5. `3`: 循环播放次数,如果想无限播放: `infinite`

   6. `forwards`: 播放完动画保持在结束状态

      - forwards：播放完动画保持在结束状态
      - none：默认值，回到动画没开始时的状态。
      - backwards：让动画回到第一帧的状态。


      - both: 根据animation-direction（见后）轮流应用forwards和backwards规则。