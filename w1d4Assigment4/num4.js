let prompt = require("prompt-sync")();
let user_input = prompt("enter number to display their fibnoci: ");
let arr = [0, 1];
for (let i = 2; i <= user_input; i++) {
  let fib = arr[i] + arr[i - 1];
  arr.push(fib);
}
for(let i=0;i<arr.length;i++)
 console.log(arr[i])
