document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.getElementById("toggle_menu");
    const closeMenu = document.getElementById("close__menu");
    const navMenu = document.getElementById("nav-menu");

    toggleMenu.addEventListener("click", () => {
        navMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Ensure Mega Menu works properly on small screens
    const megaMenuToggles = document.querySelectorAll(".megamenu-toggle");

    megaMenuToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const megaMenu = this.nextElementSibling;
            megaMenu.classList.toggle("show"); // Toggle visibility
        });
    });
});
