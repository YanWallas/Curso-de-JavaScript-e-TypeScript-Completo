const numero = Number(prompt("Digite um número:"));//jogando uma string que o usuario digitar da pagina na variavel.e ja transformando em Number.

/*lest numero = prompt("Digite um número:");
numero = Number(numero); -> podendo tbm fazer assim para transforma string para Number*/

const numTitulo = document.getElementById('num-titulo');//trazendo o id do HTML para variavel no JS.
const texto = document.getElementById('texto');

numTitulo.innerHTML = numero;// colocando o numero digitado pelo usuario no texto HTML-h1.

/*texto.innerHTML = " "; -> posso zerar o que tem dentro de texto assim, ou subistituindo com apenas '=' igual esta na linha de baixo e depois nas outras linhas colocar o += */

texto.innerHTML = `<P>Raiz Quadrada: ${numero ** 0.5}.</P>`;
texto.innerHTML += `<P> ${numero} é inteiro: ${Number.isInteger(numero)}.</P>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.</p>`;