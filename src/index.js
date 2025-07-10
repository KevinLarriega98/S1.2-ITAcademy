const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const logo = document.getElementById('logo');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    const isVisible = !menu.classList.contains('hidden');

    menu.classList.toggle('hidden');

    if (isVisible) {
        menu.classList.remove('flex');
        menuIcon.src = 'icons/icon-hamburger.svg';
        menuIcon.alt = 'Open menu icon';
        logo.src = 'icons/logo-bookmark.svg';
        logo.alt = 'Logo Bookmark';

        navbar.classList.remove('bg-[#2f354fd9]');
        navbar.classList.add('bg-white');
    } else {
        menu.classList.add('flex');
        menuIcon.src = 'icons/icon-close.svg';
        menuIcon.alt = 'Close menu icon';
        logo.src = 'icons/logo-bookmark-all-white.svg';
        logo.alt = 'Logo Bookmark White';

        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-[#2f354fd9]');
    }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabNumber = btn.dataset.tab;

        tabButtons.forEach(b => {
            b.classList.remove('border-b-2', 'border-[#FA5959]', 'bg-white');
        });

        tabContents.forEach(c => c.classList.remove('block'));
        tabContents.forEach(c => c.classList.add('hidden'));

        btn.classList.add('border-b-2', 'border-[#FA5959]', 'bg-white');

        const selectedTab = document.querySelector(`.tab-content[data-content="${tabNumber}"]`);
        selectedTab.classList.remove('hidden');
        selectedTab.classList.add('block');
    });
});