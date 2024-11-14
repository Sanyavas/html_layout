
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
  
  })();
  