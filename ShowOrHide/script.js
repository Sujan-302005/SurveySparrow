const para = document.getElementById('myPara');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', function () {
  if (para.style.display === 'none') {
    para.style.display = 'block';
    btn.innerText = 'Hide Paragraph';
  } else {
    para.style.display = 'none';
    btn.innerText = 'Show Paragraph';
  }
});
