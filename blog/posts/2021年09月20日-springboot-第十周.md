### IOC 实现

- 容器
- 加入容器
- 注入



### 将类加入到 IOC 容器方法-模式注解 

- Component
- ====
- Service
- Controller
- Repository
- ====
- Configuration



### 为类注入其他类的方式-@Autowired

```java
@Component
class Test{
	public void r(){
		System.print.out()
	}
}

// 方法 1： 字段注入、成员变量注入  
class BannerController{
	@Autowired
	private Test test;
}


// 方法 2： 使用构造函数的方法注入类
class BannerController{
	@Autowired
	public void BannerController(Test test){
		this.test = test;
	}
}

// 方法 3: 使用 setting 的方法注入类
class BannerController{

	private Test test;
	
	@Autowired
	public void setTest(Test test){
		this.test = test;
	}
}

```

  

### @Autowired 注入的优先级

- 找不到任何一个 bean 直接报错
- 找到一个，直接注入为类注入 bean
- 找到多个，并不一定会报错，按照字段名字推断选择哪个 bean



### 面向对象中，面对变化的应对方案

- 策略模式

  - 为类添加@Primary 

  - 条件注解

    @Conditional + Condition

-  一个类 使用属性 解决变化







### 条件注解 

   







