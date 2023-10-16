function Calculadora() {
    display = document.querySelector('.display');

    this.inicia = () => {
        this.cliquebotoes();
        
    };

    this.cliquebotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }


        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

};

const calculadora = new Calculadora();
calculadora.inicia();