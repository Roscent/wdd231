document.addEventListener("DOMContentLoaded", async () => {
    // Select HTML elements
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#caption-desc');

    // API URL with latitude, longitude, units, and API key
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.20&lon=6.69&units=metric&appid=b75935e0a637f491d099d1e0bd417482';

    // Fetch weather data
    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // For testing
                displayResults(data); // Call the function to display results
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Display weather data
    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;C`; // Display temperature
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Icon URL
        let desc = data.weather[0].description; // Weather description
        weatherIcon.setAttribute('src', iconsrc); // Set icon source
        weatherIcon.setAttribute('alt', desc); // Set icon alt text
        captionDesc.textContent = `${desc}`; // Set description text
    }

    // Call the function to fetch and display data
    apiFetch();
});
