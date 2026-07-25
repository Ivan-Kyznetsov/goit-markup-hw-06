// Mobile menu
const menuBtnOpen = document.querySelector('.header-btn-burger');
const menu = document.querySelector('.menu');
const menuBtnClose = document.querySelector('.menu-btn-close');

menuBtnOpen.addEventListener('click', function () {
  menu.classList.add('is-open');
});

menuBtnClose.addEventListener('click', function () {
  menu.classList.remove('is-open');
});

// Modal overlay
const heroBtn = document.querySelector('.hero-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modalBtnClose = document.querySelector('.modal-btn-close');

heroBtn.addEventListener('click', function () {
  modalOverlay.classList.add('is-open');
});

modalBtnClose.addEventListener('click', function () {
  modalOverlay.classList.remove('is-open');
});
