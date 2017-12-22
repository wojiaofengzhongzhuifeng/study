23.    1.   ​

              








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
6. 修改bug: 当自动播放在第2张的时候,我点击第4张,那么接下来的自动播放应该在第1张,而不是第3张:http://js.jirengu.com/sevevahube/1/edit?output
7. 优化代码:http://js.jirengu.com/judujarixa/1/edit?output





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