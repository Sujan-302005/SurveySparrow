let count = 0;
const button = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');
button.addEventListener('click', function() {
    count++; 
    countDisplay.textContent = 'Count: ' + count; 
    });