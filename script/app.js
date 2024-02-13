let dark = document.getElementById('dark'),
    light = document.getElementById('light'),
    body = document.querySelector('body'),
    navbar = document.querySelector('.container .navbar'),
    back = document.getElementById('close'),
    menuBtn = document.getElementById('menu'),
    openMain = document.querySelector('.all__main .open__main'),
    LeftMain = document.querySelector('.all__main .left'),
    backMenu = document.getElementById('back__menu');


const CheckMode = localStorage.getItem('mode');

if(CheckMode){
    switchMode();
}

function switchMode() {
    light.classList.toggle('active');
    dark.classList.toggle('active');
    body.classList.toggle('dark-mode');
}

dark.onclick = () => {
    switchMode()
    localStorage.setItem('mode', 'dark-mode');
};
light.onclick = () => {
    switchMode()
    localStorage.setItem('mode', '');
};

menuBtn.onclick = () => {
    navbar.classList.add('active')
}

back.onclick = () => {
    navbar.classList.remove('active')
}

openMain.onclick = () => {
    LeftMain.classList.add('active')
}

backMenu.onclick = () => {
    LeftMain.classList.remove('active')
}


const allThemeBar = document.querySelectorAll('.left .nav__main li'),
    allTheme = document.querySelectorAll('.right section'),
    activeTheme = 0;

function switchMenu(i) {
    let lastActive = document.querySelector(".left .nav__main li.active");
    lastActive.classList.remove('active');
    allThemeBar[i].classList.add('active');
    
    let lastActiveSection = document.querySelector('.right section.active');
    lastActiveSection.classList.remove('active');
    allTheme[i].classList.add('active');
}

allThemeBar.forEach((item, i) => {
    item.onclick = () => {
        switchMenu(i);
    }
})