const button = document.querySelector('#subscribe-in-community');
// const title = document.querySelector('#');

button.addEventListener('click', () => {
    const className = button.classList[0];
    
    if (className === 'not-subscribed') {
        button.setAttribute('class', 'subscribed');
        button.innerHTML = 'Membro';
    }

    if (className === 'subscribed') {
        button.setAttribute('class', 'not-subscribed');
        button.innerHTML = 'Entrar';
    }
});
