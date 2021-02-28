### react hooks 闭包陷阱

- react hooks

  - [例子](https://codesandbox.io/s/interesting-swanson-pks22)

  - 原因

    - 页面加载完毕后，会为 Test 组件生成第一个快照，此时 count = 0

    - 点击 + 号后，会为 Test 组件生成第二个快照，此时 count = 1 

    - 离开 Test 组件后，会执行第一个快照的useEffect 的回调函数，在这个回调函数中获取 count，此时 count = 0
- 原生模拟
  - [原生 js 例子1](https://jsbin.com/sewadozadi/1/edit)
  - [原生 js 例子2](https://jsbin.com/tavatumima/1/edit?js,console,output)

- 不是很懂原生例子 1 与 2 打印的内容为什么不同。涉及到闭包

### react useEffect 的依赖项的坑

- 触发条件
  - 依赖项是引用类型（包括对象 or 函数）
  - 在 useEffect 内部执行 setState 操作

- 现象

  无限渲染

- demo 代码

  - [依赖项是 fn](https://codesandbox.io/s/festive-sun-mzp7l)
  - [依赖项是 obj](https://codesandbox.io/s/upbeat-einstein-ozqpe)

- 写 react hooks需要注意的地方

  在函数组件或者 Custom Hooks 中，定义函数或者引用类型，需要使用 useCallback 或者 useMemo 处理，不能直接使用

### react useState 不能条件调用

### react custom hooks 是一个函数生成器

hooks是一个生成器 用于**生成**相关函数 而不能作为业务函数**直接调用**

