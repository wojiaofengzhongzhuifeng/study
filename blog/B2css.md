##CSS目录











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