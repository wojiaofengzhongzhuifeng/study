
## git操作之前要做的事情

### 配置 ssh

1. 进入 [https://github.com/settings/keys](https://github.com/settings/keys)

2. 如果页面里已经有一些 key，就点「delete」按钮把这些 key 全删掉。如果没有，就往下看

3. 点击 New SSH key，你需要输入 Title 和 Key，但是你现在没有 key，往下看

4. 打开 Git Bash

5. 复制并运行 `rm -rf ~/.ssh/*`把现有的 ssh key 都删掉，这句命令行如果你多打一个空格，可能就要重装系统了，建议复制运行。

6. 运行 `ssh-keygen -t rsa -b 4096 -C "把我换成你的邮箱"`，注意填写你的邮箱！

7. 按回车三次

8. 运行 `cat ~/.ssh/id_rsa.pub`，得到一串东西，完整的复制这串东西

9. 回到上面第 3 步的页面，在 Title 输入「我的第一个 key」

10. 在 Key 里粘贴刚刚你你复制的那串东西

11. 点击 Add SSH key

12. 回到 Git Bash

13. 运行 `ssh -T git@github.com`，你可能会看到这样的提示：[![选区_003.bmp](https://i.loli.net/2017/10/03/59d39ab874c9a.bmp)](https://i.loli.net/2017/10/03/59d39ab874c9a.bmp)


输入 yes 回车……问你话你就答，别傻在那
14. 然后如果你看到 Permission denied (publickey).
     就说明你失败了，请回到第 1 步重来，是的，回到第 1 步重来；如果你看到 Hi FrankFang! You've successfully authenticated, but GitHub does not provide shell access.
     就说明你成功了！

### 使用前的配置

```
git config --global user.name 你的英文名
git config --global user.email 你的邮箱
git config --global push.default matching
git config --global core.quotepath false
git config --global core.editor "vim"
```

---

### GitHub使用方法一(本地有了文件, 想把本地的文件放到github)

1. 在你想要上传的目录下 `git init`。

2. 在目录内添加你想上传的文件。

3. 在你想要上传的目录下 `git add .`。（这里的意思是将本路径下的所所有文件放到暂存区）

4. 在你想要上传的目录下 `git commit -m "这里写你干了啥"`。

5. 打开GitHub，点击 new repository ，并且只需输入仓库名字（不能使中文）后点击create repository。

6. 在跳转的页面中[![提示](http://upload-images.jianshu.io/upload_images/5529438-faf048b439e66f5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)](https://i.loli.net/2017/10/02/59d201445106f.png)
   在命令行输入红色框的提示。

7. 刷新即可。

---

### GitHub使用方法二(先在github上创建一个仓库,然后在本地修改)
1. 打开GitHub，点击 new repository ，一共修改五处
   [![修改5处](http://upload-images.jianshu.io/upload_images/5529438-9349f470abb068d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)](https://i.loli.net/2017/10/02/59d202f61b150.png)

点击create repository。

2. 在跳出来的页面点击Clone and download，复制其SSH。

3. 进入你想要的路径，在命令行输入`git clone 把我替换成2步骤获得的SSH`。

   ​

---

### GitHub使用方法三（本地更新后想push到gitHub上）

1. 在命令行进入相应的目录，输入：

```
git add .
git commit -m "把我换成你更新都干了啥"
git pull 
git push
```





## GitHub使用方法四(修改已经存在的文件并且上传到Github)

1. 点击`Clone and download`,复制SSH地址
2. 用终端走到桌面目录, `gitclone git@github.com:wojiaofengzhongzhuifeng/study.git`
3. 修改内容
4. ​



### 细节

1. `git add .`和`git add *`有什么区别？

   `git add .`指的是添加当前目录下所有文件到暂存区。

   `git add *`指的是添加当前目录下所有文件到暂存区，除去以点开头的文件。

   ​