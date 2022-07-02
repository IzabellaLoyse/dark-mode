const changeThemeCheckbox = document.querySelector('#change-theme');

const handleChangeTheme = () => {
  const html = document.querySelector('html');
  html.classList.toggle('dark-theme');
};

const loadTheme = () => {
  const darkTheme = localStorage.getItem('dark-theme');

  if (darkTheme) handleChangeTheme();
};

loadTheme();

changeThemeCheckbox.addEventListener('change', () => {
  const html = document.querySelector('html');

  handleChangeTheme();

  localStorage.removeItem('dark-theme');

  if (html.classList.contains('dark-theme'))
    localStorage.setItem('dark-theme', 1);
});
