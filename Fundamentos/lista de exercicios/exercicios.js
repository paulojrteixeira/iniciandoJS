/// #1

function cumprimentar(nome) {
    return `Olá ${'Lucas'} !`
}
console.log(cumprimentar());

////////////---------------------------/////////////////////////------------------------------

/// #2
console.log('\n')

function idade() {
    const diasAno = 365
    return 365 * 25
}

console.log(idade()); /// 9125 dias 

////////////---------------------------/////////////////////////------------------------------

/// #3
console.log('\n')

function calcularSalario() {
    const horasTrabalhadas = 6
    const salarioPorHora = 40
    return horasTrabalhadas * salarioPorHora * 30
}

console.log('O Salário igual a', + calcularSalario()); /// O Salário igual a 7200

////////////---------------------------/////////////////////////------------------------------

/// #4
console.log('\n')

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
console.log('\n')

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
console.log('\n')

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
console.log('\n')

function multiplicar(num1, num2) {
    let resultado = 0
    for (let x = 0; x < num2; x++)
        resultado += num1
    return resultado
}

console.log(multiplicar(5, 5));  ///25

////////////---------------------------/////////////////////////------------------------------

/// #8
console.log('\n')

function repetir(elemento, numero) {
    let resultado = []
    for (let x = 0; x < numero; x++)
        resultado.push(elemento)
    return resultado
}

console.log(repetir(6, 2));     /// [6, 6]      


////////////---------------------------/////////////////////////------------------------------

/// #9
console.log('\n')

function simbolo(vezes) {
    return "+".repeat(vezes);
}

console.log(simbolo(5));        /// +++++

////////////---------------------------/////////////////////////------------------------------

/// #10
console.log('\n')

function mostrarPrimeiroEUltimo() {
    const array = [1, 2, 3, 'ultimo'];
    const primeiroElemento = array.shift();    ///.SHIFT --> REMOVE O PRIMEIRO ELEMENTO DO ARRAY E RETORNA ESSE VALOR
    const ultimoElemento = array.pop();       ///.POP --> REMOVE O ULTIMO ELEMENTO DO ARRAY RETORNA ESSE VALOR 
    return [primeiroElemento, ultimoElemento]

}
console.log(mostrarPrimeiroEUltimo());      /// [1, ultimo]

////////////---------------------------/////////////////////////------------------------------

/// #11
console.log('\n')

function removerPropriedade(objeto, propriedade) {
    const copia = { ...objeto }       /// SPREAD(...) --> PERMITE QUE EXPANDA OS VALORES DE ARRAY/OBJETOS, DENTRO DE OUTROS ARRAY/OBJETOS
    delete copia[propriedade]
    console.log(copia);
}
removerPropriedade({ a: 1, b: 2 }, "a") ///{b: 2}
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao");     ///{id: 20, nome: "caneta"}

//// EXERCICIO MAIS COMPLICADO POR ENQUANTO, NÃO CONSEGUI FAZER SOZINHO, TIVE QUE OLHAR A RESOLUÇÃO ///

////////////---------------------------/////////////////////////------------------------------

/// #12
console.log('\n')

function filtrarNumeros(array) {
    let resultado = []
    for (let itens of array) {
        if (typeof itens === 'number')
            resultado.push(itens);
    }
    console.log(resultado)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])    /// [1, 20] 
filtrarNumeros(["a", "c"])      /// []

////////////---------------------------/////////////////////////------------------------------

/// #13
console.log('\n')

function objetoParaArray(objeto) {
    let resultado = []
    for (let elemento in objeto) {
        resultado.push([elemento, objeto[elemento]])
    }
    console.log(resultado)
}
objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})       /// [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]] 
objetoParaArray({
    codigo: 11111,
    preco: 12000
})      /// [["codigo", 11111], ["preco", 12000]] 

////////////---------------------------/////////////////////////------------------------------

/// #14
console.log('\n')

function receberSomenteOsParesDeIndicesPares(array) {
    let resultado = []
    for (let i = 0; i < array.length; i += 2) {
        const numerosPares = array[i] % 2 == 0
        if (numerosPares)
            resultado.push(array[i])
    }
    console.log(resultado);

}
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])       /// [] 
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])   /// [10, 22]

////////////---------------------------/////////////////////////------------------------------

/// #15
console.log('\n')

function checarAnoBissexto(ano) {
    let multiploDeQuatro = ano % 4 == 0
    let multiploDeCem = ano % 100 == 0 // nao pode ser multiplo de 100 --> operador !(negacao)
    let multiploDeQuatrocentos = ano % 400 == 0 // exceto se tambem for multiplo de 400 --> operador ||(OU)
    return (multiploDeQuatro && !multiploDeCem) || multiploDeQuatrocentos
}
// checarAnoBissexto(2020) /// true
// checarAnoBissexto(2100) ///  false, pois é múltiplo de 100 e não é múltiplo de 400

console.log(checarAnoBissexto(2100));

////////////---------------------------/////////////////////////------------------------------

/// #16
console.log('\n')

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    console.log(soma);

}
somarNumeros([10, 10, 10])      /// retornará 30 
somarNumeros([15, 15, 15, 15])  /// retornará 60

////////////---------------------------/////////////////////////------------------------------

/// #17
console.log('\n')

function despesasTotais(produtos) {
    let resultado = 0
    for (let item of produtos)
        resultado += item.preco
    console.log(resultado);

}
despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])      /// retornará 239.99
despesasTotais([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
])      /// retornará 34599.89

////////////---------------------------/////////////////////////------------------------------

/// #18
console.log('\n')

