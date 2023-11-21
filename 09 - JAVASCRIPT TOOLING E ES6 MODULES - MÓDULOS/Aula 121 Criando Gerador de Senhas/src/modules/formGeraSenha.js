import geraSenha from './Geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {// pegar evento do click gerarSenha
        senhaGerada.innerHTML = gera();// gera na tela.
    })
};

function gera() {// function que me retorna se esta marcado ou nao.
    const senha = geraSenha(
        qtdCaracteres.value,// vai return true ou false.
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada Selecionado.';
}