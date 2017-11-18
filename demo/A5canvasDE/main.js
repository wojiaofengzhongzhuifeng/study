var yyy = document.getElementById("xxx")
var context = yyy.getContext("2d")


//初始化
init()



//监听用户
ListenUser()







//封装函数
//画圈
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillstyle = "black"
    context.arc(x,y,radius,0,360)
    context.fill()
}

//画线
function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.lineWidth = "5"
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke()
}
//自动适应屏幕
function autoFillScreen(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    yyy.height = pageHeight
    yyy.width = pageWidth
}

//初始化
function init(){
    autoFillScreen()
    window.onresize = function(){
        autoFillScreen()
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

    //add eraser-btn
    var usingEraser = false
    eraser.onclick = function(){
        usingEraser = true
        action.className = "action x"
    }
    brush.onclick = function(){
        usingEraser = false
        action.className = "action"
    }


//移动端测试
yyy.ontouchstart = function(e){
console.log("开始摸")
console.log(e) 
}
yyy.ontouchmove = function(){
console.log("边摸边动")
}
yyy.ontouchend = function(){
console.log("摸完了")
}

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
            drawCircle(x,y,1)
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
                drawCircle(x,y,1)
                drawLine(firstPoint.x,firstPoint.y, secondPoint.x,secondPoint.y)
            }
            firstPoint = secondPoint
        } else {
            //以下代码是没有点击yyy,什么也不做
        }
    }
    yyy.onmouseup = function(){
        usingTool = false
    }

}


