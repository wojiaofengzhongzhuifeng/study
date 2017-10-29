//配置
var fs = require('fs') 
var dirName = process.argv[2]

//cd ~/桌面
process.chdir("/home/raojiajun/桌面")

// mkdir $1 
fs.mkdirSync(dirName) 

//cd $1
process.chdir(dirName)

//echo "<!DOCTYPE>" >> index.html
//echo "<title>Hello</title>" >> index.html
//echo "<h1>Hi</h1>" >> index.html
fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n") 

//mkdir css js
fs.mkdirSync("css") 
fs.mkdirSync("js")

//touch css/style.css js/main.js
//echo " h1{color: red;}" >> css/style.css
//echo "var string = "Hello World"" >> js/main.js
//echo "alert(string)" >> js/main.js
fs.writeFileSync("./css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = 'Hello World'\nalert(string)")




