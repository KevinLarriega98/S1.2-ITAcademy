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