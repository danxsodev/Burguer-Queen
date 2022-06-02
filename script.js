function start() {
    navigation.classList.remove('scroll');
    document.body.classList.remove('menu-expanded');
    document.getElementById("open-menu").style.visibility="visible";
    document.getElementById("close-menu").style.visibility="hidden";
    
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

function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
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
.whatsapp,
#depoimentos,
#depoimentos .wrapper, 
#depoimentos .card,
#contato, 
#contato .wrapper,
#contato .content,
#faq,
#faq .wrapper,
#faq .card,
#rodape`)

ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 900,
    reset: true
}).reveal(`#rodape,
#faq .card,
#faq .wrapper,
#faq,
#contato .content,
#contato .wrapper,
#contato,
#depoimentos .card,
#depoimentos .wrapper, 
#depoimentos,
.whatsapp,
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

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
