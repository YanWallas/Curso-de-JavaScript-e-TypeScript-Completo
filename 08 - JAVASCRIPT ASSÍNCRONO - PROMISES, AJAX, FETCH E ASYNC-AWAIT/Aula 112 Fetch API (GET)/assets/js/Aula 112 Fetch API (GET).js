// COM AJAX + PROMISSE AGORA
/*
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status <300) {
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
}*/

/****************************************************************/

// METODOS MAIS CURTOS DE ESCREVER A FUNCTION COM EVENTO PROMISSE.

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

/* -> MANEIRA REDUZIDA DE FAZER ESSA FUNCTION COM PROMISSE

function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error('ERRO 404!');
            return response.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
}*/

async function carregaPagina(el) {//-> MANEIRA CURTA COM ASYNC DA FUNÇÃO COM PROMISSE.
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();
        carregaResultado(html);
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
