const verdadeira = true;

// Let tem esopo de bloco {...bloco}
// Var só tem escopo de função

let nome = 'Luiz'; // criando let 
var nome2 = 'Luiz';

if (verdadeira) { // escopo de bloco global
    let nome = 'Otávio'; // tambem criando a mesma let que sobreescreve a de cima por causa do bloco.
    console.log(nome, nome2);

    if (verdadeira) {// escopo de bloco alinhado
        let nome = 'Outra coisa';// criando mais uma, que sobreescreve todas por causa do bloco.
        // caso nao escontre essa let, ai busca no bloco de fora, e assim sucessivamente.
        console.log(nome, nome2);
    }
}

var nome2 = 'Yan;'; // Redeclarada 
if (verdadeira) { // escopo de bloco global
    let nome = 'Otávio';
    var nome2 = 'wallas';// Redeclarando 
    console.log(nome, nome2);

    if (verdadeira) {// escopo de bloco alinhado
        let nome = 'Outra coisa';
        var nome2 = 'almeida'; //Redeclarando novamente 
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);
// Let fora do bloco me traz a primeira variavel criada, fora do bloco.
// Var redeclara as variavel, substitui o valor dela, mesmo dentro de bloco.


function falaoi () {
    var nome = 'Luiz';
    console.log(nome);
}

falaoi();
