# Bos 组件的体积优化



## plugin 与 loader 区别：

- plugin 插件， 帮你实现功能
- loader 加载器：将高级语法转化为低级语法





## dependencies 与 devDependencies 区别

If you are going to develop a package, you download it (e.g. via `git clone`), go to its root which contains `package.json`, and run:

如果你想要二次开发一个 npm 包（假设是 addNumber），你需要下载该包的源代码，进入到项目目录，运行

```js
npm install
```

Since you have the actual source, it is clear that you want to develop it, so by default, both `dependencies` (since you must, of course, run to develop) and `devDependency` dependencies are also installed.

因为你有了完整的代码，你就能进行二次开发了，dependencies 与 devDependency 都会被安装

If however, you are only an end user who just wants to install a package to use it, you will do from any directory:

如果你只是 api 调用者，只想在你的项目中使用 addNumber npm 包

```js
npm install "$package"
```

In that case, you normally don't want the development dependencies, so you just get what is needed to use the package: `dependencies`.

在这种情况下，你一般不想开发有关devDependencies内容，所以只会下载 dependencies 依赖的包，而不会下载 devDependencies 依赖包







## CSS 处理

less less-loader 区别

postcss-loader 与 less-loader 区别

style-loader 是什么？？







## 体积优化的第一步：使用各种工具寻找当前项目存在的问题

常见的工具：

- BundleAnalyzerPlugin

  可视化分析打包后的代码大小

  ![image-20201021105020511](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201021105020511.png)








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







## 最简单的 webpack 配置

```
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		// path: './bundle', 这样写错误，需要绝对路径
		path: path.resolve(__dirname, 'bundle')
	}
}
```







## 有什么方式可以运行 node 包？

- node 包安装在全局

  `webpack index.js`

- node 包安装在项目

  `npx webpack index.js`

- node 包安装在项目, 并且添加 npm scripts

  package.json 配置

  ````
  "scripts": {
  	"build": "webpack index.js"
  },
  ````

  这样运行即可

  `yarn build`



## webpack-cli 作用

可以在命令行使用 webpack 这个命令



## webpack 如何处理图片？

如果直接在项目中使用图片，会报如下错误
![image-20201025120235801](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201025120235801.png)

需要安装相应 loader，配置如下

![image-20201025120914823](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201025120914823.png)

其中对于png的处理如下：

1. 发现是 png, 将图片复制到打包后的目录，改个名字 fdksaljfkdsa12389ud8fsa.png
2. 使用 png 的地方，将进行变量赋值
   ![image-20201025121329214](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201025121329214.png)







## loader 作用？

处理文件打包，文件包括 图片，样式文件，



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

  