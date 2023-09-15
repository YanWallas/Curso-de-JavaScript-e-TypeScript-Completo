/* *************** Link para pesquisa  ***************
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

//new Date(0): 01/01/1970 timestamp unix ou época unix (marco zero)
// puxando a hora 0, da nessa data em cima, data antes dela e valor negativo.

const data = new Date();// new Date (Nova data, leitura por milésimos de segundos), jogando data na variavel.
console.log(data.toString());// exibir data e hora (formato gringa)

const tresHoras = 60 * 60 * 3 * 1000;//60seg x 60seg = 1hr x 3 = 3hrs (em Javascript sao em milissegundos, entao x 100 no final), consertando meu fuso horario, porque e -3hrs.
const data1 = new Date(0 + tresHoras);// sai a data marco zero -3hrs por causa do meu fuso horario de brasilia(minha região). consertando isso a variavel.
console.log(data1.toString());

const umDia = 60 * 60 * 24 * 1000;//60seg x 60seg = 1hr x 24 = 24hrs ou seja 1 Dia (em Javascript sao em milissegundos, entao x 100 no final).

// nova data lendo por Number(Ano,mês,Dia,Hora,Min,seg,Milesseg);
const BuscandoData = new Date(2019, 3, 20, 15, 14, 27, 500);// mês 03 = abril, porque conta o zero. 
console.log(BuscandoData.toString());

//nova data lendo string entre aspas('Ano-mês-Dia Hora:Min:seg.Milesseg');
const BuscandoData1 = new Date('2019-04-20 20:20:59.100');// mês de abril fica sendo 04, lendo por string conta o zero. 
console.log(BuscandoData1.toString());

console.log('Dia', BuscandoData1.getDate());//Buscando o Dia
console.log('Mês', BuscandoData1.getMonth() + 1);//Buscando o Mês + 1(começa do 0, conta o zero como Jan, 11 - Dez)
console.log('Ano', BuscandoData1.getFullYear());//Buscando o Ano
console.log('Hora', BuscandoData1.getHours());//Buscando a Hora
console.log('Min', BuscandoData1.getMinutes());//Buscando o Minutos
console.log('Seg', BuscandoData1.getSeconds());//Buscando o Segundos
console.log('Milessegundos', BuscandoData1.getMilliseconds());//Buscando o Milessegundos
console.log('Dia da Semana', BuscandoData1.getDay());//Buscando o Dia da Semana (começa do 0, conta o zero como Domingo, 6 - Sábado)

console.log(Date.now());// Buscando os Milessegundos do marco zero ate a a data e hora atual.

function zeroAEsqueda (num) {//criando a function para colocar o zero na esquerda se nao tiver.
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {//criando function para trazer dado da data que preciso. 
    //console.log(data);
    const dia = zeroAEsqueda(data.getDate());
    const mes = zeroAEsqueda(data.getMonth() + 1);// Corrigindo o Mês.
    const ano = zeroAEsqueda(data.getFullYear());
    const hora = zeroAEsqueda(data.getHours());
    const min = zeroAEsqueda(data.getMinutes());
    const seg = zeroAEsqueda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}.`
}

const datas = new Date();//const para trazer data.
const dataBrasil = formataData(datas);//jogando data na functione e a function na const.
console.log(dataBrasil);// exibindo a const.

