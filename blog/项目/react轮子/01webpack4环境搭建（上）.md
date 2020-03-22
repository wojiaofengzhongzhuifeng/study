## 编辑器的快捷设置

### ✅如何使用ide格式化代码，以及格式代码如何配置？

![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190803092029.png)

- format

- prefer => Editor => Code Style

## awesome-typescript-loader

### ✅tslint 与 tsconfig 的区别

  lint 是规则；config 是配置 

## 配置库格式-umd

### ✅配置output的时候，用到了path模块以及`__dirname`的使用

### ❗️umd, amd, commond.js

- amd 是前端模块定义

- commond 是nodejs模块定义 

- umd 是最普遍的模块定义

## webpack终于能运行了

## webpack-dev-server

### ✅webpack-dev-server 是什么？有什么用？

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190803104355.png)

  库，通过`yarn add webpack-dev-server --dev`安装
  
  通过命令行`npx webpack-dev-server`开启一个服务，就是`yarn start`的原理
  
## html-webpack-plugin

### 是什么？有什么用？

  库，在编译的时候，可以生成一个html
  
### 需要实现的效果

  - 执行一个命令，这个命令类似`yarn start`，当你修改代码的时候，能自动更新。
  
  通过 webpack-dev-server + html-webpack-plugin 实现
  
  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190803210430.png)
  
  执行`npx webpack-dev-server`
  
