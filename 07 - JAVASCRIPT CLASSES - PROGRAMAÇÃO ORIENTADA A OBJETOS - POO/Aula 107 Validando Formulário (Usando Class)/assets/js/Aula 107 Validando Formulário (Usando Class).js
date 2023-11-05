class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');//pegando a class do html.
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {//pegando evento de submit do html.
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();//Cancela o e se for cancelável, sem parar a propagação do mesmo.
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas(); 

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado...');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {//Se campo senha for diferente do campo repetir senha.
            valid = false;// valida fica sendo false e aparece o erro na tela.
            this.criaErro(senha, 'Senha e repetir senha precisa ser iguais.');
            this.criaErro(repetirSenha, 'Senha e repetir senha precisa ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;// valida fica sendo false e aparece o erro na tela.
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;
    }

    camposSaoValidos() {// verificação se os campos estao em branco.
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();// quando enviar o formulario, remove os erros.

            /*Para nao ficar repetindo os mesmo erros na tela.(sendo que embaixo 
            vai verificar e adicionar o erro quando o formulario for enviado).*/
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {// Pegando a class do html, fazendo o for para checar todos os campos.

            const label = campo.previousElementSibling.innerText;//Elemento irmão anterior.(buscando nome para colocar na msg cria erro)

            if(!campo.value) {//Se não for campo valido.(aparecera a msg de baixo)
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {//checando o campo cpf.
                if(!this.validaCPF(campo)) valid = false;//Se valor do cpf nao for true, valid false.
            }

            if(campo.classList.contains('usuario')) {//checando o campo Usuario.
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
        if(!usuario.match(/[a-zA-Z0-9]+$/g)) {//match(/[a-zA-Z0-9]+$/g) -> Expressão regular.(igual do CPF).
            this.criaErro(campo, 'Usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {// Validando o CPF que esta em outro arquivo no codigo.

        const cpf = new ValidaCPF(campo.value);// Puxando ValidaCPF do outro arquivo js

        if(!cpf.valida()){//Se metodo Valida do outro arquivo js nao for true.
            this.criaErro(campo, 'CPF inválido.');// no cammpo o metodo criaErro exibirá a msg.
            return false;
        } 
        return true;
    }

    criaErro(campo, msg) {//Criando erro e buscando o campo com erro.
        const div = document.createElement('div');//criando uma div.
        div.innerHTML = msg;// colocando msg na div.
        div.classList.add('error-text');// colocando uma class na div.
        campo.insertAdjacentElement('afterend', div);// selecionando a div para aparecer Após o elemento selecionado.

        //afterend -> Após o elemento.

        //insertAdjacentElement() -> método da Elementinterface insere um determinado nó de elemento em uma determinada posição relativa ao elemento sobre o qual é invocado.
    }
}

const valida = new ValidaFormulario();

