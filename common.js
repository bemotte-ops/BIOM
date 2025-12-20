// Общий JavaScript для всех страниц

document.addEventListener('DOMContentLoaded', function () {

// === БУРГЕР-МЕНЮ + ЗАКРЫТИЕ ПРИ КЛИКЕ НА ССЫЛКУ ===
const burger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

console.log('Common script loaded');
console.log('Burger element:', burger);
console.log('Nav menu element:', navMenu);

function closeMenu() {
  if (navMenu) navMenu.classList.remove('active');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}

// Открытие/закрытие по кнопке
if (burger) {
  burger.addEventListener('click', () => {
    console.log('Burger clicked');
    navMenu.classList.toggle('active');
    burger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });
} else {
  console.log('Burger element not found');
}

// Закрытие при клике на любую ссылку в меню
if (navMenu) {
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
} else {
  console.log('Nav menu element not found');
}

});