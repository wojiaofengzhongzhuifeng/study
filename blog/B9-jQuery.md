## 草稿

1. 我再看jQuery的设计思想

2. ===

3. 这是目录

4. ```
   一、选择网页元素
   二、改变结果集
   三、链式操作
   四、元素的操作：取值和赋值
   五、元素的操作：移动
   六、元素的操作：复制、删除和创建
   七、工具方法
   八、事件操作
   九、特殊效果
   ```

5. 基本设计思想:**选择某个元素,然后对其操作**

6. 使用jQuery 的第一步: 讲一个选择表达式AAAAA,放进**构造函数jQuery(简写成$)**中,通过jQuery的构造函数构造的对象,就可以使用jQuey提供的API

7. 选择表达式AAAAA可以是css的选择对象

8. 也可以是jQuery自己创造的表达式

   http://api.jquery.com/category/selectors/

9. 改变结果集方法:

   1. 提供强大的过滤器: http://api.jquery.com/category/traversing/filtering/
   2. 已经拿到一个节点,通过这个节点移动到DOM树的其他节点上:http://api.jquery.com/category/traversing/tree-traversal/

10. 链式操作

11. `.end()`后退的是选择结果集的结果,而不是其他的

12. 元素的操作,取值和赋值:使用同一个函数,完成取值和赋值

