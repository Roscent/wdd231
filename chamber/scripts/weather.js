document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'YOUR_API_KEY';
    const city = 'Okpanam';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <p>Current Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});