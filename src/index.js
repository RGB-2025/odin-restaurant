import './css/reset.css';
import './css/style.css';

import { Home } from './modules/home.js';
import { Menu } from './modules/menu.js';
import { AboutUs } from './modules/aboutus.js';

// Page loading
let content = document.getElementById('content');
let home = new Home(content);
let menu = new Menu(content);
let aboutus = new AboutUs(content);
let cssTags = {};
let currentModule;

function loadCSS(href, moduleName) {
    if (cssTags[moduleName]) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    cssTags[moduleName] = link;
}

function unloadCSS(moduleName) {
    const link = cssTags[moduleName]
    if (link) {
        document.head.removeChild(link);
    }
    delete cssTags[moduleName];
}

function loadPage(tabName) {
    let footer = document.querySelector('footer');

    // Do not show contents or footer yet
    content.classList.add('unloaded');
    footer.classList.add('unloaded');


    // Remove past styles and unload
    if (currentModule) {
        unloadCSS(currentModule);
        content.innerHTML = '';
    }

    switch (tabName) {
        case 'Home':
            currentModule = 'home';
            loadCSS('./css/home.css', 'home');
            home.load();
            break;
        case 'Menu':
            currentModule = 'menu';
            loadCSS('./css/menu.css', 'menu');
            menu.load();
            break;
        case 'About Us':
            currentModule = 'aboutus';
            loadCSS('./css/aboutus.css', 'aboutus');
            aboutus.load();
            break;
    }

    // Twice works like a charm
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            content.classList.remove('unloaded');
            footer.classList.remove('unloaded');
        });
    });
}

// From: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export {loadCSS, unloadCSS};

// Navigation loading
let tabTitles = ['Home', 'Menu', 'About Us'];
let nav = document.getElementById('navigation');
let chosen;


tabTitles.forEach((tabTitle, i) => {
    let btn = document.createElement('button');
    btn.textContent = tabTitle;
    btn.className = 'hover-underline-animation nav';

    // Default tab is first
    if (i === 2) {
        btn.id = 'chosen';
        chosen = btn;
        loadPage(tabTitle);
    }

    btn.addEventListener('click', (ev) => {
        if (btn.id !== 'chosen') {
            // Scroll to top
            topFunction();

            // Clear chosen
            chosen.id = '';

            // Make new chosen
            btn.id = 'chosen';  
            chosen = btn;

            // Load
            loadPage(tabTitle);
        }
    })

    nav.appendChild(btn);
});


