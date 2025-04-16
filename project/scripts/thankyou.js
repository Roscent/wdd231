document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById('firstNameValue').textContent = urlParams.get('firstName') || 'Not provided';
    document.getElementById('lastNameValue').textContent = urlParams.get('lastName') || 'Not provided';
    document.getElementById('emailValue').textContent = urlParams.get('email') || 'Not provided';
    document.getElementById('phoneValue').textContent = urlParams.get('phone') || 'Not provided';
    document.getElementById('businessNameValue').textContent = urlParams.get('businessName') || 'Not provided';

    const timestamp = urlParams.get('timestamp');
    if (timestamp) {
        const date = new Date(timestamp);
        document.getElementById('timestampValue').textContent = date.toLocaleString();
    } else {
        document.getElementById('timestampValue').textContent = 'Not available';
    }
});