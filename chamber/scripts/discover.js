// Load attractions data from JSON
async function loadAttractions() {
    try {
        const response = await fetch('data/attractions.json');
        const data = await response.json();
        displayAttractions(data.attractions);
    } catch (error) {
        console.error('Error loading attractions:', error);
    }
}

// Display attractions in the gallery
function displayAttractions(attractions) {
    const container = document.getElementById('attractions-container');

    attractions.forEach((attraction, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                <figcaption>${attraction.caption || ''}</figcaption>
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button onclick="learnMore('${attraction.name}')">Learn More</button>
        `;

        container.appendChild(card);
    });
}

function learnMore(attractionName) {
    alert(`More information about ${attractionName} would be displayed here.`);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadAttractions();
});