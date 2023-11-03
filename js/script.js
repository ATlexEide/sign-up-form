const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpwd');
function check() {
    passwordInput.value !== confirmPasswordInput.value ? confirmPasswordInput.setCustomValidity("Password does not match") : confirmPasswordInput.setCustomValidity("");
}