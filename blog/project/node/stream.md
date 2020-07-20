## stream

- stream, 流, 可以理解为水流

- pipe === 管道, 用于将两个流进行连接

  stream1.pipe(stream2) 

  把 stream1 管道的末端连接到 stream2 管道的开端

  ```javascript
  server.on('request', (req, res)=>{
  	const stream1 = fs.createReadStream('./big.txt')
    // 把读流连接到响应流
  	stream1.pipe(res)
  })
  ```

- 在 chrome 上调试 node 代码

  node --inspect-brk 1.js 

- drain 

  - drain: 大 chunk 写完触发的事件

    遇到比较大的 chunk1, 会导致写流出现拥堵, 导致写流停止写入其他chunk, 如果触发 drain 事件, 说明已经写完了 chunk1, 可以继续写入其他 chunk 了

  - finish: 全部数据写完触发的事件

  ![](https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/image-host/master/img/20200720224049.png)

- stream 的分类
  - writable
  - readable
  - duplex
  - transform



