// function que restun objetos.

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
console.log(p1.fala('falando sore js'));//Exibindo p1 e chamando a function fala que esta dentro dela
console.log(`O imc e de ${p1.imc()}`);// exibindo o imc. a function dentro do p1.
console.log(p2.fala('chamando o this agora'));
console.log(`O imc e de ${p2.imc()}`);