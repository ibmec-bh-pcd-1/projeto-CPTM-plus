document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".report-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const problemaDescricao = document.getElementById("problema").value;

        if (problemaDescricao.trim() === "") {
            alert("Por favor, descreva o problema antes de enviar.");
            return;
        }

        alert("Obrigado por reportar o problema! Nossa equipe está trabalhando para resolvê-lo.");
        
        form.reset();
    });
});
