var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const signupPasswordConfirmation = document.querySelector('#confirm-password');

const signupInput = document.querySelector('#signup-input');

const elementsToDisplay = [
  document.querySelector('#about-container'),
  document.querySelector('.modal-separator'),
  document.querySelector('#login-form'),
];

document.querySelector('#login-option-button').addEventListener('click', () => {
  elementsToDisplay.forEach(element => element.classList.remove('hide'));
  localLogon.classList.remove('signup');
  localSignup.style.display = 'none';
});

const submit = () => {
  let avatar = '';
  
  if (file == undefined)
  avatar = 'https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png';
  
}

localSignup.addEventListener('submit', submit);

signupPasswordConfirmation.addEventListener('propertychange change keyup input paste', () => {
  const equals = signupPasswordConfirmation.value == signupPassword.value ? true : false;

  if (equals)
    signupPasswordConfirmation.parentElement.style.border = '3px solid #00fb67';

  else
    signupPasswordConfirmation.parentElement.style.border = '3px solid #ee5555';
});

document.querySelector('#dismiss-avatar-button').addEventListener('click', () => {
  document.querySelector('#file-input-container').classList.remove('hide');
  document.querySelector('#avatar-preview-container').classList.remove('show');
  document.querySelector('#avatar-label').classList.remove('hide');
  document.querySelector('#avatar-file-name').classList.remove('show');
});