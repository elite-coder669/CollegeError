document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Save user to local storage (Simulating a database)
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[newUsername]) {
        alert("Username already exists!");
    } else {
        users[newUsername] = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful! You can now login.");
        window.location.href = "login.html";
    }
});
