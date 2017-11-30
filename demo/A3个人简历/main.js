// 加载动画
window.onload = function(){
    welcome.classList.add("active")
}
// 监听页面的滑动
window.onscroll = function(x){
    var scrollHeight = window.scrollY
    if(scrollHeight === 0){
        navCt1.classList.remove("active")
    } else {
        navCt1.classList.add("active")
    }
}

