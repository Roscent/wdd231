// Display last visit message
function displayVisitMessage() {
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSince = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSince < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysSince === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysSince} ${dayText} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate);
}

document.addEventListener('DOMContentLoaded', displayVisitMessage);