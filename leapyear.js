const chd=require('readline-sync')
var a
a=chd.questionInt('enter any year ')
if(a%4==0)
        {
            console.log('it is a leap year')
        }
else{
            console.log('it is not a leap year')
        }
