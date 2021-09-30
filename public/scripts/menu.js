const menu = document.querySelector('#mobile-menu');

document.addEventListener('DOMContentLoaded', () => { 
  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});