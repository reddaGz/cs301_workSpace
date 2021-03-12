"use strict";
/**
 * @param {Number} n;
 * @return{Number};
 */
function countDigits(n){
    if(n===0)
    return 0;
    return 1+countDigits(Math.floor(n/10))
}
/**
 * @param {String} str;
 * @return {String};
 */
 function reverse(str){
  if(str.length==0)
   return "";
  if(str.length===1)
  return str;
     return  str[str.length-1]+reverse(str.substring(0,str.length-1));  
}
/**
 * 
 * @param {Number} n; 
 * @param {Number} pow ;
 * @return{Number};
 */
function power(n,pow){
     if(pow===0)
        return 1;
    if(pow<0)
      return 1/(power(n,-1*pow))
    return n*power(n,pow-1);
}
console.log(2,2)
console.log(2,-2)
console.log(reverse("olleH"));
console.log(countDigits(0))

module.exports={power,reverse,countDigits}