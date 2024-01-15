const produto = {
    nome: 'Computador',
    preco: 8000,
    desconto: 0.10,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);

    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());