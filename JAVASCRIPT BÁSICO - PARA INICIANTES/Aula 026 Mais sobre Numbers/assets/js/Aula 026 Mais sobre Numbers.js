let num1 = 1; // number
let num2 = 2.5;// number
console.log(num1 + num2);

console.log(num1.toString() + num2);//toString = tranformando number em string.(eu nao deixa de ser number, apenas nesse comando ele vira string.)
//num1 = num1.toString(); -> nesse caso eu estaria alterando na variavel de number para string.

console.log(typeof num1);

let num3 = 1500;
console.log(num3.toString(2)); //trocando numbers por string, e trazendo string em numeros binarios. 

let num4 = 10.5789551255747616;
console.log(num4.toFixed(2));//Arredondar valor quebrado, colocando 2 cassas decimais depois da vingula. 

let num5 = 10;
console.log(Number.isInteger(num5));// verificar se dentro da variavel tem number inteiro=true ou quebrado=false.

let temp = num5 * 'Ola';// conta invalida = Number com String
console.log(temp);
console.log(Number.isNaN(temp));//sabendo se a conta foi invalida, true=foi / false=nao foi 

// Padrao do JavaScript = IEEE 754-2008

let num6 = 0.7;
let num7 = 0.1;

num6 += num7;// 0.8
num6 += num7;// 0.9
num6 += num7;// 1.0 = nao teoria era para ser isso 
console.log(num6); // resultado e 0.99999999999999999
console.log(Number.isInteger(num6)); // Nao e numero inteiro a linha de cima

num6 = parseFloat(num6.toFixed(2)); //resolvendo o problema, para a conta dar 1.0
//num6 = Number(num6.toFixed(2)); -> Com Number tambem resolveria o problema
console.log(num6); //Resultado agora é 1.0
console.log(Number.isInteger(num6));// Agora é numero Inteiro

// Outra forma de resolver o problema de cima.

let num8 = 0.7;
let num9 = 0.1;

num8 = ((num8 * 100) + (num9 * 100)) / 100; // total da 80 depois divide por 100 = 0.8
num8 = ((num8 * 100) + (num9 * 100)) / 100; // 0.9
num8 = ((num8 * 100) + (num9 * 100)) / 100; // 1.0

console.log(num8);
console.log(Number.isInteger(num8));
