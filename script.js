function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
}

function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const profileContainer = document.querySelector('.profile-container');
    const button = document.querySelector('.dark-mode-button');
    
    body.classList.toggle('light-mode');
    navbar.classList.toggle('light-mode');
    profileContainer.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
        localStorage.setItem('theme', 'light');
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
        localStorage.setItem('theme', 'dark');
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite alternate ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const profileContainer = document.querySelector('.profile-container');
    const button = document.querySelector('.dark-mode-button');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        navbar.classList.add('light-mode');
        profileContainer.classList.add('light-mode');
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        createParticles();
        loadTheme();
    });
} else {
    createParticles();
    loadTheme();
}

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

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
}

function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const projectsContainer = document.querySelector('.projects-container');
    const button = document.querySelector('.dark-mode-button');
    
    body.classList.toggle('light-mode');
    navbar.classList.toggle('light-mode');
    projectsContainer.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s infinite alternate ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const projectsContainer = document.querySelector('.projects-container');
    const button = document.querySelector('.dark-mode-button');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        navbar.classList.add('light-mode');
        projectsContainer.classList.add('light-mode');
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
    }
}

// Add hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(64, 224, 208, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Initialize particles and theme
    createParticles();
    loadTheme();
    
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const finalValue = parseInt(entry.target.textContent);
                animateCounter(entry.target, finalValue);
            }
        });
    });
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
});

function animateCounter(element, finalValue) {
    let currentValue = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 30);
}

// Enhanced dark mode toggle with local storage
function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const projectsContainer = document.querySelector('.projects-container');
    const button = document.querySelector('.dark-mode-button');
    
    body.classList.toggle('light-mode');
    navbar.classList.toggle('light-mode');
    projectsContainer.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
        localStorage.setItem('theme', 'light');
    } else {
        button.innerHTML = '<span class="mode-icon">☀️</span> Light';
        localStorage.setItem('theme', 'dark');
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect to project titles
function addTypingEffect() {
    const titles = document.querySelectorAll('.project-name');
    
    titles.forEach((title, index) => {
        const originalText = title.textContent;
        title.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                title.textContent = originalText.slice(0, i + 1);
                i++;
                if (i >= originalText.length) {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 200);
    });
}

// Initialize all effects when page loads
window.addEventListener('load', () => {
    // Add fade-in animation delay for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Mobile menu enhancement
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const body = document.body;
    
    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open on mobile
    if (navbarLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(event.target) && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        navbarToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add ripple effect to project cards
document.addEventListener('click', function(e) {
    if (e.target.closest('.project-card')) {
        const card = e.target.closest('.project-card');
        const ripple = document.createElement('span');
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

function copyEmail() {
    const email = 'rpatdon@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        const successMessage = document.getElementById('copySuccess');
        successMessage.classList.add('show');
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const successMessage = document.getElementById('copySuccess');
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textArea);
    });
}