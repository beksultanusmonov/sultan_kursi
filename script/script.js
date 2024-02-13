let dark = document.getElementById('dark'),
    light = document.getElementById('light'),
    body = document.querySelector('body'),
    navbar = document.querySelector('.container .navbar'),
    back = document.getElementById('close'),
    menuBtn = document.getElementById('menu'),
    navs = document.querySelectorAll("#nav li"),
    sections = document.querySelectorAll("section"),
    wayModul = document.getElementById('way-modul'),
    active = 0;


function slideEl(i) {
    let lastActive = document.querySelector("#nav li.active");
    lastActive.classList.remove('active');
    navs[i].classList.add('active');
    active = i;
    
    let lastActiveSection = document.querySelector('section.active');
    lastActiveSection.classList.remove('active');
    sections[i].classList.add('active');
}

navs.forEach((item, i) => {
    item.onclick = () => {
        slideEl(i)
    }
})

wayModul.onclick = () => {
    slideEl(1)
}

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