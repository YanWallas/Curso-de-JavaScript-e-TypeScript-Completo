const numero = 10;

//(if) = Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
//(else) = Se não faça {código}
//(else if) = para checar mais de uma condição {código}

if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número é maior ou igual a zero.');
}
else {console.log('O número NÂO está 0 e 5.')}

const numero1 = 11;

if (numero1 >= 0 && numero1 <= 5) {
    console.log('Sim, o número é maior ou igual a zero.');
}

else if (numero1 >= 6 && numero1 <= 8) {
    console.log('O número está entre 6 e 8.');
}

else if (numero1 >= 9 && numero1 <= 11) { //Verdadeiro
    console.log('O número está entre 9 e 11.');
}

else {console.log('O número não está entre 0 e 11.')}