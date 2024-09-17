// Show the login form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Show the registration form
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Handle login
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve stored user data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the username and password match
    if (username === storedUsername && password === storedPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'shoppinglist.html'; // Redirect after the alert
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password.'
        });
    }
}

// Handle registration
function register(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    // Check if the username is already taken
    if (localStorage.getItem('username') === username) {
        Swal.fire({
            icon: 'warning',
            title: 'Username already exists.',
            text: 'Please choose a different username.'
        });
    } else {
        // Save the new user data to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            showLogin(); // Switch to login form after successful registration
        });
    }
}

// Initialize the page by showing the login form
document.addEventListener('DOMContentLoaded', showLogin);
