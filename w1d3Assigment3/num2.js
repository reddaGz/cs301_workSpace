/**
 * Write a program that reads from the keyboard a 
 * student's name and number of completed credits and then outputs
 *  the student's name and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60 c. "Junior" if 60<=credits<90
d. "Senior" if credits>90
 */
let prompt=require('prompt-sync')();
let name=prompt('enter the name of student: ' );
let user_input=prompt('enter  number of completed credits: ')
let credit=parseInt(user_input);
if(credit>0&&credit<30){
    console.log(name+' is freshman.')
}else if(credit<60){
    console.log(name+' is sophomore.')
}else if(credit<90){
    console.log(name+' is junior.')
}else{
    console.log(name+' is senior.')
}