const chd=require('readline-sync')
var a,b,c,d,e
a=chd.questionInt('enter marks of first subject ')
b=chd.questionInt('enter marks of second subject ')
c=chd.questionInt('enter marks of third subject ')
d=chd.questionInt('enter marks of forth subject ')
e=chd.questionInt('enter marks of fifth subject ')
sum=a+b+c+d+e
console.log(`sum is ${sum}`)
percentage=(sum/500)*100
console.log(`percentage is ${percentage}%`)
if(a<33 || b<33 || c<33 || d<33 || e<33){
    console.log('reappear for exam')
}
else if(percentage<33)
        {
            console.log('student is fail')
        }
else if(percentage>=33 && percentage<60){
            console.log('student is pass')
        }
        else{
            console.log('student is in merit')
        }