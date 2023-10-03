/******************* UMA FORMA DE FAZER ******************

function criHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); //pegando a data de 1970. o inicio da contagem.
    return data.toLocaleTimeString('pt-BR', { //pegando a data local.
        hour12: false,
        timeZone: 'UTC' //para zerar a data local que e -3 horas.
    });
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer; // pegando a function iniciaRelogio()

function iniciarRelogio() {
    timer = setInterval(function() {
        segundos++; // fazer a contagem dos segundos 
        relogio.innerHTML =  criHoraDosSegundos(segundos);//atualizar a pagina, os segundos dentro da function(se nao faz so a contagem dos segundos)
    }, 1000);
}

iniciar.addEventListener('click', function (e) { // pegando o evendo do click
    relogio.classList.remove('pausado'); // remover a class pausado
    clearInterval(timer);//nao criar mais de um timer quando aperta iniciar.
    iniciarRelogio();
});

pausar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.classList.add('pausado'); //Adicionando a class pausado.
});

zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0; // variavel voltou a ser zero.(se nao continua a contagem)
    relogio.classList.remove('pausado');
});
*/

/*** OUTRA FORMA DE FAZER QUANDO EXISTI MUITOS CLICK NA PAGINA ****/

function relogio() {//Colocando tudo dentro da function(tirar do escopo global do codigo caso tenha mais codificação.)
    function criHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); //pegando a data de 1970. o inicio da contagem.
        return data.toLocaleTimeString('pt-BR', { //pegando a data local.
            hour12: false,
            timeZone: 'UTC' //para zerar a data local que e -3 horas.
        });
    }
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer; // pegando a function iniciaRelogio()

    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++; // fazer a contagem dos segundos 
            relogio.innerHTML =  criHoraDosSegundos(segundos);//atualizar a pagina, os segundos dentro da function(se nao faz so a contagem dos segundos)
        }, 1000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;// e.Ttrget -> qual elemento esta sendo clicado.
        
        if(el.classList.contains('zerar')) { // se o elemento tiver essa class.
            clearInterval(timer);//nao criar mais de um timer quando aperta iniciar.
            relogio.innerHTML = '00:00:00';
            segundos = 0; // variavel voltou a ser zero.(se nao continua a contagem)
            relogio.classList.remove('pausado');
        }

        if(el.classList.contains('iniciar')) { // se o elemento tiver essa class.
            relogio.classList.remove('pausado'); // remover a class pausado
            clearInterval(timer);//nao criar mais de um timer quando aperta iniciar.
            iniciarRelogio();
        }

        if(el.classList.contains('pausar')) {
            clearInterval(timer); //nao criar mais de um timer quando aperta iniciar.
            relogio.classList.add('pausado'); //Adicionando a class pausado.
        }
    });
}

relogio();