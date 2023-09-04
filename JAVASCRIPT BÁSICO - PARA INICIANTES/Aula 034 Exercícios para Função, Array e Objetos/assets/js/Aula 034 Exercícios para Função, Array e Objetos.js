function meuEscopo() {
    const form = document.querySelector('.form');// seecionando a class form.

    form.onsubmit = function (evento){// criando a função para quando aperta o button Enviar
        evento.preventDefault();//previnir que a pagina seja atualizada e perda os dados do console.
        alert(1);

    };
}

meuEscopo();