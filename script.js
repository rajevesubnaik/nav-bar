const menu = document.getElementsByClassName('menu')[0];
const ul = document.getElementsByTagName('ul')[0];

menu.addEventListener('click', () => {
    ul.classList.toggle('show');
})