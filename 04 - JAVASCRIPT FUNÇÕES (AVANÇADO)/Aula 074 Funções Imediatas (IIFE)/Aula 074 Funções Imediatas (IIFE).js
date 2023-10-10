// IIFE - Immediately invoked function expression 

(function () { //invoked uma function dentro de (). Nao acessar o escopo global.
    const nome = 'luiz'
    console.log(nome)
})();

const nome = 'wallas'; // mesma const pq esa protegida pelo escopo da function.
console.log(nome);

/**********************************************/

(function (idade, peso, altura) { //Pode se criar parametros como idade,peso, altura

    const sobrenome = 'lima'

    function criaNome(nome) { //Criando function dentro da fucntion
        return nome + ' ' + sobrenome;
    }

    function falaNome() { // Criando fucntion que chama a function. 
        console.log(criaNome('teus'));
    }
    falaNome();
    console.log(idade,peso,altura);//Exibindo os paramentros da function

})(30, 80, 1.80); //Jogando os paramentro da function