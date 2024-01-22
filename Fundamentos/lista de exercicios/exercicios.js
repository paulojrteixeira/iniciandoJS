/// #1

function cumprimentar(nome) {
    return `Olá ${'Lucas'} !`
}
console.log(cumprimentar());

////////////---------------------------/////////////////////////------------------------------

/// #2

function idade() {
    const diasAno = 365
    return 365 * 25
}

console.log(idade()); /// 9125 dias 

////////////---------------------------/////////////////////////------------------------------

/// #3

function calcularSalario() {
    const horasTrabalhadas = 6
    const salarioPorHora = 40
    return horasTrabalhadas * salarioPorHora * 30
}

console.log('O Salário igual a', + calcularSalario()); /// O Salário igual a 7200

////////////---------------------------/////////////////////////------------------------------

/// #4

function calendario() {
    switch (9) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
    }
}
console.log(calendario())

////////////---------------------------/////////////////////////------------------------------

/// #5

let a = 10
let b = 5
function maiorOuIgual() {

    if (a >= b)
        return true
    else (a != b)
    return false
}

console.log(maiorOuIgual());  /// true 

////////////---------------------------/////////////////////////------------------------------

/// #6

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean")
        return !valor
    else if (tipo == "number")
        return -valor
    else
        return `boleano ou números esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(999));  /// -999

////////////---------------------------/////////////////////////------------------------------

/// #7

function multiplicar(num1, num2) {
    let resultado = 0
    for (let x = 0; x < num2; x++)
        resultado += num1
    return resultado
}

console.log(multiplicar(5, 5))  ///25

////////////---------------------------/////////////////////////------------------------------

/// #8

function repetir(elemento, numero) {
    let resultado = []
    for (let x = 0; x < numero; x++)
        resultado.push(elemento)
    return resultado
}

console.log(repetir(6, 2))


////////////---------------------------/////////////////////////------------------------------

/// #9

function simbolo(vezes) {
    return "+".repeat(vezes)
}

console.log(simbolo(5))

////////////---------------------------/////////////////////////------------------------------

/// #10

function mostrarPrimeiroEUltimo() {
    const array = [1, 2, 3, 'ultimo'];
    const primeiroElemento = array.shift();    ///.SHIFT --> REMOVE O PRIMEIRO ELEMENTO DO ARRAY E RETORNA ESSE VALOR
    const ultimoElemento = array.pop();       ///.POP --> REMOVE O ULTIMO ELEMENTO DO ARRAY RETORNA ESSE VALOR 
    return [primeiroElemento, ultimoElemento]

}
console.log(mostrarPrimeiroEUltimo());

////////////---------------------------/////////////////////////------------------------------

/// #11