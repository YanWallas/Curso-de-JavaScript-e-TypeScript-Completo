// Classe = Função Construtora

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo; 
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;// saldo mais valor depositado.
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/C ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(35);
console.log('********************************')

/*********************************************************************/

function ContaC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaC.prototype = Object.create(Conta.prototype);// Linkando o prototype dessa função, na de cima.
ContaC.prototype.constructor = ContaC; // mudando o nome o constructor da função para essa.

ContaC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {// se o valor a sacar for maior que o saldo mais limite.
        console.log(`Saldo insuficiente: R$ ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
const contaCorrente = new ContaC(121, 144, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);
console.log('********************************')

/*********************************************************************/

function ContaP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
    
}
ContaP.prototype = Object.create(Conta.prototype);// Linkando o prototype dessa função, na de cima.
ContaP.prototype.constructor = ContaP; // mudando o nome o constructor da função para essa.

const contaPoupanca = new ContaP(654, 197, 0);
contaPoupanca.depositar(10);
contaPoupanca.sacar(110);
contaPoupanca.sacar(1);