



if [ -d $1 ]; then
 exit 1
else
 mkdir $1
 cd $1
 touch index.html
 echo "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>" > index.html
 mkdir css js
 touch css/style.css js/main.js
 echo "h1{color: red;}" > css/style.css
 echo 'var string = "Hello World" 
 alert(string)' > js/main.js
 exit 0
fi
