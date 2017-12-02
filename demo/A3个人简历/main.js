var heightTags = document.querySelectorAll("[data-x]");
var divTops = []
for(var i = 0;i<heightTags.length;i++){
    var divTop = heightTags[i].offsetTop
    divTops.push(divTop)
} 

// 加载动画
window.onload = function () {
    welcome.classList.add("active")
}
// 监听页面的滑动
window.onscroll = function (x) {
    var scrollHeight = window.scrollY
    if (scrollHeight === 0) {
        navCt1.classList.remove("active")
        rsAndCard.classList.remove("active")
    } else {
        navCt1.classList.add("active")
        rsAndCard.classList.add("active")
    }

    //添加heightlight效果
    var closeIndex = findCloseIndex(scrollHeight, divTops)
    for (var i = 0; i < divTops.length; i++){
        heightTags[i].classList.remove("active")
    }
    heightTags[closeIndex].classList.add("active")
    var heightLightId = heightTags[closeIndex].id
    var heightLightATag = document.querySelector('a[href="#' + heightLightId + '"]')//   括号里面的字符串为'a[href="#card"]'
    var heightLightLiTag = heightLightATag.parentNode
    heightLightLiTag.classList.add("active");
}

var litags = document.querySelectorAll("div.nav ul li")
for(var i = 0;i < litags.length;i++){
    litags[i].onmouseenter = function(x){ 
        var li = x.currentTarget
        li.classList.add("active")
    }
    litags[i].onmouseleave = function(x){ 
        var li = x.currentTarget
        li.classList.remove("active")
    }
}








//使用外部的js库:tween.js完成平滑的效果
var aTags =  document.querySelectorAll("div.nav > ul > li > a")
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);


for(let i=0; i<aTags.length;i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute("href")
        let element = document.querySelector(href)
        let top = element.offsetTop
    
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        var coords = {y:currentTop}
        var t = Math.abs((s/100)*300)
        if(t>500){t=500}
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y:targetTop }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function() { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.
    }
}

//输入 页面滑动的距离 和 divTops数组 ,返回距离与数组每个值的差最小的下标
function findCloseIndex (height, array){
    var closeIndex = 0
    var closeNumber = Math.abs(height - array[0])
    for(var i = 1;i < array.length;i++){
        var everyNumber = Math.abs(array[i] - height)
        if(everyNumber < closeNumber){
            closeIndex = i
        }
    }
    return closeIndex
}





