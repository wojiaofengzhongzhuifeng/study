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




## 批量为多个文件追加文本内容

```sh
#!/bin/bash
find /Users/raojj/Desktop/api-doc/bos3d-restful-api/BOS3D/service/3D -name *.md > md.txt
for i in `cat md.txt`
do
  echo $ip
  
cat >> $i <<EOF

<script>

document.querySelector('.configRequestUrl').innerHTML = window.bosConfigRequestUrl



var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
    }
};


setTimeout(()=>{
let myNodeList = document.querySelectorAll(".code-wrapper")
  forEach(myNodeList, function (index, codeDiv) {
   let oldHTML = codeDiv.innerHTML
   let newHTML = oldHTML.replace('http://bos3d.bimwinner.com', window.bosConfigRequestUrl)
   codeDiv.innerHTML = newHTML
  });
}, 100)

</script>
EOF
done


```

## 常用缩写命令

-  压缩

  ```
  zz=' rm -rf ~/Documents/build.zip; zip -rq ~/Documents/build.zip $1'
  ```

- typora + git  +  一行命令 === i终生免费图床

  ```
  ig='cd ~/Desktop/myWorks/image-host; git add .;git commit -m "image"; git push;cd ~/Desktop/myWorks/study;find "/Users/raojj/Desktop/myWorks/study" \( ! -regex ".git" \) -type f | xargs perl -pi -e "s|https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master|https://raw.githubusercontent.com/wojiaofengzhongzhuifeng/iamge-host-2/master|g";git add .;git commit -m "init";git push'
  ```

  

## 权限问题

### 数字

- 读（4）
- 写（2）
- 执行（1）

### 文件分类

- 文件所有者

- 群组成员

- 其他人

  