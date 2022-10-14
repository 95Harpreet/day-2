const chd=require('readline-sync')
var a
a=chd.question('press pankaj for hello , press 45.6 for hi, press 3 for by ')
switch(a){
    case "pankaj":
        {
            console.log('hello')
            break
        }
        case "45.6":
            {
                console.log('hi')
                break
            }
            case "3":
                {
                    console.log('by')
                    break
                }
                default:{
                    console.log('wrong choice')
                }
}