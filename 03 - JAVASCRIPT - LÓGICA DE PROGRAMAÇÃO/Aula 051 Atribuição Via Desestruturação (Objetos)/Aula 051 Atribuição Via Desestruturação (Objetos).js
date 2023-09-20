const pessoa = {
    nome:'Luiz',
    sobrenome: 'wallas',
    idade: 25,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const nome1 = pessoa.nome; //buscano apenas a var nome dentro do obejto e jogando dentro de uma var fora.
console.log(nome1);

//Atribuição via desestruturação
const { nome } = pessoa;
console.log(nome1);

const { sobrenome, idade = '' } = pessoa;//Buscando a var dentro do obejto pessoa e criando uma const.
// idade = '' (valor padrao caso essa var nao tenha sido preenchida. )
console.log(sobrenome, idade);

const { nome: teste } = pessoa;//Buscando a var dentro do objeto e mudando o nome da var dela para teste.
console.log(teste);