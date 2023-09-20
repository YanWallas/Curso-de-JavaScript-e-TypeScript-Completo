/* ---------> DESAFIO FEITO A NO COMEÇO DO CURSO <---------
let a = 'A'; // B
let b = 'B';// C
let c = 'C';// A

[a, b, c] = [1, 2, 3]; // desestruturação do array
// let = vvalor atriuido 

const letras = ['B', 'C' ,'A'];
[a, b, c] = letras;

console.log(a, b, c);
<---------------------------------------------------------->*/

/* ******** OPERADOR REST E SPREAD ********

-> ... = RESET -> para pegar o resto de um array.
-> ... = SPREAD -> para distriui ou espalhar.
OBS: Mesmo sinal do operador, faz coisas diferentes dependendo do contexto.

********************************************/

//indice         0  1  2  3  4  5  6  7  8 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2, ...resto] = numeros;// pegando os dois primeiros indices e jogando na array num.
// os tres pontos e o nome da variavel, guarda o resto do array dentro da variavel escolhida(...nomeDaVariavel).

console.log(num1, num2);
console.log(resto);

const [um, , tres, , cinco] = numeros;// espeço vazio pula o dado do array e pega o proximo.
console.log(um, tres, cinco);

//Indice Array       0          1          2
//Array de dentro-0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numero[1][2]);//bucando no Array 1, o Array 2 que esta dentro do array 1.

const [,[,,seis]] = numero;// pegando o numero 6, que esta no indice 2 dentro da array 1, da array global(array de fora que fecha todos).
console.log(seis);

const [lista, lista2, lista3] = numero; 