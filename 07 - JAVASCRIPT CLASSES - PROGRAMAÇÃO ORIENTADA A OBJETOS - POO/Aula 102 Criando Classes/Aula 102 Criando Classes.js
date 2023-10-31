//CRIANDO CLASS E LIKANDO PROTOTYPE
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);

/*********************************************************************/

// MESMA COISA DE CIMA, USANDO FUNCTION
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const p2 = new Pessoa2('Maria', 'Fernanda');

