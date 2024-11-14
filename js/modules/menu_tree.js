
// Логіка виконання дерева меню
document.addEventListener('DOMContentLoaded', function () {
  // Знаходимо всі кнопки, що мають клас submenu-toggle
  const submenuButtons = document.querySelectorAll('.submenu-toggle');

  // Встановлюємо обробник подій для кожної кнопки
  submenuButtons.forEach(button => {
    button.addEventListener('click', function () {
      toggleSubmenu(button);
    });
  });

  // Функція відкривання/закривання підменю
  function toggleSubmenu(button) {
    const submenu = button.nextElementSibling;
    if (submenu) {
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
  }
});
