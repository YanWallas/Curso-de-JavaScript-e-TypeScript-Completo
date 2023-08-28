const nome = 'Yan';
const sobrenome = 'Wallas';
const idade = 25;
const peso = 95;
const alturaEmM = 1.71;
const anoAtual = 2023;
let imc; // peso / (altura * altura)
let anoN;

imc = peso / (alturaEmM * alturaEmM);

anoN = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura, e seu IMC é de', imc,'.');
console.log(nome, sobrenome, 'nasceu em', anoN,'.');
// console esta pegando cada dado separadamente e formulando a frase, mas sem unir os dados

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log(`tem ${alturaEmM} de altura, e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoN}`);
// console esta pegando os dados e juntando ele, transformando nas frases
