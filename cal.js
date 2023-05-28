
let displayscreen="";
let screen=document.getElementById("screen")

function get(a){
    displayscreen+=a;
    screen.innerText=displayscreen;
}


function om(){
    screen.innerText=tellme(displayscreen);
    displayscreen="";
}
function tellme(str)
{
    let a="";
    let i=0;

    while(str.charCodeAt(i)<=57 && str.charCodeAt(i)>=48 && i<str.length)
    {

        if(str.charCodeAt(i)<=57 && str.charCodeAt(i)>=48)
        { 
            a+=str[i];
        }
        else return "invalid";
        i++;
    }
    
    if(i==str.length) return "invalid";
    let b="";
    let sign=str[i];
    
    i++;
    while(i<str.length)
    {
        if(str.charCodeAt(i)<=57 && str.charCodeAt(i)>=48)
        {
            b+=str[i];
        }
        else return "invalid";
        i++;
    }
  let c=parseInt(a);
  let d=parseInt(b);
  let num;
  switch(sign)
  {
     case '*':{    
          num=c*d;
         break;
     }
     case '+':{
        num=c+d;
        break;
     }
     case '-':{
        num=c-d;
        break;
        
     }
     case '%':{
        num=c%d;
        break;
     }
  }
  return num;
}
function back()
{
    let str="";
    for(let i=0;i<displayscreen.length-1;i++)
    {
        str+=displayscreen[i];
    }
    screen.innerText=str;
    displayscreen=str;
}
function clear1()
{
    screen.innerText="";
    displayscreen="";
}



