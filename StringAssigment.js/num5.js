"use strict"
/**
 * 
 * @param {Strign} str;
 * @return{Strign};
 */
function titleCase(str){
     str=str.split(" ");
     let arr=[];
    for(let i=0;i<str.length;i++){
            arr.push(str[i][0].toUpperCase()+str[i].substring(1,str[i].length) );   
    }
    arr =arr.join(" ");
return arr;
}

 let str="java scripts is more flexible programing langaues"
console.log(titleCase(str));