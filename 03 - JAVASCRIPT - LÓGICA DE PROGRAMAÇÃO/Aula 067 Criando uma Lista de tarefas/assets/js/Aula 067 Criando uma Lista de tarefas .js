const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

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
function criaTarefa(text) {
    const li = criaLi();// function li jogada na variavel.
    li.innerText = text; //o que capturou no click, sera jogado dentro da lista de tarefas (li)
    tarefas.appendChild(li);// li será jogada dentro da class tarefas.
    limpainput();// chamando a function depois de criar e enviar a tarefa para limpar o input.
    criaBotaoApagar(li);// chamando a function para criar o button.
    salvarTarefas();
}

// 4º -> Evento para pegar o click de alguma tecla.
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { //keyCode e o numero da tecla (tecla enter numero 13).
        if (!inputTarefa.value) return; // MESMO EVENTO DO CLICK.
        criaTarefa(inputTarefa.value); // MESMO EVENTO DO CLICK.
    };
});  

// console.log(e); //Quando a tecla e clicada, aparece qual tecla e o numero da tecla, usar o numero como evento da tecla.
// keypress -> tecla pressionada.(clickf)
// keydow -> tecla se mantem precionada.
// keyup -> tecla pressionada e solta(gera comando quando solta)
// keyCode -> depois do console. na expecificação aparecera o numero correspondente a tecla.

// 5º -> function para limpar o input depois de enviar a tarefa.
function limpainput() {
    inputTarefa.value = ''; // inputTarefa.value receve nada.
    inputTarefa.focus(); // cursor fica fixado onde digita.
}

// 6º -> function para criar o botão apagar depois que criar a tarefa.
function criaBotaoApagar(li) {
    li.innerText += ' '; // Dando espaço entre a tarefa e o botão dentro da li.
    const botaoApagar = document.createElement('button');// criando o botao.
    botaoApagar.innerText = 'Apagar'; // colocando nome no button criado.
    li.appendChild(botaoApagar);
    // botaoApagar.classList.add('apagar'); -> colocando class no button.
    botaoApagar.setAttribute('class', 'apagar'); // Colocando atibuto class no button.
    botaoApagar.setAttribute('title' , 'Apagar esta tarefa');// quando para mouse em cima, aparece um text.
};

// 7º -> buscando o click da tela, se vai ser no button apagar.
document.addEventListener('click', function(e){
    const el = e.target;// e.Ttrget -> qual elemento esta sendo clicado no front-end.
    
    if (el.classList.contains('apagar')) {// se o click no button tiver a class apagar.
        el.parentElement.remove(); // Do meu Element o pai dele sera remove.
        salvarTarefas();// salvando aqui, para quando apagar a tarefa, apagar no localStorage tbm.
    }
})

// 8º -> function para salva as tarefas.
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');// Buscando todos os li e jogando na const.
    const listasTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;// let recebe li texto.
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();// let recebe ela subistituindo a string apagar por nada(vazio).trim() -> remove espaço dps do array.
        listasTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listasTarefas);// jogando o array na const em formato de string.
    localStorage.setItem('tarefas', tarefasJSON);// salvando a const na memoria do navegador utilizando a para tarefas.(so pode salvar em string).
}

// 9º -> function para buscar as tarefas salvas.
function AdicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');// trazendo tarefa salva para const.
    const listasTarefas = JSON.parse(tarefas);// convertendo tarefas para array.

    for (let tarefa of listasTarefas) {
        criaTarefa(tarefa);
    }
}

AdicionaTarefasSalvas();