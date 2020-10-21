# Bos 组件的体积优化



plugin 与 loader 区别：

- plugin 插件， 帮你实现功能
- loader 加载器：将高级语法转化为低级语法





dependencies 与 devDependencies 区别

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







体积优化的第一步：使用各种工具寻找当前项目存在的问题

常见的工具：

- BundleAnalyzerPlugin

  可视化分析打包后的代码大小

  ![image-20201021105020511](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201021105020511.png)

- 