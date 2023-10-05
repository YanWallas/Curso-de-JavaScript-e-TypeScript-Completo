const nome = 'Luiz';

function falaNome() {
    //const nome = 'Otavio'; -> se eu declaro a variavel aqui, ela nao le a de fora.
    console.log(nome); // posso usar a const declarada de fora da function.
}

function usaFalaNome() {
    const nome = 'Otavio'; // ela nao vai le essa variavel, pq ta chamando a function falaNome() e dentro dela, ela busca a variavel de fora.
    falaNome(); // puxanso function dentro da uma function.
}
usaFalaNome();