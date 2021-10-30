const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu-list');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.add('menu_active');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('menu_active');
    }
});