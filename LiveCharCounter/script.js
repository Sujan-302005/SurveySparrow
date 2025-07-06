const textarea = document.getElementById('message');
const counter = document.getElementById('charCount');

textarea.addEventListener('input', () => {
  const count = textarea.value.length;
  counter.innerText = `Characters: ${count}`;
});
