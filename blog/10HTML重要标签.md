## iframe

```
<iframe src="xxx" name="yyy" frameborder=0></iframe>

1. xxx可以填#，表示当前页面。
1. xxx可以填一个相对路径，表示这个iframe打开这个路径的文件。
1. xxx可以填一个http：//qq.com，表示在这个iframe里面打开qq网站。
---
2. yyy如果是test，且a标签的target=test，那么a标签的href会在这个iframe打开。
---
3. 基本是固定的。
```





## a

```
<a target="xxx" download href="yyy" ></a>

1. target表示在什么地方打开页面。
1. xxx可以填_blank，表示新建一个页面，并且在新建页面加载href的地址内容。
1. xxx可以填_self，表示在a标签所在的页面打开。
1. xxx可以填_parent，在a标签所处的页面的父页面打开。
1. xxx可以填_top，在a标签所处的页面的顶层页面打开。
1. xxx可以填test，表示在name="test"的iframe打开。
---
2. download 表示强制下载a标签的href，正常的下载应该是在响应内容的第二部分（键值对）写Content-type：啥的
---
3. href
3. yyy可以填#nihao，那么点击a标签，浏览器的左上角会对准id=nihao的标签，注意：这不发起请求。
3. yyy可以填?name=1&age=2，发起请求，请求内容的第一部分的路径发生变化。
3. yyy可以填javascript:;，学名叫javascript伪协议，效果是点击a标签没有任何变化。
3. yyy可以填#，不发起请求，跳转到页面最上面。
3. yyy可以不填，发起请求，刷新页面。
3. yyy可以填qq.com，发起请求，请求内容的第一部分的路径发生变化。
3. yyy可以填http://qq.com，发起请求，请求内容的第二部分的host发生变化。
3. yyy可以填//qq.com，发起请求，请求内容的第二部分的host发生变化。
3. 理解href的作用，要与HTTP请求内容一起学习。
```

a标签的href与HTTP请求内容联系：

1. href是`http://www.baidu.com`和`//baidu.com（用HTTP打开）`，只有他们是改变了请求内容的第二部分的host。
2. 其他发起请求的，都是改变了请求内容的第一部分的路径。并且~~href就等于路径（存疑）~~
3. href的作用是改变请求内容的第一部分路径或者第二部分的host







## form

在讨论之前，我们先把请求内容的第四部分：如下图：

![127.0.0.1:8080-users - Google Chrome_033.bmp](https://i.loli.net/2017/10/19/59e8264a7ae58.bmp)



```
<form action="xxx" method="yyy" target="zzz"></form>

1. xxx填一个地址，作用和a标签的href相同（改变请求内容），只不过在这里是把form的内容提交到action路径的文件中。
---
2. yyy可以是POST，那么会通过input的name(对应键)和value（value可以是默认的也可以是自己输入的）组合起来放在请求内容的第四部分中。
2. yyy可以是GET，那么会通过input的name（对应键）和value（value可以是默认的也可以是自己输入的）组合起来放在了请求内容的第一部分的路径
---
3. zzz与a标签的target相同。
```





## input

```
<input type="xxx" name="yyy" value="zzz">

1. xxx可以是submit，用于表单的提交。
1. xxx可以是text，你可以在里面输入单行文字。
1. xxx可以是password，输入密码。
1. xxx可以是checkbox，复选框
1. xxx可以是radio，单选框
1.  
---
2. yyy影响的是请求内容的第四部分（POST请求），对应键。
2. 如果与type=checkbox合用，那么如果勾选了，请求内容的第四部分应该有yyy=on，没有勾选，则没有该值
---
3. zzz影响的是请求内容的第四部分（POST请求），对应值。
3. 如果与type=button合用，表示按钮上面的字。
3. zzz可以是yes，那么如果与type=checkbox合用，如果勾选了，请求内容的第四部分应该有yyy=yes，没有勾选，则没有该值

```







## button

```
<button></button>
1. 只需注意：如果一个form中没有<input type="submit">且该button没有写type="button",那么这个button标签会升级成提交按钮。
```



## select与option构成的下拉列表

```
<select name="分组" multiple>      <!-- 可以多选，按着ctrl再选 -->
	<option value="1">第一组</option>
	<option value="2">第二组</option>
	<option value="3" disabled>第三组</option>	  <!-- 不能选 -->
	<option value="4" selected>第四组</option>   <!-- 默认 -->
	<option value="5">第五组</option>
</select>
```



## 标签汇总练习题

完成一个表单，要求把信息提交到users服务器中。

```

```

