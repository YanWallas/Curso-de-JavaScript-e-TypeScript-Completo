/* Não podemos criar constantes com palavras reservadas 
ex: let, if, else, entre outras... */

// Constantes precisam ter nomes significativos.

// Não pode começar o nome de um constantes com um número.
// Não podem conter espaços ou traços, ultilizamos camelCase (ex. nomeCliente).
// Case-sensitive, tem diferença de letra maiúsculas e minúsculas.
// Não pode modificar o valor de uma Constante.
// Não utilize var, utilize const.

const nome = 'João';
console.log(nome);

const primeiroN = 5;
const segundoN = 10;
const resultado = primeiroN * segundoN;
const resultadoD = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; // let podemos declarar outro valor em cima, perdendo o primeiro valor declarado, com const nao.

console.log(resultadoTriplicado);

//String = Text | Number = Número 
const nString= '5'; // Número dentro de aspas e String.
const nNumber = 10; // Fora de aspas e Number.
console.log(typeof nString); //Verificar se e String ou Number.
console.log(typeof nNumber);
console.log(nNumber + nNumber);// vai somar resultado da soma dos Number
console.log(nNumber + nString);// vai pegar o Number e colocar a String na frente

console.log(typeof(nNumber + nString)); //typeof sem parentese depois, vai pegar apenas o nNumber, com parentese depois, pega os comando todo: nNumber e String.