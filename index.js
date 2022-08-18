//Document Elements;
const menuButton = document.querySelector('#menu-button');
const mobileNav = document.querySelector('.nav__mobile');

//Opening and closing the mobile nav
menuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('shown');
});