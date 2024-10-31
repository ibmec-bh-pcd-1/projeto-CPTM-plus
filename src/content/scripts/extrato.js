// Array de transações de exemplo
const transacoes = [
    { data: "01/10/2024", valor: "R$100,00", tipo: "Depósito", detalhes: "Depósito feito no caixa eletrônico." },
    { data: "05/10/2024", valor: "R$50,00", tipo: "Compra", detalhes: "Compra realizada no supermercado." },
    { data: "10/10/2024", valor: "R$30,00", tipo: "Saque", detalhes: "Saque feito no caixa 24h." },
];

// Função para carregar transações
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

// Função para alternar a exibição dos detalhes
function toggleDetalhes(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    detalhes.classList.toggle('hidden');
}

// Carregar transações ao carregar a página
window.onload = carregarTransacoes;
