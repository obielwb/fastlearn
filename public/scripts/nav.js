const menu = document.querySelector('#mobile-menu');
const logon = document.querySelector('#logon-button');
const icon = document.querySelectorAll('.fa-sign-in-alt')[0];

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

logon.addEventListener('mouseover', () => {
  icon.style.color = 'var(--alt-bg-color)'
});

logon.addEventListener('mouseout', () => {
  icon.style.color = 'var(--text-color)'
});