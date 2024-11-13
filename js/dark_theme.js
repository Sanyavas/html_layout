// Отримуємо кнопку перемикання теми
const themeToggleButton = document.getElementById('theme-toggle-button');

// Перевіряємо, чи вже збережена темна тема в localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

// Додаємо обробник події для натискання на кнопку
themeToggleButton.addEventListener('click', () => {
  // Перемикаємо клас `dark-theme` на body
  document.body.classList.toggle('dark-theme');

  // Зберігаємо стан теми в localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});
