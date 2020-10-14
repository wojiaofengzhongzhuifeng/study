

### 复杂 Promise 的使用示例





## 需求

 将 [1,2,3,'a', 'b', 'ss'] 转化为 

{

​	number: [1.232345, 102.323, 3.1235465],

​	string: ['a+string','b+string', 'ss+string+double']

}

转化逻辑如下：

1. 如果是数字 + 奇数 => ①添加随机数
2. 如果是数字 + 偶数 => ①添加随机数 + ② + 100
3. 如果是字符 + 单个字符 => ①添加字符串 `+string`
4. 如果是字符 + 两个字符 => ①添加字符串 `+string` ②添加字符串 `+double`

并且限定，所有添加行为都是异步



## 实现思路（从数据结构角度出发）

![image-20201014162247607](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201014162247607.png)





## demo 代码

https://codesandbox.io/s/new-resonance-5jvre



