const transacoes = [
    { data: "01/10/2024", valor: "R$70,00", tipo: "Depósito", detalhes: "Depósito feito no dia 4/11/24." },
    { data: "05/10/2024", valor: "R$50,00", tipo: "Compra", detalhes: "Depósito feito no dia 9/10/24." },
    { data: "10/10/2024", valor: "R$30,00", tipo: "Saque", detalhes: "Depósito feito no dia 8/10/24." },
    { data: "10/10/2024", valor: "R$30,00", tipo: "Saque", detalhes: "Depósito feito no dia 7/10/24." },
    { data: "10/10/2024", valor: "R$30,00", tipo: "Saque", detalhes: "Depósito feito no dia 6/10/24." },
    { data: "10/10/2024", valor: "R$30,00", tipo: "Saque", detalhes: "Deposíto feito no dia 5/10/24." },

];

function carregarTransacoes() {
    const container = document.querySelector('.transaction-container');

    transacoes.forEach((transacao, index) => {
        const transacaoDiv = document.createElement('div');
        transacaoDiv.classList.add('transaction');

        transacaoDiv.innerHTML = `
            <div class="transaction-summary">
                <p>${transacao.data} - ${transacao.tipo} - ${transacao.valor}</p>
                <button class="toggle-details" onclick="toggleDetalhes(${index})">Detalhes</button>
            </div>
            <div class="transaction-details hidden" id="detalhes-${index}">
                <p>${transacao.detalhes}</p>
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
