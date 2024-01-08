/// CRIAR 2 EXPRESSÕES QUE VÃO RESULTAR EM TRUE UTILIZANDO ARITIMÉTICOS, RELACIONAIS, LÓGICOS

let a = 5 + 5 < 15;
let b = 10*1 == 5;
let mercado = true;
let temDinheiro = true;
let ensolarado = true;
let resultado = mercado && temDinheiro;
ensolarado = temDinheiro || ensolarado;
let chovendo = mercado != ensolarado;
mercado = !ensolarado;

console.log(a);
console.log("Vamos ao mercado?", ensolarado);
console.log("Vamos ao mercado?",resultado);

/// CRIAR 2 EXPRESSÕES QUE VÃO RESULTAR EM FALSE UTILIZANDO ARITIMÉTICOS, RELACIONAIS, LÓGICOS

console.log(b);
console.log("Vamos ao mercado?",chovendo);
console.log("Vamos ao mercado?",mercado);

/*  /// CORREÇÃO    ///

    TRUE
    let verdadeiro1 = 2 + 5 >= 7 && 8 > 2;
    let verdadeiro2 = !(6 * 6 < 3);

    console.log(verdadeiro1);
    console.log(verdadeiro2);

    FALSE
    let falso1 = 8 - 4 > 12 || false || 15 === '15';
    let falso2 = !(7 !== 7 || '3' !== 3);

    console.log(falso1);
    console.log(falso2;)
    
 */