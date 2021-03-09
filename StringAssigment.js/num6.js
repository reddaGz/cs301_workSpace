"use strict";
/**
 * 
 * @param {Number} x ;
 * @param {Number} y ;
 * @return{undefined};
 */
function swap(x, y) {
  let temp = x;
  x = y;
  y = temp;
}

let x=5;
let y=7;
console.log(x,y)//5,7
swap(x,y)
console.log(x,y)//5,7