var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const signupEmail = document.querySelector('#signup #email');
const signupPassword = document.querySelector('#signup #password');

const changeToLogin = document.querySelector('#signup #login-option-button');

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