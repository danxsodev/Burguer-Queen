function inicialize (onload) {
onScroll()
changeTheme(theme)
}
window.onload

/*FUNÇÃO QUE ADICIONA E REMOVE O MENU FIXO AO SCROLLAR*/
function onScroll() {
    const navigation = document.getElementById("navigation");
    
    if (window.scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }
}
window.addEventListener("scroll", onScroll);

/*FUNÇÃO QUE ABRE O MENU*/
function openMenu() {
    document.body.classList.add("menu-expanded");
    document.getElementById("open-menu").style.visibility = "hidden";
    document.getElementById("close-menu").style.visibility = "visible";
}

/*FUNÇÃO QUE FECHA O MENU*/
function closeMenu() {
    document.body.classList.remove("menu-expanded");
    document.getElementById("close-menu").style.visibility = "hidden";
    document.getElementById("open-menu").style.visibility = "visible";
}

/*ScrollReveal animando o scroll de cima para baixo*/
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
#contato .map,
#faq,
#faq .wrapper,
#faq .card,
#rodape`)

/*ScrollReveal animando o scroll debaixo para cima*/
ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 900,
    reset: true
}).reveal(`#rodape,
#faq .card,
#faq .wrapper,
#faq,
#contato .map,
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

/*FAQ*/
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

/*Light Mode/Dark Mode*/
const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

const lightTheme = {
    "--primary-color": "#803e00",
    "--secondary-color":"#ff8c00",
    "--paragraph-color":"#000000",
    "--before-color":"#f4e5d7",
    "--stats-color":"#fffaf0",
    "--card-color": "#f4e5d7",
    "--button-color":"#009980",
    "--button-hover-color":"#004d40", 
};

const darkTheme = {
    "--primary-color":"#ff8c00",
    "--paragraph-color":"#e6e6e6",
    "--before-color":"#1a1a1a",
    "--stats-color":"#545454",
    "--card-color":"#333333",
    "--button-color":"#009980",
    "--button-hover-color":"#004d40",
};

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked

    if (isChecked) {
        changeTheme(darkTheme);
    } else  {
        changeTheme(lightTheme);
    }
});

/*FUNÇÃO QUE TROCA O TEMA/MODO*/
function changeTheme(theme) {
    for (let prop in theme) {
        changePropery(prop, theme[prop])
    }
}

function changePropery (property, value) {
    rootElement.style.setProperty(property, value)
}
