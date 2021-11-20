var localLogin = document.querySelector('#login-form');
var localSignup = document.querySelector('#signup-form');
var localLogon = document.querySelector('#logon-related-container');

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginSubmit = document.querySelector('#login-submit');

const elementsToHide = [
  document.querySelector('#about-container'),
  document.querySelector('.modal-separator'),
  document.querySelector('#login-form'),
];

document
  .querySelector('#signup-option-button')
  .addEventListener('click', () => {
    elementsToHide.forEach((element) => element.classList.add('hide'));
    localLogon.classList.add('signup');
    localSignup.style.display = 'flex';
  });

loginSubmit.addEventListener('click', () => {
  if (!loginEmail.value || loginEmail.value == '')
    alert('O campo "email" não pode ser vazio!');
  else if (!isValid(loginEmail.value))
    alert('Email inválido! O email deve ter o formato "example@example.com".');
  else if (!loginPassword.value || loginPassword.value == '')
    alert('O campo "senha" não pode ser vazio!');
  else if (loginPassword.value.length < 6)
    alert('A senha deve ter pelo menos 6 caractres!');
  else {
    loginSubmit.innerHTML = '<i class="fas fa-spinner"></i>';
    loginSubmit.style.pointerEvents = 'none';
    loginSubmit.style.cursor = 'not-allowed';
    loginSubmit.style.opacity = '0.65';

    const user = {
      email: loginEmail.value,
      password: loginPassword.value,
    };

    axios
      .post('http://localhost:3030/users/auth', user)
      .then((response) => {
        if (response.data) {
          const { token } = response.data;

          document.cookie = `session=${token}; max-age=259200`;
          location.reload();
        } else {
          alert('Houve um problema com o login.');
        }
      })
      .catch((error) => {
        submit.innerHTML = 'Login';
        submit.style.pointerEvents = 'auto';
        submit.style.cursor = 'pointer';
        submit.style.opacity = '1';

        if (error.response) {
          const { status } = error.response;

          if (status == 404) alert(`Usuário não encontrado.`);
          else if (status == 401) alert('Senha incorreta. Tente novamente.');
          else if (status == 500)
            alert('Houve um erro no servidor durante o sign up.');
        } else {
          alert('Houve um problema com o login.');
        }
      });
  }
});
