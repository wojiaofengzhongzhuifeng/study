

# 使用 typeorm + typescript 在 next.js 中获取数据库数据

## 背景

使用 next 脚手架创建的项目，引入 typeorm + typescript 库。



## 目标

在 next 的 posts 页面中使用 typeorm 加载数据库数据。



## 过程

- 查看 [connection文档](https://typeorm.io/#/connection)

  ![image-20200827113855991](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827113855991.png)

  写了如下代码，报了如下错误

  ```
  EntityMetadataNotFound: No metadata for "Post" was found.
  ```

  ![image-20200827113954804](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827113954804.png)

- 拿着报错去搜索解决方法

  搜索到[这个](https://stackoverflow.com/questions/51562162/no-metadata-for-user-was-found-using-typeorm)，按照他说的，试了之后发现还是不行。
  ![image-20200827114502194](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114502194.png)

  但是可以确定的信息是：**报错与 typeOrm 配置有关**

  ![image-20200827114802946](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114802946.png)

  上面代码在文档中，默认导入的是 ormConfig.json 的配置，ormConfig.json 的配置如下：

  ![image-20200827114904317](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827114904317.png)

  感觉都没有问题呀。

- 使用手动配置 ormConfig 代替文件配置
  既然能确定配置问题，我直接使用手动配置的方法测一下，代码如下：

  ![image-20200827115254682](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20200827115254682.png)

  可以拿到数据库数据啦。

  