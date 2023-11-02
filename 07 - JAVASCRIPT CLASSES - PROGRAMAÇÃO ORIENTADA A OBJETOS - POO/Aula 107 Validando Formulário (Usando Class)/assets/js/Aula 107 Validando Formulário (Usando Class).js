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
        const camposValidos = this.camposValidos();
        console.log('Formulário não enviado...');
    }

    camposValidos() {// verificação se os campos estao em branco.
        let valid = true;

        for(let campo of this.formulario.querySelectorAll('.validar')) {// Pegando a class do html.
            if(!campo.value) {//Se não for campo valido.
                this.criaErro(campo, 'Campo tal não pode estar em branco');
                valid = false;
            }
        }
    }

    criaErro(campo, msg) {//Criando erro e buscando o campo com erro.
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        
        //insertAdjacentElement() -> método da Elementinterface insere um determinado nó de elemento em uma determinada posição relativa ao elemento sobre o qual é invocado.
    }
}

const valida = new ValidaFormulario();

