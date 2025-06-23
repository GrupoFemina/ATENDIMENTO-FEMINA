fetch('vdf-atendimento.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-cartoes');

    // Mostrar o nome do quadro
    const nomeDoQuadro = data.name;
    const itemQuadro = document.createElement('li');
    itemQuadro.textContent = 'Nome do Quadro: ' + nomeDoQuadro;
    lista.appendChild(itemQuadro);

    // Mostrar os nomes das listas (caso existam)
    if (data.lists && Array.isArray(data.lists)) {
      data.lists.forEach(listaTrello => {
        const item = document.createElement('li');
        item.textContent = 'Lista: ' + listaTrello.name;
        lista.appendChild(item);
      });
    }
  })
  .catch(error => {
    console.error('Erro ao carregar o JSON:', error);
  });
