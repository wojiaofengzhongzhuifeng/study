# Button

### Button的 type props，用户只能从 'default', 'primary', 'ghost', 'dashed', 'danger', 'link' 选择是怎么实现的？

<details>
<summary>答案</summary>

```
// 1. 创建 tuple 辅助函数
const tuple = <T extends string[]>(...args: T) => args;

// 2. 
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');

// 3. 
type ButtonType = (typeof ButtonTypes)[number];

// 4. 
interface BaseButtonProps {
  type?: ButtonType
}
```

</details> 

### 如何制定props 的默认值

### 如何定义「react 的鼠标事件处理函数」？

`React.MouseEventHandler<HTMLElement>`

### 如何根据已存在的 interface1，返回一个新的 interface2，其中 interface2 删除了某个属性？

<details>
<summary>答案</summary>
Hi~ o(*￣▽￣*)ブ
</details> 

### 
