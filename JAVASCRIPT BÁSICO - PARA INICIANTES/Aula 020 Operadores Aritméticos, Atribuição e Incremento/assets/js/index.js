/* Aritméticos:
 + Adição / Concatenação
 ** Potenciação
 % Resto da Divição
*/

/* hierarquia dos operadores:
1- ()
2- **
3- * / %
4- + -
*/

const num1 = '5';
const num2 = 10;
console.log(num1 + num2); // Concatenação = junção de dois valores, sendo numbers ou number com string.

const num3 = 5;
const num4 = 10;
console.log(num4 ** num4); // POtenciação = num3 elevado ao num4

const num5 = 10;
const num6 = 10;
console.log(num5 % num6); // Resto da Divição = se a divição nao tiver resto, o resultado e 0.

console.log(num3 + num2 * num4); //Igual na matematica, vai resolver multiplicação primeiro, depois soma.
console.log((num3 + num2) * num4); //Igual na matematica, vai resolver o que esta em parentese primeiro, depois o de for. 
console.log(num2 * num4 / num6); // vai resolver da esquerda para direita.

let contador = 1;
contador++; // vai somar o valor dele mesmo, mais 1. mesma forma com -, so que diminuindo.
//++contador; pode ser tanto pós, tanto pré.
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

/* Inccremento = ++
Decremento = --
Pós = ele execulta e depois soma/subtrai.
Pré = ele soma/subtrai e despois execulta. */

const passo = 2;
let contador1 = 0;
//contador1 = contador1 + passo; // soma ele mesmo com passo=2.
contador += passo; // atalho da linha de cima.
console.log(contador1);

//NaN = Not a number
const num10 = 10;
const num11 = 'Luiz';
console.log(num10 * num11); // resultado NaN, pois e string com number faz calculo.

const num12 = 10;
const num13 = parseInt('5'); //parseInt = transforma sttring inteira em number inteiro.
console.log(num12 * num13);

// parseFloat = transforma number ou string decimais, em number inteiro.
//Number = transforma string em number, sendo inteiro ou decimais.

