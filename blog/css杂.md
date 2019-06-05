# CSS



## 盒模型

1. 分类

   box-sizing: content-box(默认) /  border-box

2. 区别：

   - 设置 width / height，前者是设置了 content(内容区) 的大小，后者设置 border(border+ padding + conten) 的大小

https://jsbin.com/cuxinequra/1/edit



## 选择器的优先级

- **内联样式(style="…")**

- ID选择器(#example)

- 类选择器(.example)、

  **属性选择器([type="radio"])**

  **伪类(:hover)**

- 类型选择器(h1)

- **伪元素( ::before)**

- 继承的样式





## 居中

https://css-tricks.com/centering-css-complete-guide/

  - 负 margin ：垂直居中，知道 width ：https://jsbin.com/doriyexida/1/edit?html,css,output
  
  - 负 transform ：垂直居中，不知道 width：https://jsbin.com/pilicozula/1/edit?html,css,output
  
  
  
## flex 布局知识脉络

  - flex 有主轴，交叉轴，容器，元素。
  
  - 元素沿着主轴排列成一行，不换行。
  
  - flex-direction：切换主轴的方向。
  
  - flex-wrap: 主轴元素一行放不下，是否需要换行
    
  - flex-grow,flex-shrink：指定元素的伸缩
  
  - flex-basic：？
  
  - 主轴对齐方式：justify-content
  
  - 单行交叉轴对齐方式：align-items
  
  - 多行交叉轴对齐方式：align-content