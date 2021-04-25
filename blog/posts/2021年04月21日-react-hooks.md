# 原子化 demo 学习 React Hooks

## 本文目标

- 通过最小化的 demo 代码，学习 React Hooks API
- 收集常用的 hooks



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
    - hooks 与 闭包坑



## 官方 Hooks demo



### useContext

https://codesandbox.io/s/thirsty-cherry-n7qjn







## Custom Hooks

### useDebounce

- [不使用 debounce](https://jsbin.com/suyuyetutu/1/edit?html,js,console,output)
- [未封装 debounce](https://jsbin.com/zovuvidoze/1/edit?html,js,console,output)
- [封装 debounce](https://jsbin.com/fotuwoteti/1/edit?html,js,console,output)
- [cusTomHook useDebounce](https://codesandbox.io/s/trusting-oskar-o2mkf)





