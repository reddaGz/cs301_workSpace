function compute(add,x,y){
    return add(x,y);
}
function add(x,y){
    return x+y
}

let prompt = require("prompt-sync")();
let n = +prompt("Enter first number:");
let m = +prompt("Enter first number:");
console.log(`sum of the number ${compute(add,n,m)}`)