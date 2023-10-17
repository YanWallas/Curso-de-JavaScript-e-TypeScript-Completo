//Negativo       -5       -4       -3         -2        -1
//Positivo        0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(0, 1, 1);
//nomes.splice(indice atual, delete, adicinar, adic1, adic2, adicetc...)

//SE EU FOSSE FAZER A FUNÇÃO POP DE REMOVER O ULTIMO INDICE.
const removidos = nomes.splice(3, 2);//No indice 3 vou remover 2 array(Jjogando os removidos dentro da const)

console.log(nomes, removidos);//A variavel dos removidos, retorno como array. 

/**********************************************/

//SE EU FOSSE FAZER A FUNÇÃO SHIFT DE REMOVER O PRIMEIRO INDICE.
const removidos2 = nomes.splice(0, 1);
console.log(removidos2);

/**********************************************/

//SE EU FOSSE FAZER A FUNÇÃO PUSH DE ADICIONAR NO FINAL DO ELEMENTO.
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);

/**********************************************/

//SE EU FOSSE FAZER A FUNÇÃO UNSHIFT DE ADICIONAR NO INICIO DO ELEMENTO.
nomes.splice(0, 0, 'Otavio', 'Miranda');
console.log(nomes);

/**********************************************/

//nomes.splice(-2, Number.MAX_VALUE); -> puxando indice negativo, Number.MAX_VALUE -> até o final do array.

//nomes.splice(3, 1, 'Luiz');-> removendo o Gabriel do indice 3 e colocando Luiz no lugar.
