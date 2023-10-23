// get -> Associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

// set -> Permite que você armazene valores exclusivos de qualquer tipo, desde valores primitivos a referências a objetos.

//OBS: Usando get/set -> nao usa value e writable.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePriv = estoque;

    Object.defineProperty(this, 'estoque', { // Mexendo e apenas uma propriedade do objeto.

        enumerable: true, // True mostra a chave. false nao mostra a chave.
        configurable: true, // Pode apagar/editar/reconfigurar a chave.(true/false)
        get: function() { 
            return estoquePriv;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Diferente de Number');
                throw new TypeError('Digite um Number para modificacar o estoque');//Jogando um erro no terminal.
            }
            estoquePriv =  valor;
        }
    });
}

const p1 = new Produto('Camiseta',20, 3);
console.log(p1);
p1.estoque = 500;// se eu jogando String aparece o erro do set.
console.log(p1.estoque);

/*********************************************************************/

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('preta', '');//retiran a palavra preta por espaço vazio.
            nome = valor;
        }
    };
}
const p2 = criaProduto('Camiseta');
console.log(p2);
console.log(p2.nome);

p2.nome = 'blusa preta';
console.log(p2.nome);