const logos = document.querySelectorAll('.logo');

const solar = document.querySelector('#solar-theme');
const moon = document.querySelector('#moon-theme');
const rocket = document.querySelector('#rocket-theme');

const themes = [solar, moon, rocket];

const reference = {
  'solar': solar,
  'moon': moon,
  'rocket': rocket,
};

const changeLogo = (theme) => {
  logos.forEach(logo => {
    logo.setAttribute('src', `/images/logos/${theme}.png`);
  });
};

const verifyTheme = () => {
  if (localStorage.getItem('theme') == null ||
      localStorage.getItem('theme') != 'solar' &&
      localStorage.getItem('theme') != 'moon' &&
      localStorage.getItem('theme') != 'rocket'
     )
        localStorage.setItem('theme', 'solar');

  const currentTheme = localStorage.getItem('theme');
  reference[currentTheme].checked = true;

  document.querySelector(':root').classList.toggle(currentTheme);

  changeLogo(currentTheme);
};

themes.forEach(theme => {
  theme.addEventListener('change', (event) => {
    document.querySelector(':root').classList.toggle(localStorage.getItem('theme'));

    const value = event.target.value;
    localStorage.setItem('theme', value);

    reference[value].checked = true;

    document.querySelector(':root').classList.toggle(value);

    changeLogo(value);
  });
});

window.addEventListener('load', verifyTheme);
