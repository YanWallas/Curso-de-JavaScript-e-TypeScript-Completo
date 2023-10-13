function criaCalculadora() {
    return {
        display: document.querySelector('.display'),//Selecionando a class display

         inicia() {// criando metodo para iniciar a calculadora.
            this.cliqueBotoes(); // chamando a function.
            this.pressionaEnter();// realizar conta com a tecla enter.
            this.pressionaBackSpace();// Apagar um item do display com a tecla backspace.
            this.pressionaDelete();// Apagar display com a tecla delete.
            this.display.focus();
        },

        pressionaDelete() {
            this.display.addEventListener('keydown', e => {
                if(e.keyCode === 46) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressionaBackSpace() {// criando real
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.apagaUm();
                }
            });
        },


        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta(); 
                }
            });
        },

        clearDisplay() {//function responsavel por apagar display com btn-clear
            this.display.value = ' '; // o que estiver dentro do display sera apagado.

        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);// o display recebe o que vai no display, nenos um. 
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);// eval -> ler o JavaScript automatico.

                if (!conta) {
                    alert("Conta invalida");
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert("Conta invalida");
                return;
            }
        },

        cliqueBotoes() {// this -> CALCULADORA
            document.addEventListener('click', e => {// pegando o click da tela com ARROW FUNCTION
                const el = e.target;// jogando na variavel el
                this.display.focus();

                if(el.classList.contains('btn-num')) {// se o click tiver a class btn-num.
                    this.btnParaDisplay(el.innerText);// vai jogar o text na function.
                }

                if(el.classList.contains('btn-clear')) {//Se o botao de apagar for clicado.
                    this.clearDisplay(); //chamo a function responsavel por apagar.
                }

                if(el.classList.contains('btn-del')) {//se o botao de apagar apenas uma coisa.
                    this.apagaUm();// chamo a function responsavel.
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }



            }); //.bind(this));//this dessa function click e o documento, .bind(this) no final, to jogando o this para meu this que e a calculadora.(como to utilizando a ARROW FUNCTION, o this nao muda)
        },

        btnParaDisplay(valor) {
            this.display.value += valor;// pegando o texto do butão apertado e jogando no display.
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();// iniciando o metodo da calculadora.