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

    对数据进行防抖处理



## 官方 Hooks demo



## useContext

### 代码

https://codesandbox.io/s/thirsty-cherry-n7qjn

[更简单的例子](https://codesandbox.io/s/purple-wood-j3wgu)



## useReducer

https://codesandbox.io/s/beautiful-ellis-i057u?file=/src/App.js

## useMemo

- 人民、美元换算工具

  https://codesandbox.io/s/clever-bird-bque7

## useRef

- 模拟 class 组件的 componentDidUpdate（使用 useRef 保存贯穿多次渲染的变量）

  https://codesandbox.io/s/charming-moser-dqjtn?file=/src/App.js



## Custom Hooks

### useDebounce

对用户输入值进行节流操作

- [不使用 debounce](https://jsbin.com/suyuyetutu/1/edit?html,js,console,output)
- [未封装 debounce](https://jsbin.com/zovuvidoze/1/edit?html,js,console,output)
- [封装 debounce](https://jsbin.com/fotuwoteti/1/edit?html,js,console,output)
- [cusTomHook useDebounce](https://codesandbox.io/s/trusting-oskar-o2mkf)



### useAsync 

统一处理异步请求

https://github.com/wojiaofengzhongzhuifeng/test-react-fetch-data



### useUrlQueryParam

返回页面 url 中，执行 key 的参数值









## Hooks 经典的坑

### react hooks 闭包陷阱

- react hooks 例子

  - [例子](https://codesandbox.io/s/interesting-swanson-pks22)

  - 原因

    - 页面加载完毕后，会为 Test 组件生成第一个快照，此时 count = 0
    - 点击 + 号后，会为 Test 组件生成第二个快照，此时 count = 1 
    - 离开 Test 组件后，会执行第一个快照的useEffect 的回调函数，在这个回调函数中获取 count，此时 count = 0

- [react hooks 例子 2](https://codesandbox.io/s/festive-mcnulty-k6hu3)

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







