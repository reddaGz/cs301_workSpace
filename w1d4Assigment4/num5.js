let prompt=require('prompt-sync')();
let user_input=+prompt('enter the number: ');
let sum=0;
while(user_input>9){
    sum+=user_input%10;
    user_input=parseInt(user_input/10) ;
}
sum+=user_input;
console.log("the sum of digit is :"+sum);