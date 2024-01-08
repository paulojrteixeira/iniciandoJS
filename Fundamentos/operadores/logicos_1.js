let temDinheiro = true;
let estaEnsolarado = true; 
let carroNaGaragem = true;

let resultadoE = "#1 (AND) - Vai ao shopping? ";
resultadoE += temDinheiro && estaEnsolarado;    /// && (ecomercial) = AND / E   ///
console.log(resultadoE);

let resultadoOu = "#2 (OR) - Vai ao shopping? ";
resultadoOu += estaEnsolarado || carroNaGaragem;    /// || (pipe) = OR / OU ///
console.log(resultadoOu);

console.log(true ^ false);  /// ^ = (Ouexclusivo) = opera em valores binários, resultado 0 ou 1 ////

console.log(true != false);
console.log(true != true);
console.log(false != true);
console.log(false !=false);

console.log(!true); /// !(negação) false no terminal
console.log(!false); /// !(negação) true no terminal