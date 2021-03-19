"use strict"
 /**
 * @author Gebreegziabher Redda;
 * @param {arr} arr;
 * @returns {number} 
 */
function divisibleSumPairs(arr, k){
let countPair=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if((arr[i]+arr[j])%k===0){
            countPair+=1
        }   
    }  
}
return countPair;
}
let arr=[1,3,2,6,1,2] ;
let k=3
console.log(divisibleSumPairs(arr,k))
/**
 * @author Daniel Haile
 * @param {Array} arr user input array 
 * @returns {number} returns the most frequented sight
 */
function mostFrequentSight(arr){
    let count = 0;
    let mostVisited = arr[0];
    let count_element = 0;
    for (let i = 0; i < arr.length; i++) {
      count_element = countElement(arr, arr[i]);
      if (count_element > count) {
        mostVisited = arr[i];
        count = count_element;
      }else if(count_element===count){
        mostVisited=  arr[i]>arr[i+1]?arr[i+1]:arr[i]
      }  
}
  return mostVisited;
}
function countElement(arr, n) {
  let count = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) count++;
  }
  return count;
}
let arr1=[1,4,4,4,5,3] 
console.log(mostFrequentSight(arr1))

 /**
 * @author luwam Asmelash;
 * @param {arr} arr;
 * @returns {number} 
 */
function countSocksPairs(arr) {
    let counter = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count % 2 == 0) {
        counter++;
      }
    }
   
    return counter;
  }


  function computeHeight(height, cycles){
      height=height;
      for(let i=1;i<=cycles;i++){
           if(i%2!==0)
            height=2*height;
            else
            height+=1
      }
      return height;
  }
  console.log(computeHeight(1,4))
 

  function computeCharges(arr){
      let customer=[]
      for(let i=0;i<arr.length;i++){
         let compute={};
          compute.custId=arr[i].custId;
          let aveg=finedAverage(arr[i].charges)
          let max=findMax(arr[i].charges)
          compute.average=aveg;
          compute.maximum=max;
        customer.push(compute)  
      }
      return customer;
  }
  function finedAverage(arr){
      let sum=0;
      for(let n of arr){
          sum+=n
      }
      return sum/arr.length;
  }
  function findMax(arr){
      let max=arr[0];
      for(let i=0;i<arr.length;i++){
          if(arr[i]>max)
           max=arr[i]
      }
      return max;
  }
  const charges = [{custId: 1,charges:[5,7,3]}, {custId: 2, charges: [20,60,50,30]}]
  console.log(computeCharges(charges))
  /**
 * @author luwam Asmelash;
 * @param {arr} arr;
 * @returns {number} finding the minimum distance;
 */
   function findMinDistance(arr) {
    let minDistance = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            let minDis = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
            if ( minDistance === -1) {
                minDistance = minDis;
            } else if (minDistance > minDis) {
                minDistance = minDis;
            }
        }
    }
    return minDistance;
}
let arr = [3, 2, 1, 2, 3];//2
let arr1 = [7, 1, 3, 4, 1, 7];//3
let arr2 = [1, 2, 3, 4] //-1
console.log(findMinDistance(arr))
console.log(findMinDistance(arr1))
console.log(findMinDistance(arr2))
  module.exports={divisibleSumPairs,computeCharges,computeHeight,findMinDistance,mostFrequentSight,countSocksPairs}

  
 