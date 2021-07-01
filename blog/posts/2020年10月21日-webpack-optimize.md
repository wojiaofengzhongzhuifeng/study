













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

### webpack.config.js => HTML（htmlWebpackPlugin）

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

###  webpackconfig.js => js 文件(DefinePlugin )

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









## webpack 优化方式

### Dll （DllPlugin  + DllReferencePlugin ）

- 解决思路

  将不做修改的依赖文件（React），提前打包，这样我们打包的时候，就不需要对这部分代码进行打包，节省打包时间

- 解决步骤

  - 使用 DllPlugin 打包生成 react_dll.js 与 manifest.json

    ```javascript
    // 文件目录：configs/webpack.dll.js
    'use strict';
    
    const path = require('path');
    const webpack = require('webpack');
    
    module.exports = {
        mode: 'production',
        entry: {
            react: ['react', 'react-dom'],
        },
        // 这个是输出 dll 文件
        output: {
            path: path.resolve(__dirname, '../dll'),
            filename: '_dll_[name].js',
            library: '_dll_[name]',
        },
        // 这个是输出映射表
        plugins: [
            new webpack.DllPlugin({ 
                name: '_dll_[name]', // name === output.library
                path: path.resolve(__dirname, '../dll/[name].manifest.json'),
            })
        ]
    };
    ```

  - 使用 DllReferencePlugin 链接 dll 文件，使用 AddAssetHtmlPlugin 将 _dll_react.js 挂载到 HTML

    ```javascript
    // 文件目录：configs/webpack.common.js
    
    const path = require('path');
    const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'); // 顾名思义，把资源加到 html 里，那这个插件把 dll 加入到 index.html 里
    const webpack = require('webpack');
    module.exports = {
      // ......
      plugins: [
        new webpack.DllReferencePlugin({
          // 注意: DllReferencePlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
          context: path.resolve(__dirname, '../'),
          manifest: path.resolve(__dirname, '../dll/react.manifest.json'),
        }),
        new AddAssetHtmlPlugin({
          filepath: path.resolve(__dirname, '../dll/_dll_react.js'),
        }),
      ]
    }
    
    ```

    

### js 代码分割（splitChunksPlugin）

- 使用 entry 配置手动分离代码

  手动配置多入口实现代码分割，多入口打包抽取公共代码

  webpack 内置 splitChunksPlugin ，使用这个插件解决文件内容重复问题

  现有 main.js 与 other.js ，其中两个文件都是使用了 jquery（实现了多入口 js，但是带来了js 文件内容重复的问题）

  webpack.config.js 添加以下配置

  ```javascript
  optimization:{
  	splitChunks: { // 实际就是 splitChunksPlugin 插件的配置
  		chunks: "all"
  	}
  }
  ```

  | 优化之前打包后生成的文件                                     | 优化之后打包后生成的文件                                     |
  | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | 1. other.bundle.js（包含 jquery 源代码）<br />2. main.bundle.js（包含 jquery 源代码） | 1. other.bundle.js<br />2. main.bundle.js<br />3. vendors~main-other.bundle.js(包含 juqery 源代码)<br /> |

  

- 动态导入（懒加载）

  希望在使用 import/exoprt 语法的时候，可以使用条件判断。
  但是直接写会报错，所以使用动态导入的语法，实现条件判断，进而实现模块的动态导入。

  |        | import/export 导入模块语法           | 动态导入模块语法                                 |
  | ------ | ------------------------------------ | ------------------------------------------------ |
  | 示例   | import $ from 'jquery'               | import('jquery').then((default: $)=>{})          |
  | 注意点 | 只能放到文件最顶级，不允许有条件判断 | 1. 返回一个 promise<br />2. 可以在条件判断中运行 |

  在 react 中，使用 React.lazy + Suspense 实现动态加载

### IgnorePlugin

- 背景

  安装 moment 这个库，如果不做任何优化，打包后的代码会变非常大。

- 解决思路

  打包后代码变的非常大的原因是 moment 支持国际化，会有其他语言的代码，实际上是不需要的，需要在打包过程中删除所有语言，然后手动引入需要的语言

- 解决步骤

  - 通过查看源代码的方式，确定 moment 库依赖的语言包

  - webpack.config.js 使用 IgnorePlugin 插件忽略 moment 依赖的语言包

    ```javascript
    new Webpack.IgnorePlugin(/\.\/locale/, /moment/)
    ```

  - 使用 moment 时手动引入语言包

    ```javascript
    import moment from 'moment'
    import 'moment/locale/zh-cn'
    moment.locale('zh-cn')
    ```

    

  

### noParse（阻止 webpack 分析第三方库的依赖关系）

​	项目在使用第三方库（jquery），并且做了打包操作。那么 webpack 会在打包的过程中，尝试寻找 jquery 的依赖关系。但是这样做是没有意义的，需要阻止这个过程。

​	在 webpack.config.js 中，在 modules 中添加

```javascript
module:{
	noParse: /jquery|bootstrap/
}
```

- loader 配置添加 include/excludes 属性

  ```diff
  module:{
  	noParse: /jquery|bootstrap/,
  	rules:[
  	 {
  	 	test: /\.js$/,
  	 	use: {
  	 		loader: 'babel-loader'
  	 	},
  +	 	excludes: /node_modules/,
  +	 	includes: path.resolve(__dirname, './src')
  	 }
  	]
  }
  ```

### mode: production 做了什么？

- tree shaking
- scope hoisting
- 代码压缩





## 提高 webpack 打包速度



### 核心

打包后的代码 === 业务代码 + runtime 代码 + 第三方库代码（vendors）

### 单独打包 runtime

- 如何单独打包 runtime？

  ```
  // webpack.config.js 配置
  {
  	optimization: {
  		runtimeChunk: 'single'
  	}
  }
  ```

- 为什么单独打包 runtime 能提高效率？

  源代码中的入口 js 为 index.js

  打包的最终代码是 main.js ，main.js 内部包含两部分：主代码、runtime.js（将

   main.js 运行在 ie 等低版本浏览器的环境代码）。

  如果不单独打包，那么如果此时修改了 webpack 的配置，就会导致 main.js 发生变化，用户需要重新下载新的 main.js

  如果单独打包了 runtime.js 代码，那么如果此时修改了 webpack 的配置，用户只需要下载最新的 runtime.js 代码即可，不需要下载重复的主代码（因为业务代码根本没有修改）



### 将 node_modules 依赖单独打包

- 如何实现

  ```js
  // webpack.config.js 配置
  // 将外部依赖模块（如node_modules 目录下的react）从主代码中分离出来，生成 vendors.js
  {
  	optimization: {
  		splitChunks: {
  			cacheGroups: {
  				vendor:{
  					minSize: 0, 
  					test: /[\\/node_modules[\\/]]/,
  					name: 'vendors',
  					chunk: 'all'
  				}
  			}
  		}
  	}
  }
  ```

  

  