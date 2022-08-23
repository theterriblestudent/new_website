//Document Elements;
const menuButton = document.querySelector('#menu-button');
const mobileNav = document.querySelector('.nav__mobile');
const serviceTitle = document.querySelector('#expertise-title');
const serviceDescription = document.querySelector('#expertise-description');
const services = Array.from(document.querySelector('.expertise__icons').children);
const SERVICE_ID = 'service_m3hiz3g';
const TEMPLATE_ID = 'template_ttct74n';


//Variables
let shownIndex = 0;

const SERVICES = [{
    title: "Resposinve Web Design",
    description: "We create responsive web designs that are ensured to look and feel great for every user on every device.",
}, {
    title: "Search Engine Optimization",
    description: "All of the websites we build are fully search engine optimized to help you reach a larger audience.",
}, {
    title: "Web Coding and Programming",
    description: "We use the most effective front-end technologies, like ReactJS, Svelte, and HTML, CSS, and JavaScript, to code websites.",
}, {
    title: "Bug Fixes",
    description: "Got an issue with your website? Well, you can trust we'll take care of it for you. Everything from bug fixes to complete re-designs.",
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

/* Form Functionality */
// Initializing emailjs
(function () {
    emailjs.init('user_IJmYFDu8hHE2iHf924Qnr');
})();

// Submitting the form
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const templateParams = {
         from_name: 'a Potential Client',
         to_name: 'Sanele Madondo',
         from_name: document.querySelector('#name-field').value,
         message: document.querySelector('#message-field').value,
         reply_to: document.querySelector('#email-field').value,
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(response => {
         console.log('email-sent');
    }, error => {
         console.log('email-not-sent');
    });

    document.querySelector('#message-field').value = '';
    document.querySelector('#email-field').value = '';
    document.querySelector('#name-field').value = '';
});

document.querySelector('.email-address').addEventListener('click', function(event) {
    window.location.href = `mailto:me@terribledevs.com`;
});