function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.profile-container');
    const button = document.querySelector('.dark-mode-button');
    
    body.classList.toggle('light-mode');
    navbar.classList.toggle('light-mode');
    container.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
    }
}

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const toggle = document.querySelector('.navbar-toggle');
    
    navbarLinks.classList.toggle('active');
    toggle.classList.toggle('active');
}