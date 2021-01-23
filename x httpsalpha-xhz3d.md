```
https://alpha-xhz3d.zhuanspace.com === /etc/nginx/html/xhz3d
```









xhz.bos.xyz => [www.zhuanspace.com](http://www.zhuanspace.com)

api.bos.xyz => api.zhuanspace.com

vis.bos.xyz => vis.zhuanspace.com

vis-alpha.bos.xyz => beta-vis.zhuanspace.com

vis-dev.bos.xyz => alpha-vis.zhuanspace.com

webapi-dev.bos.xyz =>alpha-webapi.zhuanspace.com





- /etc/nginx/html/xhz3d 路径下的目录变更操作

  - bos3d：https://gitlab.bimwinner.com/raojiajun/bos3d 根据分支修改不同环境的url

    ```
    cd /etc/nginx/html/xhz3d
    git clone http://gitlab.bimwinner.com/raojiajun/bos3d.git
    git branch -a # 展示远程分支
    git checkout -b beta # 创建本地分支
    git branch --set-upstream-to=origin/beta beta # 建立本地分支与远程分支关联
    git pull # 拉取最新代码
    git checkount beta # 切换分支，以防万一
    ```

    

  - v1：https://gitlab.bimwinner.com/BOS/xhz3d 根据分支修改不同环境的url

    ``` -f
    cd /etc/nginx/html/xhz3d/xhz3d
    git clone http://gitlab.bimwinner.com/BOS/xhz3d.git
    cd xhz3d
    git branch -a # 展示远程分支
    git checkout -b beta # 创建本地分支
    git branch --set-upstream-to=origin/beta beta # 建立本地分支与远程分支关联
    git pull # 拉取最新代码
    git checkout beta # 切换分支，以防万一
    npm install # 安装前端依赖
    npm run build # 打包
    cp -rf dist/* package/v1
    cp  -rf package/v1 ../
    ```

  - ✅vizbim：https://gitlab.bimwinner.com/raojiajun/visbim 从生产环境弄下来，静态资源，各个环境通用

    

- /etc/nginx/html/demos-new：由 demos-new 项目打包而成

  ```
  npm run build
  npm run compress-xhz3d
  npm run upload-alpha-xhz3d
  ```

  







- 测试 bos 库能否访问

- 测试 demo示例是否正常

  https://beta-vis.zhuanspace.com/solar_shadow_transformation_example_xhz3d/index.html










```
xhz-alpha.bos.xyz => alpha.zhuanspace.com

www.bos.xyz => alpha-xhz3d.zhuanspace.com

xhz3d.bos.xyz => alpha-xhz3d.zhuanspace.com

// 路径没有 platform，表示对外开放接口 2.0
xhz-api.bos.xyz => alpha-webapi.zhuanspace.com 

// 路径有 platform，表示内部使用接口
xhz-api.bos.xyz/platform => alpha-api.zhuanspace.com/platform

alpha-platform.zhuanspace.com => alpha-xhz3d.zhuanspace.com 

webapi.bos.xyz => alpha-webapi.zhuanspace.com

parse-route.bos.xyz => alpha-parse.zhuanspace.com

xhz.bos.xyz => www.zhuanspace.com // 右侧url还没有弄好

api.bos.xyz => api.zhuanspace.com // 右侧url还没有弄好

vis.bos.xyz => vis.zhuanspace.com // 右侧 url 还没有弄好

vis-alpha.bos.xyz => beta-vis.zhuanspace.com

vis-dev.bos.xyz => alpha-vis.zhuanspace.com

webapi-dev.bos.xyz => alpha-webapi.zhuanspace.com

xhz3d-alpha.bos.xyz => alpha-xhz3d.zhuanspace.com // 不确定对不对
```

```
devcode
研发环境 = e10e59bf0ee97213ca7104977877bd1a
测试环境 = 90b78ed03cb385d1d6bd006af8978b86
预生产 = e10e59bf0ee97213ca7104977877bd1a
生产 = e10e59bf0ee97213ca7104977877bd1a
```







git branch --set-upstream-to=origin/alpha alpha # 建立本地分支与远程分支关联









```
admin.conf:        server_name  admin-pre.zhuanspace.com;
arangodb.conf:    server_name  bingodb-pre.zhuanspace.com;
consul.conf:    server_name  consul-pre.zhuanspace.com;
gateway.conf:        server_name  api-pre.zhuanspace.com;
parse.conf:        server_name  parse-pre.zhuanspace.com;
platform-admin.conf:    server_name   admin-platform-pre.zhuanspace.com;
platform.conf:        server_name  www-pre.zhuanspace.com;
resource.conf:     server_name  image-pre.zhuanspace.com;
route-api.conf:        server_name  route-pre.zhuanspace.com;
statistic.conf:    server_name  statistic-pre.zhuanspace.com;
vis.conf:     server_name  vis-pre.zhuanspace.com;
webapi.conf:    server_name  webapi-pre.zhuanspace.com;
web.conf:     server_name  platform-pre.zhuanspace.com;
websocket.conf:    server_name  websocket-pre.zhuanspace.com;
```

| 问题 url                                                     | 出现问题现象                 | 是否解决 | 解决方法                                                     |      |      |
| ------------------------------------------------------------ | ---------------------------- | -------- | ------------------------------------------------------------ | ---- | ---- |
| https://beta-vis.zhuanspace.com/indoor_navigation/           | 无法正常导航                 |          |                                                              |      |      |
| https://beta-vis.zhuanspace.com/model_outlines_xhz3d/        | 部分接口出现错误             | ✅        | 1. /outlines 接口header添加 sign、timestamp<br /><br />2. xhz3d 的 baseUrl 变量https://beta-api.zhuanspace.com/platform => https://beta-webapi.zhuanspace.com |      |      |
| https://beta-vis.zhuanspace.com/model_preview_xhz3d_buy/     | 前往购买按钮出现问题         |          |                                                              |      |      |
| https://beta-vis.zhuanspace.com/modelcompare_sourcecode/     | api.bos.xyz 有问题           |          |                                                              |      |      |
| https://beta-vis.zhuanspace.com/repair_manage_platform_xhz3d/ | 接口没有报错，但是看不到模型 |          |                                                              |      |      |
| https://beta-vis.zhuanspace.com/road_network/                | 无法正常使用功能             |          |                                                              |      |      |
| https://beta-vis.zhuanspace.com/shortest_path/               | 功能不正常                   |          |                                                              |      |      |
|                                                              |                              |          |                                                              |      |      |
|                                                              |                              |          |                                                              |      |      |

