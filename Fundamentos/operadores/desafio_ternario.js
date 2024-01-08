const a = 10;
const b = 5;
const operacao = "+";   /// PODE SER QUALQUER OPERAÇÃO  ///

const resultado = 
    operacao === "+" ? a + b : 
        operacao === "-" ? a - b :  
            operacao === "*" ? a * b : a / b;
console.log(resultado);

    /// -  + = 15
    /// -  - = 5
    /// -  * = 50
    /// -  / = 2