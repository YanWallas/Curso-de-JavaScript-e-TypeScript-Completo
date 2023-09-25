// indice     1234 5678910
const nome = "Luiz Otávio";

for (let i = 0; i < nome.length; i++) { // esta bbuscando cada indice da variavel, no caso letra por letra.
    console.log(nome[i]);
}

console.log('########');

for (let i in nome) {
    console.log(i);
}
// Os de cima sao paraticamente a mesma coisa.Da o resultado da mesma maneira pelo indice.
// De baixo o resultado vem o valor de dentro da variavel e nao o indice.

/* -----> PARA STRING INTEIRAS <------
Retorna o valor e nao o indice */

console.log('*********')

for (let valor of nome) {
    console.log(valor);
}


const nomes = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) { // For clássico
    console.log(nomes[i]);// -> Me retorna valor so indice.
}

console.log('########');

for (let i in nomes) { // For in
    console.log(i);// -> Me retorna So o indice.
}

console.log('*********')

for (let valor of nomes) { // For of
    console.log(valor); // -> Me retorna so o valor.
}

nomes.forEach(function(valor, indice) { // forEach -> outra maneira de trabalhar o For trazendo valor e indice, ussando function. 
    console.log(valor, indice);
});

console.log('*********')

// **** FAZENDO COM OBEJETO ****
const pessoa = { 
    nome: 'yan',
    sobrenome: 'wallas'
};

for (let i in pessoa) {
    console.log(i, pessoa[i]) // BUSCANDO NOME E O VALOR DENTRO DO NOME.
}

// OBS: Com For Of nao funciona - objeto pessoa nao e iteravel. (nao tem indice igual array).

// -> For Clássico - Geralmente com iteráveis (array ou strings).
// -> For In - Retorna o indice ou chave (strings, array ou objetos).
// -> For Of - Retorna o valor em si (iteráveis, array ou strings).