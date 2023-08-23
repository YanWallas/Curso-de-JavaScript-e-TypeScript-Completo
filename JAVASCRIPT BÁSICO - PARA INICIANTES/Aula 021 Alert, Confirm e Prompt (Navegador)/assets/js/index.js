
/* Fazendo tudo pelo console do navegaddor

window.alert('Mensagem');
alert('mensagem') // atalho pra comando de cima.

window.confirm('Deseja realmente apagar?') // confirmação front com usuario. 

window.prompt('Digite seu nome!') // janela de pergunta ao usuario. 

const confirma = confirm('apagar?') // vai retorna a resposta do front-end para back-end na const confirma
console.log(confirma)*/

let confirma = confirm('apagar?'); 
console.log(confirma);

let num1 = prompt('Digite um numero.');// Numero digitado salvo na let num1
// tudo retornado pela função prompt, vem em string.
let num2 = prompt('Digite um numero.');// Numero digitado salvo na let num2

console.log(num1, num2);

num1 = parseInt(num1);// trocando num1 string para number 

num2 = Number(num2);// trocando num2 string para number usando a função Number(tem que esta com o 'N' maiusculo)

const result = num1 + num2;
console.log(result); //aparece no back-end
alert(`O resultado foi: ${result}`);//alerta no front-end para usuario.