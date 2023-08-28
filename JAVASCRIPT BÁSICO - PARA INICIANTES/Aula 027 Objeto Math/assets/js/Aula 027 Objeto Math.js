let num1 = 9.545778;
let num2 = Math.floor(num1);// Arredondando num1 para baixo.
console.log(num2);

let num3 = Math.ceil(num1); //Arredondando o num1 para cima.
console.log(num3);

let num4 = Math.round(num1); //Arredondando o num1 para o Numero mais proximo do inteiro. 
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));// buscando maior numero dessa sequencia. 
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));// buscando menor numero dessa sequencia. 
// podendo  utilizar variavei no lugar dos numeros. 

console.log(Math.random());//gerar numero aleatorio entre 0 e 1.

const aleatorio = Math.random() * (10 - 5) + 5; //vai geral um numero aleatorio fracionado entre 10 e 5.
console.log(aleatorio);

const aleatorio1 = Math.round(Math.random() * (10 - 5) + 5);//vai geral um numero aleatorio inteiro entre 10 e 5.
console.log(aleatorio1);

console.log(Math.PI);// buscando valor de PI
console.log(Math.pow(2,10));// 2 elevado a 10.
console.log(2 ** 10);// mesmo da linha de cima, porem mas facil

let num5 = 9;
console.log(num5 ** (1/2)); // buscando a raiz quadrada do num5
console.log(num5 ** 0.5);// outra forma e buscar raiz quadrada

console.log(100 / 0);// pode dividir um numero por 0 (outras linguagem gera um erro) -> no JavaScript retorna Infinity e verdadeiro=true.

