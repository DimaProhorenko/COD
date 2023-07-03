const burger = document.querySelector('.burger');

const burgerHandler = () => {
    burger.classList.toggle('open');
}

burger.addEventListener('click', burgerHandler);