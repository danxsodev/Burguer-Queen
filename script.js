function start() {
    navigation.classList.remove('scroll');
    document.body.classList.remove('menu-expanded');
    document.getElementById("open-menu").style.visibility="visible";
    document.getElementById("close-menu").style.visibility="hidden";
}

function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
    document.getElementById("open-menu").style.visibility="hidden";
    document.getElementById("close-menu").style.visibility="visible";
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
    document.getElementById("close-menu").style.visibility="hidden";
    document.getElementById("open-menu").style.visibility="visible";
}

ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 700,
    reset: true
}).reveal(`#navigation,
#home,
#home .wrapper, 
#home .content, 
#home img, 
#sobre,
#sobre .wrapper, 
#sobre .stat,
#cardapio,
#cardapio .wrapper, 
#cardapio .card,
#depoimentos,
#depoimentos .wrapper, 
#depoimentos .card`)

ScrollReveal({
    origin: 'bottom',
    distance: '10px',
    duration: 700,
    reset: true
}).reveal(`#depoimentos .card,
#depoimentos .wrapper, 
#depoimentos,
#cardapio .card,
#cardapio .wrapper, 
#cardapio,
#sobre .stat,
#sobre .wrapper, 
#sobre,
#home img, 
#home .content, 
#home .wrapper, 
#home,
#navigation`)