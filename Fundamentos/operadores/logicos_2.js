const work1 = true;
const work2 = true;

let comprarTV50 = work1 && work2;
console.log('Vamos comprar a TV de 50"? ' + (comprarTV50));  /// && = AND - pode trocar o sinal de + por uma ,  ///

let comprarTv32 = work1 !== work2;
console.log('Vamos comprar a TV de 32"?' , work1 !== work2); /// != XOR (Ouexclusivo)    ///

let tomarSorvete = work1 || work2;    /// || = OR   ///
console.log('Vamos tomar sorvete? ' , tomarSorvete);

let ficarEmCasa = !tomarSorvete;    /// != negação lógica   ///
console.log('Ficar em casa? ' , ficarEmCasa);