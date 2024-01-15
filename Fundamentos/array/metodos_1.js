const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros[0] = 999;

console.log(numeros);
console.log(numeros.join (' # '));
console.log(numeros.includes(500));
console.log(numeros.indexOf(4));

const numers2 = numeros.concat(8, 9, 10);
console.log(numers2);