const button = document.querySelector("#subscribe-in-community");

button.addEventListener('click', () => {
    const className = button.classList[0];

    if (className === 'btn-of') {
        button.setAttribute('class', 'btn-on');
        button.innerHTML = "Membro";
    }
    if (className == 'btn-on') {
        button.setAttribute('class', 'btn-of');
        button.innerHTML = "Entrar";
    }
})