const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__nav');

const burgerHandler = () => {
    burger.classList.toggle('open');
    headerMenuHandler();
}

const headerMenuHandler = () => {
    const height = headerMenu.offsetHeight;
    if (height <= 1) {
        headerMenu.style.height = headerMenu.scrollHeight + 'px';
    } else {
        headerMenu.style.height = 0;
    }
}

burger.addEventListener('click', burgerHandler);