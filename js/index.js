const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.querySelector('#cta-img');
cta.setAttribute('src', 'img/header-img.png');

let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

//Fill in JSON data
//Navbar

//Base navbar
const navBar = document.querySelectorAll('nav a'); 
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];


navBar.forEach(function(aLink){
  aLink.setAttribute('style', 'color: green');
});

//cta
const h1cta = document.querySelector('.cta .cta-text h1');
h1cta.innerHTML = siteContent['cta']['h1'];

const buttonCta = document.querySelector('.cta .cta-text button');
buttonCta.textContent = siteContent['cta']['button'];

//Main Content
const mainH4 = document.querySelectorAll('.main-content h4');
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];

const mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['about-content'];
mainP[2].textContent = siteContent['main-content']['services-content'];
mainP[3].textContent = siteContent['main-content']['product-content'];
mainP[4].textContent = siteContent['main-content']['vision-content'];

//Contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

//footer
const foot = document.querySelector('footer');
foot.textContent = siteContent['footer']['copyright'];

//Add to navbar
const navAppend = document.createElement('a');
navAppend.href = '#';
navAppend.textContent = 'Appended';
navAppend.style = 'color: green';
document.querySelector('nav').appendChild(navAppend);

const navPrepend = document.createElement('a');
navPrepend.href = '#';
navPrepend.textContent = 'Prepended';
navPrepend.style = 'color: green';
document.querySelector('nav').prepend(navPrepend);
