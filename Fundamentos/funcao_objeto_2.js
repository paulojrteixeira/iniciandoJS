function criarData(dia, mes, ano){
    return {
        dia,
        mes,
        ano,

        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(24, 9, 2023);
const d2 = criarData(10, 10, 2010);
const d3 = criarData(2, 2, 2002);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());