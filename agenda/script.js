const salvarBtn = document.getElementById('salvar');
const eventosList = document.getElementById('eventos');

function apagarEvento(event) {
  // Remove o pai do botão (ou seja, o <li> que contém o evento)
  event.target.parentNode.remove();
}

salvarBtn.addEventListener('click', () => {
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;

  // Criar um novo item de evento
  const novoEvento = document.createElement('li');
  novoEvento.classList.add('evento');
  novoEvento.textContent = `Título: ${titulo}, Descrição: ${descricao}, Data: ${data}`;

  // Criar um botão para apagar o evento
  const botaoApagar = document.createElement('button');
  botaoApagar.textContent = 'Apagar';
  botaoApagar.addEventListener('click', apagarEvento);

  // Adicionar o botão de apagar ao item de evento
  novoEvento.appendChild(botaoApagar);

  // Adicionar o item de evento à lista de eventos
  eventosList.appendChild(novoEvento);

  // Limpar os campos após salvar
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';
});
document.getElementById('voltar_menu').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Voltando ao Menu!');
    window.location.href = "/menu/menu.html";
});