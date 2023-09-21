const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'sectiton', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
    
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];// criando as variaveis.
    let tagCriada = document.createElement(tag);// criando o elemento para aparecer no usuario.
    tagCriada.innerText = texto;// colocando texto nas tag.
    div.appendChild(tagCriada);//.appendChild Adiciona elemento no final dele.
}

container.appendChild(div);// apresentando para o usuario. 

/* ****************************************
------> OUTRA FORMA DE FAZER <------

const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'sectiton', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
    
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];// criando as variaveis.
    let tagCriada = document.createElement(tag);// criando o elemento para aparecer no usuario.
    let textoCriada = document.createTextNode(texto); //buscando texto da array e jogando na variavel para usuario.

    tagCriada.appendChild(textoCriado);// colocando texto nas tag.
    div.appendChild(tagCriada);//.appendChild Adiciona elemento no final dele.
}

container.appendChild(div);// apresentando para o usuario.
***************************************************** */  