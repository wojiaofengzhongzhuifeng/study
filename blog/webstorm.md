# 工具使用

## shell 添加alias方法

- 进入根目录

  ```shell
  $ cd
  ```

- 打开`.bash_profile`文件

  ```shell
  $ open .bash_profile
  ```

- 添加一个函数，我以blog发布的commit为例，只有函数才能获取到 alias 的参数

  ```
  aa() {
      git add .
      git commit -m "$1"
      git push
  }
  ```

- 配置生效

  ```shell
  $ source .bash_profile
  ```

- Ok



## 使用命令行打开webstorm

- 在webstorm中，双击 shift ，输入`create command-line`，复制路径

- 添加脚本到 `.bash_profile` 中，函数内容是

  ```
  ws() {
      /usr/local/bin/webstorm $1
  }
  ```

- 配置生效

  ```shell
  $ source .bash_profile
  ```

  