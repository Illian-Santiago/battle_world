const btnModo = document.querySelector('#btnModo');

btnModo.addEventListener('click', cambioModo);

function cambioModo() {
    document.body.classList.toggle('dark-mode');
    btnModo.querySelector('img').src = document.body.classList.contains('dark-mode') ? '/img/modo_claro.png' : '/img/modo_oscuro.png';
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('dark-mode') === 'true') {
    cambioModo();
}

// console.log(localStorage.getItem('dark-mode'));