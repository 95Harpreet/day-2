const chd=require('readline-sync')
var a,b,c,d
a=chd.questionInt('enter first number ')
b=chd.questionInt('enter second number ')
c=chd.questionInt('enter third number ')
d=chd.questionInt('enter forth number ')


if(a>b && a>c && a>d)
        {
            console.log(`greatest number is`+a)
        }
else if( b>c && b>d ){
            console.log(` geatest number is`+b)
        }
        else if( c>d ){
            console.log(`geatest number is`+c)
        }
        else{
            console.log(`greatest number`+d)
        }
