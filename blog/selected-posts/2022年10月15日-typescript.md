## 直播

### ts 数据类型

![image-20221015115109202](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015115109202.png)

---

### Record 作用

https://playcode.io/985920

使用 record 描述普通对象

---

### 「| 操作」「& 操作」「extends 操作」 比较

```
type Person = {
  name: string
}
type a = number | string | boolean // or
type b = number & string & boolean // and
interface Student extends Person { // 使用 interface ，对对象属性继承的方式
  schoolName: string
}
type Student1 = Person & { // 与 Student 一致，使用 type ，对对象属性继承的方式
  schoolName1: string
}

const test:Student = {
  name: "Fda",
  schoolName: "123"
}
const test1: a = "fda"
const test2: b = "fda" // 被 ts 推断为 never 类型
const test: Student1 = {name: "fdas",schoolName1: "fjdksal"}

```

---

### unknow 的作用

先使用 unknow ，然后使用断言

---

 ### 使用 interface 描述函数

 ```
 interface Fn{
   (a:number):string
 }
 const fn: Fn = (a)=>{
   return "fjdklsa"
 }
 ```

---

### type vs interface

- type 描述所有数据类型；interface 描述对象类型

  ![image-20221015141111193](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015141111193.png)

- type 是类型别名；interface 是类型声明

- type 不可重新赋值；interface 会合并类型 

  ![image-20221015141906866](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015141906866.png)

- 对内接口使用 type，防止代码分散；对外接口使用interface ，方便适用方扩展

---

### 联合类型

联合类型，即 「| 操作」，取 A2 +B2 + 两者的交集

![image-20221015143736041](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015143736041.png)



```
type A1 = { 
  a: number
}
type B1 = {
  b: string
}
type C1 = A1 | B1

const c1: C1 = {
	a: 1
}
const c2: C1 = {
	b: "1"
}
const c3: C1 = {
  a: 1,
  b: "fda"
}
```

---

### ？？type A = {name: string} 的含义？

表示**只需要**包含 name ，不表示**只能有** name，

```
type A = {
  name: string
}
let a: A = {name: "jfdka", age: "fjdkal"} // 虽然这样会报错，但是我这样操作就不会了
const helpa1 = {name: "jfdka", age: "fjdkal"}
let a1: A = helpa1
```

---

### 如何在项目中使用联合类型？

在使用联合类型时，需要对类型做类型收窄操作，常见的类型收窄方法有：

- 使用 typeof
- 使用 is语法
- 可辨别联合：新增 kind key

![image-20221015144008823](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015144008823.png)

![image-20221015144608189](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015144608189.png)

![image-20221015145358187](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20221015145358187.png)

---

### 交叉类型

交叉类型，即 「& 操作」，取两者的交集 

```
type A1 = { 
  a: number
}
type B1 = {
  b: string
}
type C1 = A1 & B1

const c1: C1 = { // 报错
	a: 1
}
const c2: C1 = { // 报错
	b: "1"
}
const c3: C1 = { //正确
  a: 1,
  b: "fda"
}
```

