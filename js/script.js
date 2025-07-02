const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.menu-toggle');
const menuIcon = document.getElementById('menu-icon');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('open');

    // Cambia el ícono
    if (navbar.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabNumber = btn.dataset.tab;

        // Quitar clase 'active' de todos los botones y contenidos
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Activar el botón y contenido correspondiente
        btn.classList.add('active');
        document.querySelector(`.tab-content[data-content="${tabNumber}"]`).classList.add('active');
    });
});