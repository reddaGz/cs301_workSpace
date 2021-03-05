"use strict";
/**
 *
 * @param {Array} inputExp ;
 * @return{Bollean};
 */
function checkBalanceExp(inputExp) {
  let arr = [];
  if (inputExp[0] === ")" || inputExp[0] === "]" || inputExp[0] === "}")
    return false;
  for (let i = 0; i < inputExp.length; i++) {
    if (inputExp[i] === "(" || inputExp[i] === "[" || inputExp[i] === "{") {
      arr.push(inputExp[i]);
    } else if (
      (arr[arr.length - 1] === "(" && inputExp[i] === ")") ||
      (arr[arr.length - 1] === "[" && inputExp[i] === "]") ||
      (arr[arr.length - 1] === "{" && inputExp[i] === "}")
    )
      arr.pop();
  }
  if (arr.length === 0) return true;
  else return false;
}
let inputExp = ["(", ")", "[", "{", "}", "]", "}"];//this must be true
let inputExp1 = ["(", ")", "[", "{", "}", "]", "}","{"];//this must be false
let inputExp2 = ["[", "(", "]", ")"];//this must be false
console.log(checkBalanceExp(inputExp));
console.log(checkBalanceExp(inputExp1));
console.log(checkBalanceExp(inputExp2));
