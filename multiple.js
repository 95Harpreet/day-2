const chd=require('readline-sync')
var a,b
a=chd.questionInt('enter value a')
b=chd.questionInt('enter value b')
if(a>b){
    console.log("a is greater than b")
}
else if(b>a)
{
    console.log('b is greater than a')
}
else if(a==b){
    console.log('equal')
}