# 云服务器

- 使用 ssh 登录服务器

  

- 使用 secure crt 登录云服务器
  ![image-20201226120201058](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master/image-20201226120201058.png)

- 下载命令 
  `wget xxx`

- 解压命令

  ```
  tar zxvf xxx.tar.gz
  ```

- 常见命令

  ```
  wget xxx  # 下载
  tar zxvf xxx.tar.gz # 解压
  tarzcvf test1.tar.gz test/* # 压缩
  
  ps -ef | grep sshd # 查看 sshd 服务占用
  UID        PID  PPID  C STIME TTY          TIME CMD
  root      1540     1  0 11:45 ?        00:00:00 /usr/sbin/sshd -D
  root     19252  1540  0 13:55 ?        00:00:00 sshd: root@pts/1
  root     23825  1540  0 14:27 ?        00:00:00 sshd: root@pts/0
  root     24381 23831  0 14:31 pts/0    00:00:00 grep --color=auto sshd
  
  netstat -anlp | grep sshd # 查看 xxx 服务占用端口
  tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1540/sshd           
  tcp        0     96 172.17.0.15:22          218.18.146.226:43846    ESTABLISHED 23825/sshd: root@pt 
  tcp        0      0 172.17.0.15:22          218.18.146.226:42567    ESTABLISHED 19252/sshd: root@pt 
  unix  2      [ ]         DGRAM                    134446   23825/sshd: root@pt  
  unix  2      [ ]         DGRAM                    109221   19252/sshd: root@pt  
  unix  3      [ ]         STREAM     CONNECTED     17871    1540/sshd     
  kill -9 PID # 关闭
  service xxx status # 查看xxx服务状态
  
  ```

- ssh 免密登录服务器

  未实现，目前阶段不是特别重要
  
- 获取ip

  ```
  dig +short myip.opendns.com @resolver1.opendns.com
  ```

### 修改文件夹权限

` sudo chmod 777 upload/` 





### create-react-app 生成的 react应用，打包之后如何在 github preview ？

- github 开启github pages

- create-react-app package.json 添加属性，然后再 yarn build

  ```
  "homepage": "."
  ```

- 将 build or dist 从 .gitignore 删除

- git push 