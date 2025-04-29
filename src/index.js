import './css/reset.css';
import './css/style.css';

import { Home } from './modules/home.js';
import { Menu } from './modules/menu.js';
// import { AboutUs } from './modules/about.js';
// import { Mission } from './modules/mission.js';

// Page loading
let content = document.getElementById('content');
let home = new Home(content);
let menu = new Menu(content);
let cssTags = {};
let currentModule = 'home';

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
    }
}

export {loadCSS, unloadCSS};

// Navigation loading
let tabTitles = ['Home', 'Menu', 'About Us', 'Our Mission'];
let nav = document.getElementById('navigation');
let chosen;


tabTitles.forEach((tabTitle, i) => {
    let btn = document.createElement('button');
    btn.textContent = tabTitle;
    btn.className = 'hover-underline-animation nav';

    // Default tab is first
    if (i === 0) {
        btn.id = 'chosen';
        chosen = btn;
        loadPage(tabTitle);
    }

    btn.addEventListener('click', (ev) => {
        if (btn.id !== 'chosen') {
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


