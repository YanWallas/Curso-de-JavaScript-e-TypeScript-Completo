// CRIANDO OBEJETO COM LITERAL.
const pessoa = {
    nome: 'Yan',
    sobrenome: 'Wallas'
};
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);//Mesma coisa de cima. 

//mais usada quando vem informações de banco de dados que nao sabemos o que é e onde colocar.
const chave = 'nome';
console.log(pessoa[chave]);

/*********************************************************************/

//MESMA COISA, POREM, USANDO CONSTRUTOR.
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;

//delete pessoa1.nome; -> Apagando nome do objeto.
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1);

/*********************************************************************/
//USANDO FUNCTION PARA PEGAR NOME E TRANSMITIR MENSAGEM DO OBJETO CRIADO
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome`);
}
pessoa1.falarNome();

/*********************************************************************/
//USANDO FUNCTION PARA PEGAR ANO DE NASCIMENTO DO OBJETO CRIADO
pessoa1.getDataNasc = function() {
    const dataAtual = new Date();// jogando data atual na variavel.
    return dataAtual.getFullYear() - this.idade; 
};
console.log(pessoa1.getDataNasc());

/*********************************************************************/
//USANDO FOR PARA ACESSAR TODAS AS CHAVES DO OBJETO CRIADO
for (let chave in pessoa1) {
    console.log(chave);
}

/*********************************************************************/
//CRIANDO UM MOLDE PARA CRIA OBJETOS, SEM PRECISAR CRIAR MANUALMENTE TODA VEZ.
// PODE SER CRIADO COM: Factory Functions / Constructor Functions / Classes

// Factory Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Lima', 'Osvaldo');
console.log(p1.nomeCompleto);

/*********************************************************************/

// Constructor Functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);// Objeto nao pode mais ser alterado. bloqueando alteração depois de criar.
}

const p2 = new Pessoa('Elaine', 'Cristina');
console.log(p2);