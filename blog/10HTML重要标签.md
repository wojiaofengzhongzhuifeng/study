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

```

