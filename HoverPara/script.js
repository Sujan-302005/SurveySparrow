const para = document.getElementById('hoverPara');

para.addEventListener('mouseover', () => {
  para.classList.add('highlight');
});

para.addEventListener('mouseout', () => {
  para.classList.remove('highlight');
});
