function teste() {
    console.log("Este é meu teste com a function...");

}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();// Posso chamar a function aqui.
    }
    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático -> Não tem acesso as dados da instância.
    static trocaPilha() {
        console.log("Ok, vou trocar.");
    }

    // Método estático -> Não tem acesso as dados da instância.
    static soma(x, y) {
        return x + y;
    }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();// volume vai para 2.
controle1.aumentarVolume();// volume vai para 4.
controle1.aumentarVolume();// volume vai para 6.
console.log(controle1);

ControleRemoto.trocaPilha();//Referente a class. chama por ela.
console.log(ControleRemoto.soma(4, 8));


/* Método estático (static) -> define um método estático para a classe. 
Métodos estáticos não são chamados na instâncias da classe. 
Em vez disso, eles são chamados na própria classe. Geralmente, 
são funções utilitárias, como funções para criar ou clonar objetos.*/

