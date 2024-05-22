document.getElementById('voltar_menu').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Voltando ao Menu!');
    window.location.href = "/menu/menu.html";
});