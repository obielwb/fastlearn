const themeModal = document.querySelector('#theme-modal')
const themeButton = document.querySelector('#theme-button');
const themeClose = document.querySelector('#theme-close-button');

themeModal.addEventListener('click', (event) => {
  if (event.target.id == 'theme-modal')
    themeModal.classList.remove('show');
});

themeButton.addEventListener('click', () => {
  themeModal.classList.add('show');
});

themeClose.addEventListener('click', () => {
  themeModal.classList.remove('show');
});