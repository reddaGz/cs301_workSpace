"use strict"
let prompt = require("prompt-sync")();
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter seconed number:");
let result = hCFlCM(num1, num2);
console.log(result);
/**
 * 
 * @param {number} n ;
 * @param {number} m ;
 * @return{String};
 */
function hCFlCM(n, m) {
  return (
    "HCF of"+ n+"and" +m +"is :" +hCF(n, m) +
     "and their LCM is :" +
    lcm(n, m)
  );
}
/**
 * 
 * @param {number} n ;
 * @param {number} m ;
 * @return{number};
 */
function hCF(n, m) {
  if (n === m) return n;
  if (m > n) {
    let temp = m;
    m = n;
    n = temp;
  }
  while (n % m !== 0) {
    let temp = n % m; //24%18=6
    n = m;
    m = temp;
  }
  return m;
}
console.log(typeof hCF)
/**
 * 
 * @param {number} n ;
 * @param {number} m ;
 * @return{number} ;
 */
function lcm(n, m) {//lcm of two number
  if (n === m) return n;
  if (m > n) {
    //9>5 true
    let temp = m; //temp=9
    m = n; //m=5
    n = temp; //n=9
  }
  for (let i = n; i < n * m; i += n) {
    //n=9,m=5,i=10
    if (i % n == 0 && i % m == 0) return i;
  }
  return n * m; //3*15;
}
/**
 * 
 * @param {number} n ;
 * @param {number} m ;
 * @returns{number};
 */
function lCM(n, m) {
  return (n * m) / hCF(n, m);
}
//console.log(`LCM ${num1} and ${num2} using gcd is : ` + lCM(num1, num2));
