/* Escreva uma função que recebe um número retorne o seguinte:
-> Número é divisivel por 3 = fizz
-> Número é divisivel por 5 = buzz
-> Número é divisivel por 3 e 5 = fizzBuzz
-> Número NÃO é divisivel por 3 e 5 = retorne o Próprio número
-> Checar se o número é realmete um número = String
-> Use a função com Número de 0 a 100. */

//************** MINHA SOLUÇÃO ****************

function resultado(num){
    let valor = num;
        if (typeof n !== 'number') return "Não e um number"; // CHECAR SE O NUMERO E NUMBER MESMO.
        if (valor % 3 === 0 && valor % 5 === 0) return "FizzBuzz";
        if (valor % 3 !== 0 && valor % 5 !== 0) return valor;
        if (valor % 5 === 0) return "Buzz";
        if (valor % 3 === 0) return "Fizz"; 
}
for (let x = 0; x <= 100; x++) {
console.log(x, resultado('x'));// Colocando string.
}

//************** SOLUÇÃO PROFESSOR **************

function fizzBuzz (n) {
    if (typeof n !== 'number') return 'NaN'
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzza' 
    return n;
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i)); // colocando no i para ir de 0 a 100.
}