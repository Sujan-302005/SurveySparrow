const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerText = 'Switch to Light Mode';
  } else {
    toggleBtn.innerText = 'Switch to Dark Mode';
  }
});
