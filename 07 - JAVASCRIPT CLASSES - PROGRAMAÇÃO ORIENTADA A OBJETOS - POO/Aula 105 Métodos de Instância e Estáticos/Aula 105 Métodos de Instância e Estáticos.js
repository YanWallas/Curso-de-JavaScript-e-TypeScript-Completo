class Controleremoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    trocaPilha() {
        
    }
}
const controle1 = new Controleremoto('LG');
controle1.aumentarVolume();// volume vai para 2.
controle1.aumentarVolume();// volume vai para 4.
controle1.aumentarVolume();// volume vai para 6.
console.log(controle1);

