let prompt=require('prompt-sync')();
let user_input=+prompt('Enter number to compute factorial: ');
let result=1;
if(user_input===0||user_input==1)
  result=1;
for(i=user_input;i>1;i--){ 
result*=i;
}
console.log('factorial of '+user_input+' is : '+result);