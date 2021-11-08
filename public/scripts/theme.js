const root = getComputedStyle(document.body);
const theme = root.getPropertyValue('--root-theme').substring(2, root.getPropertyValue('--root-theme').length - 1);

const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
  logo.setAttribute('src', `/images/logos/${theme}.png`);
});