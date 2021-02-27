/* a. Write a function, areaOfCircle,
 that computes and returns area of a circle 
based on the value of input radius.*/
/**b. Write a function, volumeOfCylinder, that 
 * compute volume of a cylinder and making 
 * use of the areaOfCircle function. 
 * πr2h*/
let prompt = require("prompt-sync")();
const pi=3.14
let radius=+prompt("Enter radius of the cylinder")
let height=+prompt("Enter height of cylinder:")
volumeOfCylinder(radius,height)
console.log(result);
function volumeOfCylinder(r,h){
    let baseArea=areaOfCircle(r)
    let volume =baseArea*h;
    return volume;
}
function areaOfCircle(r){
    let area=pi*r*r;
    return area;
}