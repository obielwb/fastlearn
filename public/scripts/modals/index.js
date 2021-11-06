const inputs = document.querySelectorAll('.modal-input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.border = '3px solid var(--accent-color)';
  });
  
  input.addEventListener('focusout', () => {
    input.parentElement.style.border = '3px solid var(--shadow-bg-color)';
  });
});