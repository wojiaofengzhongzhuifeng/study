













## CSS 处理

less less-loader 区别

postcss-loader 与 less-loader 区别

style-loader 是什么？？














## Webpack 是什么

> webpack is a module bundler

webpack 是一个模块打包工具, 模块可以是「 js，css，图片」





## 模块化

- ES Module 

  import / export 

- CommonJS

   require / module.exports

- CMD

- AMD

https://webpack.js.org/concepts/modules/

https://webpack.js.org/api/module-methods/









## file-loader 与 url-loader 

url-loader 可以实现 file-loader 所有功能

fie-loader 将文件**复制**到打包后文件夹

url-loader 将文件内容转化为base64，然后填充到代码中

对于大文件，使用 file-loader

https://webpack.js.org/loaders/file-loader/
https://webpack.js.org/loaders/url-loader/





## 如何处理样式文件？ 

https://webpack.js.org/guides/asset-management/
https://webpack.js.org/loaders/style-loader/
https://webpack.js.org/loaders/css-loader/

https://webpack.js.org/loaders/sass-loader/

https://webpack.js.org/loaders/postcss-loader/











## htmlWebpackPlugin 作用

在打包结束后，自动生成一个 html 文件，并且把打包生成的 js 自动引入到 html 文件中



 

## plugin 作用

webpack 运行到某个时刻的时候，帮你做一些事情，类似于生命周期



## cleanWebapckPlugin 作用

在打包之前，清空指定目录内容



## 如何配置多个入口文件

 

## 如何为所有 output 的 js 引用地址添加前缀？

https://webpack.js.org/guides/public-path/







https://webpack.js.org/guides/output-management/





## source map 作用

源代码与打包后代码的映射关系，用于调试

webpack devtool

开发环境：cheap-module-eval-source-map

研发环境：cheap-module-source-map



## 修改源代码，直接在网页上看到最新代码效果

- 直接修改npm script 

  ```javascript
    "scripts": {
  -    "build": "webpack",
  +    "build": "webpack --watch",
    },
  ```

- webpack-dev-server

- 自己通过 node.js 创建服务器，实现需求



## Hot Module Replace 热模块替换

- 修改样式文件时，不会重新刷新页面，而是直接替换样式内容
- 修改 A 模块代码，只会更新 A 模块代码，不会对 B 模块代码造成影响









## tree shaking

- 只支持 ES Module
- webpack.json 对象中添加 optimization 



## Code Splitting

- 解决打包文件过大问题

  假设：main.js = 业务代码 + lodash.js

  第一种打包方式

  首次访问页面时，加载 main.js(2mb)

  当业务代码发生变化时，需要重新加载 main.js （2mb）

  

  第二种打包方式（通过 Code Splitting，将业务代码与 lodash 在打包完毕后进行拆分）

  打包结束后，main.js 被拆成 lodash.js 与业务代码

  当业务代码发生变化时，只需要重新加载业务代码即可

- webpack.config.js optimization splitChunks

















## webpack开发优化-环境变量

### webpack html 的变量注入

预期： 绿色是开发环境预期代码。红色是线上环境预期代码

```diff
<!DOCTYPE html>
<html>
<head>
   <title>BOS速成营</title>
+   <script type="text/javascript" src="http://model.rickricks.com:7781/urlConfig.js"></script>
-   <script type="text/javascript" src="/urlConfig.js"></script>
</head>
<body>
<div id="root"></div>
</body>
</html>
```

简单来说

1. set：使用 HtmlWebpackPlugin 插件注入变量 urlConfig
2. get：在 index.html 中使用`<%= htmlWebpackPlugin.options.urlConfig %>`

实现过程

![image-20210129111746058](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210129111746058.png)

![image-20210129111758363](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210129111758363.png)

![image-20210129111807341](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20210129111807341.png)

### 实现 js 文件获取 webpackconfig.js 变量

https://www.zhaixiaowai.com/Article/article-1027.shtml

简单来说

1. set：使用 DefinePlugin 插件注入变量
2. get：在 js 文件使用注入的变量



### 根据环境变量注入不同配置文件

- create-react-app + dotenv 出现问题

  需要在 `.env` 中添加如下的 preload

  ```diff
  - TEST=123321
  + REACT_APP_TEST=333333
  ```

  

## Webpack-dev-server 代理请求

- webpackDevServer 实现请求转发 

  需求：

  1. 现有线上地址 `http://www.dell-lee.com/react/api/header.json` ,假设这个api存在跨域问题，不能直接通过 ajax 获取数据
  2. 现有线上地址 `http://www.dell-lee.com/react/api/header.json` 与 `http://www.dell-lee.com/react/api/demo.json`，假设 header.json 是真实接口地址，demo.json 是 mock header.json 的接口地址。现需要对接口进行重写操作。

  请求过程：

  1. 前端 axios 请求的是 http://localhost:8080/react/api/header.json

  2. webpackDevServer 根据 proxy 配置，

     ```javascript
       devServer: {
         contentBase: path.resolve(__dirname, './dist'),
         hot: true,
         proxy: {
           '/react/api': {
             target: 'http://www.dell-lee.com',
             pathRewrite: {
               'header.json': 'demo.json'
             }
           }
         }
       },
       
     axios.get('/react/api/header.json')
     ```

     

     使用 node 去请求 http://www.dell-lee.com/react/api/demo.json，并且把响应数据放回 http://localhost:8080/react/api/header.json 

  3. 前端通过请求  http://localhost:8080/react/api/header.json 实际请求的是 http://www.dell-lee.com/react/api/demo.json

  总结：

  1. 前端请求: `http://localhost:8080/react/api/header.json`
  2.  => `http://www.dell-lee.com//react/api/header.json`
  3.  => `http://www.dell-lee.com//react/api/demo.json`



## webpack-dev-server 解决单页面路由问题

- 核心

  先命中真实文件 再命中前端路由

- 过程

  用户请求 `localhost:8080/list.html`，但是打包后的目录没有 list.html ，导致 404 错误

- 解决方法

  使用工具进行配置：「如果发现 404，那么返回 index.html 」，在 index.html 中可以处理路由问题



## create-react-app 生成的 react应用，打包之后如何在 github preview ？

- github 开启github pages

- create-react-app package.json 添加属性，然后再 yarn build

  ```
  "homepage": "."
  ```

- 将 build or dist 从 .gitignore 删除

- git push 