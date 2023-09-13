/*ENTRE 0 - 11 - Bom Dia 
Entre 12 - 17 - Boa Tarde 
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho.
//Sempre que utilizo a palavra else, preciso de um if antes.
// Eu posso ter varios else if na checagem.
// So pode ter um else no final da checagem.
// Podemos usar condições sem else if, utilizando apenas if e else. 

const hora = 14;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
} 

else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
}

else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}

else {console.log('Olá')}

const tenhoGrana = true;
if (tenhoGrana) {console.log('Vou Sair')}
else {console.log('Nao vou Sair')}
