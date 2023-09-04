function meuEscopo() {
    const form = document.querySelector('.form');// seecionando a class form.

   /* form.onsubmit = function (evento){// criando a função para quando aperta o button Enviar
        evento.preventDefault();//previnir que a pagina seja atualizada e perda os dados do console.
        alert(1);
        console.log('Foi enviado.');
    };*/
    //OUTRA FORMA DE FAZER MAIS COMUM
    let contador = 1;
    function recebeEventoForm(evento){// criando a function com evento criado na lista.
        evento.preventDefault();//previnir que a pagina seja atualizada
        console.log(`Form não for enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);//Adicionando uma evento na lista.

}

meuEscopo();