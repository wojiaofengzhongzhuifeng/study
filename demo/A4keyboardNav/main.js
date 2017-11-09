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
    'c': 'douban.com',
    'd': 'ifeng.com',
    'e': 'ganji.com',
    'f': 'meituan.com',
    'g': 'zhihu.com',
    'h': 'amazon.com',
    'i': 'baidu.com',
    'j': 'douban.com',
    'k': 'ifeng.com',
    'l': 'ganji.com',
    'm': 'meituan.com',
    'n': 'zhihu.com',
    'o': 'amazon.com',
    'p': 'baidu.com',
    'q': 'douban.com',
    'r': 'ifeng.com',
    's': 'ganji.com',
    't': 'meituan.com',
    'u': 'zhihu.com',
    'v': 'amazon.com',
    'w': 'baidu.com',
    'x': 'douban.com',
    'y': 'ifeng.com',
    'z': 'ganji.com',
    'length': 27,
}
letter = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10': 'j',
    '11': 'k',
    '12': 'l',
    '13': 'm',
    '14': 'n',
    '15': 'o',
    '16': 'p',
    '17': 'q',
    '18': 'r',
    '19': 's',
    '20': 't',
    '21': 'u',
    '22': 'v',
    '23': 'w',
    '24': 'x',
    '25': 'y',
    '26': 'z',
}
//取出储存在localStorage的hash
//为什么要'null'?
hashInLocalStorage = JSON.parse(localStorage.getItem('rrr') || "null")
if(hashInLocalStorage){
    hash = hashInLocalStorage
}
//用js和数据结构生成html
//index表示组数
index = 0
while(index < key['length']){ // 0,1,2表示第一行,第二行,第三行
    divRow = document.createElement("div")
    main.appendChild(divRow)
    //index2表示一组中的字母个数
    index2 = 0
    while(index2 < key[index]['length']){
        kbd1 = document.createElement('kbd')
        buttonAdd = document.createElement('button')
        buttonDel = document.createElement('button')
        buttonAdd.textContent = '添加'  
        buttonDel.textContent = '删除'
        buttonAdd.id = key[index][index2]
        buttonDel.id = key[index][index2]
        kbd1.textContent = key[index][index2]
        divRow.appendChild(kbd1)
        kbd1.appendChild(buttonAdd)
        kbd1.appendChild(buttonDel)
        //给添加按钮绑定监听事件,允许用户自定义网站
        buttonAdd.onclick = function(yyyyy){
            console.log(yyyyy)
            addWebKey = yyyyy.target.id
            addWebSite = prompt("给我一个网站")
            hash[addWebKey] = addWebSite
            //只要hash变化,就把hash存储在localStorage的rrr桶中
            localStorage.setItem('rrr', JSON.stringify(hash))
        }
        buttonDel.onclick = function(zzzzzz){
            delWebKey = zzzzzz.target.id
            hash[delWebKey] = ''
        }            
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
index3 = 1
while(index3 < hash['length']){
    if(hash[letter[index3]] != ''){
        letter[index3]
        // document.querySelectorAll(letter[index3]).textContent = '修改'
        console.log(letter[index3])
    }
    index3 = index3 + 1
}   















