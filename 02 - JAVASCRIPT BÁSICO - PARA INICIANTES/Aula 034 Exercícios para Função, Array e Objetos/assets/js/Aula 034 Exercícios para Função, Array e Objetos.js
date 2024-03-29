function meuEscopo() {
    const form = document.querySelector('.form');// seecionando a class form.
    const resultado = document.querySelector('.resultado');

    const pessoas = [];// criando array

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');//Selecionando o nome dentro do form.
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({// Criando um obejto para jogar em cada array
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}, Peso: ${peso.value} Altura: ${altura.value}`;
    }

    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo(); 


// EXPLICAÇÃO FEITA ANTES DE COMEÇAR O EXERCÍCIO. 
/* form.onsubmit = function (evento){// criando a função para quando aperta o button Enviar
        evento.preventDefault();//previnir que a pagina seja atualizada e perda os dados do console.
        alert(1);
        console.log('Foi enviado.');
    };*/
    //OUTRA FORMA DE FAZER MAIS COMUM
    /*let contador = 1;
    function recebeEventoForm(evento){// criando a function com evento criado na lista.
        evento.preventDefault();//previnir que a pagina seja atualizada
        console.log(`Form não for enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);//Adicionando uma evento na lista.*/