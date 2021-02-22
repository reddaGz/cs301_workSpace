//algorthim that count number less than 50 from the given number
let arr =[1,90,3,4,23,56,13,78]
let count =0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<50){
        count++;
    }
}
console.log("count less than 50 "+count)
