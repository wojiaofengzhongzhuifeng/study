### 基本操作

1. 在GitHub上操作两处。
[![选区_001.bmp](https://i.loli.net/2017/10/03/59d2d9a138beb.bmp)](https://i.loli.net/2017/10/03/59d2d9a138beb.bmp)

2. 命令行输入`npm install -g hexo-cli`

3. 进入相应目录，`hexo init myBlog`

4. `cd myBlog`

5. `npm i`

6. `hexo new 开博大吉`

7. 编辑这个 md 文件，你的markdown要写在tags横线的下面。

8. 配置myblog的_config.yml文件

   - 把第 6 行的 title 改成你想要的名字
   - 把第 9 行的 author 改成你的大名
   - 把最后一行的 type 改成 git
   - 在最后一行，与 type 平齐，加上一行 repo: 仓库地址 
[![红色圈就是仓库地址](https://i.loli.net/2017/10/03/59d2dcc47cd2c.bmp)](https://i.loli.net/2017/10/03/59d2dcc47cd2c.bmp)

9. `npm install hexo-deployer-git --save`

10. 进入myblog目录，`git init`
11. `git add .`
12. `git commit -m "new"`
13. 根据第八步图片的提示输入两个命令行，分别是git remote。。。和git push 。。。。
14. `npm install hexo-deployer-git --save`
11. `hexo deploy`
16. 打开 GitHub Pages 功能，点击预览链接。

### 第二次写博客

1. 进入myblog目录，`hexo new 这里的文字就是个人博客网站的博客的标题`

2. 编辑第一步的博客内容

3. `hexo generate`

4. `hexo deploy`

5. 等待
