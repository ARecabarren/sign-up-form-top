const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const valid = document.getElementById("pass-match");

function validatePassword() {
  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match, Please Try Again");
    valid.textContent = "Passwords Don't Match";
  } else {
    confirm_password.setCustomValidity("");
    valid.textContent = "";
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
