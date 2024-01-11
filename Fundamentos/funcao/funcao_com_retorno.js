function semRetorno1() {
    return 1;
}

let valor = semRetorno1() + 14;
console.log(valor)



function textoOuNumero(retornaTexto) {
    return retornaTexto ? "Texto" : 123; 
    // if (retornaTexto) {
        // return "Texto";
    // } else {
        // return 123
    // }
}

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));