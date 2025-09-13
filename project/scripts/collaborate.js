// Add to date.js to set timestamp
document.getElementById('joinForm').addEventListener('submit', function () {
    document.getElementById('timestamp').value = new Date().toISOString();
});
