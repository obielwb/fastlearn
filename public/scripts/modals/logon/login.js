var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const loginEmail = document.querySelector('#login #email');
const loginPassword = document.querySelector('#login #password');

const changeToSignup = document.querySelector('#login #signup-option-button');

const elementsToHide = [
  document.querySelector('#about-container'),
  document.querySelector('.modal-separator'),
  document.querySelector('#login-form'),
];

changeToSignup.addEventListener('click', () => {
  elementsToHide.forEach(element => element.classList.add('hide'));
  localLogon.classList.add('signup');
  localSignup.style.display = 'flex';
});