function redirectToIndex() {
	window.location.href = 'index.html';
}

const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
	createParticle();
}

function createParticle() {
	const particle = document.createElement('div');
	particle.classList.add('particle');
	
	const posX = Math.random() * 100;
	const posY = Math.random() * 100;
	
	const size = Math.random() * 2 + 1;
	
	const opacity = Math.random() * 0.5 + 0.2;
	
	const animDuration = Math.random() * 20 + 10;
	
	particle.style.left = `${posX}%`;
	particle.style.top = `${posY}%`;
	particle.style.width = `${size}px`;
	particle.style.height = `${size}px`;
	particle.style.opacity = opacity;
	
	particle.style.animation = `float ${animDuration}s infinite alternate-reverse ease-in-out`;
	particle.style.animationDelay = `${Math.random() * 5}s`;
	
	particlesContainer.appendChild(particle);
}