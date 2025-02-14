import Historia from '../pages/Historia.js';
import Galeria from '../pages/Galeria.js';
import Barajas from '../pages/Barajas.js';

const root = document.querySelector('#root');
const btnsNav = document.querySelectorAll('nav button');

btnsNav.forEach(btn => {
    btn.addEventListener('click', () => {
        localStorage.setItem('selectedContent', btn.getAttribute('alt'));

        if (localStorage.getItem('selectedContent') === 'Galeria' || localStorage.getItem('selectedContent') === 'Barajas') {
            window.location.reload();
        }

        selectorPage(btn.getAttribute('alt'));
    });
});

function selectorPage(selecion) {
    switch (selecion) {
        case 'Historia':
            root.innerHTML = Historia();
            break;
        case 'Galeria':
            root.innerHTML = Galeria();
            break;
        case 'Barajas':
            root.innerHTML = Barajas();
            break;
        default:
            break;
    }
}

if (localStorage.getItem('selectedContent')) {
    selectorPage(localStorage.getItem('selectedContent'));
} else {
    selectorPage('Historia');
}