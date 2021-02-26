/**Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2 */
let prompt = require("prompt-sync")();
let sweep = prompt("Enter sweep of the house :");
let height = prompt("Enter height of the house:");
height = parseFloat(height);
let width = prompt("Enter width of the house :");
width = parseFloat(width);
let depth = prompt("Enter the depth of the house :");
depth = parseFloat(depth);
console.log("house volume is :" + houseVolume(width, depth, height, sweep));
console.log("house volume is :" + houseVolume());
function houseVolume(w, d, h, sw) {
  return roofVolume(w, sw, d) + livingVolume(w, h, d);
}
function livingVolume(w, h, d) {
  return w * h * d;
}
function roofVolume(w, sw, d) {
  return triangleArea(w, sw) * d;
}
function triangleArea(w, sw) {
  let s = (w + 2 * sw) / 2;
  let x = (s - w) * (s - sw) * (s - sw);
  return Math.sqrt(s * x);
}
