# Tab

### tab 不需要传入 activeKey（注意不是 defaultActiveKey），也能进行切换，如何实现的？

<details>
<summary>答案</summary>

把 propsActiveKey props 作为 tab 组件的 state，后续修改的是 state 的 key

</details> 

### tab 控制显示有两种模式(受控 | 非受控)，整体逻辑如下

1. 如果设置了 defaultKey 没有设置 activeKey，那么该组件是非受控组件。

2. 如果设置了 activeKey，没有设置 defaultKey，那么该组件是受控组件

3. 如果设置了 activeKey，设置 defaultKey，那么该组件是受控组件，并且 defaultKey 没有用

4. 如果两个都没有设置，那么该组件是非受控组件 + 默认显示第一个 tab

总结就是：

1. tab 的 key 值取值重要性为 `activeKey > defaultKey > 第一个 tabItem key`

2. 如果设置了 active 那么 tab 组件内部不再修改 state 值

