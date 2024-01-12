const nota1 = 9.8;
const nota2 = 1.1;
const nota3 = 6.1;

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
    // if(n1 <= n2 ) {
    // return n1;
    // } else {
    // return n2; 
    // }
}
// console.log(minimo( nota1, nota2))

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }

}

function mediaParaStatus(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 4) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

const mediaFinal = media((nota1, nota2, nota3));
const statusFinal = mediaParaStatus(mediaFinal); 

console.log(`O resultado final do aluno é: ${statusFinal}!`); 
// console.log(minimo(nota1, minimo(nota2, nota3))) /// nota2: 3.1 ///
// console.log(media(nota1, nota2, nota3)); /// média 7.25 ///