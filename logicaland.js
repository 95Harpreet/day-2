const chd=require('readline-sync')
var a,b
a=chd.questionInt('enter value a')

if(a>10 && a<20){
    console.log(" u r between 10 &20")
}
else
{
    console.log('out of range')
}