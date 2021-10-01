const navMenu = document.querySelector('.nav');
const navBtn = document.querySelector('.hamburger-button');
const navLinks = document.querySelectorAll('.nav__a');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav--active');
    navBtn.classList.toggle('hamburger-button--active');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav--active');
        navBtn.classList.remove('hamburger-button--active');
    })
})