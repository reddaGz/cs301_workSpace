"use strict";
//Do matrix addition and print result on matrix format for following:
/**
 * 
 * @param {Array} arr1 input parametre
 * @param {Array} arr2 input parametere;
 * @return{string} return in matrix format;
 */
function addMatrix(arr1,arr2){
    let result=[[],[]];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1[i].length;j++){
            let n=arr1[i][j]+arr2[i][j];
            result[i][j]=n;
        }     
    }
return result;
}
let arr1=[[0,1,2],[9,8,7]];
let arr2=[[6,5,4],[3,4,5]];
console.log(addMatrix(arr1,arr2));