/* Toggle navbar menu open/close */
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navToggleIcon = document.querySelector('.nav__toggle-icon');
const navLogo = document.querySelector('.nav__logo-img');

navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');

    if (isOpen) {
        navToggleIcon.src = 'icons/icon-close.svg';
        navToggleIcon.alt = 'Close menu';
        navLogo.src = 'icons/logo-bookmark-all-white.svg';
    } else {
        navToggleIcon.src = 'icons/icon-hamburger.svg';
        navToggleIcon.alt = 'Open menu';
        navLogo.src = 'icons/logo-bookmark.svg';
    }
});

/* Tabs navigation */
const tabButtons = document.querySelectorAll('.tabs__button');
const tabContents = document.querySelectorAll('.tabs__content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('tabs__button--active'));
        tabContents.forEach(content => content.classList.remove('tabs__content--active'));

        button.classList.add('tabs__button--active');
        document.querySelector(`.tabs__content[data-content="${tabId}"]`).classList.add('tabs__content--active');
    });
});

/* Accordion open/close */
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    const question = item.querySelector('.accordion__question');

    question.addEventListener('click', () => {
        accordionItems.forEach(i => {
            if (i !== item) i.classList.remove('accordion__item--active');
        });

        item.classList.toggle('accordion__item--active');
    });
});