var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const signupEmail = document.querySelector('#signup #email');
const signupPassword = document.querySelector('#signup #password');

const signupInput = document.querySelector('#signup-input');

const changeToLogin = document.querySelector('#signup #login-option-button');

const fileInput = document.querySelector('#file-input');

const elementsToDisplay = [
  document.querySelector('#about-container'),
  document.querySelector('.modal-separator'),
  document.querySelector('#login-form'),
];

changeToLogin.addEventListener('click', () => {
  elementsToDisplay.forEach(element => element.classList.remove('hide'));
  localLogon.classList.remove('signup');
  localSignup.style.display = 'none';
});

const IMGUR_API_CLIENT_ID = '7142f74c7bfa887';
localSignup.addEventListener('submit', () => {
  const data = new FormData();
  data.append('image', fileInput.files[0]);

  upload('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: { 
      'Authorization': `Client-ID ${IMGUR_API_CLIENT_ID}`
    },
    body: data,
  })
    .then(data => data.json())
    .then(data => signupEmail.value = data);
});

const upload = (url, options) => {
  const callback = (resolve, reject) => {
    fetch(url, options)
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  };

  return new Promise(callback);
};