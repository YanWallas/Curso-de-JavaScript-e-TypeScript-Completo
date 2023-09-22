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
    console.log(nomes[i]);
}

console.log('########');

for (let i in nomes) { // For in
    console.log(i);
}

console.log('*********')

for (let valor of nomes) { // For of
    console.log(valor);
}

nomes.forEach(function(valor, indice) { // forEach -> outra maneira de trabalhar o For trazendo valor e indice, ussando function. 
    console.log(valor, indice);
});