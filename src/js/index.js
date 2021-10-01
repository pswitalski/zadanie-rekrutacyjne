const navMenu = document.querySelector('.nav');
const navBtn = document.querySelector('.hamburger-button');
const navLinks = document.querySelectorAll('.nav__a');

let isMenuOpen = false;
const timeouts = [];

const handleOpenAndClose = () => {
    timeouts.forEach(timeout => {
        clearTimeout(timeout);
    })

    isMenuOpen = navBtn.classList.contains('hamburger-button--active');

    switch (isMenuOpen) {
        case true:
            navLinks.forEach((link, index) => {
                const id = setTimeout(() => {
                    link.classList.remove('nav__a--active');
                }, (index) * 200);
                timeouts.push(id);
            })

            const id = setTimeout(() => {
                navMenu.classList.remove('nav--active');
                navBtn.classList.remove('hamburger-button--active');
            }, 1000)
            timeouts.push(id);
            break;
        default:
            navMenu.classList.add('nav--active');
            navBtn.classList.add('hamburger-button--active');

            navLinks.forEach((link, index) => {
                const id = setTimeout(() => {
                    link.classList.add('nav__a--active');
                }, (index + 2) * 200);
                timeouts.push(id);
            })
            break;
    }
}

navBtn.addEventListener('click', handleOpenAndClose);

navLinks.forEach(link => {
    link.addEventListener('click', handleOpenAndClose);
})