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
    for (let i = 0; i <= 100; i++) {

        if (isNaN(valor)) {
        return "Não e um number"
        };

        if (valor % 3 == 0 && valor % 5 == 0) {
            return "FizzBuzz";
        };

        if (valor % 3 !== 0 && valor % 5 !== 0) {
            return valor;
        };

        if (valor % 5 == 0) {
            return "Buzz";
        };

        if (valor % 3 == 0) {
            return "Fizz";
        };
        
    };   
}

console.log(resultado(55));

//************** OUTRA SOLUÇÃO **************