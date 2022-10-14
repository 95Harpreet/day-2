const chd=require('readline-sync')
var a,b
a=chd.questionInt('enter any number to check odd or even ')
if(a>400 && a<500)
    {
        if(a%2==0)
        {
            console.log('even')
        }
        else{
            console.log('odd')
        }


    }
    else{
        console.log('out of range please enter your value between 400 & 500')
    }