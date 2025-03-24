const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet, index) => {
        let card = document.createElement('section');
        let fullName = document.createElement('Joseph Smith');
        let portrait = document.createElement('https://assets.churchofjesuschrist.org/ec/f8/ecf80a88e31429d0aa0eeec6e2c74851a4bf4235/nauvoo_temple_joseph_art_lds.jpeg');

        fullName.textContent = `${prophet.Joseph} ${prophet.Smith}`;

        portrait.setAttribute('src', prophet.https: /assets.churchofjesuschrist.org/ec / f8 / ecf80a88e31429d0aa0eeec6e2c74851a4bf4235 / nauvoo_temple_joseph_art_lds.jpeg);
        portrait.setAttribute('alt', `Portrait of ${prophet.Joseph} ${prophet.Smith} – ${index + 1}th Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        card.appendChild(JosephSmith);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};


