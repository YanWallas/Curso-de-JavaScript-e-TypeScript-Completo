class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' Já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositoEletronico('Celular');
console.log(d1);// Dispositivo Desligado
console.log('****************************')

d1.ligar();// Dispositivo Ligado
console.log(d1);
console.log('****************************')

d1.ligar();// Aparece a mensagem que ja está ligado.
console.log(d1);
console.log('****************************')

d1.desligar();// desligando ele.
console.log(d1);
console.log('****************************')
console.log('');
console.log('****************************')

/*********************************************************************/
// Criando a class e herdando os metodos da class de cima.
class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);//super -> Chamar o constructor da class pai, para dentro dessa class.

        this.cor = cor; // Adicionando mais parametros.
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('iPhone', 'Preto', "15 Pro Max");
console.log(s1);
console.log('****************************')

/*********************************************************************/

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {// Sobreescrever o motodo.
        console.log('Voce alterou o metodo ligar.')
    }
    falaOi() {//Posso criar novos metodos apenas para essa class.
        console.log('OI');
    }
}

const t1 = new Tablet('iPad', true);
t1.ligar();//Se nao encontrar o metodo na class, ela vai na class pai(herança).
console.log(t1);
t1.falaOi();

//Class herda coisas de seus pais, mais seus pais nao herda nada de você.