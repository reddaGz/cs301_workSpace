"use strict";
/**
 * This is function filterRange(arr, a, b) that gets an array arr including 
 * index a  and b and return a result as an array
 * @param {Array} arr input array
 * @param {number} a start index
 * @param {number} b end index
 * @return{Array} return array;
 */
function filterRange(arr,a,b){
    let array=[];
    let index=0;
   for(let i=a;i<=b;i++) {
       array[index++]=arr[i];
   }
   return array;
}

let arr=[3,4,1,2,5];
console.log(filterRange(arr,1,3));