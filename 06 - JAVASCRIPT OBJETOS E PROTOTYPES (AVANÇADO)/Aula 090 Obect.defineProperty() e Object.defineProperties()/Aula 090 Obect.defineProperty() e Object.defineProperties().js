// defuneProperty -> método estático define uma nova propriedade diretamente em um objeto ou modifica uma propriedade existente em um objeto e retorna o objeto.(apenas uma)

// defuneProperties -> método estático define novas propriedades ou modifica propriedades existentes diretamente em um objeto, retornando o objeto.(varias)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // True mostra a chave. false nao mostra a chave.
        value: estoque, // Valor da chave
        writable: false,// Se pode alterar o valor da chave.(true/false)
        configurable: true // Pode apagar/editar/reconfigurar a chave.(true/false)

        // value: function() { return estoque; }, -> podendo criar uma function no value.
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // True mostra a chave. false nao mostra a chave.
        value: nome, // Valor da chave
        writable: true,// Se pode alterar o valor da chave.(true/false)
        configurable: true // Pode apagar/editar/reconfigurar a chave.(true/false)

        },
        preco: {
            enumerable: true, // True mostra a chave. false nao mostra a chave.
            value: preco, // Valor da chave
            writable: true,// Se pode alterar o valor da chave.(true/false)
            configurable: true // Pode apagar/editar/reconfigurar a chave.(true/false)
        },
    });
}

const p1 = new Produto('Camiseta',20, 3);
console.log(Object.keys(p1)); // método estático retorna uma matriz de nomes de propriedades enumeráveis ​​com chave de string do próprio objeto.(Mostra a chave como array(unumeradas)).

console.log(p1);

for (let chave in p1) {
    console.log(chave);
}