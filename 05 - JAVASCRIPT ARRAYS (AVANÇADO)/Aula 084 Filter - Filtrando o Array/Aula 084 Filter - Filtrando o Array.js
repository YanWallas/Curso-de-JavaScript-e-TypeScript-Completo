// FILTER -> Sempre retorn um novo array, com a mesma quantidade de elementros o menos.

// retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;// Metodo filter reponde apenas com true ou false (true para entrar no filter)
    } else {
        return false;// Nao entra no filter. 
    }
}
const num = numeros.filter(callbackFilter);// Nao chamo a funcion com '()'. apenas coloco o nome e o filter acessa ela. 

console.log(num);

/*********************************************************************/
// OUTRA FORMA RESUMIDA DE FAZER.

const numeros1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
        return valor > 10; //Uma condição que return true ou false. Posso return a propria condição direto, return ja vai retornar se é true ou false.
}
const num1 = numeros1.filter(callbackFilter);// Nao chamo a funcion com '()'. apenas coloco o nome e o filter acessa ela. 

console.log(num1);

/*********************************************************************/
// OUTRA FORMA RESUMIDA DE FAZER.

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const num2 = numeros2.filter(function(valor) {//function anonima. 
    return valor > 10; 
}); 
console.log(num2);

/*********************************************************************/

// OUTRA FORMA RESUMIDA DE FAZER COM ARROW FUNCTION.
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const num3 = numeros3.filter(valor => valor > 10); //ARROW FUNCTION
console.log(num3);

/*********************************************************************/
/*------------------------------------------------------------------*/


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallas', idade: 47},
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeG = pessoas.filter(obj => obj.nome.length >= 5);//length sempre chega o tamanho da string.
console.log(pessoasNomeG);

// Retorne as pessoas com mais de 50 anos
const idadeMaior = pessoas.filter(valor => valor.idade > 50);
console.log(idadeMaior);

// Retorne as pessoas cujo nome termina com 'a'
const nomeTerminaA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaA);

//toLowerCase() -> retorna o valor da string que foi chamada convertida para minúsculo.
//endsWith() -> indica que uma string termina com determinados caracteres, retornando true ou false.