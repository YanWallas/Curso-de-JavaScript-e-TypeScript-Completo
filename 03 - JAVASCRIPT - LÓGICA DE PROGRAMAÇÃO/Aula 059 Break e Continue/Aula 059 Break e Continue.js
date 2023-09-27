const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero ===2) {
        console.log("pulei o numero 2");
        continue; // vai chegar a condição true, vai sair a condição e volta depois do 2.(pulando o 2 e nao aparecendo).
    }

    if (numero === 5) {// pode ser usado tambem || no if de cima.
        continue;// vai acontecer tambem com o numero 5. pulando ele e indo pro proximo.
    }

    console.log(numero);

    if (numero === 7) {
        console.log("7 encontrado, vai parar a contagem aqui");
        break; // sai do bloco de consições. 
    }

}