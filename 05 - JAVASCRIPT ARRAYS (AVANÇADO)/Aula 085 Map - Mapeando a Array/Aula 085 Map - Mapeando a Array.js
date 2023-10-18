// MAP -> 

// Dore os números
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];



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