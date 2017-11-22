## 增删改查

1. 约定
   1. xxx表示现在节点
2. 增
   1. 如果xxx想添加css样式,: `xxx.style.样式名 = 值`

   2. 如果xxx想添加HTML中的css属性: `xxx.属性名 = 值` 

   3. 1和2的区别:

      想象你正在创建一个`<div id='xxx'></div>`

      第一个是添加css样式`xxx.style.width = 100px`相当于`<div style="width:100px" id="xxx">`

      第二个是添加HTML属性`xxx.width = 100px` ,相当于`<div width='100px' id="xxx"></div>`

   4. 如果xxx想添加HTML中的class属性: `xxx.className = 'class的名字'`

   5. 如果xxx想添加HTML中的id属性: `xxx.id = id的名字`

   6. 如果xxx想添加HTML的文本内容: `xxx.textContext = "画笔"`

   7. 如果xxx想追加HTML的class名字: xxx.classList.add("active")
3. 删
4. 改
5. 查
   1. 寻找父节点: `xxx.parentNode()`





目前用到的api

1. document.createElement()
2. document.appendChild()
3. div.textContent = xxx
4. div.src = 'xxx'
5. div.id = 'ssss'
6. div.className = 'ssss'
7. 事件监听onerror onclick  onkeypress
8. xxx.nextSibling
9. 事件监听的所有信息