/*tipos de dados primitivos :
String, Number, undefined, null, Boolean e Symbol */

const nome = 'Yan'; //string
const nome1 = "Yan"; //string
const nome2 = `Yan`; //string
const num1 = 10; //number
const num2 = 10.52; //number 
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
let sobrenomeAluno = null; // nulo -> não aponta pra local nenhuma na memória
const aprovado = true; // boolean = true, false (Lógico)

console.log(typeof nome);
console.log(typeof nome, nome); // traz o tipo e depois o que esta dentro da const.

/*const a = [1, 2];
const b = a;

console.log(a, b)// valores por referencia. */

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3; // alterando valores da let
console.log(a, b); // 3, 2