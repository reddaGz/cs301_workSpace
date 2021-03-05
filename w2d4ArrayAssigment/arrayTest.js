"use strict";
/**
 * This is simple function that returns sum of first and last index out of any given array
 * @param {object} arr  array
 * @return{Object} return value
 */
function addend(arr){
    return arr[0]+arr[arr.length-1];
}
/**
 * This is simple function that returns the middle element
 * @param {object} arr array
 * @return{Object} return middle element
 */
function getMiddle(arr){
    let index=Math.floor(arr.length/2);
    if(isEven(arr.length)){
        return (arr[index]+arr[index+1])/2;
    }
    return arr[index];
}
/**
 * This is simple function return true if even length and false if odd length
 * @param {number} length  Length of array
 * @return{boolean}  return true or false
 */
function isEven(length){
    return length%2===0;
}
/**Write a function to rotate the elements in an array to the left by 1. */
/**
 * This is simple function that rotate any given array to left by 1
 * @param {Object} arr Given array
 * @return{Object} return rotated array
 */
function rotateLeft1(arr){
    let firstValue=arr[0];
    for(let i=0;i<arr.length;i++){
       arr[i]=arr[i+1];
    }
    arr[arr.length-1]=firstValue;
    return arr;
}
/**Write a function to rotate the elements in an array to the right by 1. */
/**
 * This is simple function that rotate any given array to right by 1
 * @param {Object} arr Given array
 * @return{Object} return rotated array
 */
function rotateRight1(arr){
    let lastValue=arr[arr.length-1];
 for(let i=arr.length-1;i>0;i--){
    arr[i]=arr[i-1];
 }
 arr[0]=lastValue;
 return arr;
}
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
/**
 * This function implements to rotate right n times
 * @param {Object} arr ;
 * @param{number}n;
 * @return{Object};
 */
function rotateLeft(arr,n){ 		
    let arr1=[];
     for(let i=0;i<arr.length;i++){
        let  index = (i+ (arr.length-n))%arr.length;
        arr1[index]=arr[i];
     }
     arr=arr1;
     return arr;
    }
// let arr=[1,2,3,4,5];
// console.log(rotateLeft(arr,2));

module.exports = {addend, rotateLeft1,getMiddle};
