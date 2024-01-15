const cliente = {
    codigo: '929305',
    nome: 'Rogério',
    vip: true,
    endereco: {
        logadouro: 'Morumbi',
        numero: '633',
        complemento: 'numero 633',
        pontosRef: [
            {nome:'Metrô', muitoProximo: true},
            {nome:'Hospital',muitoProximo: false},
        ]
    },
    nomeFilhos: ['Igor Gomes', 'Nestor']
};

console.log(cliente['endereco']['logadouro']);
console.log(cliente.endereco.logadouro);
console.log(cliente.endereco.pontosRef[1].muitoProximo);