const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'sectiton', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
    
];

const container = document.querySelector('.container');//Selecionando o container.
const div = document.createElement('div');//Criando uma tag div e jogando na variavel chamada div.

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];//Criando as variaveis e jogando dados elementos dentro da variavel.
    let tagCriada = document.createElement(tag);// criando uma tag para com nome tag e jogando na variavel.
    tagCriada.innerText = texto;// colocando texto na varavel.
    div.appendChild(tagCriada);//.appendChild Adiciona um elemento filho(variavel), dentro da div.
}

container.appendChild(div);// adicionando div entro de container como filho. 

/* ****************************************
------> OUTRA FORMA DE FAZER <------

const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'sectiton', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
    
];

const container = document.querySelector('.container'); //Selecionando o container.
const div = document.createElement('div'); //Criando uma tag div e jogando na variavel chamada div.

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];//Criando as variaveis e jogando dados elementos dentro da variavel.
    let tagCriada = document.createElement(tag);//Criando uma tag para com nome tag e jogando na variavel..
    let textoCriada = document.createTextNode(texto); //buscando texto do array e criando um nódetexto(texto para pagina) e jogando dentro da variavel.

    tagCriada.appendChild(textoCriado);//Adicionando variavel textoCriado como filho da variavel tagCriada.
    div.appendChild(tagCriada);//.appendChild Adiciona elemento tagCriada como filha da div.
}

container.appendChild(div);//Adicionando div como filho de container.
***************************************************** */  