## JSONP创造过程

1. 需求: 点击按钮, 存款减 1 元

2. 纯前端实现: http://js.jirengu.com/vimugubiho/1/edit?

3. 添加后端, 通过 form 来实现需求: https://github.com/wojiaofengzhongzhuifeng/JSONP-demo-1

4. 通过 img 来发送请求: https://github.com/wojiaofengzhongzhuifeng/JSONP-demo-2

5. 通过 script 来发送请求: https://github.com/wojiaofengzhongzhuifeng/JSONP-demo-3

6. rao.com 的前端代码能操作 jack.com 的后端代码: https://github.com/wojiaofengzhongzhuifeng/JSONP-demo-4

7. 将第六步的 demo 代码进行更新, 就能变成JSONP

   1. 第一个版本: 

      - 将 jack.com 的后端代码中`/pay`的路由代码中的 write 内所有内容剪切, 添加`xxx.call(undefined, "success")`

      - 在rao.com 的前端代码 script 开头添加

        ```
        window.xxx = function(){
          alert("success在服务端通知")
        }
        ```

   2. 第二个版本: 将后端代码完全和前端代码解耦

      - rao.com的前端代码中的script.src后添加查询参数`?callbackName=xxx`
      - jack.com后端代码, 将`xxx.call`变成`${query.callbackName}`

   3. 第三个版本: 将 string padding 变成JSON padding

      - 将jack的后端代码中`write`中的"success"删除, 变成如下: 

        ```
        {
          "zzz": 'success',
          "left": ${newAount}
        }
        ```

      - 将前端代码中的`window.xxx`的代码变成:

        ```
        window.xxx = function(result){
          alert(result["zzz"])
          number.innerText = result["left"]
        }
        ```

   4. 第四版: 将其变成符合约定的 JSONP

      - 将rao.com的前端代码的callbackName 变成callback

      - 在rao.com的前端代码中, 在addEventListener中添加

        ```
        let functionName = "rao" + parseInt(Math.random() * 10000)
        ```

      - 将window.xxx变成

        ```
        window[functionName] = function(result){
          alert(result["zzz"])
          number.innerText = result["left"] 
        }
        ```

        - 将`?callback=xxx`变成`?callback=' + functionName`

      - 在`onload`内的代码写`delete window[functionName]`

      - 在jack.com的后端将`${query.callbackName}`变成`${query.callback}`

        ​

      ​

      ​

## JSONP的理解

### JSONP 的实现步骤

请求方: rao.com 的前端程序员(浏览器)

响应方: jack.com 的后端程序员(服务器)

1. 请求方创建 script, src 指向响应方, 同时传一个查询参数`?callbackName=yyy434321`
2. 请求方写好`window.yyy434321`函数
3. 响应方根据查询参数 callbackName, 构造形如`yyy434321.call(undefined, "你想要的数据AA")`这样的响应
4. 浏览器收到响应, 就会执行 `yyy434321.call(undefined, "你要的数据AA")`
5. 那么请求方就知道了他要的数据


### JSONP的约定

1. callbackName -> callback

2. yyy -> 随机数 yyy32132432()

3. jQuery的写法:

   ```
    $.ajax({
    url: "http://jack.com:8002/pay",
    dataType: "jsonp",
    success: function( response ) {
        if(response === 'success'){
        amount.innerText = amount.innerText - 1
        }
    }
    })
   ```

### JSONP问题

在 JSONP 的第二步, 不是已经写好了`window.yyy434321`函数,直接执行就好了,为什么要多此一举,多写这么多代码?

答案: 因为在 rao.com 前端的`window.yyy434321`这个函数一直在等待一个 result,而这个 result 又是 jack.com 后端传给 rao.com 前端的

### JSONP 是什么?

在 JSONP 的实现步骤中, 第三步的`你要的数据AA`必须是 JSONP 格式, 它是从后端传给前端的数据

而 P 则表示padding, 它表示 JSONP 的左右两边

JSONP === `yyy434321.call(undefined, "你要的数据AA")`

其中 yyy434321 是 jack.com 后端根据 rao.com 的查询参数产生的

你要的数据AA 则是 jack.com 后端传给 rao.com 前端的 JSON 数据


### JSONP注意点
