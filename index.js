//Document Elements;
const menuButton = document.querySelector('#menu-button');
const mobileNav = document.querySelector('.nav__mobile');
const serviceTitle = document.querySelector('#expertise-title');
const serviceDescription = document.querySelector('#expertise-description');
const serviceIcons = Array.from(document.querySelector('.expertise__icons').children);

//Variables
let shownIndex = 0;
let timer;

const SERVICE_ID = 'service_m3hiz3g';
const TEMPLATE_ID = 'template_ttct74n';

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

//Opening and closing the mobile nav
menuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('shown');

});

document.addEventListener('click', function(event) {
    const {target} = event;
    if(target.id === 'menu-button'|| target.tagName.toLowerCase() === 'li'|| target.tagName.toLowerCase() === 'ul' )
        return;
    if (mobileNav.classList.contains('shown'))
        mobileNav.classList.remove('shown');
});

/*Showing different services in an interval of 7 seconds */
serviceTitle.textContent = SERVICES[shownIndex].title;
serviceDescription.textContent = SERVICES[shownIndex].description;

function scrollServices() {
    timer = window.setInterval(function () {
        if (shownIndex === 3) {
            fillIcon("#686767", shownIndex);
            shownIndex = 0;
        }else shownIndex++; 
        switchServices();
    }, 7000);
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
        shownIndex = serviceIcons.indexOf(event.target);
        serviceIcons.forEach((icon, index) => {
            fillIcon("#686767", index);
        })
        clearInterval(timer);
        switchServices();
        window.setTimeout(function() {
            timer = window.setInterval(function () {
                if (shownIndex === 3) {
                    fillIcon("#686767", shownIndex);
                    shownIndex = 0;
                }else shownIndex++;
                switchServices();
            }, 5000);
        }, 1020);
    })
})


function fadeOut() {
    serviceTitle.style.opacity = 0;
    serviceDescription.style.opacity = 0;

    if (shownIndex === 0) return;   
    fillIcon("#686767", shownIndex - 1);
}

function fadeIn() {
    serviceTitle.style.opacity = 1;
    serviceDescription.style.opacity = 1;
    fillIcon("#7C6528", shownIndex);
}

function fillIcon(color, index) {
    serviceIcons[index].getSVGDocument().querySelectorAll('.internal_svg_class')
        .forEach(path => path.style.fill = color);
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
         console.log('email-not-sent: ' + error);
    });

    document.querySelector('#message-field').value = '';
    document.querySelector('#email-field').value = '';
    document.querySelector('#name-field').value = '';
});

document.querySelector('.email-address').addEventListener('click', function(event) {
    window.location.href = `mailto:me@terribledevs.com`;
});