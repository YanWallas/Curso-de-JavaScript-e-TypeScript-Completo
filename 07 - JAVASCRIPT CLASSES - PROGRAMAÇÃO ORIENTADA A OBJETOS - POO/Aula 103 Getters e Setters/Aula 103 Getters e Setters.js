/* Symbol() -> Cada valor símbolo retornado de Symbol()é único.
Um símbolo pode ser usado como identificador de propriedades
de objetos; esse é o único propósito do tipo de dado.*/

const _velocidade = Symbol('velocidade');// Protegendo a velocidade com uma propriedade privada(Symbol).

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;//Colocando em [] para privacidade do dado.
    }

    set velocidade(valor) {
        console.log('SETTER');// So para ver quando e chamado
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <=0) return;
        this[_velocidade] = valor;
    }
    get velocidade() {
        console.log('GETTER');// So para ver quando e chamado
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {//Simulando o acelerador pressionado.
    c1.acelerar();
}

c1.velocidade = 1500;//(Chamando SETTER) Mesmo jogando outro valor na velocidade, ela esta protegida.(segura pelo set.)

console.log(c1.velocidade);// Chamando GETTER 

console.log('***************************')
/*********************************************************************/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() { return this.nome + ' ' + this.sobrenome;}

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);

/*split() -> divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

shift() -> método de Arrayinstâncias remove o primeiro elemento de um array e retorna o elemento removido. Este método altera o comprimento do array.

join() -> método de Arrayinstâncias cria e retorna uma nova string concatenando todos os elementos deste array, separados por vírgulas ou por uma string separadora especificada. Se a matriz tiver apenas um item, esse item será retornado sem usar o separador.*/
