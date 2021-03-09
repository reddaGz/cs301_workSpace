"use strict";
/**
 * 
 * @param {Strign} str1 ;
 * @param {Strign} str2;
 * @return{Strign}; 
 */
function suffix(str1, str2) {
  let sufix = "";
  let len1 = str1.length;
  let len2 = str2.length;
  let len = (len1 > len2) ? len1 : len2;//Meanig
  for (let i = 0; i < len; i++) {
  if (str1[len1 - i - 1] !== str2[len2 - i - 1]) {
  return sufix;
  }
  sufix = str1[len1 - i - 1]+sufix;
  }
  return sufix;
  }
console.log(suffix("waking","swimming")); //output son
let str1 = "worker";
let str2 = "worgftbvrker";
console.log(suffix(str1, str2));
