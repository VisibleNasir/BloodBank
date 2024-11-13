// login.js
const username = "d123";  // Replace with your admin username
const password = "12345";  // Replace with your admin password

// Get the login form and error message
const loginForm = document.getElementById('donorLoginForm');
const errorMessage = document.getElementById('message');

// Add event listener to the form
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match
    if (username === username && password === password) {
        // Redirect to dashboard page if credentials are correct
        console.log("Login successful! Redirecting...");
        window.location.href = 'profile.html';  // Replace with your dashboard page URL
    } else {
        // Display error message if credentials are incorrect
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid username or password.';
    }
});
