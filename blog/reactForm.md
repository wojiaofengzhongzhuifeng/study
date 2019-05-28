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

## form 功能

- 使用「单向数据流」 + 「受控组件」的思想，外部获取最新数据
- 表单验证