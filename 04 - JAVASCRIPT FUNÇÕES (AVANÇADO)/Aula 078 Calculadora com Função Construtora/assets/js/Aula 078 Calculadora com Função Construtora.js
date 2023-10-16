function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliquebotoes();
        this.pressioneEnter();
        this.pressioneBackSpace();
        this.pressioneDelete();
        this.display.focus();
        
    };

    this.pressioneDelete = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 46) {
                e.preventDefault();
                this.clear();
            }
        });
    };

    this.pressioneBackSpace = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                this.del();
            }
        });
    };

    this.pressioneEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                e.preventDefault();
                this.realizaConta();
            }
        });
    };

    this.clear = () => this.display.value = ' ';
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
      };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.cliquebotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            this.display.focus();

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el);

            if(el.classList.contains('btn-clear')) this.clear();

            if(el.classList.contains('btn-del')) this.del();

            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

};

const calculadora = new Calculadora();
calculadora.inicia();