# 从URL输入到页面展现到底发生什么

## 大体流程

- DNS 解析:将域名解析成 IP 地址
- TCP 连接：TCP 三次握手
- 发送 HTTP 请求
- 服务器响应
- 浏览器解析渲染页面
- 断开连接：TCP 四次挥手

## 概念

### URL 是什么

```html
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

- `http` is the **protocol**. 
- `www.example.com` is the **domain**.
- `:80` is the **port**.
- `/path/to/myfile.html` is the **path to the resource** on the Web server.
- `?key1=value1&key2=value2` are extra **parameters(query)** provided to the Web server.
- `#SomewhereInTheDocument` is an **anchor**



## 1. DNS 解析:将域名解析成 IP 地址

- 浏览器通过向 DNS 服务器发送域名
- DNS 服务器查询到与域名相对应的 IP 地址，然后返回给浏览器
- 浏览器再将 IP 地址打在协议上，同时请求参数也会在协议搭载，然后一并发送给对应的服务器。



## 2. TCP 连接

### 为什么要三次握手?

- 原则：握手次数越少越好
- 考虑这种情况：
  1. 假设只有两次握手
  2. client 发送第一个请求报文，但是由于网络超时，导致 client 认为报文失效
  3. 然而经过一段时间后，server 接受到这个请求报文，因此，server 端建立连接
  4. 但是 client 已经没有发送请求报文的需求，导致 server 一直在等待 client 的请求

## 3. 发送 HTTP 请求

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190516190553.png)

## 4. 服务器响应

## 5. 浏览器渲染页面

### 步骤

1. 构建 DOM 树。
2. 构建 CSSOM 树。
3. 构建一个渲染树。
4. 布局(回流)：计算各节点的位置和大小
5. 绘制(重绘)：调用 GPU 绘制

### 一些问题

#### 遇到 JavaScript 怎么办

- 构建 DOM 时，遇到 JavaScript ，暂停构建 DOM ，等待 JavaScript 运行完毕，再继续构建 DOM
- 构建 CSSOM 时，遇到 JavaScript，**浏览器会先下载和构建CSSOM，然后再执行JavaScript，最后在继续构建DOM**

#### 重绘与回流

1. 重绘：不影响布局。

   ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190516194957.png)

2. 回流：影响布局

   ![image-20190516195048454](/Users/raojj/Library/Application Support/typora-user-images/image-20190516195048454.png)

3. 两者关系：**回流必定会发生重绘，重绘不一定会引发回流**。

#### async 与 defer 区别

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190516200154.png)

## 6. TCP 断开连接

🚧

