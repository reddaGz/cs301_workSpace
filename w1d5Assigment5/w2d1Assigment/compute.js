/**
 * 
 * @param {object} add 
 * @param {number} x 
 * @param {number} y 
 * @return {number} 
 */
function compute(add,x,y){
    return add(x,y);
}
function add(x,y){
    return x+y
}
let prompt = require("prompt-sync")();
let n = +prompt("Enter first number:");
let m = +prompt("Enter first number:");
console.log(`sum of the number using function expression:${compute(add,n,m)}`)
/* Refactor to pass add logic as an anonymous function.  */
let compu=function(addA,x,y){
    return addA(x,y)
}
let addA=function(x,y){
    return x+y;
}
console.log(`sum of the number using  annonymos function:${compu(addA,n,m)}`)

/*using Arrow function*/
let comp=(sum,x,y)=>{
    return sum(x,y)
}
let ad=(x,y)=>{
    return x+y;
}
let comp1=(sum,x,y)=>  //if only one statment no need to have return or {}
     sum(x,y)

let add1=(x,y)=>
     x+y;

console.log(`sum of the number using arrow function:${comp(addA,n,m)}`)
console.log(`sum of the number using arrow with no return and {} function:${comp1(add1,n,m)}`)
