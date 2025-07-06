const passwordField = document.getElementById("password");
const toggleCheckbox = document.getElementById("showPassword");

toggleCheckbox.addEventListener("change", function () {
  if (toggleCheckbox.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
