//Document Elements;
const menuButton = document.querySelector('#menu-button');
const mobileNav = document.querySelector('.nav__mobile');
const serviceTitle = document.querySelector('#expertise-title');
const serviceDescription = document.querySelector('#expertise-description');
const services = Array.from(document.querySelector('.expertise__icons').children);


//Variables
let shownIndex = 0;

const SERVICES = [{
    title: "Resposinve Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis desgin.",
}, {
    title: "Search Engine Optimization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis seo.",
}, {
    title: "Web Coding and Programming",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis code.",
}, {
    title: "Bug Fixes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis bug.",
}]

let timer;

//Opening and closing the mobile nav
menuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('shown');
});

/*Showing different services in an interval of 5 seconds */
serviceTitle.textContent = SERVICES[shownIndex].title;
serviceDescription.textContent = SERVICES[shownIndex].description;

function scrollServices() {
    timer = window.setInterval(function () {
        shownIndex === 3 ? shownIndex = 0 : shownIndex++;
        switchServices();
    }, 5000);
}

scrollServices();

function switchServices() {
    fadeOut();
    window.setTimeout(() => {
        serviceTitle.textContent = SERVICES[shownIndex].title;
        serviceDescription.textContent = SERVICES[shownIndex].description;
    }, 500);
    window.setTimeout(fadeIn, 520);
}

//Displaying the right service information when hovering on icons
document.querySelectorAll('.svg-icon__non-mobile').forEach(icon => {
    icon.addEventListener('mouseover', function(event) {
        shownIndex = services.indexOf(event.target);
        clearInterval(timer);
        switchServices();
        window.setTimeout(function() {
            timer = window.setInterval(function () {
                shownIndex === 3 ? shownIndex = 0 : shownIndex++;
                switchServices();
            }, 5000);
        }, 1020);
    })
})


function fadeOut() {
    serviceTitle.style.opacity = 0;
    serviceDescription.style.opacity = 0;
}

function fadeIn() {
    serviceTitle.style.opacity = 1;
    serviceDescription.style.opacity = 1;
}