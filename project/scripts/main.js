// Handle current year and last modified date
document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Mobile menu toggle
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});

