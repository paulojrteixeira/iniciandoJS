function retornar() {

    function bomDia() {
        return "Bom Dia"
    }

    return bomDia
}

console.log(retornar);
console.log(retornar());
console.log(retornar()());

const funcao = retornar();

console.log(funcao())