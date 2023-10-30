// 705.484.450-52  070.987.720-03
/*

Calculo do CPF para gerar os dois ultimos números e validar.

calculando 705.484.450-52

7x  0x  5x  4x  8x  4x  4x  5x  0x -> Esse e o cpf.
10  9   8   7   6   5   4   3   2  -> Vai ser multiplicado começando por 10 e indo decrescente
70  0   40  28  48  20  16  15  0 = 237 -> Reultado da multiplicação (soma dos números depois da multiplicação)

11 - (237 % 11) = 5 (Primeiro Dígito) -> Regra(formula) para calcular e achar o primeiro número.
OBS: Se o número dessa conta for maior que 9, consideramos como 0.

EM BAIXO REPETIMOS TUDO E ACRESCENTAMOS O NÚMERO QUE DEU COMO RESULTADO NO PRIMEIRO DIGITO.
COMEÇAMOS A MULTIPLICAÇÃO AGORA PELO NÚMERO 11 E INDO DESCRESCENTE. 

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x -> CPF mais o acrescimo do ultimo digito encontrado com a conta de cima.
11  10  9   8   7   6   5   4   3   2 -> Dessa vez começamos a multiplicação pelo 11 e indo decrescente.
77  0   45  32  56  24  20  20  0   10 = 284 -> resultado da miltiplicação = resultado da soma de todos os numeros multiplicados.


11 - (284 % 11) = 2 (Segundo Dígito) -> Regra para pegar o segundo digito.
OBS: Se o número dessa conta for maior que 9, consideramos como 0.
*/

// -> /\D+/g -> Representa tudo que não e um número.
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //Tudo que nao for número sera substituido por nada.
console.log(cpfLimpo);// -> Ainda e uma string.

cpfArray = Array.from(cpfLimpo);// Jogando o cpf para array.
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));// -> Somou todos os números do cpf.
