
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', { // Mexendo e apenas uma propriedade do objeto.

        enumerable: true, // True mostra a chave. false nao mostra a chave.
        value: estoque, // Valor da chave
        writable: false,// Se pode alterar o valor da chave.(true/false)
        configurable: true // Pode apagar/editar/reconfigurar a chave.(true/false)

    });

}

const p1 = new Produto('Camiseta',20, 3);
console.log(Object.keys(p1)); 
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}