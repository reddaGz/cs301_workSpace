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
function rotateLeft(arr){
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
function rotateRight(arr){
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
function rotateNRight(arr,n){ 		
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
function rotateNLeft(arr,n){ 		
    let arr1=[];
     for(let i=0;i<arr.length;i++){
        let  index = (i+ (arr.length-n))%arr.length;
        arr1[index]=arr[i];
     }
     arr=arr1;
     return arr;
    }
/**
 * This function that merges two sorted arrays into one single sorted array.
 *  Make use of shift and push array methods.
 * @param {Array} arr1 ;
 * @param {Array} arr2;
 * @return{Array} ;
 */
function mergeArray(arr1, arr2) {
    let array = [];
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2.shift());
    }
    return sortArray(arr1);
  }
  /**
   *This function uses to sort array in decending order
   * @param {object} arr;
   * @return {object};
   */
  function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  /**
 *This function converts array of string to one single string
 * @param {object} arr;
 * @return{String};
 */
function splitArray(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        str = str + arr[i];
      } else str = str + arr[i] + "_";
    }
    return str;
  }
  let arr = ["hello", "world", "gere"];
  console.log(splitArray(arr));
  /**
 *This function that takes two parameters, an array, and avalue to
* search in the array and return an array result with three values.
*boolean,first index,last index
 * @param {object} arr ;
 * @param {number} n ;
 * @return{String};
 */
function enhancedIncludes(arr, n) {
    let firstIndex = -1;
    let lastIndex = -1;
    let index = -1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
        index = i;
        count++;
      }
      if (count === 1) firstIndex = index;
      if (count > 1) lastIndex = index;
    }
    if (firstIndex > -1)
      return true + ", first_index " + firstIndex + " ,last index " + lastIndex;
    return false + " " + firstIndex + " " + lastIndex;
  }
/**
 * This function is reverse array using slice method
 * @param {Array} arr input parameter
 * @return{Array} reverse array
 */
function reveseArray(arr) {
    let array = [];
    let length = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      let n = arr.slice(i, i + 1);
      array.unshift(n);
    }
    return array;
  }
  //let userInput = prompt("Enter number by separating ,: ");
/**
 * This function recievs input from user by separating , filtered out negative number
 * @param {number} arr  user input
 * @return{array} return array;
 */
function filterOutNegative(arr){
    let array=arr.split(",");
   for(let i=0;i<array.length;i++){
       if(parseInt(array[i])<0)
         array.splice(i,i);
   }
   return array;
   }
   /**
    * This is function maps to  sum of the digit from the given elements of array
    * @param {Array} array input array;
    * @return{Array} return 
    */
   function mapToSumOfDigit(array){
   let fiterResult=filterOutNegative(array);
   let mapArray=[];
   for(let i=0;i<fiterResult.length;i++){
       let n=digitSum(parseInt(fiterResult[i]));
       mapArray.push(n);
   }
   return mapArray;
   }
   /**
    * This is function returns sum of the digits
    * @param {number} n input digit;
    * @return{number} return sum of digits
    */
   function digitSum(n){
       let sumDigit=0;
       while(n>0){
           sumDigit+=n%10;
           n=Math.floor(n/10)
       }
       return sumDigit;
   }
   /**
    * This is function that reduce to sum of each element after mapping to thier sum of digits
    * @param {string} arr user input number
    * @return{number}  return the sum each element;
    */
   function reduce(arr){
       let reduArr=mapToSumOfDigit(arr);
       let sum=0;
       for(let i=0;i<reduArr.length;i++){
          sum+=reduArr[i]
       }
       return sum;
   }
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
/**
 *
 * @param {array} arr input array of string;
 * @return{array} return palindrom only;
 */
function filterPalindromes(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPalindrom(arr[i])) array.push(arr[i]);
    }
    return array;
  }
  /**
   *
   * @param {string} str input string;
   * @return{bollean} return booelan
   */
  function isPalindrom(str) {
    let j = str.length - 1;
    for (let i = 0; i < j; i++) {
      if (str[i] !== str[j--]) return false;
    }
    return true;
  }
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
module.exports = {addend, rotateLeft,getMiddle,filterPalindromes,enhancedIncludes,reveseArray};
