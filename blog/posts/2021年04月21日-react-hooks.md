# 学习 React Hooks 笔记

## 本文目标

- 通过最小化的 demo 代码，学习 React Hooks API
- 收集常用的 hooks
- 收集使用 hook 的坑



## Hooks 汇总

- [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
  - [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
  - [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)
  - [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo)
  - [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref)
  - [`useImperativeHandle`](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  - [`useLayoutEffect`](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  - [`useDebugValue`](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)
- Custom Hooks
  - useDebounce
    - 对数据进行防抖处理
  - useAuth
    - 包含 userInfo， login，register，logout
  - useHttp
    - 使用 useAuth 的 userInfo 发送 HTTP 请求的 Hooks
  - useAsync
    - 处理请求过程中的 loading、error 状态
  - useDocumentTitle



## 官方 Hooks demo



### useContext

https://codesandbox.io/s/thirsty-cherry-n7qjn







## Custom Hooks

### useDebounce

- [不使用 debounce](https://jsbin.com/suyuyetutu/1/edit?html,js,console,output)
- [未封装 debounce](https://jsbin.com/zovuvidoze/1/edit?html,js,console,output)
- [封装 debounce](https://jsbin.com/fotuwoteti/1/edit?html,js,console,output)
- [cusTomHook useDebounce](https://codesandbox.io/s/trusting-oskar-o2mkf)





## Hooks 经典的坑

### react hooks 闭包陷阱

- react hooks 例子

  - [例子](https://codesandbox.io/s/interesting-swanson-pks22)

  - 原因

    - 页面加载完毕后，会为 Test 组件生成第一个快照，此时 count = 0

    - 点击 + 号后，会为 Test 组件生成第二个快照，此时 count = 1 

    - 离开 Test 组件后，会执行第一个快照的useEffect 的回调函数，在这个回调函数中获取 count，此时 count = 0
- javascript 例子
  - [原生 js 例子1](https://jsbin.com/sewadozadi/1/edit)
  - [原生 js 例子2](https://jsbin.com/tavatumima/1/edit?js,console,output)




### useEffect 依赖项是对象或者数组，造成无限渲染

- [例子](https://codesandbox.io/s/upbeat-einstein-ozqpe)
- 原因



### useEffect 依赖项是函数，造成无限渲染

- [例子](https://codesandbox.io/s/festive-sun-mzp7l)
- 原因





### react useState 不能条件调用





## Dan 博客

- 每一次渲染都有它自己的 Props and State，并且它们始终不变的

- 每一次渲染都有它自己的事件处理函数
  事件处理函数“看到”的是属于它那次特定渲染中的`state.count`状态值

- 每次渲染都有它自己的Effects
  与事件处理函数一致

  如果 useEffect 不指定依赖项，那么每次渲染后都会运行 useEffect 的函数

- 每一次渲染都有它自己的…所有

- 逆潮而动

- 那Effect中的清理又是怎样的呢？

- 同步， 而非生命周期

- 告诉React去比对你的Effects

- 关于依赖项不要对React撒谎

- 如果设置了错误的依赖会怎么样呢？

- 两种诚实告知依赖的方法

- 函数式更新 和 Google Docs

- 解耦来自Actions的更新



