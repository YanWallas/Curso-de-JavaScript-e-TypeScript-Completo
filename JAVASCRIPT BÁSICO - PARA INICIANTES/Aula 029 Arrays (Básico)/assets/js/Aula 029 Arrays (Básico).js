/*indexação   012345678910 -> indexação da variavel ordenando por cada espaço que ocupa.
const nome = 'Luiz Otávio';
console.log(nome[0]);
*/

//indexação        0       1        2  -> indexação de Array organizado por varios dados dentro da variavel. 
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); // Array Completo.
console.log(alunos[0]); // Buscando Array Especifico.

alunos[0] = 'Eduardo'; //trocando apenas o indice 0 ex: Luiz por Eduardo.
alunos[3] = 'Luiza'; // Adicionando mais um elemento no array. array[3] nao tinha e adicionei.
console.log(alunos);

console.log(alunos.length); // para saber quantidade de elementos dentro array.

alunos[alunos.length] = 'Fábio'; // adicionando e buscando quantos elementos.
alunos[alunos.length] = 'Luana';
console.log(alunos); 

alunos.push('Otavio'); // adicionando diretamento no final do Array sem saber a quantidade que ja tem.
console.log(alunos);

alunos.unshift('Yan'); // adicionando o elemento no indice 0 e empurrando os demais para frente.
console.log(alunos);


//alunos.pop(); -> removendo o ultimo elemento do array.
const removido = alunos.pop(); // removendo o ultimo elemento e jogando dentro de const.
console.log(removido);
console.log(alunos);

//alunos.shift(); -> removendo o Primeiro elemento do array.
const removidoP = alunos.shift(); // removendo o Primeiro elemento e jogando dentro de const.
console.log(removidoP);
console.log(alunos);

// TODOS ESSAS FUNÇOES DE ADICIONAR, REMOVER OU EDITAR ELEMENTOS DA ARRAY, PODEM MUDAR OS INDICES DE CADA ELEMENTO (SEMPRE FICAR DE OLHO NISSO)

delete alunos[1];//removido o indice 1, porem, nao altera os demais. Indice 1 fica undefined.
console.log(alunos[1]);

console.log(alunos[50]);// ACESSANDO ALGO QUE NAO EXISTE O JAVA NAO DA ERRO, SEMPRE VAI DA UNDEFINED (ISSO PARA QUALQUER FUNÇÃO OU OPERAÇÃO QUE FOR FAZER)

alunos.push('Wallas');
alunos.push('Almeida')

console.log(alunos.slice(0,3));// Buscando os indice do 0 ate o 3, porem, o nome do indice 3 nao aparece. apenas o nome ate o indice 2.

console.log(alunos.slice(0,-2));// Buscando os indice do 0 ate o -2, retirando os 2 ultimos indice.

alunos.splice(1, 0, 'Marcos'); // adicionando um elemento no indice 1 e removendo o 0.
console.log(alunos);

alunos.splice(1, 1, 'Gustavo'); // adicionando um elemento no indice 1 e removendo o 1.
console.log(alunos);

console.log(typeof alunos);// é considerado objeto
console.log(alunos instanceof Array);// Alunos e uma instancia de Array? vai retornar true ou false.

//DENTRO DO ARRAY POSSO COLOCAR QUALQUER TIPO DE DADOS: NUMBERS, STRING, TRUE, NULL, UNDEFINED, ETC.