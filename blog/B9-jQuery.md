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

5. 基本设计思想,选择某个元素,然后对其操作

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
    ```

    这是jQuery的写法

    ```
    $.inArray(2,[32,4,56,6,4,32,2,3,5])
    ```

    ​