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
- readable 的状态
  - 有两种状态: 静止态 paused 和流动态 flowing
  - 默认处于 paused 态
  - 添加 data 事件监听, 变为 flowing 态
  - 删除 data 事件监听, 变为 paused 态
  - pause()可以变为 paused 态
  - resume() 可以变为 flowing 态
- writable 的事件 drain
  - drain 需要写入的数据(大量)已经处理完毕,可以继续执行写入数据操作
  - 调用 const flag = stream.write(chunk) 的时候, 当 chunk 数据很大时, 会导致 flag 为 false
  - false 表示的意思是: 由于需要写入的数据量很大, 导致数据积压
  - 此时不能再写入数据, 需要监听 drain 事件, 等待 drain 触发, 才能继续执行写数据操作

- writable 的事件 finish
  - ①调用 stream.end()之后 + ②缓冲区数据都已经传给底层系统之后, 触发的事件
- 



