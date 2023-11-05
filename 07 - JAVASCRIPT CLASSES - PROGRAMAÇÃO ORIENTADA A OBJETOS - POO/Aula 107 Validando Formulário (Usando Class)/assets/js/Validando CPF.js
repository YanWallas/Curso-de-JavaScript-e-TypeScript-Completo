// 705.484.450-52  070.987.720-03

class ValidaCPF{
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {// Limpando o CPF
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, "")//Tirando simbolos e letras(apenas number)
        });
    }

    eSequencia() {
        //CPF Limpo, pega a primeiro caracter, e repede no tamanho do cpf, se for igual a cpf limpo, e uma sequencia de número.
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        //const digito1 = this.geraDigito(cpfParcial); -> Não irei utilizar this, pois é Método estático.
        const digito1 = ValidaCPF.geraDigito(cpfParcial);// Usarei o nome da class.
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

     static geraDigito(cpfParcial){ //Método estático -> Não tem acesso as dados da instância.
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNum of cpfParcial) {
            total += reverso * Number(stringNum);
            reverso --;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false; // se CPF esta limpo.
        if(typeof this.cpfLimpo !== "string") return false;// se CPF for diferente de string.
        if(this.cpfLimpo.length !== 11) return false;// se tamanho do cpf diferente de 11.
        if(this.eSequencia()) return false;//Se eSequencia for true, return false.
        this.geraNovoCpf();
        

        return this.novoCPF === this.cpfLimpo;
    }
}

/*
let validacpf = new ValidaCPF('070.987.720-03');
validacpf = new ValidaCPF('000.000.000-00')

if (validacpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}*/