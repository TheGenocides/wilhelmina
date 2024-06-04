const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuContainer = document.getElementById("menu-container")

Array(openMenu, closeMenu).forEach(button => {
    button.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-container-active");
    });
});

const navLink = document.querySelectorAll(".menu-options > div > a");
navLink.forEach((link) => {
    link.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-container-active");
    });
});