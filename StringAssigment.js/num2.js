"use strict"
/**
 * 
 * @param {Object} obj ;
 * @return{number};
 */
function countProperty(obj){
    let count=0;
    for(let n in obj){
        count++;
    }
    return count;
}
let car={
    name:"Toyota",
    model:"Camry",
    id:123

};
console.log(countProperty(car))