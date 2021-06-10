let isMenuOpen = false;

const menuButton = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.navbar')

menuButton.addEventListener("click" , () => {
    isMenuOpen = !isMenuOpen;
    if(isMenuOpen) {
        menuButton.classList.add("open")
        menu.classList.add('navbar-open')
    } else {
        menuButton.classList.remove("open")
        menu.classList.remove('navbar-open')
    }
});

