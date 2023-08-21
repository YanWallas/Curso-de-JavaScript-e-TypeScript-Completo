let nome = 'João'; // String

console.log(nome, 'nasceu em 1984');
console.log('Em 200', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo');


let nome1; // Declaro a variavel, mas esta sem valor
nome1 = 'qualquer valor'; // agora a variavel foi declarada 
console.log(nome1);
nome1 = 'Yan'; // Declarando outro nome por cima da declaração anterior
console.log(nome1);

/* Não podemos criar variáveis com palavras reservadas 
ex: let, if, else, entre outras... */

// Variáveis precisam ter nomes significativos.

// Não pode começar o nome de um variável com um número.
// Não podem conter espaços ou traços, ultilizamos camelCase (ex. nomeCliente).
// Case-sensitive, tem diferença de letra maiúsculas e minúsculas
// Não utilize var, utilize let caso a variavel for alterar o valor. 