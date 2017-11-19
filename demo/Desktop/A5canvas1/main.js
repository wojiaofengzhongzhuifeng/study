var yyy = document.getElementById("xxx")
var context = yyy.getContext("2d")
var penColor = 'black';
var penWidth = 5;
var radius = 2;
var pageWidth = document.documentElement.clientWidth
var pageHeight = document.documentElement.clientHeight
var lastImg
var cPushArray = new Array();
var cStep = 0;
//初始化
init()



//监听用户
ListenUser()


//改变颜色
black.onclick = function(){
    penColor= "black"
    black.classList.add('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
}
red.onclick = function(){
    penColor = "red"
    black.classList.remove('active')
    red.classList.add('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
}
yellow.onclick = function(){
    penColor = "yellow"
    black.classList.remove('active')
    red.classList.remove('active')
    yellow.classList.add('active')
    green.classList.remove('active')
}
green.onclick = function(){
    penColor = "green"
    black.classList.remove('active')
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.add('active')
}

//改变粗细
thin.onclick = function(){
    penWidth = 2.5
    radius = 1
}
normal.onclick = function(){
    penWidth = 5
    radius = 2
}
thick.onclick = function(){
    penWidth = 10
    radius = 5
}


//添加clear功能
clear.onclick = function(){
    context.clearRect(0,0,pageWidth,pageHeight)
}


//添加下载功能
download.onclick = function(){
    var imgUrl = yyy.toDataURL()
    var a1 = document.createElement("a")
    document.body.appendChild(a1)
    a1.href = imgUrl
    a1.download = '我的涂鸦'
    a1.target = "_blank"
    a1.click()
}

//添加撤回功能
cPush()
undo.onclick = function(){
    cUndo()
}







//封装函数
//画圈
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle = penColor
    context.arc(x,y,radius,0,Math.PI*2)
    context.fill()
}

//画线
function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.strokeStyle = penColor
    context.lineWidth = penWidth
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke()
}
//自动适应屏幕
function autoFillScreen(){
    yyy.height = pageHeight
    yyy.width = pageWidth
}

//添加白色背景
function addBackground(){
    context.fillStyle = "white"
    context.rect(0,0,pageWidth, pageHeight)
    context.fill()
}

//
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(yyy.toDataURL());
}
function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
    }
}






	




//初始化
function init(){
    autoFillScreen()
    //当适应屏幕后,给canvas添加白色背景
    addBackground()
    window.onresize = function(){
        autoFillScreen()
        addBackground()
    }
}
//监听用户
function ListenUser(){
    //定义全局变量
    var firstPoint = {
        x: undefined,
        y: undefined
    }
    var usingTool = false

    var usingEraser = false
    eraser.onclick = function(){
        usingEraser = true
        eraser.classList.add('active')
        brush.classList.remove('active')
    }
    brush.onclick = function(){
        usingEraser = false
        brush.classList.add('active')
        eraser.classList.remove('active')
    }

    //特性检测
    if('ontouchstart' in document.body){
        yyy.ontouchstart = function(eee){
            var x = eee['touches']['0']['clientX']
            var y = eee['touches']['0']['clientY']
            firstPoint.x = x
            firstPoint.y = y   
            usingTool = true
            if(usingEraser){
                //这里的usingTool本来是paint
                context.clearRect(x,y,10,10)
            } else {
                drawCircle(x,y,radius)
            }
        }
        yyy.ontouchmove = function(eee){
            if(usingTool){
                //以下代码是点击yyy的时候运行的
                var x = eee['touches']['0']['clientX']
                var y = eee['touches']['0']['clientY']
                var secondPoint = {
                    x: x,
                    y: y
                }
                if(usingEraser){
                    context.clearRect(x,y,10,10)
                } else {
                    drawCircle(x,y,radius)
                    drawLine(firstPoint.x,firstPoint.y, secondPoint.x,secondPoint.y)
                }
                firstPoint = secondPoint
            } else {
                //以下代码是没有点击yyy,什么也不做
            }
        }
        yyy.ontouchend = function(){
            usingTool = false
            cPush()
        }
    }else {
        yyy.onmousedown = function(eee){
            var x = eee.clientX
            var y = eee.clientY
            firstPoint.x = x
            firstPoint.y = y   
            usingTool = true
            if(usingEraser){
                //这里的usingTool本来是paint
                context.clearRect(x,y,10,10)
            } else {
                drawCircle(x,y,radius)
            }
            
        }
        
        yyy.onmousemove = function(eee){
            if(usingTool){
                //以下代码是点击yyy的时候运行的
                var x = eee.clientX
                var y = eee.clientY
                var secondPoint = {
                    x: x,
                    y: y
                }
                if(usingEraser){
                    context.clearRect(x,y,10,10)
                } else {
                    drawCircle(x,y,radius)
                    drawLine(firstPoint.x,firstPoint.y, secondPoint.x,secondPoint.y)
                }
                firstPoint = secondPoint
            } else {
                //以下代码是没有点击yyy,什么也不做
            }
            
        }
        
        yyy.onmouseup = function(){
            usingTool = false
            cPush()
        
        }
    }
    
}


