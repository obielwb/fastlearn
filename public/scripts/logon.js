const modal = document.querySelector('#logon-modal');
const buttons = document.querySelectorAll('.logon-button');
const close = document.querySelector('#logon-close-button');

modal.addEventListener('click', (event) => {
  if (event.target.id == 'logon-modal')
    modal.classList.remove('show');
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('show');
  });
});

close.addEventListener('click', () => {
  modal.classList.remove('show');
});