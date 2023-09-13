/*ENTRE 0 - 11 - Bom Dia 
Entre 12 - 17 - Boa Tarde 
Entre 18 - 23 - Boa noite
*/

const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia');
} 

else if (hora > 11 && hora <= 17) {
    console.log('Boa Tarde');
}

else if (hora > 17 && hora <= 23) {
    console.log('Boa Noite');
}