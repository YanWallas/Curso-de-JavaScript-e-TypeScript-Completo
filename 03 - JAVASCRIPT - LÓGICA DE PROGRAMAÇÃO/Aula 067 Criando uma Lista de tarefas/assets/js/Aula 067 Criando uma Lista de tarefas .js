const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Evento para pegar o click de alguma tecla.
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //keyCode e o numero da tecla (tecla enter numero 13).
        console.log('Enter')
    };
});  
//console.log(e); //Quando a tecla e clicada, aparece qual tecla e o numero da tecla, usar o numero como evento da tecla.
 // keypress -> tecla pressionada.(clickf)
// keydow -> tecla se mantem precionada.
//keyup -> tecla pressionada e solta(gera comando quando solta)

// 1º -> capturar o click do button.
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // nao acontece nada se tiver vazio.
    criaTarefa(inputTarefa.value);// jogando o texto quando tiver click no button, dentro da function criaTarefa.
})

// 2º -> function que cria uma li para lista de tarefas.
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// 3º -> function que vai cria e mostrar a lista de tarefas dentro da li criada..
function criaTarefa(textInput) {
    const li = criaLi();// function li jogada na variavel.
    li.innerText = textInput; //o que capturou no click, sera jogado dentro da lista de tarefas (li)
    tarefas.appendChild(li);// li será mostrada na tela do usuario.
}


/*
function limpainput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}*/

