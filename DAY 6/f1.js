function add() {
    let a = parseInt(f1.t1.value); 
    let b = parseInt(f1.t2.value); 
    let c = a + b;                         
    document.f1.t3.value = c;              
}

function swap(){
    let a = parseInt(f2.t1.value);
    let b = parseInt(f2.t2.value);
    f2.t1.value = b;
    f2.t2.value = a;
}


function prime() {
    let count = 0;  
    let a = parseInt(f3.t1.value);

    if (a <= 1) {
        f3.t2.value = "Not Prime";
        return;
    }

    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            count++;
            break;
        }
    }

    if (count == 0) {
        f3.t2.value = "Prime";
    } else {
        f3.t2.value = "Not Prime";
    }
}

