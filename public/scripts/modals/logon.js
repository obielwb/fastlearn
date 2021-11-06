
const modal = document.querySelector('#logon-modal');
const button = document.querySelector('#logon-button');
const close = document.querySelector('#logon-close-button');


modal.addEventListener('click', (event) => {
  if (event.target.id == 'logon-modal')
    modal.classList.remove('show');
});

button.addEventListener('click', () => {
  modal.classList.add('show');
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});