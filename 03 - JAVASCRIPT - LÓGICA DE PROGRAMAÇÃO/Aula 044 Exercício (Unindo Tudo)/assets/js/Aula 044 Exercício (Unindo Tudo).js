// Capturar de submit do formulário.
const form = document.querySelector('#formulario'); // selecionando o form do HTML

form.addEventListener('submit', function (e) {//Criando um evento quando clicar em enviar(submit), e puxando uma function junto. e=event(evento).
    e.preventDefault(); //tirando o envio do formulario para capturar valores. (pagina nao vai atualizar).
    //console.log("Evento Previnido"); --> Apenas foi para verificar se estava funcionando.
    //setResultado('Olá Mundo!')quando aperta button, essa função tbm chama a de baixo para aparecer  msg.

    const inputPeso = e.target.querySelector('#peso');// Buscando o input inteiro que for digitado no input
    const inputAltura = e.target.querySelector('#altura');


    const peso = Number(inputPeso.value);//buscando o valor em Number e jogando na const
    const altura = Number(inputAltura.value);//buscando o valor em Number e jogando na const
    
    if (!peso) { // Se não peso (negação do peso),se o peso nao for verdade, me retorna algo false.
        setResultado('Peso Inválido', false); // msg que vai aparecer, restornando false para configurar fundo red na function setResultado.
        return; // return para nao proseguir com o codigo. 
    }

    if (!altura) { //Mesmo de cima
        setResultado('Altura Inválida', false)
        return; 
    }

    const imc = getImc(peso, altura);// puxando a function getImc para dentro dessa const.
    const nivelImc = getNivelImc(imc);// puxando a function getNivelImc para dentro dessa const.
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);//puxando a functiton para trazer o resultado na tela, true para configurar a cor da mensagem.

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];//criando array para os nivel do imc

    if (imc >= 39.9) { // conferindo o if ao contrario, pq quando der true ele ja para e nao confere outros
        return nivel[5];// se der acima desse valor, vai retorna o array no indice 5
    }

    if (imc >=34.9) {// nao preciso usar else if, pq se a opção for verdadeira o return nao ler as demais, se for false, nem executa o codigo.
        return nivel[4];
    }

    if (imc >=29.9) {
        return nivel[3];
    }

    if (imc >=24.9) {
        return nivel[2];
    }

    if (imc >=18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
/* --> SE FOR APENA UMA LINHA DE CODIGO, PODE RESUMIR O ID TIRANDO DO BLOCO E COLOCANDO SEGUENCIA NA LINHA <--
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
 */
}

function getImc (peso, altura) { //criando uma função para calcular imc
    const imc = peso / altura ** 2; // const imc so recebe essa variavel porque esta dentro da functiton, depois que return pode criar uma variavel com mesmo nome fora da functiton. 
    return imc.toFixed(2);// rerturn o resultado para const imc com 2 casas decimais
}

function criaP() {//tarefa dessa função e criar um P
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {// Criando a function para mensagem que sera exibida na tela.
    const resultado = document.querySelector('#resultado')// puxando o id resultado do HTML.
    resultado.innerHTML = '';

    /*const p = document.createElement('p');//criando um pagrafo no JS,dentro da const p. para exibir o resultado.
    p.classList.add('paragrafo-resultado')// criando uma class para o Paragrafo pelo JS.
    p.innerHTML = 'Qualquer coisa';//jogando o resultado da msg no HTML para exibir, exibindo em paragrafo (P).
    ---> Essa criação da const p, foi feita com function criaP la em cima <-------*/

    const p = criaP();

    if (isValid) {p.classList.add('paragrafo-resultado');}// se mensagem do getResultado do outro if que vem la de cima for verdadeiro, puxa essa class
    else {p.classList.add('bad');}// se nao, vim false, puxa essa class

    p.innerHTML = msg; //colocando a msg dentro do p.
    resultado.appendChild(p);//inserindo o P na div resultado.

    
}