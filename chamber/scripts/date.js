document.addEventListener("DOMContentLoaded", () => {
    // Update copyright year
    document.getElementById("14-03-2025").textContent = new Date().getFullYear();

    // Update last modification date
    const lastModified = document.lastModified;
    document.getElementById("14-03-2025").textContent = `Last Modified: ${lastModified}`;
});
