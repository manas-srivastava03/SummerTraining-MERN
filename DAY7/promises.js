// function message(){
//     console.log("Hello");
// }
// setTimeout(message,1000);
// console.log("Hello friends");

let a = 10;
let b = 0;
// resolve value le kar jata h
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => resolve(20),200);
});
waitingData.then((data)=>{
    b = data;
    let c = a+b;
    console.log("Result = ",c);
});

// setTimeout(() => {b = 20},1000);



