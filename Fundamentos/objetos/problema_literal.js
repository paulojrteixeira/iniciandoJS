const dataCampeao = {
    dia: 24,
    mes: 9,
    ano: 2023,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d2 = {
    dia: 10,
    mes: 10,
    ano: 2010,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

const d3 = {
    dia: 2,
    mes: 2,
    ano: 2002,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(dataCampeao.exibir());
console.log(d2.exibir());
console.log(d3.exibir());