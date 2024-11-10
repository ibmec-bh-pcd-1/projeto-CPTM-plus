const precoBilhete = 5.5;

function calcularTotal() {
    const quantidade = document.getElementById("bilhete-quantidade").value;
    const total = quantidade * precoBilhete;
    document.getElementById("total").innerText = `R$${total.toFixed(2)}`;
}

function toggleCartaoForm() {
    const cartaoForm = document.getElementById("cartao-form");
    const qrCodeSection = document.getElementById("qr-code");

    qrCodeSection.style.display = "none";
    cartaoForm.style.display = cartaoForm.style.display === "block" ? "none" : "block";
}

function toggleQRCode() {
    const qrCodeSection = document.getElementById("qr-code");
    const cartaoForm = document.getElementById("cartao-form");

    cartaoForm.style.display = "none";
    qrCodeSection.style.display = qrCodeSection.style.display === "block" ? "none" : "block";
}

function goToHome() {
    window.location.href = 'home.html';
}
