var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');

const elementsToHide = [
  document.querySelector('#about-container'),
  document.querySelector('.modal-separator'),
  document.querySelector('#login-form'),
];

document.querySelector('#signup-option-button').addEventListener('click', () => {
  elementsToHide.forEach(element => element.classList.add('hide'));
  localLogon.classList.add('signup');
  localSignup.style.display = 'flex';
});