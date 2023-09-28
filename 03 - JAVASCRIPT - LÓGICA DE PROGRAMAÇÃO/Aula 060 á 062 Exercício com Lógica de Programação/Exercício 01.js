// Escreva uma função que recebe 2 numeros e retorne o maior deles

//************** MINHA SOLUÇÃO ****************
function numeroMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    if (num1 < num2) {
        return num2;
    }
    else {
        console.log(`Os Números ${num1} e ${num2} sao iguais`);
    }
}
console.log(numeroMaior(2,5));

//************** SOLUÇÃO DO PROFESSOR **************

function max(x, y) {
    if (x > y) {
    return;
    }
    else {
        return y;
    }
}
console.log(max(1,2))

//************** OUTRA SOLUÇÃO **************

function max1(a, b) {
    if (a > b) {
    return a;
    } // Não preciso de else, pois e apenas 2 condições, e quando ler return, o codigo sai da condição.
    return b;
}
console.log(max1(10,2))