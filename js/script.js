const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-link')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});
menu.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== burger) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});


