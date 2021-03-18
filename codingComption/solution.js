"use strict"
/**
 * @author Gebreegziabher Redda;
 * @param {arr} arr;
 *  * @param {Number} n;
 * @returns {Number} 
 */
function divisibleSumPairs(arr, n){
    let countPair=0
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]+arr[j]%k===0){
            countPair++
        }   
    }
    return countPair;
}
}
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
 /**
 * @author luwam Asmelash;
 * @param {arr} arr;
 * @returns {number} finding the minimum distance;
 */
function countSockPair(arr) {
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
      for(let i=1;i<cycles;i++){
           if(i%2!==0)
            height=2*height;
            else
            height+=1
      }
      return height;
  }
 /**
 * @author Gebreegziabher Redda;
 * @param {arr} arr;
 * @returns {array} 
 */
  function computeCharges(arr){
      let customer=[]
      for(let i=0;i<charges.length;i++){
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

  /**
 * @author luwam Asmelash;
 * @param {arr} arr;
 * @returns {number} finding the minimum distance;
 */
function findMinDistance(arr) {
    let distances = [];
    for(let i = 0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
        let minDistance = arr.lastIndexOf(arr[i]) - arr.indexOf(a[i]);
            distances.push(minDistance);
        }
    }
   
    if(distances.length === 0){
        return -1;
    }else{
        distances.sort(function(aaa, bbb) {
          return aaa - bbb;
        });
    
        return distances[0];
    }
  }

  
 