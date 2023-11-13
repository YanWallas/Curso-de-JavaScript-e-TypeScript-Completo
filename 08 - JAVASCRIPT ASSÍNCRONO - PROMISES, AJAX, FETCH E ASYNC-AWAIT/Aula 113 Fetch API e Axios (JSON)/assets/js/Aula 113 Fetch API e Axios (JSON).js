/* -> FORMA PARA BUSCAR OS DADOS DAS PESSOAS.JSON
fetch('pessoas.json')// Buscar os dados desse json.
  .then(resposta => resposta.json())
  .then(json => carregaElementos(json));*/

// -> USANDO AXIOS E TIRANDO O DE CIMA, PQ JA TEM LINCADO O METODO NO HTML ANTES DO SCRIPT.
axios('pessoas.json')
  .then(resposta => carregaElementos(resposta.data));

function carregaElementos(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');//criando coluna.
    td.innerHTML = pessoa.nome;// adicionando o nome na coluna.
    tr.appendChild(td);//adicionando a coluna dentro da linha.

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);// adicionando cada linha que for criado na tabela.
  }
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}