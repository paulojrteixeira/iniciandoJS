const numeros = [1, 2, 3, 4, 5];

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);
numeros.forEach(function(_, i) {
    console.log(i);
}); 


// numeros.forEach(function() {
    // console.log('Denrto da Função')
// })


// for(let n of numeros) {
    // console.log(n); 
// }


// for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i])
//  }