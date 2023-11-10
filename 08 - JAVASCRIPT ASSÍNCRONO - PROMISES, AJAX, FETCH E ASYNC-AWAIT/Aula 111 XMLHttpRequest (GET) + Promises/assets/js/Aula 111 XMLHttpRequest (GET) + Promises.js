/*
XMLHttpRequest Objetos (XHR) -> são usados ​​para interagir com servidores. Você pode recuperar dados de 
um URL sem precisar atualizar completamente a página. Isso permite que uma página da Web atualize apenas
parte de uma página sem interromper o que o usuário está fazendo.

XMLHttpRequesté muito usado na programação AJAX .*/
/* FORMA ANTIGA DE RESOLVER ESSA.

const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener('load', () => {
        if(xhr.status >= 20 && xhr.status <300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    }

    request(objConfig);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}*/

// RESOLVENDO COM AJAX + PROMISSE AGORA

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);

        xhr.addEventListener('load', () => {
            if(xhr.status >= 20 && xhr.status <300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }); 
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
    
   
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}