# Git



## merge some commit into one commit

- 注意， 下面的commit，不能使用本方法，(需求是将 rebase1，2，3合并成rebase1)

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530193126.png)

- 需求：将rebase1，rebase2，rebase3合并成一个commit，并且该 commit 的名称为 rebase1 合并

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185255.png)

- 过程

  - 获取 init commit, 一定是 `init`!!!!!

  - `git rebase -i f210`，弹出互动界面
  
    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20191009162008.png)

  - 使用 vim 修改(删除单词`de`)，修改后如下：

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185731.png)

  - `:wq`退出后，会继续弹出一个界面，在这里可以修改 commit 信息

    ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20190530185929.png)

  - 完成合并commit操作

  - 如果想取消 rebase 操作

    `git rebase --abort`


