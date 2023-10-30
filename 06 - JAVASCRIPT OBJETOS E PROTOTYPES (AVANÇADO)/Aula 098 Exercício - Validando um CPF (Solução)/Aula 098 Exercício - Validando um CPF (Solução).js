function ValidaCPF(cpfenviado) { // -> vai receber o cpf.
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfenviado.replace(/\D+/g, '');// Retirando tudo que nao for numero.
        }
    });
};
ValidaCPF.prototype.valida = function () {// Linkando o prototype na function
    if(typeof this.cpfLimpo === 'undefined') return false;// cpfLimpo nao existir(undefined), return false.
    if(this.cpfLimpo.length !== 11) return false;//tamanho do meu cpf for diferente de 11, return false.
    if(this.isSequencia()) return false;// se sequencia for true -> return false.

    const cpfParcial = this.cpfLimpo.slice(0, -2);//pegando o cpf, sem os 2 ultimos números.
    const digito1 = this.criaDigito(cpfParcial);//const vai receber o valor do metodo/function criaDigito.
    const digito2 = this.criaDigito(cpfParcial + digito1);//Ultilizar a function criaDigito para pegar o digito2.
    
    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {// function que vai la pra const digito1.
    const cpfArray = Array.from(cpfParcial);//tranformando a string num array.
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));// colocando val em Number(estava em string).
        regressivo--; //cada passada, vai diminuir pro outro número
        return ac;
    }, 0); // ac -> começar com 0.

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);//return (se digito for maior q 9, retorne 0, se nao return ele mesmo)
    //return os digitos para string.
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);// Repetindo o número do indice 0, pelo tamanho do cpf.
    return sequencia === this.cpfLimpo;// verificando se e sequencia. 
};


const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());