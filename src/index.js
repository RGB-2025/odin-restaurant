import './css/reset.css';
import './css/style.css';

import {Home} from './modules/home.js';
export {loadCSS, unloadCSS};

let content = document.getElementById('content');

let cssTags = {};

function loadCSS(href, moduleName) {
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

}

let home = new Home(content)

home.load();