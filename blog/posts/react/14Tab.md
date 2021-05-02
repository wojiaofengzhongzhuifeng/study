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



### tabPane 如何实现 tabName 与tabContent HTML 分离？

- 问题

  如果按照下面的方式使用 tab 组件，那么按照最简单的方式渲染 HTML ，会是如下 HTML 

  ```jsx
  <Tab defaultActiveKey="1" activeKey={1} onChange={onChange}>
    <TabPane key="1" tabName={'第一个 tab'}>
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" tabName={'第二个 tab'}>
      Content of Tab Pane 2
    </TabPane>
    <TabPane key="3" tabName={'第三个 tab'}>
      Content of Tab Pane 3
    </TabPane>
  </Tab>
  ```

  ![image-20210430143301820](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210430143301820.png)

  但是我想把 tabName 放到一起，tabContent 放一起，这样我写 css 好处理，如何实现？

- 解决方法
  在 tab组件中通过 map 分别获取 tabName 与 tabContent。

  tabPane 组件不做任何渲染

  ```jsx
  export const Tab: React.FunctionComponent<TabProps> = ({children})=> {
    return (
      <div className={sc()}>
        <div className={sc('pane-header-ct')}>
          {children.map((tabPane)=>(
            <div>{tabPane && tabPane.props.tabName}</div>
          ))}
        </div>
        <div className={sc('pane-content-ct')}>
          {children.map((tabPane)=>(
            <div>{tabPane && tabPane.props.children}</div>
          ))}
        </div>
      </div>
    )
  };
  ```

  

  

