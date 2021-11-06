const modal = document.querySelector('#logon-modal');
const button = document.querySelector('#logon-button');
const close = document.querySelector('#logon-close-button');

const forms = document.querySelectorAll('.logon-form');

const emails = document.querySelectorAll('.email-input');
const passwords = document.querySelectorAll('.password-input');

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

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

emails.forEach(email => {
  email.addEventListener('focusout', () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (re.test(String(email.value).toLowerCase()))
      email.parentElement.style.border = '3px solid #00fb67';
  
    else
      email.parentElement.style.border = '3px solid #ee5555';
  });
});

passwords.forEach(password => {
  password.addEventListener('focusout', () => {
    const isValid = password.value.length > 5 ? true : false;

    if (isValid)
      password.parentElement.style.border = '3px solid #00fb67';

    else
      password.parentElement.style.border = '3px solid #ee5555';
  });
});