/**
 * Write a defining table and then a program 
 * that determines what time a child should go to bed. 
 * Your program must read a child’s age and the season 
 * (winter, spring, summer, or fall) from the keyboard and 
 * output the child’s bedtime
 *  according to this table:
 */
let prompt=require('prompt-sync')();
let age=+prompt("enter childe age:");
let season=prompt("enter season:")
if(age<=5){
    if(season==="summer"||season==="fall")
      console.log("Go to your bed by :"+8+":"+30+"PM")
   else if(season==="winter"||season==="spring")
     console.log("Go to your bed by :"+8+":"+00+"PM") 
}
else if(age<=12){
    if(season==="summer")
      console.log("Go to your bed by :"+9+":"+30+"PM") 
     else if(season==="winter"||season==="spring"||season==="fall")
      console.log("Go to your bed by :"+8+":"+30+"PM")
}
else if(age>=13){
    if(season==="summer")
     console.log("Go to your bed by :"+10+":"+30+"PM") 
   else if(season==="winter"||season==="spring"||season==="fall")
     console.log("Go to your bed by :"+9+":"+30+"PM")
}