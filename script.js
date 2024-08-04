const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuContainer = document.getElementById("menu-container");
const navLink = document.querySelectorAll(".menu-options > a");
let highlightedOption;

Array(openMenu, closeMenu).forEach(button => {
    button.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-container-active");
    });
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        if (highlightedOption){
            highlightedOption.classList.toggle("highlighted-option")
        }
        highlightedOption = link
        link.classList.toggle("highlighted-option")
        menuContainer.classList.toggle("menu-container-active");
    });
});