const postModal = document.querySelector('#create-post-modal')
const postButton = document.querySelector('#create-post-button');
const postClose = document.querySelector('#create-post-close-button');

postModal.addEventListener('click', (event) => {
  if (event.target.id == 'create-post-modal')
    postModal.classList.remove('show');
});

postButton.addEventListener('click', () => {
  postModal.classList.add('show');
});

postClose.addEventListener('click', () => {
  postModal.classList.remove('show');
});