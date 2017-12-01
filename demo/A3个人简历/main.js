// 加载动画
window.onload = function(){
    welcome.classList.add("active")
}
// 监听页面的滑动
window.onscroll = function(x){
    var scrollHeight = window.scrollY
    if(scrollHeight === 0){
        navCt1.classList.remove("active")
        rsAndCard.classList.remove("active")
    } else {
        navCt1.classList.add("active")
        rsAndCard.classList.add("active")
    }
}

var atags = document.getElementsByClassName("menuTigger")
for(var i = 0;i < atags.length;i++){
    atags[i].onmouseenter = function(x){ 
        var a = x.currentTarget
        console.log(a)
        var ul = a.nextSibling
        while(ul.tagName !== 'UL'){
            ul = ul.nextSibling
        }
        ul.classList.add("active")
    }
    atags[i].onmouseleave = function(x){
        var a = x.currentTarget
        var ul = a.nextSibling
        while(ul.tagName !== 'UL'){
            ul = ul.nextSibling
        }
        ul.classList.remove("active")
    }
}