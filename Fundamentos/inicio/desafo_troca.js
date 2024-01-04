let a = 7;
    let b = 94;

    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);

/* 
let a = 7;
let b = 94;

a = b;
b = a; 

console.log(a , b)
// FAIL!! OS DOIS VALORES DERAM 94 //
*/

/*  // CORREÇÃO //

    let a = 7;
    let b = 94;

    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);

    // OU UTILIZAR ESSE OUTRI MÉTODO //

    [a, b] = [b, a]
*/