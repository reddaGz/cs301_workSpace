let prompt=require('prompt-sync')();
let user_input=prompt(`Enter F for faculty, S for 
student ,P for public `)
let numOfBookOverdue=+prompt("enter number of books overdue:")
if(user_input==="F"){
    if(numOfBookOverdue===0)
      console.log("loan duration in week is: "+6)
    else if(numOfBookOverdue<3)
      console.log("loan duration in week is: "+4)
    else
     console.log("loan duration in week is: "+2)
}
else if(user_input==="S"){
    if(numOfBookOverdue===0)
    console.log("loan duration in week is: "+12)
  else if(numOfBookOverdue<3)
    console.log("loan duration in week is: "+10)
  else
   console.log("loan duration in week is: "+8)
}
else if(user_input==="P"){
    if(numOfBookOverdue===0)
    console.log("loan duration in week is: "+4)
  else if(numOfBookOverdue<3)
    console.log("loan duration in week is: "+3)
  else
   console.log("loan duration in week is: "+2)
}