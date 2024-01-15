const notas = [3, 4, 5, 6, 7, 8, 9, 10]

let valores = ''

/// FOREACH = PERCORRA CADA UM DOS ELEMENTOS
for(let nota of notas) {
    console.log(nota)
    valores += nota + ' ';
}

console.log(valores);

 let indices = '';
 for(let indice in notas) {
 indices += indice + '  ';
}