## 将代码上传到多个远程仓库

## 安装类型依赖
 
### ✅在 package.json 中的 script 的添加脚本 

### ✅在 lib/index.tsx 文件中引入 react

需要引入类型声明文件

## webpack 的 resolve 配置的作用是什么？

    在引入icon组件的时候，报了这个错误
   
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190804101553.png)
   
    如果直接`import Icon from './icon/Icon';` webpack 找不到文件
   
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190804101929.png)
   
    所以需要添加 resolve，让 webpack 解析
   
    resolve 的工作方式是，一旦遇到类似`import Icon from './icon/Icon';`没有添加后缀的引入。
   
    那么webpack就会根据你写的 resolve.extensions 一个一个进行对应查询。
   
    如 extensions = ['.js', '.jsx', '.ts', '.tsx']
   
    那么webpack就会这样找 `import Icon from './icon/Icon.js`， `import Icon from './icon/Icon.jsx` 。。。

### ✅新建一个 button 组件，将 button 组件放到 lib/index.tsx 中

### ✅在webpack.config.js 添加 resolve  

## TSX 必须引入 React

## 构建之后的文件，体积太大

### ✅解决构建项目后的文件，体积过大的问题

    1️⃣在入口文件写一句代码
  
    2️⃣webpack.config.js 设置为 production
  
    3️⃣运行`yarn build`
  
    4️⃣发现打包后的index.js 有120kb，太大了
  
    这样解决：
  
    在 webpack.config.js 中添加 external 配置
  
      ```
      externals: {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React',
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM',
        },
      }
      ```
  
    这样，`yarn build`后的index文件大小就只有2k了
  
    但是，`yarn start`出错了，因为我把react从我的库删除了
  
    所以必须将webpack.config.js 分成三个文件：webpack.config.base.js, webpack.config.prod.js, webpack.config.dev.js
  
    配置拆分完成之后，要在相应的脚本执行不同的配置文件，如
  
    `"start": "npx webpack-dev-server --config webpack.config.dev.js",`

### ✅英文：external 排除

## 开发环境与生产环境的区别

### ✅将 webpack.config.js 拆分成 3 个文件

### ✅这 3 个文件分别在相应的脚本执行

## 配置 TS 类型声明文件

### ✅在入口文件声明变量，并且导出，打包完毕后，类型声明文件（index.d.ts）应该放到 dist 目录中

    https://github.com/wojiaofengzhongzhuifeng/react-ui/commit/e501ee7b834a82f621a50b72a347d2af6b0787ee

### ✅导出的库，需要手动指定库的类型声明文件

## 配置 Jest

### ✅轮子项目引入 jest

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190804133011.png)

    翻译：验证错误：模块 `ts-jest` 在 transform 的配置中没有找到（需要安装ts-jest模块）
    
    xxx no found === 需要安装 xxx

## 神奇的 import

### ✅为什么必须`import * as React from "react ""` 才能正常导入？

## 艰难解决 bug

## 总结
