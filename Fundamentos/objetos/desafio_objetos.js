const dataCampeao = {
    dia: 24,
    mes: 9,
    ano: 2023,

    exibir: function () {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

dataCampeao.dia = 23;
console.log(dataCampeao.exibir());

///     OKOK!!  CORRIGIDO    ///