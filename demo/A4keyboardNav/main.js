//为什么要写key,因为你要将网站的元素用数据结构代替
//0表示第一排
//定义页面的内容,并且用相应的数据格式表示
key = {
    '0':{
        '0': 'q',
        '1': 'w',
        '2': 'e',
        '3': 'r',
        '4': 't',
        '5': 'y',
        '6': 'u',
        '7': 'i',
        '8': 'o',
        '9': 'p',
        'length': 10
    },
    '1': {
        '0': 'a',
        '1': 's',
        '2': 'd',
        '3': 'f',
        '4': 'g',
        '5': 'h',
        '6': 'j',
        '7': 'k',
        '8': 'l',
        'length' : 9
    },
    '2': {
        '0': 'z',
        '1': 'x',
        '2': 'c',
        '3': 'v',
        '4': 'b',
        '5': 'n',
        '6': 'm',
        'length': 7
    },
    'length': 3
}
hash = {
    'a': 'amazon.com',
    'b': 'baidu.com',
    'd': 'douban.com',
    'f': 'ifeng.com',
    'g': 'ganji.com',
    'm': 'meituan.com',
    'z': 'zhihu.com'
}
//用js和数据结构生成html
//index表示组数
index = 0
while(index < key['length']){
    div1 = document.createElement("div")
    main.appendChild(div1)
    //index2表示一组中的字母个数
    index2 = 0
    while(index2 < key[index]['length']){
        kbd1 = document.createElement('kbd')
        button1 = document.createElement('button')
        button1.textContent = '添加'  
        button2 = document.createElement('button')
        button2.textContent = '删除'     
        kbd1.textContent = key[index][index2]
        div1.appendChild(kbd1)
        kbd1.appendChild(button1)
        kbd1.appendChild(button2)
        index2 = index2 + 1
    }
    index = index + 1
}
//监听键盘事件,且可以知道按了什么键,根据hash表和按了什么键可以进入对应的网站
document.onkeydown = function(xxxxxxxx){
    pressKey = xxxxxxxx.key
    //location.href = "https://" + hash[pressKey]
    //新窗口打开,如果我想打开新窗口并且让当前窗口还是键盘导航怎么办?
    window.open("https://" + hash[pressKey], '_blank')
}







