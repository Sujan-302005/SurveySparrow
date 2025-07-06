const colorSelect = document.getElementById('colorSelect');

colorSelect.addEventListener('change', function () {
  const selectedColor = this.value;
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  }
});
