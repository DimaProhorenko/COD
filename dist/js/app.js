const burger = document.querySelector('.burger');
const header = document.querySelector(".header");
const headerMenu = document.querySelector('.header__nav');


let previousScroll = 0;
const numToHideHeader = header.offsetHeight + header.getBoundingClientRect().top;

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
document.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if (scroll >= numToHideHeader && scroll > previousScroll) {
        if (!header.classList.contains("hide")) {
            header.classList.add('hide');
        }
    } else if (scroll < previousScroll) {
        header.classList.remove('hide');
    }
    previousScroll = scroll;
})