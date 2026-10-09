document.addEventListener('DOMContentLoaded', () => {
    // Typing / Decoding effect for hero text
    const decodeText = document.querySelector('.decode-text');
    if (decodeText) {
        const originalText = decodeText.getAttribute('data-text');
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let iterations = 0;
        
        const interval = setInterval(() => {
            decodeText.innerText = originalText.split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    if (letter === ' ') return ' ';
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join('');
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            
            iterations += 1/3;
        }, 30);
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
