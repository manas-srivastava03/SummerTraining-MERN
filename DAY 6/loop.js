// loop
//(traditional loops)      1. entry control, 2. exit control 
//(range based loop)

// read a number and calculate and print its factorial

let a = 5;
fact = 1;
for(i = 1; i<=a; i++){
    fact = fact * i;
}
console.log(fact);


//fibonacci

let d = 0;
let e = 1;
let f;

for (let i = 1; i <= 10; i++) {
    console.log(d); 
    f = d + e;
    d = e;
    e = f;
}

console.log("Last value in the sequence:", f);