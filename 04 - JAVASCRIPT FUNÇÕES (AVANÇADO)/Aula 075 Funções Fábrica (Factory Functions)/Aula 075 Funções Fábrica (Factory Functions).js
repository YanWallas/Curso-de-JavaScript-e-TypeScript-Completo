// FACTORY FUNCTION (FUNÇÃO FÁBRICA)
//FUNCTION QUE RETURN OBJETOS.

// this -> Sempre vai se referir o objeto que chamou a função
// this no cado de baixo e a const p1, pq ele esta chamando a função, ou seja,
// this e usado para capturar coisas que esta sendo chama. 
//se eu tivesse um peso definido fora da function fala e fosse usar no return de dentro da function fala, eu teria que usar o this.peso para me referir ao peso fora da function. 

function criaPessoa(nome, sobrenome, altura, peso){ 
    return {
        nome,
        sobrenome,
        fala(assunto){ // criando uma function.
            return `${this.nome} está ${assunto}.`;
        },
        peso,
        altura,
        imc() {// Criando outra function aqui dentro.
            const indice = this.peso / (this.altura **2);// capturando peso e altura que esta fora da função.
            return indice.toFixed(2);// returnando imc com 2 numeros depois da ','.
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Maria', 'joaquina', 1.6, 50); // Agora p2 que esta chamando o this.nome.
console.log(p1.fala('falando sobre js'));//Exibindo p1 e chamando a function fala que esta dentro dela
console.log(`O imc e de ${p1.imc()}`);// exibindo o imc. a function dentro do p1.
console.log(p2.fala('chamando o this agora'));
console.log(`O imc e de ${p2.imc()}`);

/**********************************************/

// CONSTRUCTOR FUNCTION (FUNÇÃO CONSTRUTORA)

function criaPessoa1(nome, sobrenome, altura, peso){ 
    return {
        nome,
        sobrenome,
        fala(assunto){ // criando uma function.
            return `${this.nome} está ${assunto}.`;
        },
        peso,
        altura,
        // Getter -> para obter apenas o valor que a função return.
        get imc() {// Colocando get antes da função, ele se comporta como atibuto.
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p4 = criaPessoa1('YAN', 'WALLAS', 1.8, 80);
console.log(p4.nome);
console.log(p4.sobrenome);
console.log(p4.imc);//Puxando como atributo e nao igual a função(p4.imc()).

/**********************************************/

function criaPessoa2(nome, sobrenome, altura, peso){ 
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
            //return `${nome} ${sobrenome}` -> sem 'this' nao altera o nome.
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');//vai retorna o nome mudado depois, em array (separando o nome atraves do espaço)
            this.nome = valor.shift();//Vai jogar o primeiro valor do array na variavel nome de fora(por isso 'this' antes), e tirar ele.
            this.sobrenome = valor.join(' ');// jogando o resto do array em sobrenome com o espaço estre os nomes.
        },

        fala(assunto){ // criando uma function.
            return `${this.nome} está ${assunto}.`;
        },

        peso,
        altura,

        // Getter -> para obter apenas o valor que a função return.
        get imc() {// Colocando get antes da função, ele se comporta como atibuto.
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p5 = criaPessoa2('elaine', 'cristina', 1.8, 80);
p5.nomeCompleto = 'Elaine Cristina Almeida'; // mudando o conteudo da função depois.
console.log(p5.nome);
console.log(p5.sobrenome);
console.log(p5.nomeCompleto);
