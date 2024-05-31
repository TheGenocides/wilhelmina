const hamburgers = document.getElementById("hamburgers")

hamburgers.addEventListener("click", (ev) => {
    const menuContainer = document.getElementById("menu-container")
    menuContainer.classList.toggle("menu-container-active")
})