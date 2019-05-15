

# React

#### React 数据流动 历史

1. 直接通信 父子
   - 父传子：通过props
   - 子传父
      1. 父组件通过props传一个函数
      2. 子组件执行这个函数，带上参数 
2. 通过eventBus 
    1. 父组件监听事件
    2. 子组件触发事件
3. redux
    1. 编写reducer函数，用于『初始化数据』和『根据 action 对数据修改』
    2. 使用 reducer 生成 store
    3. 监听数据，一旦数据变化，重新render
    4. 从上往下传递store
    5. store有获取数据(`getState()`)和修改数据接口(`dispatch(action)`)，使用即可
[redux数数例子](https://codesandbox.io/s/zkklzkroll)
4. redux 有什么缺点？
    1. store 必须逐层传递
4. react-redux
    1. 编写reducer函数，用于『初始化数据』和『根据 action 对数据修改』
    2. 生成store
    3. 使用`<Provider>`组件包裹整个组件，并且传store给`<Provider>`
    4. 在任意层级子组件中，通过 connect 高阶函数，将『初始化数据』和『根据 action 对数据修改』传给子组件
[react-redux例子](https://github.com/wojiaofengzhongzhuifeng/react-redux-demo)







## react 生命周期

1. react 的生命周期(最常用)
    - 挂载：constructor => render => componentDidMount
    - 更新：render => componentDidUpdate
    - 卸载：componentWillUpdate
1. 组件经常要做的操作
   - 请求数据（ajax）
      `componentDidMount`
   - 更新数据（setState）
      只能在事件监听函数或者`componentDidMount`
1. 为什么`shouldComponentUpdate`重要？
   - 自定义更新组件
   - 提高react性能
1. 当`setState`时，会执行那些钩子函数？
  getDerivedStateFromProps => shouldComponentUpdate => render => getSnapshotBeforeUpdate => componentDidUpdate









### 受控组件/非受控组件

1. 受控组件：表单数据由 React 组件控制

   ```javascript
   <input value={this.state.value} onChange={this.handleChange.bind(this)}>
   ```

2. 非受控组件：表单数据由 dom 处理

   ```javascript
   class NameForm extends React.Component {
     constructor(props) {
       super(props);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.input = React.createRef(); // 重要
     }
   
     handleSubmit(event) {
       alert('A name was submitted: ' + this.input.current.value); // 重要
     }
   
     render() {
       return (
         <form onSubmit={this.handleSubmit}>
           <label>
             Name:
             <input type="text" ref={this.input} /> // 重要
           </label>
           <input type="submit" value="Submit" />
         </form>
       );
     }
   }
   
   ```

   

### React 有哪些生命周期函数？分别有什么用(ajax 请求放在那个阶段？)

[http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190514184258.png)

### React 如何实现组件通信

四个阶段

### shouldComponentUpdate 有什么用

### 虚拟 DOM 是什么

### 什么是高阶组件

是函数，接受组件作为参数，返回新组件

1. 创建 HOC 函数
2. 根据需求，在原来组件的基础上，导出使用了 HOC 的组件

react-redux 的 connect 就是一个高阶函数

```javascript
let newConponent = connect(mapStateToProps, mapDispatchToProps)(Component)
```



### React diff 的原理是什么

### Redux 是什么

### connect 的原理是什么



### React 更新视图过程

1. 用户使用 JSX 定义一个组件

   ```jsx
   class Test extends.React.Component{
     render(){
       return (
         <ul>
           <li>1</li>
           <li>1</li>
           <li>1</li>
         </ul>
       )
     }
   }
   ```

2. React 使用 JavaScript 对象表示结构，使用对象构建 DOM 树

3. 当状态变更时，重新使用新的 JavaScript 对象表示结构

4. 将旧的 JavaScript 对象与新的 JavaScript 对象进行比较，记录差异

5. 把差异应用到 DOM 树中，视图更新

**总结：构建对象 => 视图改变，生成对象 => 比较差异 => 应用差异**

### diff 算法

高效比较两个 JavaScript 对象的算法

### 为什么要加key

react 的 diff 算法是根据虚拟 DOM 的 key 进行比较

#### 例子

使用这样的数组生成 dom

[{name: "raojiajun"}, {name:"xxx"}, {name: "hi"}]

那么 react 会这样生成 虚拟dom

```
<li key=0>raojiajun</li>
<li key=1>xxx</li>
<li key=2>hi</li>
```

如果此时往数组开头添加{name: "test"}

那么 react 会这样生成虚拟dom

```
<li key=0>test</li>
<li key=1>raojiajun</li>
<li key=2>xxx</li>
<li key=3>hi</li>
```

react 总是根据虚拟 dom 的 key 值进行判断是否要更新 ui，按照上面的，所有的 dom 都需要改变，开销很大

