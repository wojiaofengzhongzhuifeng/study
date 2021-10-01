## Java 语言的跨平台性与字节码概述

- Java 代码经过编译后生成字节码，字节码在 JVM 中与不同系统进行及交互

## Java 语言的基本单元-类与包

- 类是最小结构单位
- `src/main/java` 是 java 默认的路径

## java 语言的基本结构-包的意义

- 全限定类名

## 在 Java 中引入第三方包

-  引入`org.apache.commons.lang3.stringutils`
- 为什么 String 不需要 import？

##方法、静态方法与静态成员变量 

- psvm sout 缩写
-  static 表示该函数不依附于任何对象，如果想使用这个函数，直接通过类进行调用
- 可以声明相同函数名，但是函数参数不能相同
- 静态成员变量 === 持续存在的变量

## 对象、构造器与成员变量

同下

## 实例方法与空指针异常

同下

## 包、类、静态方法、实例方法、静态成员、实例成员总结

- 类的结构分类
  - 静态变量
  - 静态方法
  - 实例变量
  - 实例方法
- this 指的就是实例
- 尽量不加 this
- 静态修饰符的理解
  - 经过 static 修饰的变量或者函数，在该类内部直接使用，在类外部通过类进行调用
  - 经过 static 修饰的函数，无法在函数内部使用 this

## 对象与引用详解

-  引用（reference） === 句柄

- main 这个方法可以放到任何类中

- （存疑，可能造成误解）cat1.name 存放的是 mini 字符串对象的引用，而不是 mini 这个字符串

  ```java
  public class Cat1 {
      public static void main(String[] args) {
          Cat1 cat1 = new Cat1("mini");
          System.out.println("test " + cat1.name); // 重点
      }
  
      public String name;
      Cat1(String name){
          this.name = name;
      }
  }
  ```

  

## 方法的传值vs传引用

- 执行一个函数，会创造该函数的环境

## 作业

- 提交 MR 时，必须先 fork 项目？