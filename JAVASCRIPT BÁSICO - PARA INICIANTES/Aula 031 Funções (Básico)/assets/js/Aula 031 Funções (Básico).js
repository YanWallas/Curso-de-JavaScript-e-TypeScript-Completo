function saudacao(nome) {
    return `Bom dia ${nome}`;// retornando alguma coisa na função, depois de return, nada e executado dentro da function
}

//saudacao('Luiz');jogando algo dentro da função nome
const variavel = saudacao('Luiz');
console.log(variavel); //Retorna valor da função, tem funções que nao retorna valor.

function soma(x , y) { //Recebendo  valores
    const resultado = x + y;//executando a function
    return resultado;// retornando a function depois da execução
}

console.log(soma(2,2));// colocando valores do 'X' e 'Y' dentro da função
//console.log(resultado); nao posso trazer resultado de dentro da function, o que esta dentro, estra protegido.

const resultado = soma(2,2);// posso declara a msm const aqui fora, pq dentro da função a variavel e protegida.
console.log(resultado);// agora eu consigo trazer o resultado.

/*const resultado = soma();se eu nao declarar o valor da function, vai me retonar NaN.
console.log(resultado); -> se eu declarar com string me retona a string junta, se eu declarar apenas um, tbm me traz undefied ou NaN.
A nao ser que eu faço uma pre função caso nao seja declarado nada para a function.
ex: */
function soma1(x = 1, y = 1) {//se eu nao receber nada na function, ele tera uma previ declarar ja de segunda mão.
    const resultado1 = x + y;
    return resultado1;
}

const resultado1 = soma1(2);//Declarei o 'X', o 'Y' pega versao pre-definida de y = 1
console.log(resultado1);

const raiz = function (n) {// jogando function dentro de variavel (precisa de ; no final)
    return n ** 0.5;// vai retorna a raiz quadrada de n
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz1 = (n1) => {// subistituindo a palavra function por =>
    return n1 ** 0.5;
};
console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));

const raiz2 = n => n ** 0.5;//reduzindo a function em 1 linha(retira o () do 'n', e nao precisa da palava return).
console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));






