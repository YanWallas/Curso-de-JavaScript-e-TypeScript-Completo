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
console.log(max(1,2));

//************** OUTRA SOLUÇÃO **************

function max1(a, b) {
    if (a > b) {
    return a;
    } // Não preciso de else, pois e apenas 2 condições, e quando ler return, o codigo sai da condição.
    return b;
}
console.log(max1(10,2));

//************** OUTRA SOLUÇÃO **************

function max2(c, d) { // codigo resumido mais ainda por ter apenas uma condição.
    if (c > d) return c;
    return d;
}
console.log(max2(10,20));

//************** OUTRA SOLUÇÃO **************

function max3(e, f) { // codigo reduzido em uma linha.
    return e > f ? e : y;
}
console.log(max3(30,20));

//************** OUTRA SOLUÇÃO **************

const max4 = (g, h) => {
    return g > h ? g : h;
};
console.log(max4(30,40));

//************** OUTRA SOLUÇÃO **************

const max5 = (g, h) => g > h ? g : h; // resumido em uma linha a functiton e o if (recomendavel a fazer)
console.log(max5(50,40));