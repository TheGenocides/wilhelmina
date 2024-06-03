const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menuContainer = document.getElementById("menu-container")

Array(openMenu, closeMenu).forEach(button => {
    button.addEventListener("click", () => {
        menuContainer.classList.toggle("menu-container-active");
    });
});
