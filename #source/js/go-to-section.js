/*Плавная прокрутка к разделу*/
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
