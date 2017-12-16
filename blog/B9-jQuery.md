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

23. jQuery的操作元素的方法,是定义(挂)在构造函数的prototype上

24. jQuery的工具方法,是直接挂在构造函数中的

25. 上面两个的区别就在于调用函数的不同

26. ===我在看jQuery的标准参考

27. jQuery最重要的概念是jQuery对象,有了jQuery对象,你就可以使用jQuery给你使用的方法

28. 获得jQuery对象非常简单,只需要`$(AAAA)`,

29. AAAA可以填CSS选择器

30. AAAA可以填DOM对象

31. AAAA可以是字符串,如`$('<li class="greet">test</li>')`

32. jQuery返回的是一个类数组对象,但是`$("li")[0]`这样返回的是DOM对象,而不是jQuery对象的实例

33. 如果想获得jQuery对象的实例,应该这样写`$("li").eq(0)`

34. 注意分清给你的是DOM对象还是jQuery对象,如何区别?通过`对象 instanceOf jQuery`

35. ===

36. 最重要的是把jQuery构造函数,构造出来的jQuery对象搞懂

37. 我在自己写一个jQuery

   1. 输入一个节点和数组,给这个节点添加class,class的值为这个数组的值

      ```
      function addClass(node, array){
        for(var i = 0; i < array.length; i++){
          node.classList.add(array[i])
        }
      }
      ```

      `addClass(wrapper, ["we", "rng" ,"edg"])`

   2. (命名空间)如果按照上面的方法写函数,有可能会让两个人写的函数冲突,我能不能创建一个库,叫`rjjdom`,库里面有我自己写的一些函数?

      ```
      var rjjdom = {}
      rjjdom.addClass = function(node, array){
        for(var i = 0; i < array.length; i++){
          node.classList.add(array[i])
        }
      }
      ```

      `rjjdom.addClass(wrapper, ["wen", "ss","dd"])`

   3. 我觉得上面的调用语义化不是太好,能不能像这样调用

      `wrapper.addClass(["blue", "bold"])`

      因为wrappper是一个Node节点,所以我直接在`Node.prototype`加函数:

      疑问: 为什么要把node改成this,this在什么时候用??

      我的理解: 

      this是沟通实例和构造函数的东西

      在写prototype函数的时候,发现prototype本身没有某个对象, 而又需要这个对象, 这个对象就是实例,在构造函数中用this代替

      ​

      ```
      Node.prototype.addClass = function(array){
        for(var i = 0; i < array.length; i++){
        	this.classList.add(array[i])
        }
      }
      ```

      `wrapper.addClass.call(wrapper, ["blue", "bold"])`

      方法二:

      ```
      window.myNode = function(node){
        return {
          addClass: function(array){
            for(var i = 0; i < array.length; i++){
              node.classList.add(array[i])
            }
          }
        }
      }
      ```

      ​

   ​