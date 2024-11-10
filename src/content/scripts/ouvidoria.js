document.getElementById('ouvidoriaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmacao').classList.remove('hidden');
});

document.querySelector('.chatbot-button').addEventListener('click', function() {
    alert("Chatbot em desenvolvimento.");
});

function fecharConfirmacao() {
    document.getElementById('confirmacao').classList.add('hidden');
    document.getElementById('ouvidoriaForm').reset();
}

function goToHome() {
    window.location.href = 'home.html';
}