13. 需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值（[.text()](http://api.jquery.com/text/)例外，它取出所有元素的text内容）。

14. 元素的操作: 移动

15. 移动的操作方法有4对,每一对的返回结果都是不同的

16. 元素的操作：复制、删除和创建

17. 工具方法:

18. **我想使用jQuery的工具,应该这样使用: `$.工具函数()`**

19. **那么如果我想使用原生js的工具函数,比如Array,是不是应该这样使用`Array.prototype.工具函数()`????**

20. 使用遍历一个数组来判断

21. 想明白了一个事情,这个应该放在function中

22. 假如我要创建一个函数,它的作用是:"返回一个值在数组中的索引位置。如果该值不在数组中，则返回-1",
   那么我会写如下的代码:

   ```
   function inArrayNum(value,array){
   	for(var i = 0; i < array.length; i++){
   		if(array[i] == value){
   			return i
   		}

   	}
   	return -1
   }
   //但是这有许多漏洞,比如array中有两个值都符合value的值,只会返回第一个,但是我们先不管

   //调用函数
   inArrayNum(2, [7,5,4,6,4,6,4,2,1])
   //结果当然没有错,但是,我们禁止使用上面的调用方法
   inArrayNum.call(undefined, 2,[4,4,5,3,5,6,4,2,3,5,5])
   ```

   所以我这样写

   ```
   Array.prototype.inArrayNum = function(value, array){
     	for(var i = 0; i < array.length; i++){
   		if(array[i] == value){
   			return i
   		}
   	}
   	return -1
   }

   //调用函数
   Array.prototype.inArrayNum.call(undefined, 2,[5,3,5,3,5,2])
   //这样调用函数是错的
   inArrayNum.call(undefined, 2,[4,4,5,3,5,6,4,2,3,5,5])
   ```

   这是jQuery的写法

   ```
   $.inArray(2,[32,4,56,6,4,32,2,3,5])

   $.inArray.call(undefined, 2,[32,4,56,6,4,32,2,3,5])
   ```

   记住一个,如果函数xxxx挂在构造函数的prototype中,那么调用这个函数xxxx必须是构造函数的实例对象或者构造函数.prtotype

23.    jQuery的操作元素的方法,是定义(挂)在构造函数的prototype上

24.    jQuery的工具方法,是直接挂在构造函数中的

25.    上面两个的区别就在于调用函数的不同

26.    ===我在看jQuery的标准参考

27.    jQuery最重要的概念是jQuery对象,有了jQuery对象,你就可以使用jQuery给你使用的方法

28.    获得jQuery对象非常简单,只需要`$(AAAA)`,

29.    AAAA可以填CSS选择器

30.    AAAA可以填DOM对象

31.    AAAA可以是字符串,如`$('<li class="greet">test</li>')`

32.    jQuery返回的是一个类数组对象,但是`$("li")[0]`这样返回的是DOM对象,而不是jQuery对象的实例

33.    如果想获得jQuery对象的实例,应该这样写`$("li").eq(0)`

34.    注意分清给你的是DOM对象还是jQuery对象,如何区别?通过`对象 instanceOf jQuery`

35.    ===

36.    最重要的是把jQuery构造函数,构造出来的jQuery对象搞懂

37.    我在自己写一个jQuery

38.    输入一个节点和数组,给这个节点添加class,class的值为这个数组的值

             ​```
             function addClass(node, array){
               for(var i = 0; i < array.length; i++){
                 node.classList.add(array[i])
               }
             }
             ​```
             
             `addClass(wrapper, ["we", "rng" ,"edg"])`

       2.    (命名空间)如果按照上面的方法写函数,有可能会让两个人写的函数冲突,我能不能创建一个库,叫`rjjdom`,库里面有我自己写的一些函数?

             ```
             var rjjdom = {}
             rjjdom.addClass = function(node, array){
               for(var i = 0; i < array.length; i++){
                 node.classList.add(array[i])
               }
             }
             ```

             `rjjdom.addClass(wrapper, ["wen", "ss","dd"])`

       3.    我觉得上面的调用语义化不是太好,能不能像这样调用

                `wrapper.addClass(["blue", "bold"])`

                因为wrappper是一个Node节点,所以我直接在`Node.prototype`加函数:

                疑问: 为什么要把node改成this,this在什么时候用??

                我的理解: 

                this是沟通实例和构造函数的东西

                在写prototype函数的时候,发现prototype本身没有某个对象, 而又需要这个对象, 这个对象就是实例,在构造函数中用this代替

39.    jQuery的思想: 选择元素, 修改元素

40.    选择元素分为以下步骤

       1.    通过选择器选择元素

       2.    有了元素之后,对元素进行筛选(可选步骤

                  http://api.jquery.com/category/traversing/filtering/

       3.    有了元素之后,选择与元素某些关系的新元素(可选步骤)

                  http://api.jquery.com/category/traversing/tree-traversal/

41.    修改元素可以分为以下需求:

       1.   取值/赋值

            ```
            .html() 取出或设置html内容
            .text() 取出或设置text内容
            .attr() 取出或设置某个属性的值
            .width() 取出或设置某个元素的宽度
            .height() 取出或设置某个元素的高度
            .val() 取出某个表单元素的值
            ```

            注意: 赋值是对所有元素集,取值只对第一个元素集

            ​	`.text()`也除外,取所有的text内容

       2.   改变dom结构

            1. 移动元素

            ```
            .insertAfter()和.after()
            .insertBefore()和.before()
            .appendTo()和.append()
            .prependTo()和.prepend()
            ```

            注意: 

            - 前面的是符合语意的,如需求是把div元素移动到p元素后面:

              `$("div").insertAfter($("p"))`,同时这个代码返回的是div元素

            2. 复制,删除和创建元素

               ```
               .clone()
               .remove()
               .detach()
               .empty()
               创建??
               ```

       3.   把事件绑定在网页元素上

              ```
              ???
              ```

              ​

              ​


## 自制jQuery

1. HTML代码

   ```
   <h1>你好</h1>
   <div id="wrapper" dataNum="3232323" class="nihao">
     <ul>
       <li>选项1</li>
       <li>选项2</li>
       <li>选项3</li>
     </ul>        
   </div>
   <div class="ddddddddd">
     <div id='parent'>parent</div>
   </div>
   <div id="test" data-test1="test1" class="test2" data-test2="test3">id为test</div>
   ```

   ​

2. 第一版

   ```
   function addClass(node, obj){
     for(var key in obj){      //key返回class名   obj[key]返回true or false
      	if(obj[key]){
         node.classList.add(key)
      	}else {
         node.classList.remove(key)
      	}
     }
   }

   //调用方法
   addClass.call(undefined, wrapper, {"test1": true,"sdsds": true ,"sssss": false})
   ```

3. 第二版

   ```
   window.rjjdom = {}

   rjjdom.addClass = function(node, obj){
       for(var key in obj){      //key返回class名   obj[key]返回true or false
         if(obj[key]){
           node.classList.add(key)
         }else {
           node.classList.remove(key)
         }
     	}
   }

   //调用方法
   rjjdom.addClass.call(undefined, wrapper, {"dssdsds": true,"xxxxxsxsxs": true, "nihao": false})
   ```

4. 第三版

   ```
   Node.prototype.addClass = function(obj){
         for(var key in obj){      //key返回class名   obj[key]返回true or false
           if(obj[key]){
             this.classList.add(key)
           }else {
             this.classList.remove(key)
           }
     	  }
   }

   //调用方法
   wrapper.addClass.call(wrapper, {"xssdsa": false, "xxxx": true})
   ```

5. 第四版

   ```
   function jjjQuery(node){
     var nodes = node
     console.log(nodes)
     nodes.addClass = function(obj){
       for(var key in obj){      //key返回class名   obj[key]返回true or false
         if(obj[key]){
         	nodes.classList.add(key)
         }else {
        	nodes.classList.remove(key)
         }
       }
     }
     return nodes
   }

   //调用方法
   var newdom = jjjQuery(wrapper)
   newdom.addClass.call(undefined, {"xxxx": true, "qqqqq": true, "yyyyy" :true})
   ```

6. 第五版

   ```
   function jjjQuery(nodeOrSelector){
     //获得节点node
     var nodes
     if(typeof nodeOrSelector === "string"){
     	//当输入的是字符串
       nodes = document.querySelector(nodeOrSelector)
     }else{
       nodes = nodeOrSelector
     }
     //给节点上挂函数
     nodes.addClass = function(obj){
       for(var key in obj){      //key返回class名   obj[key]返回true or false
         if(obj[key]){
         	nodes.classList.add(key)
         }else {
        	nodes.classList.remove(key)
         }
       }
     }
     
     return nodes
   }

   /调用方法
   var jjdom = jjjQuery(".ddddddddd")
   jjdom.addClass.call(undefined, {"zxzxz": true, "xzdks": false})
   ```

7. 第六版

   ```
   function jjjQuery(nodesOrSelector){
   //必须让两种情况的nodes都是一种数据结构
     var nodes
     if(typeof nodesOrSelector === "string"){
       nodes = document.querySelectorAll(nodesOrSelector)
     }else {
       nodes = document.querySelectorAll(nodesOrSelector)
     }
     
     nodes.addClass = function(obj){
       for(var key in obj){      //key返回class名   obj[key]返回true or false
         if(obj[key]){
           for(var j = 0;  j < nodes.length; j++){
             nodes[j].classList.add(key)
           }	
         }else {
        	 for(var j = 0;  j < nodes.length; j++){
             nodes[j].classList.remove(key)
           }
         }
       }
     }
     return nodes
   }

   //调用
   var dom2 = jjjQuery("ul > li")
   dom2.addClass({"tesrtds": true, "sxsxs": false})
   ```

8. 第七版

   ```
   function jjjQuery(nodesOrSelector){
   //必须让两种情况的nodes都是一种数据结构
     var nodes = {}
     if(typeof nodesOrSelector === "string"){
       temp1 = document.querySelectorAll(nodesOrSelector)
       for(var a = 0; a < temp1.length; a++){
         nodes[a] = temp1[a]
       }
       nodes["length"] = a
     }else {
       temp2 = document.querySelectorAll(nodesOrSelector)
       nodes[0] = temp2[0]
       nodes['length'] = 1
     }
     
     nodes.addClass = function(obj){
       for(var key in obj){      //key返回class名   obj[key]返回true or false
         if(obj[key]){
           for(var j = 0;  j < nodes.length; j++){
             nodes[j].classList.add(key)
           }	
         }else {
        	 for(var j = 0;  j < nodes.length; j++){
             nodes[j].classList.remove(key)
           }
         }
       }
     }
     return nodes
   }

   //调用
   var dom2 = jjjQuery("ul > li")
   dom2.addClass({"tesrtds": true, "sxsxs": false})
   ```





### 自制jQuery过程学到的知识

1. 使用`===`和`!==`记住两点: ①所有声明的对象都不相等;`var a = {}; var b = {}; a === b//false`②NaN不等于NaN

2. `for in `用在哪里?

   `for in `获取对象和array的key和value

   `for(){}`只能获取array的key和value

   ```
   var array = [5,6,7,8,9]
   for(var i in array){
   	console.log(i)
   	console.log(array[i])
   }

   var obj = {
     "sss": "zzzz",
     "qqqq": "eeeeee",
   }
   for(var key in obj){
   	console.log(key)
   	console.log(obj[key])
   }
   ```

3. 命名空间 === 第二版代码方式

4. `typeof`和`instanceof`使用区别,在数据类型博客找

   ​

   ​

   ​

### 了解jQuery的思想

1. jQuery是一个构造函数,它返回的是一个对象,我们叫他jQuery对象

2. jQuery实例对象, jQuery构造函数,jQueryprototype的内容和区别是什么?

   ![未命名文件 (7).png](http://upload-images.jianshu.io/upload_images/5529438-19112b3aee9514d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





### 题目

1. 请说出 div 和 $div 的联系和区别。

```
<div id=x></div>
var div = document.getElementById('x');
var $div = $('#x');
```

```
答案:
div 和 $div 的联系是:
$(div) 可以将 div 封装成一个 jQuery 对象，就跟 $div 一样
$div[0] === div ，$div 的第一项就是 div

div 和 $div 的区别是：
div 的属性和方法有 childNodes firstChid nodeType 等
$div 的 属性和方法有 addClass removeClass toggleClass 等
```



2. 题目:

   ```
   window.jQuery = ???
   window.$ = jQuery

   var $div = $('div')
   $div.addClass('red') // 可将所有 div 的 class 添加一个 red
   $div.setText('hi') // 可将所有 div 的 textContent 变为 hi
   ```

第一版: 

```
function addClass(node1, className){
  var node = node1
  node.classList.add(className)
}
function setText(node1, value){
  var node = node1
  node.innerText = value
}
```

第二版: 

```
window.jQuery = function(node1){
  var node = node1
  
  node.addClass = function(className){
  	node.classList.add(className)
  }
  
  node.setText = function(value){
  	node.innerText = value    
  }
  
  return node
}
```

第三版: 支持输入字符串

```
window.jQuery = function(node1){
  var node
  
  if(typeof node1 === "string"){
    node = document.querySelector(node1)
  }else{
    node = node1
  }
  
  node.addClass = function(className){
  	node.classList.add(className)
  }
  
  node.setText = function(value){
  	node.innerText = value    
  }
  
  return node
}
```

第四版: 支持操作多个元素

```
window.jQuery = function(node1){
  var node
  
  if(typeof node1 === "string"){
    node = document.querySelectorAll(node1)
  }else{
    node = {}
    node[0] = node
    node["length"] = 1
  }
  
  node.addClass = function(className){
  	for(var i = 0; i < node.length; i++){
      node[i].classList.add(className)
  	}
  }
  
  node.setText = function(value){
    for(var i = 0; i < node.length; i++){
    	node[i].innerText = value
    }
  }
  
  return node
}
```

第五版: 通过jQuery返回的是纯净的伪数组

```
window.jQuery = function(node1){
  var node = {}
  
  if(typeof node1 === "string"){
    var temp = document.querySelectorAll(node1)
    for(var j = 0; j < temp.length; j++){
      node[j] = temp[j]
    }
    node["length"] = j
  }else{
    node = {}
    node[0] = node
    node["length"] = 1
  }
  
  node.addClass = function(className){
  	for(var i = 0; i < node.length; i++){
      node[i].classList.add(className)
  	}
  }
  
  node.setText = function(value){
    for(var i = 0; i < node.length; i++){
    	node[i].innerText = value
    }
  }
  
  return node
}
```







## 用jQuery做一个轮播吧!

1. http://js.jirengu.com/qewufizure/1/edit?output
2. 开始加js:http://js.jirengu.com/memevoveze/1/edit?output
3. 使用遍历的方法修改js,能达到如果想添加轮播图片数量,不修改js代码:http://js.jirengu.com/qewulageyi/1/edit?output
4. 自动播放: http://js.jirengu.com/fahacitole/1/edit?output
5. 添加功能: 当鼠标在图片上时, 停止自动播放yi:http://js.jirengu.com/jasakitazo/1/edit?output







### 注意

1. 关于性能优化: 给图片标签提前给宽度和高度有利于性能优化

2. 代码如下:http://js.jirengu.com/fuqimoqako/1/edit?output

   我的问题是为什么会报这个错误:

   ```
   fuqimoqako.js:6 Uncaught TypeError: $sons[i].on is not a function at fuqimoqako.js:6
   ```

   答案: 

   - 写jQuery的时候, 一定要分清`$sons[i]`和`sons.eq[i]`的区别
   - 前者是DOM对象,它只有原生的js方法
   - 后者是jQuery对象,它也只有jQuery的方法,注意,jQuery对象并没有原生的js方法

   ​