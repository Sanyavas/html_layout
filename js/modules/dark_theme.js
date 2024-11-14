// Логіка виконання темної/світлої теми

const themeToggleButton = document.getElementById('theme-toggle-btn');
// Отримуємо контейнер кнопки для перемикання теми
const themeToggleContainer = themeToggleButton.parentElement;

// Перевіряємо, чи вже збережена темна тема в localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggleContainer.classList.add('dark'); // Додаємо клас на контейнер
}

// Додаємо обробник події для натискання на кнопку
themeToggleButton.addEventListener('click', () => {
  // Перемикаємо клас `dark-theme` на body
  document.body.classList.toggle('dark-theme');
  themeToggleContainer.classList.toggle('dark'); // Перемикаємо клас на контейнері

  // Зберігаємо стан теми в localStorage
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});
