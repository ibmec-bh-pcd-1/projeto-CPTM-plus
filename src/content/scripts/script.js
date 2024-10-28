function toggleMenu() {
    const menu = document.getElementById('side-menu');
    console.log('Toggle menu called');
    if (menu.style.right === '0px') {
        menu.style.right = '-200px'; // Fecha o menu
    } else {
        menu.style.right = '0px'; // Abre o menu
    }
}

function logout() {
    alert("Sair da conta");
    window.location.href = "paglogin.html"
}

function changeAccount() {
    alert("Mudar de conta");
    window.location.href = "paglogin.html"
}

function accessAccount() {
    alert("Acessar conta");
    // Adicione a lógica para acessar a conta aqui
}
