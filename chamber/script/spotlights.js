document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const goldSilverMembers = members.filter(member => member.membership >= 2);
    const spotlightMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    const spotlightCards = document.getElementById('spotlight-cards');
    spotlightCards.innerHTML = spotlightMembers.map(member => `
        <div class="member">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
    `).join('');
});