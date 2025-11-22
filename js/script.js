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


// Получаем корневой элемент (`:root` в CSS)
const root = document.documentElement;
const imgThem = document.getElementById('imgThem');
const imglinkTg = document.getElementById('linkTg');
const imglinkgithub = document.getElementById('linkGithub');
const ScrolUp = document.getElementById('ScrolUp');

function themLight(){
        root.style.setProperty('--primary-color', '#8b5fbf');
        root.style.setProperty('--accent-purple', '#a855f7');
        root.style.setProperty('--accent-pink', '#ec4899');
        root.style.setProperty('--accent-blue', '#06b6d4');
        root.style.setProperty('--text-dark', '#1e1b2e');
        root.style.setProperty('--text-light', '#3E3D47FF');
        root.style.setProperty('--bg-light', '#f8f7fc');
        root.style.setProperty('--bg-dark', '#161616');
        root.style.setProperty('--white', '#ffffff');
        root.style.setProperty('--shadow', '0 4px 6px -1px rgba(139, 95, 191, 0.3)');
        document.body.setAttribute('data-theme', 'light');
        imgThem.src = 'img/darkThem.png'
        imglinkTg.src = 'img/tg-link.png'
        imglinkgithub.src = 'img/github-link.png'
        ScrolUp.src = 'img/SlideUpDark.png'
        localStorage.setItem('them', 'Light');
        console.log(localStorage.getItem('them'));
}

function themDark(){
        root.style.setProperty('--primary-color', '#a78bfa');
        root.style.setProperty('--accent-purple', '#c084fc');
        root.style.setProperty('--accent-pink', '#f472b6');
        root.style.setProperty('--accent-blue', '#67e8f9');
        root.style.setProperty('--text-dark', '#e2e8f0');
        root.style.setProperty('--text-light', '#94a3b8');
        root.style.setProperty('--bg-light', '#1e293b');
        root.style.setProperty('--bg-dark', '#0f172a');
        root.style.setProperty('--white', '#334155');
        root.style.setProperty('--shadow', '0 4px 6px -1px rgba(0, 0, 0, 0.5)');
        document.body.setAttribute('data-theme', 'dark');
        imgThem.src = 'img/lightThem.png'
        imglinkTg.src = 'img/tg-link-dark.png'
        imglinkgithub.src = 'img/github-link-dark.png'
        ScrolUp.src = 'img/SlideUpLight.png'
        localStorage.setItem('them', 'Dark');
        console.log(localStorage.getItem('them'));
}

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if(localStorage.getItem('them') === 'Dark'){ 
    themDark();
}else if(localStorage.getItem('them') === 'Light'){
    themLight();
}else{
    if (prefersDarkScheme.matches) {
    // Применить темную тему
    //   console.log('Пользователь предпочитает темную тему');    
    themDark();
    } else {
    // Применить светлую тему
    //   console.log('Пользователь предпочитает светлую тему');
    themLight();
}
}




function DarkLightThem(){
    
    const currentTheme = document.body.getAttribute('data-theme');


    if (currentTheme === 'dark') {
        // Переключаем на СВЕТЛУЮ тему
        themLight()

    } else {
        // Переключаем на ТЕМНУЮ тему
        themDark()
    }
}



window.addEventListener('scroll', function() {
  var button = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) { /* Показывать после 300px прокрутки */
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
});