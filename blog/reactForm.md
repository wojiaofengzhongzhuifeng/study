# Form

## 过程笔记

- 第一个阶段： 收集输入数据test 111111113311111111

- 泛型的简单理解：更近一步解释数据结构

- 难点： 点击提交按钮的时候，如何获取最新数据

- 要点

  - 单向数据流：form数据如何更新

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190527230045.png)

- 第二个阶段：表单验证

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190527230745.png)

- 如何设置数据字符串类型？

  ```typescript
  type test = Array<String>
  ```

- Input组件如何继承原生input的所有方法

- 使用 line-height 代替 height 

- 制作 input 的时候，为什么要把classes单独抽出来

- 为什么要有 classes 这个辅助函数？？

  - 组件注册位置有写 className = "test"
  - 给 .test添加样式
  - 组件使用位置写className="test1"
  - .test样式被覆盖
  - 最好的结果是这样的，最终的className="test test1"
  - classNames的作用：  
    1. classNames("a", "b") => "a b"    classNames("a") => "a"

- 报错信息位置如何处理？添加占位span

- 一个input的报错信息可能是多个，由用户决定展示一个还是多个

  - 如何设置组件的props默认值
  
- 第三阶段：如何进行异步校验？
 