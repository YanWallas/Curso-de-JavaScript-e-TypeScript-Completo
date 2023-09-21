console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')

//******** TRANSFORMANDO EM OPERADOR FOR ************* */

// For precisa de 3 coisa (uma variavel, uma condição,um incremento)
for (let i = 0; i <= 5; i++) {//Declarei let=i, enquanto i for menor ou iguial, i = ele + 1
    console.log(`Linha ${i}`);
}

for (i = 500; i>=400; i-=10){// for diminuindo e contando de 10 em 10.
    console.log(`Linha ${i}`);
}

for (let a = 0; a <= 10; a++) {//condição para ver se os numeros sao par ou impar
    const par = a % 2 === 0 ? 'par' : "impar";// se o resto de divição do 'a' for 0, vai ser par, se nao impar.
    console.log(a, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Melancia', 'Morango', 'Abacate', 'Laranja'];

for (let b = 0; b < frutas.length; b++) {
    console.log(`indice ${b}`, frutas[b])
}