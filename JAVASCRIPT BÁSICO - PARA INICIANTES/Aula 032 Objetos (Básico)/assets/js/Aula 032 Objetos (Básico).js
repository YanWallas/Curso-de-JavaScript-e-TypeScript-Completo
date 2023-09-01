const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 25;

const pessoa01 = { // Criando objeto
    nome: 'Yan', //Atribuindo valores na variavel do objeto.
    sobrerenome: 'Wallas', // separa a variavel dentro do objeto por virgula.
    idade: 25
};

console.log(pessoa01.nome);//puxando dentro do objeto a variavel nome.
console.log(pessoa01.sobrerenome);

const pessoa02 = { // Criando objeto
    nome: 'Elaine', //Atribuindo valores na variavel do objeto.
    sobrerenome: 'Cristina',
    idade: 54
};

console.log(pessoa02.nome);//puxando dentro do objeto a variavel nome.
console.log(pessoa02.sobrerenome);

function criaPessoa (nome, sobrenome, idade){//criando objeto usando função
    return {// vai retorna esses valores
        nome: nome,// função nome vai recebe retorno como variavel nome.
        sobrenome: sobrenome,
        idade: idade
    }
//  return {nome, sobrenome, idade}; -> podendo tambem fazer aqui, quando a função recebe o mesmo valor.    
}

const pessoa1 = criaPessoa('Matheus', 'Lima', 25);//jogando valor dentro da função.
const pessoa2 = criaPessoa('João', 'Neto', 32);
const pessoa3 = criaPessoa('Junior', 'Filho', 55);
const pessoa4 = criaPessoa('Jean', 'Felipi', 44);
const pessoa5 = criaPessoa('Carlos', 'Batista', 89);

console.log(pessoa1.nome, pessoa3.idade, pessoa5.sobrenome);

const pessoa03 = {
    nome: 'Yan',
    sobrenome: 'Wallas',
    idade: 25,

    fala() {// Criando uma função dentro de um objeto
        console.log(`${this.nome} ${this.sobrenome} esta falando Oi...`);
        //this -> esta referindo ao objeto/ chamando o objeto para contexto.
        console.log(`A minha idade é ${this.idade}.`)
    },

    incrementa() {//Criando outra função dentro de objeto
        this.idade++;// Sempre que chamar essa função, vai acrescentar mais 1 na idade.
    }

}

pessoa03.fala()
pessoa03.incrementa();
pessoa03.fala()
pessoa03.incrementa();
pessoa03.fala()
pessoa03.incrementa();
pessoa03.fala()
pessoa03.incrementa();