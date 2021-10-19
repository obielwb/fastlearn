const root = getComputedStyle(document.body);
const theme = root.getPropertyValue('--root-theme').substring(2, root.getPropertyValue('--root-theme').length - 1);
const logo = document.querySelector('#logo');

logo.setAttribute('src', `/images/logos/${theme}.png`);
