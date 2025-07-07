/* Toggle navbar menu open/close */
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const logo = document.getElementById('logo');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('open');

    if (navbar.classList.contains('open')) {
        menuIcon.src = 'icons/icon-close.svg';
        menuIcon.alt = 'Close menu icon';

        logo.src = 'icons/logo-bookmark-all-white.svg';
        logo.alt = 'Logo Bookmark White';

    } else {
        menuIcon.src = 'icons/icon-hamburger.svg';
        menuIcon.alt = 'Open menu icon';

        logo.src = 'icons/logo-bookmark.svg';
        logo.alt = 'Logo Bookmark';
    }
});

/* Tabs navigation */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabNumber = btn.dataset.tab;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');

        document.querySelector(`.tab-content[data-content="${tabNumber}"]`).classList.add('active');
    });
});

/* Accordion open/close */
document.querySelectorAll('.accordion-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

        if (!isOpen) {
            item.classList.add('active');
        }
    });
});