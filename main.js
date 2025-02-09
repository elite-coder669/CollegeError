document.addEventListener('DOMContentLoaded', function() {
    function loadComponent(component, targetId) {
        fetch(`components/${component}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetId).innerHTML = data;
            });
    }

    // Load default components
    loadComponent('header', 'header');
    loadComponent('footer', 'footer');
    loadComponent('dashboard', 'content');

    document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem("loggedInUser")) {
            window.location.href = "login.html";  // Redirect to login page
        }
    });
    
});
