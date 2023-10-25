// Produto -> aumento, desconto
// Camiseta, caneca, lapis.

function Produto(nome, preço){
    this.nome = nome;
    this.preco = preço;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

console.log(produto);
console.log(camiseta);
