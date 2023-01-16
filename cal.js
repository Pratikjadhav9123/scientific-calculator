let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            
            if(screenValue.includes("sin")){
                let count=0;
                let start=0;
                let end =0;
                let num="";
                let flag=0;    
                    
                for (let i of screenValue){
                    if (i =='('){
                        flag=1;start=count;
                        count++;continue;

                    }
                    if(i==')'){
                        flag=0;end=count;
                        break;
                    }
                   if(flag){ num =num+screenValue[count];}
                    count++;
                }

              
               screen.value=(eval(Math.sin(parseInt(num)*(Math.PI/180))));
               
            }
            else if(screenValue.includes("cos")){
                let count=0;
                let start=0;
                let end =0;
                let num="";
                let flag=0;    
                    
                for (let i of screenValue){
                    if (i =='('){
                        flag=1;start=count;
                        count++;continue;

                    }
                    if(i==')'){
                        flag=0;end=count;
                        break;
                    }
                   if(flag){ num =num+screenValue[count];}
                    count++;
                }

              
               screen.value=(eval(Math.cos(parseInt(num)*(Math.PI/180))));
               
            }
            if(screenValue.includes("tan")){
                let count=0;
                let start=0;
                let end =0;
                let num="";
                let flag=0;    
                    
                for (let i of screenValue){
                    if (i =='('){
                        flag=1;start=count;
                        count++;continue;

                    }
                    if(i==')'){
                        flag=0;end=count;
                        break;
                    }
                   if(flag){ num =num+screenValue[count];}
                    count++;
                }

              
               screen.value=(eval(Math.tan(parseInt(num)*(Math.PI/180))));
               
            }
  
           
           else{ 
            screen.value = eval(screenValue);
           }

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}