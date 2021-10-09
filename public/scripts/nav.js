const menu = document.querySelector('#mobile-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const root = getComputedStyle(document.body);
const theme = root.getPropertyValue('--root-theme').substring(2, root.getPropertyValue('--root-theme').length - 1);
const logo = document.querySelector('#logo');

logo.setAttribute('src', `/images/logos/${theme}.png`);