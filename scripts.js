document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById('stars-container');
    for (let i = 0; i < 200; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        starsContainer.appendChild(star);
    }
});