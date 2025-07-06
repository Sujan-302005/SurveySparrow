let count = 0;

const button = document.getElementById('counterBtn');

button.addEventListener('click', function() {
  count++;
  button.innerText = 'Count: ' + count;
});
