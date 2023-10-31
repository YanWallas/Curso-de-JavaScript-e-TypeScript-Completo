const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

/* -> TIRA MEU OBJETO DA ORDEM, POR CONTA DAS CHAVES QUE CRIEI.
const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}*/

//CONSETANDO DEIXANDO NA ORDEM, TENDO AS CHAVES QUE PRECISO.
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });//setando valor no Map.
}

console.log(novasPessoas);
console.log('*********************************')

console.log(novasPessoas.get(2));//Obtendo o valor.
console.log('*********************************')

/*********************************************************************/

for(const pessoa of novasPessoas) {//Colocando num array.
    console.log(pessoa);
}
console.log('*********************************')

/*********************************************************************/

for(const [identifier, { id, nome }] of novasPessoas) {
    console.log(identifier, id, nome);
}
console.log('*********************************')

/*********************************************************************/

for(const pessoa of novasPessoas.keys()) {//Colocando apenas as chaves.
    console.log(pessoa);
}
console.log('*********************************')

/*********************************************************************/

for(const pessoa of novasPessoas.values()) {//Colocando apenas os valores.
    console.log(pessoa);
}
console.log('*********************************')

/*********************************************************************/

novasPessoas.delete(2);// deletando a chave 2
console.log(novasPessoas);