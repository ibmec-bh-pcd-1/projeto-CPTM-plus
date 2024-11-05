const transacoes = [
    { data: "01/10/2024", tipo: "Compra", valor: "R$70,00", detalhes: "Compra de 14 bilhetes" },
    { data: "05/10/2024", tipo: "Depósito", valor: "R$50,00", detalhes: "Depósito feito via PIX." },
    { data: "10/10/2024", tipo: "Depósito", valor: "R$30,00", detalhes: "Depósito feito via CARTÃO." },
    { data: "7/10/2024", tipo: "Depósito", valor: "R$30,00", detalhes: "Depósito feito via CARTÃO." },
    { data: "6/10/2024", tipo: "Depósito", valor: "R$30,00", detalhes: "Depósito feito via PIX." },
    { data: "5/10/2024", tipo: "Depósito", valor: "R$30,00", detalhes: "Deposíto feito via CARTÃO." },

];

function carregarTransacoes() {
    const container = document.querySelector('.transaction-container');

    transacoes.forEach((transacao, index) => {
        const transacaoDiv = document.createElement('div');
        transacaoDiv.classList.add('transaction');

        transacaoDiv.innerHTML = `
            <div class="transaction-summary">
                <p><b>${transacao.tipo} - ${transacao.valor}</b></p>
                <button class="toggle-details" onclick="toggleDetalhes(${index})"><b>Detalhes</b></button>
            </div>
            <div class="transaction-details hidden" id="detalhes-${index}">
                <p><b>${transacao.data} - ${transacao.detalhes}</b></p>
            </div>
        `;

        container.appendChild(transacaoDiv);
    });
}

function toggleDetalhes(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    detalhes.classList.toggle('hidden');
}

window.onload = carregarTransacoes;
