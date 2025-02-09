document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy user authentication (Replace with real backend)
    const validUsers = { "admin": "1234", "user": "password" };

    if (validUsers[username] && validUsers[username] === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";  // Redirect to dashboard
    } else {
        alert("Invalid username or password");
    }
});
