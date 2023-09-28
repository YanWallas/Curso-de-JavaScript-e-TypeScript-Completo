/* Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem. */

//************** MINHA SOLUÇÃO ****************

const ePaisagem = (largura, altura) => largura > altura ? true : false;
console.log(ePaisagem(52,30));

//************** OUTRA SOLUÇÃO **************

 function ePaisagem1(largura, altura) {
    return largura > altura;// a condição ja traz true ou false, entao nao precisa colocar.
 }
 console.log(ePaisagem1(1920,1080));


const ePaisagem3 = (largura, altura) => largura > altura; // codigo resumido.
console.log(ePaisagem3(1080,900));