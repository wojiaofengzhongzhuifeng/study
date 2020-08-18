# 命令行提高效率



## 在命令行中打开 idea

- idea 中打开，复制 path

  ![image-20200817222901300](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200817222901300.png)

- 执行一下命令

  ```sh
  # 添加alias
  alias dd='/usr/local/bin/idea $1'
  # 命令生效
  source ~/.zshrc
  # 这样使用
  cd /path/to/project
  dd .
  ```

  

