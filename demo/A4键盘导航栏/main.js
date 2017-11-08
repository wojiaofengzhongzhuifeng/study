//为什么要写key,因为你要将网站的元素用数据结构代替
//0表示第一排
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
    a: 'amazon.com',
    b: 'baidu.com',
    d: 'douban.com',
    f: 'ifeng.com',
    g: 'ganji.com',
    m: 'meituan.com'
}

//index表示组数
index = 0
while(index < key['length']){
    div1 = document.createElement("div")
    main.appendChild(div1)
    //index2表示一组中的字母个数
    index2 = 0
    while(index2 < key[index]['length']){
        kbd = document.createElement('kbd')
        kbd.textContent = key[index][index2]
        div1.appendChild(kbd)
        index2 = index2 + 1
    }
    index = index + 1
}





