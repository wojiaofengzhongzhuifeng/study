## 数据在计算机中是如何存储的

- 二进制

  一个字节（byte）有八个位（bit），每个 bit 都是 0 or 1

- int i = 0; 如何存储

  首先要知道，如果声明 int ，那么 java 会开辟 4 个 byte，每个 byte 有 8 个 bit，因此实际这样存储的

  00000000 00000000 00000000 00000000

- ASCII 码的作用

  因为计算机只能存储 01 ，如果想存储英文字母怎么办？每个英文字母与一个数字对应，这个对应关系就是 ASCII 表

  如果想知道 A 的 ASCII 

  ```java
  System.out.println((int)'A'); // 65
  ```





## 基本数据类型 

- 基本数据类型汇总

  ![image-20211001175147969](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20211001175147969.png)

- 注意点
  - float、double 是浮点类型
  - 注意没有 String，即 String 是引用类型
  - int 的数字范围是 21 亿
  - `char c = '你'`
  - 



## 类型转换与类型提升

- 整数除法是地板除

- 将所有类型提升到最高精度进行计算

- 丢失精度时需要进行强制转换

- char 数据类型参与计算时使用 ASCII 码

- 下面代码的运行

  ```java
  char c = '1'; // 定义单字符类型，占用 2 byte
  c = (char)(c + 1); // char 与 int 类型进行计算，会转化为 int 与 int 计算（提升精度），计算的结果是 int 50,然后对照 ASCII 表，将 int 50 转化为 char 2
  System.out.println("c = " + c); // 打印 2
  ```

## 基本数据类型对应的装箱类型

- 为什么要有装箱类型

  - 容器类不接受原生数据类型
  - 可以赋值为 null
  - 提供额外的方法
  - 自动装箱与拆箱

- （存疑）装箱类型相当于 js 

  ```
  let a = "sdf"
  let aObj = new String("sdf")
  ```

## null与equals约定在数据类型中的应用

- 代码

  ```java
  Integer i = 1000;
  Integer ii = 1000;
  System.out.println(i == ii);
  
  System.out.println("i.equals(ii) = " + i.equals(ii));
  ```

## 数组类型

 

 
