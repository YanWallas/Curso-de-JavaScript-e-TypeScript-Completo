// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype -> criado por baixo dos panos.
};

const objB = {
    chaveB: 'B'
    //_proto_: objA
};

const objC = new Object();
objC.chaveC = 'C';

/*O Object.setPrototypeOf()método estático define o protótipo (ou seja, a [[Prototype]]
propriedade interna) de um objeto especificado para outro objeto ou null.*/
Object.setPrototypeOf(objB, objA);//Prototype do objB agora é o objeA.
Object.setPrototypeOf(objC, objB);//Prototype do objC agora é o objeB.
console.log(objB.chaveA);

/*********************************************************************/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);// desconto de 100%.

console.log(p1);

/*********************************************************************/

// Criando um Object Literal. 
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);//Protorype do p2 agora e o prototype de Produto, agora consigo usar o metodo aumento da função.
p2.aumento(10);

console.log(p2);

/*********************************************************************/

const p3 = Object.create(Produto.prototype);//Criando o object e ja setando o prototype nele.
p3.preco = 113;//Criando a chave preco dentro do object vazio.
p3.aumento(10);//Agora posso usar o metodo do prototype da função.

console.log(p3);

/*********************************************************************/

const p4 = Object.create(Produto.prototype, {
    preco: { // criando a chave e ja configurando ela.
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
});
p4.aumento(10);

console.log(p4);