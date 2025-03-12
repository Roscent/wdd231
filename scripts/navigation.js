document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
        if (menu.classList.contains("open")) {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
