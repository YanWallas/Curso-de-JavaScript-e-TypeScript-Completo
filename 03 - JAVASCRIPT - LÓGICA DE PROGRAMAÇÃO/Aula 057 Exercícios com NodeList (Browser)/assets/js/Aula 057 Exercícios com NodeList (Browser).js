const paragrafos = document.querySelector('.paragrafos'); // seleciona o primeiro que encontra.
const ps = paragrafos.querySelectorAll('p');// seleciona todos os 'P' dentro de paragrafos.

const estilosBody = getComputedStyle(document.body); // pegando tudo de css registrado no body.
const backgroundColorBody = estilosBody.backgroundColor;// pegando a cor de fundo do body.

console.log(backgroundColorBody);

for (let p of ps) {
    // Acessando CSS atraves do JavaScript pela tag style.
    p.style.backgroundColor = backgroundColorBody;// Colocando a cor no fundo dos 'P'.
    p.style.color = '#ffffff'; // Colocando a cor da fonte do 'P'.
}
