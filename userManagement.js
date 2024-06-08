// Simulated user database
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'staff', password: 'staff123' }
];

// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Successful login
        alert('Login successful for ' + username);
        // Redirect to the dashboard or home page
        window.location.href = 'index.html';
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password';
    }
}

// Attach event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLogin);
