const logonModal = document.querySelector('#logon-modal');
const logonButton = document.querySelector('#logon-button');
const logonClose = document.querySelector('#logon-close-button');

const forms = document.querySelectorAll('.logon-form');

const emails = document.querySelectorAll('.email-input');
const passwords = document.querySelectorAll('.password-input');

logonModal.addEventListener('click', (event) => {
  if (event.target.id == 'logon-modal') logonModal.classList.remove('show');
});

logonButton.addEventListener('click', () => {
  logonModal.classList.add('show');
});

logonClose.addEventListener('click', () => {
  logonModal.classList.remove('show');
});

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

emails.forEach((email) => {
  email.addEventListener('focusout', () => {
    if (isValid(email.value))
      email.parentElement.style.border = '3px solid #00fb67';
    else email.parentElement.style.border = '3px solid #ee5555';
  });
});

passwords.forEach((password) => {
  password.addEventListener('focusout', () => {
    const isValid = password.value.length > 5 ? true : false;

    if (password.id != 'confirm-password') {
      if (isValid) password.parentElement.style.border = '3px solid #00fb67';
      else password.parentElement.style.border = '3px solid #ee5555';
    }
  });
});
