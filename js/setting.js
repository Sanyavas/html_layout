// (() => {
//     // Основна кнопка для відкриття/закриття меню
//     const menuBtnRef = document.querySelector("[data-setting-button]");
//     const settingMenuRef = document.querySelector("[data-setting]");
    
//     // Обробник для відкриття меню
//     menuBtnRef.addEventListener("click", () => {
//       const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      
//       // Тоглити класи для відкриття і закриття меню
//       menuBtnRef.classList.toggle("is-open");
//       menuBtnRef.setAttribute("aria-expanded", !expanded);
//       settingMenuRef.classList.toggle("is-open");
//     });
  
//     // Обробник для кнопки закриття всередині меню
//     const closeBtnRef = settingMenuRef.querySelector(".setting-close-button");
//     closeBtnRef.addEventListener("click", () => {
//       menuBtnRef.classList.remove("is-open");
//       menuBtnRef.setAttribute("aria-expanded", false);
//       settingMenuRef.classList.remove("is-open");
//     });
//   })();

// Логіка відкривання та закривання меню налаштувань
  (() => {
    // Select the elements we need
    const settingButtons = document.querySelectorAll("[data-setting-button]");
    const settingContainer = document.querySelector("[data-setting]");
    const backdrop = document.querySelector("[data-setting-backdrop]");
  
    // Add a click event to each button
    settingButtons.forEach(button => button.addEventListener("click", toggleMenu));
  
    // This function opens/closes the menu
    function toggleMenu() {
      const isOpen = settingContainer.classList.contains("is-open");
  
      // Update button states
      settingButtons.forEach(button => button.setAttribute("aria-expanded", !isOpen));
      
      // Toggle the menu and backdrop visibility
      settingContainer.classList.toggle("is-open");
      backdrop.classList.toggle("is-hidden");
      
      // Prevent scrolling when the menu is open
      document.body.classList.toggle("modal-open");
    }
  
    // // Close menu if the backdrop is clicked
    // backdrop.addEventListener("click", () => {
    //   if (settingContainer.classList.contains("is-open")) {
    //     toggleMenu();
    //   }
    // });
  })();
  

//   // Логіка відкривання та закривання меню налаштувань
// (() => {
//     // Вибираємо елементи, які нам потрібні
//     const settingButtons = document.querySelectorAll("[data-setting-button]");
//     const settingContainer = document.querySelector("[data-setting]");
//     const backdrop = document.querySelector("[data-setting-backdrop]");
  
//     // Додаємо обробник кліку для кожної кнопки
//     settingButtons.forEach(button => button.addEventListener("click", toggleMenu));
  
//     // Функція для відкриття/закриття меню
//     function toggleMenu() {
//       document.body.classList.toggle("modal-open"); // Блокуємо скрол
//       settingContainer.classList.toggle("is-open"); // Відкриваємо/закриваємо меню
//       backdrop.classList.toggle("is-hidden"); // Показуємо/ховаємо бекдроп
//     }
  
//     // Закриваємо меню при кліку на бекдроп
//     backdrop.addEventListener("click", toggleMenu);
// })();