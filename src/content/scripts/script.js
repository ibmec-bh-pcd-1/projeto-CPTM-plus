document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.user-icon').addEventListener('click', function() {
        const menu = document.querySelector('.user-menu');
        menu.classList.toggle('active');
    });
});