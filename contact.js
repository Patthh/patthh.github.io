function copyToClipboard(text) {
	navigator.clipboard.writeText(text).then(() => {
		const message = document.createElement('div');
		message.textContent = 'Email copied to clipboard!';
		message.style.position = 'fixed';
		message.style.bottom = '20px';
		message.style.left = '50%';
		message.style.transform = 'translateX(-50%)';
		message.style.padding = '10px 20px';
		message.style.backgroundColor = '#40E0D0';
		message.style.color = '#fff';
		message.style.borderRadius = '5px';
		message.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
		message.style.zIndex = '1000';
		message.style.opacity = '0';
		message.style.transition = 'opacity 0.3s ease';
		
		document.body.appendChild(message);
		
		setTimeout(() => {
			message.style.opacity = '1';
		}, 10);
		
		setTimeout(() => {
			message.style.opacity = '0';
			setTimeout(() => {
				document.body.removeChild(message);
			}, 300);
		}, 3000);
	}).catch(err => {
		console.error('Could not copy text: ', err);
	});
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

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', createParticles);
} else {
	createParticles();
}

function checkMode() {
	if (document.body.classList.contains('light-mode')) {
		const button = document.querySelector('.dark-mode-button');
		button.innerHTML = '<span class="mode-icon">🌙</span> Dark';
	}
}

window.addEventListener('load', checkMode);