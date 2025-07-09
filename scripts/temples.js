// Toggle Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });

    // Footer Year and Last Modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});