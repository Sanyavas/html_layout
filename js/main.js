// Логіка відкривання та закривання модального вікна
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        backdrop: document.querySelector('[data-backdrop]')
    };

    if (refs.openModalBtn && refs.closeModalBtn && refs.backdrop) {
        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);
    }

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.backdrop.classList.toggle('is-hidden');
    }
})();

// Логіка виконання темної/світлої теми
(() => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');

    if (themeToggleButton) {
        const themeToggleContainer = themeToggleButton.parentElement;

        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleContainer.classList.add('dark');
        }

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggleContainer.classList.toggle('dark');

            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }
})();

// Логіка відкривання меню хедера
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    if (menuBtnRef && mobileMenuRef) {
        menuBtnRef.addEventListener("click", () => {
            const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);
            mobileMenuRef.classList.toggle("is-open");
        });
    }
})();

// Логіка відкривання та закривання меню налаштувань
document.addEventListener('DOMContentLoaded', () => {
    const settingButtons = document.querySelectorAll("[data-setting-button]");
    const settingContainer = document.querySelector("[data-setting]");
    const backdrop = document.querySelector("[data-setting-backdrop]");

    // Перевіряємо наявність усіх елементів
    if (settingButtons.length && settingContainer && backdrop) {
        settingButtons.forEach(button => {
            button.addEventListener("click", toggleMenu);
        });
    }

    function toggleMenu() {
        const isOpen = settingContainer.classList.contains("is-open");

        // Оновлюємо атрибути aria для кнопок
        settingButtons.forEach(button => {
            button.setAttribute("aria-expanded", !isOpen);
        });

        // Перемикаємо класи для меню, фону та body
        settingContainer.classList.toggle("is-open");
        backdrop.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
});

// Логіка виконання дерева меню
(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const submenuButtons = document.querySelectorAll('.submenu-toggle');

        submenuButtons.forEach(button => {
            button.addEventListener('click', function () {
                toggleSubmenu(button);
            });
        });

        function toggleSubmenu(button) {
            const submenu = button.nextElementSibling;
            if (submenu) {
                const isOpen = submenu.classList.contains('is-open');
                submenu.classList.toggle('is-open', !isOpen); // Додаємо/видаляємо клас 'is-open'
                button.classList.toggle('is-open', !isOpen); // Додаємо/видаляємо клас 'is-open' для кнопки
            }
        }
    });
})();



(() => {
    document.addEventListener('DOMContentLoaded', function () {
        
        const { height: pageHeaderHeight} = document.querySelector(".main-nav").getBoundingClientRect()

        document.body.style.paddingTop = `${pageHeaderHeight}px`
    });
})();