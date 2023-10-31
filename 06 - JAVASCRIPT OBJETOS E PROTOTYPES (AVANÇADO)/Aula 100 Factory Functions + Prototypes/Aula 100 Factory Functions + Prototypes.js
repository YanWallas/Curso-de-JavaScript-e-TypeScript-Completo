function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = { // Jogando os metodos para variavel.
        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };

    return Object.create(pessoaPrototype, {// Retornando um Objeto, com Object prototype linkado.
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Yan', 'Wallas');
const p2 = criaPessoa('Maria', 'Fernanda');
console.log(p1);

/*********************************************************************/
// MESMA COISA DE CIMA, APENAS DESVNCULANDO OS METODOS (FALAR,BEBER E COMER) DE DENTRO.

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

const pessoaPrototype1 = { ...falar, ...comer, ...beber };// Jogando os metodos dentro da const.
//const pessoaPrototype1 = Object.assign({}, falar, comer, beber); Outra forma de fazer.

function criaPessoa1(nome, sobrenome) {
    return Object.create(pessoaPrototype1, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const ps1 = criaPessoa1('Teus', 'Lima');
const ps2 = criaPessoa1('Rafa', 'Geovanna');
console.log(ps1);