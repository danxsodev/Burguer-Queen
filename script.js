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

