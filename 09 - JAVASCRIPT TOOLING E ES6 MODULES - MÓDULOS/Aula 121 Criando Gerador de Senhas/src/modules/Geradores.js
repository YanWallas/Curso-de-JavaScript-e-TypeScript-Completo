const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const GeraMaiuscula = () => String.fromCharCode(rand(65, 91));// Atraves de tabela ASCII tem os números correspondente a cada letra, números, simbolos e etc.(fromCharCode -> para chamar esse metodo).

const GeraMinuscula = () => String.fromCharCode(rand(97, 123));
const GeraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.:~^[]{}!@#$%¨&*()_+=-?\/' ;//Jogando os simbolos a mão para const.
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];//Gerando o simbolo aleatorio do indice 0 ao tamanho do array

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(GeraMaiuscula());//se for true vai gerar, se nao, nao gera.
        minusculas && senhaArray.push(GeraMinuscula());
        numeros && senhaArray.push(GeraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);// return senhaArray sem espaço. do indice 0 até quantidade que pedi
}