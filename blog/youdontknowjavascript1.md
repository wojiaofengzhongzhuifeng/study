# 《你不知道的javascript》笔记



## 第一章，作用域是什么

- 作用域是什么？

  是一个规则，用于获取声明的变量

- 计算机语言的分类

  - 机器语言（二进制代码）
  - 汇编语言（面向机器的程序设计语言）
  - 编译语言（也叫高级语言，在运行之前，需要进行**编译**），按转换方式分为以下三类
    - 解释性语言：Java、JavaScript、Perl、Python、Ruby、MATLAB 等。
    - 编译性语言： C/C++、Pascal/Object Pascal（Delphi)
    - 脚本语言：Python、JavaScript，ASP，PHP，Perl等

- 编译的三个步骤

  - 词法分析：将编译语言的代码通过「分词」分解成词法单元流(数组)
  - 语法分析：将词法单元流转成AST
  - 代码生成：AST转化为可执行代码

- 