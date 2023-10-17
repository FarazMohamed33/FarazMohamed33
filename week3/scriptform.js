const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for now
    validateForm();
});

function validateForm() {
    // Reset previous errors
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Implement your validation logic here

    // Example: Check if username is empty
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        usernameInput.classList.add('error');
    } else {
        usernameInput.classList.add('success');
    }

    // Add more validation rules for email, password, and confirm password
}

// Implement real-time validation using event listeners for each input field
usernameInput.addEventListener('input', function () {
    validateUsername();
});

emailInput.addEventListener('input', function () {
    validateEmail();
});

passwordInput.addEventListener('input', function () {
    validatePassword();
});

confirmPasswordInput.addEventListener('input', function () {
    validateConfirmPassword();
});

function validateUsername() {
    // Implement real-time username validation
    // Example: Check if username is valid
}

function validateEmail() {
    // Implement real-time email validation
    // Example: Check if email is valid
}

function validatePassword() {
    // Implement real-time password validation
    // Example: Check if password meets criteria
}

function validateConfirmPassword() {
    // Implement real-time confirm password validation
    // Example: Check if confirm password matches password
}
