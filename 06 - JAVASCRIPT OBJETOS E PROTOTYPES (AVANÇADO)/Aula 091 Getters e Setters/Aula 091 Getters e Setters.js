// get -> Associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

// set -> Permite que você armazene valores exclusivos de qualquer tipo, desde valores primitivos a referências a objetos.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePriv = estoque;

    Object.defineProperty(this, 'estoque', { // Mexendo e apenas uma propriedade do objeto.

        enumerable: true, // True mostra a chave. false nao mostra a chave.
        configurable: true, // Pode apagar/editar/reconfigurar a chave.(true/false)
        get: function() { 
            return estoque;
        },
        set: function(valor) {
            estoquePriv =  valor;
        }
    });
}

const p1 = new Produto('Camiseta',20, 3);
console.log(p1);
p1.estoque = 'Ovalor que eu quero';
console.log(p1.estoque);
