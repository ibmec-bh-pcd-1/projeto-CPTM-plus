// script.js

document.addEventListener('DOMContentLoaded', () => {
    const refreshIcon = document.querySelector('.fa-sync-alt');
  
    // Adiciona funcionalidade ao ícone de refresh
    refreshIcon.addEventListener('click', () => {
      alert("Localização atualizada!");
    });
  });
  