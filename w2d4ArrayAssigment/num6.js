"use strict";
/**
 * This function implements to rotate right n times
 * @param {Object} arr ;
 * @param{number}n;
 * @return{Object};
 */
function rotateRight(arr,n){ 		
    let arr1=[];
     for(let i=0;i<arr.length;i++){
        let  index = (i+ n)%arr.length;
        arr1[index]=arr[i];
     }
     arr=arr1;
     return arr;
    }