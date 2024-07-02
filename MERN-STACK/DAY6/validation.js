// Q.4)

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const errorElements = ["usernameError", "emailError", "passwordError", "confirmPassError"];
    errorElements.forEach(id => document.getElementById(id).textContent = '');

    let hasError = false;

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPass").value;

    if (username.length < 5) {
        document.getElementById("usernameError").textContent = "Username must be at least 5 characters long.";
        hasError = true;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        hasError = true;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        hasError = true;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmPassError").textContent = "Passwords does not match.";
        hasError = true;
    }

    if (hasError) {
        alert("Please fix the errors in the form!");
    } else {
        alert(`Registration successful!!\nUsername: ${username}\nEmail: ${email}`);
    }
});