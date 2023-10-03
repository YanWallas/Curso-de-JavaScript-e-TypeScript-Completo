const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (e) { // pegando o evendo do click
    relogio.innerHTML = 'Cliquei no iniciar'
});

pausar.addEventListener('click', function (e) {
    alert('Cliquei no pausar')
});

zerar.addEventListener('click', function (e) {
    alert('Cliquei no zerar')
});

function meuTimer() {
    let data = new Data('00:00:00');

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    }); 
}