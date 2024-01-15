///    FUNÇÃO CONSTRUTORA --> OBJETO
function Data(dia = 9, mes = 9, ano = 2009) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }

}

const d1 = new Data();
const d2 = new Data(11, 11, 2011 );

console.log(typeof d1);
console.log(d1);
console.log(d2);