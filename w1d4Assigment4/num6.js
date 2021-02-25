
let prompt=require('prompt-sync')();
let n=+prompt("enter number 2:")
for(let i=1;i<n;i++){
    let k='';
    for(let j=i;j<n;j++){
        k+=i;
    }
    console.log(k)
}
console.log("======================")
for(let i=1;i<n;i++){
    let k='';
    for(let j=1;j<=i;j++){
        k+=i;
    }
    console.log(k)
}
console.log("======================")
for(let i=1;i<n;i++){
    let k='';
    for(let j=1;j<=i;j++){
        k+=j;
    }
    console.log(k)
}
console.log("======================")
for(let i=n;i>0;i--){
    let k='';
    for(let j=i;j>=1;j--){
        k+=i;
    }
    console.log(k)

}

console.log(parseInt(123/10) )