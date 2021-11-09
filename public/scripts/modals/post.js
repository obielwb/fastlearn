const postModal = document.querySelector('#post-modal')
const postButton = document.querySelector('#create-post-button');
const postClose = document.querySelector('#post-close-button');

postModal.addEventListener('click', (event) => {
  if (event.target.id == 'post-modal')
    postModal.classList.remove('show');
});

postButton.addEventListener('click', () => {
  postModal.classList.add('show');
});

postClose.addEventListener('click', () => {
  postModal.classList.remove('show');
});