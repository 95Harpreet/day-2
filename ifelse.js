const chd=require('readline-sync')
var a,b
a=chd.questionInt('enter value a')
b=chd.questionInt('enter value b')
if(a>b){
    console.log("a is greater than b")
}
else(b>a)
{
    console.log('b is greater than a')
}