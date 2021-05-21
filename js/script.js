/*Добавление класса active для меню в мобилках*/
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__body');
const menuList = document.querySelector('.menu__list');
const langRow = document.querySelector('.lang__row');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuList.classList.toggle('_active');
        langRow.classList.toggle('_active');
    });
}


/*Плавная прокрутка к нужному разделу*/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLinks = e.target;
        if (menuLinks.dataset.goto && document.querySelector(menuLinks.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLinks.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                menuList.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
