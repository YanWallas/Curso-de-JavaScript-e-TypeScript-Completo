/* 
********************** OPERADORES DE COMPARAÇÃO ***************************
> Maior que.
>= Maior que ou igual a.
< Menor que.
<= Menor que ou igual a.
= atribuição (valor recebe valor).
== igualdade (confere valor) ****** GERALMENTE NÃO USAMOS.
=== igualdade estrita (confere valor e tipo).
!= diferente (confere valor) ****** GERALMENTE NÃO USAMOS.
!== diferente estrito (confere valor e tipo).
***************************************************************************
*/
const comp = 10 > 5; // vai trazer true ou false para a variavel comp.(10 e maior que 5 - True)
console.log(comp);

console.log(10 >= 5); // 10 e maior ou igual a 5 - True
console.log(10 >= 10);// 10 e maior ou igual a 10 - True
console.log(10 >= 11); // 10 e maior ou igual a 1 - false

console.log(10 < 11);// 10 e menor que 11 - True
console.log(12 < 11);// 12 e menor que 11 - False

console.log(10 <= 11);// 10 e menor ou igual a 11 - True
console.log(12 <= 11); // 12 e menor ou igual a 11 - False

const num1 = 10;
const num2 = 11;
const resl = num1 < num2; // 10 e menor que 11 - True
console.log(resl);

const num3 = 10; // Number
const num4 = '10'; // String 
//const resl1 = num3 == num4; // vai retorna true, porque sao iguais, mesmo o tipo ser diferente.
const resl1 = num3 === num4; // vai retorna false, sao iguais mas de tipos diferentes.
console.log(resl1);
// MESMA COISA ACONTECE COM O DIFERENTE E O DIFERENTE ESTRITO...
