function executar(dados) {
    if(typeof dados === 'function') {
        console.log(dados());
    }
}

function bomDia() {
    return 'Bom Dia'
}

executar();
executar(bomDia);

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);