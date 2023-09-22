// For in -> lê os indices ou chaves do objeto
//                0        1      2
const frutas = ['pera', 'Maça', 'Uva'];

/*for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/

// ----------> OUTRA MANEIRA DE FAZER <----------
for (let i in frutas) {
    console.log(frutas[i]);// Apenas fruta (pega o indice), com a variavel dentro de [] (pega o que esta denetro do indice)
}

const pessoa = { 
    nome: 'yan',
    sorenome: 'wallas',
    idade: 30
};

for (let chave in pessoa) {
    console.log(pessoa[chave]);
    //console.log(chave, pessoa[chave]); -> o indice da chave, depois o que esta dentro da chave. ex. (nome yan)
}