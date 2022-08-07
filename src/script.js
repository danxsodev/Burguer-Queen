<<<<<<< HEAD
function inicialize (onload) {
onScroll();
ScrollReveal();
}
window.addEventListener("load", inicialize);

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

/*ScrollReveal animando o scroll da esquerda para direita*/
ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: '800',
    delay: '300',
    reset: 'true'
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
#cardapio .card img,
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
#rodape`);

/*FAQ*/
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

/*Light Mode/Dark Mode*/
const inputContainer = document.getElementById("theme");
const rootElement = document.documentElement;

const lightTheme = {
    "--primary-color": "#662b00",
    "--secondary-color": "#612b05",
    "--paragraph-color":"#1a1a1a",
    "--menu-hover-color":"#aa4c09",
    "--before-color":"#f4e5d7",
    "--stats-color":"#fffaf0",
    "--card-color": "#f4e5d7",
    "--card-hover-color":"#aa4c09",
    "--button-color":"#128c7e",
    "--button-hover-color":"#0c5a51", 
};

const darkTheme = {
    "--primary-color":"#f46825",
    "--secondary-color": "#f48125",
    "--paragraph-color":"#e6e6e6",
    "--menu-hover-color":"#f5903d",
    "--before-color":"#121212",
    "--stats-color":"#262626",
    "--card-color":"#262626",
    "--card-hover-color":"#f5903d",
    "--button-color":"#128c7e",
    "--button-hover-color":"#0c5a51",
};

inputContainer.addEventListener("change", function() {
    const isChecked = inputContainer.checked

    if (isChecked) {
        changeTheme(darkTheme);
        inputContainer.setAttribute("aria-checked", "true");
        inputContainer.setAttribute("aria-label", "dark mode ativado");

    } else  {
        changeTheme(lightTheme);
        inputContainer.setAttribute("aria-checked", "false");
        inputContainer.setAttribute("aria-label", "light mode ativado");
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
=======
function inicialize (onload) {
onScroll();
ScrollReveal();
}
window.addEventListener("load", inicialize);

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

/*ScrollReveal animando o scroll da esquerda para direita*/
ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: '800',
    delay: '300',
    reset: 'true'
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
#cardapio .card img,
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
#rodape`);

/*FAQ*/
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

/*Light Mode/Dark Mode*/
const inputContainer = document.getElementById("theme");
const rootElement = document.documentElement;

const lightTheme = {
    "--primary-color": "#662b00",
    "--secondary-color": "#612b05",
    "--paragraph-color":"#1a1a1a",
    "--menu-hover-color":"#aa4c09",
    "--before-color":"#f4e5d7",
    "--stats-color":"#fffaf0",
    "--card-color": "#f4e5d7",
    "--card-hover-color":"#aa4c09",
    "--button-color":"#128c7e",
    "--button-hover-color":"#0c5a51", 
};

const darkTheme = {
    "--primary-color":"#f46825",
    "--secondary-color": "#f48125",
    "--paragraph-color":"#e6e6e6",
    "--menu-hover-color":"#f5903d",
    "--before-color":"#121212",
    "--stats-color":"#262626",
    "--card-color":"#262626",
    "--card-hover-color":"#f5903d",
    "--button-color":"#128c7e",
    "--button-hover-color":"#0c5a51",
};

inputContainer.addEventListener("change", function() {
    const isChecked = inputContainer.checked

    if (isChecked) {
        changeTheme(darkTheme);
        inputContainer.setAttribute("aria-checked", "true");
        inputContainer.setAttribute("aria-label", "dark mode ativado");

    } else  {
        changeTheme(lightTheme);
        inputContainer.setAttribute("aria-checked", "false");
        inputContainer.setAttribute("aria-label", "light mode ativado");
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
>>>>>>> e53937ca510a89037e120e8f96343ebd73e06a9b
