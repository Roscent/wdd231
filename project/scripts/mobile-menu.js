document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'menu-toggle';
    toggleButton.textContent = '☰ Menu';
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
