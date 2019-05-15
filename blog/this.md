# this





## this 的指向

1. 对象函数或者函数调用

   变量 a 是函数的参数，只有当函数调用时，才能确定 a 的值

   **变量 this 是函数的参数，只有当函数调用时，才能确定 this 的指向**

   ```javascript
   function test1(a){
     console.log("a", a)
     console.log("this", this)
   }
   let obj = {
     name: "rjj"
   }
   test1("a")
   test1.call(obj, "b")
   ```

2. 构造函数

   **this 指向实例**

3. 箭头函数

   箭头函数的 this 是外部作用域指向的 this

   ```javascript
   let obj = {
     a: "123"
   }
   let _this = "我是 window";
   // 页面加载时，会执行 var this = window;
   let test = ()=>{
     console.log(this)
   }
   function test3(){
     console.log(_this)
   }
   function test1(){
     console.log(this)
   }
   
   test.call(obj)
   test1.call(obj)
   test3()
   ```

   

