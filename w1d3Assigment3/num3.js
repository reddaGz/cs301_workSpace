"use strict";
let prompt=require('prompt-sync')();
let user_input=prompt('enter the cost of the house: ')
let cost=parseFloat(user_input);
let downPayment;
if(cost>0&&cost<50){
    downPayment=cost*0.05;
    console.log('The amount of down payment is='+downPayment);
}else if(cost<100){
     downPayment=1000 + 0.1*(cost - 50);
    console.log('The amount of down payment is='+downPayment);
}else if(cost<200){
    downPayment=2000 + 0.15* (cost - 100);
console.log('The amount of down payment is='+downPayment);
}else{
    downPayment=5000 + 0.1*(cost - 200);
    console.log('The amount of down payment is='+downPayment)
}
