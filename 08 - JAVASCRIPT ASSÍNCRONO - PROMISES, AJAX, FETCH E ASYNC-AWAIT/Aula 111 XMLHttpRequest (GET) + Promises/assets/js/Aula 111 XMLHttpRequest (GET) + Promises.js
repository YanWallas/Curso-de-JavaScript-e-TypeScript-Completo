/*
XMLHttpRequest Objetos (XHR) -> são usados ​​para interagir com servidores. Você pode recuperar dados de 
um URL sem precisar atualizar completamente a página. Isso permite que uma página da Web atualize apenas
parte de uma página sem interromper o que o usuário está fazendo.

XMLHttpRequesté muito usado na programação AJAX .*/

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener('load', () => {
        
    })
};