/// #1   FUNÇÃO COM PARAMETRO E COM RETORNO

function somar (a, b ) {
    return a + b;
}

let resultado = somar(30, 55); 
console.log(resultado);
console.log(somar(30,55));

/// #2 FUNÇÃO COM PARAMETRO E SEM RETORNO

function exibiResultado(a, b){
    console.log(a * b);
}

exibiResultado(5, 5)

/// #3  FUNÇÃP SEM PARAMETRO E COM RETORNO

function retornarHorario(){
    return new Date();
}

console.log(retornarHorario());

/// #4  FUNÇÃO SEM PARAMETRO E SEM RETORNO

function horaAtual(){
    console.log(new Date() . getHours());
}