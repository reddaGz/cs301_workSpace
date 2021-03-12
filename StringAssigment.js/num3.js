"use strict";
/**
 * @param {String} str ;
 * @return{boolean};
 */
function checkSpam(str){
  let text =str.split(" ") ;
  for(let tex of text) {
      if(tex==="lottery"||tex==="prize")
      return true;
  }
  return false;
}
let text="this is lottery"
console.log(checkSpam(text))