 /// #1

function cumprimentar(nome) {
    return `Olá ${'Lucas'} !`
}
 console.log(cumprimentar());

 ////////////---------------------------/////////////////////////------------------------------

 /// #2

function idade(){
    const diasAno = 365
    return 365 * 25
 }
 
 console.log(idade()); /// 9125 dias 

 ////////////---------------------------/////////////////////////------------------------------

 /// #3

function calcularSalario() {
    const horasTrabalhadas= 6
    const salarioPorHora = 40
    return horasTrabalhadas * salarioPorHora *30
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