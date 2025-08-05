let a = 786;
let first_num = a % 10;
a = Math.floor(a / 10);
let second_num = a % 10;
a = Math.floor(a / 10);
let third_num = a % 10;

if (first_num > second_num && first_num > third_num) {
    console.log("Largest number is : ",first_num);
} else if (second_num > first_num && second_num > third_num) {
    console.log("Largest number is : ",second_num);
} else {
    console.log("Largest number is : ",third_num);
}