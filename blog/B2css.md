##CSS目录







## 如何学习CSS？

1. 按照自己最初的想法，写css。
2. 遇到不会的效果，标记下来。
3. 遇到更好的写法，标记下来。
4. 写在这篇博客中。



## 写CSS经验

1. 先在vscode写上html,然后直接在chrome编辑,编辑完成后粘贴给vscode.
2. 把页面划分成div,先把div里面的布局弄好,然后再考虑各个div之间的布局.

## margin和padding的理解

练习用html代码：

```
    <div class="parent clearfix">
        <div class="son1">hhhhh</div>
        <ul class=" son2 clearfix">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
```

练习用css代码：

```
*{
    padding: 0;
    margin:0;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
li{
    list-style: none
}
div{
    border: 1px solid black;
}
div.son1{
    height:33px;
    float: left;
    width:100px;
}
li{
    float: left
}
ul{
    float: right;
}

div.son1 {
	border:1px solid black;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}

div.son2 {
    border: 1px solid black;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}
```

1. padding的作用：
   - 如果两个border重合，那么移动内容。
   - 如果两个border不重合，那么移动border。
2. margin的作用：
   - 就是两个border的距离。










##  css文件开头必写

```
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
a{
    color: inherit;
    text-decoration: none;
}
li{
    list-style: none;
}
*{
    margin: 0;
    padding: 0;
}
```



## css套路

dsadsadsa





## 元素的高度由什么决定

1. div（行内元素）的高度由其内部文档流元素高度总和决定。

2. span（内联元素）的高度由其font-size和浏览器给的边线共同决定。

3. 文档流是什么意思？

   - div：从上到下，沾满一行，总换行。
   - span：从左到右，不换行

4. 对font-size的理解：

   http://js.jirengu.com/yeyuzohuju/1/edit?html,css,output40px指的是字母的最高到最低的距离为40px







## 两个元素垂直对齐

1. 情景: 两个元素不能垂直对齐
2. 方法:给小的元素一个height和line-height,它们的值都是大的元素的height.
3. 例子:http://js.jirengu.com/bomopukuni/1/edit?html,css,output





## 给padding没有反应

1. 情景:给一个元素padding没有反应.
2. 方法:给这个元素添加一个套,再添加padding.
3. 例子:https://wojiaofengzhongzhuifeng.github.io/study/demo/test/test1/






## 边框抖动	

1. 情景:如鼠标悬浮时会出现border,但是后面的元素会抖动.
2. 方法:先给`:hover`添加border,然后给元素添加一个transparent的border.
3. 例子:http://js.jirengu.com/xuferuxize/1/edit?html,css,output





## height和width无效

1. 情景:给元素添加width和height没有效果.
2. 方法:给该元素添加`dispaly:inline-block`








## dsjakldsadjska