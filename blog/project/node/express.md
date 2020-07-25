- 子应用 + 挂载点 概念的含义

  ```
  var app = express() // 主应用
  var admin = express() // 另一个应用
  app.use('/admin', admin) // /admin 是挂载点, admin 作为子应用
  ```

- 