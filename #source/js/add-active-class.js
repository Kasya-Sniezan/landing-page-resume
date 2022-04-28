/*Добавление класса active для меню*/
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__body');
const menuList = document.querySelector('.menu__list');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuList.classList.toggle('_active');
    });
}