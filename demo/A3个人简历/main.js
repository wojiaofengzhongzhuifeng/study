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

var litags = document.getElementsByClassName("menuTigger")
for(var i = 0;i < litags.length;i++){
    litags[i].onmouseenter = function(x){ 
        var li = x.currentTarget
        var childElement = li.firstChild
        while(childElement.tagName !== 'UL'){
            childElement = childElement.nextSibling
        }
        childElement.classList.add("active")
    }
    litags[i].onmouseleave = function(x){ 
        var li = x.currentTarget
        var childElement = li.firstChild
        while(childElement.tagName !== 'UL'){
            childElement = childElement.nextSibling
        }
        childElement.classList.remove("active")
    }

}