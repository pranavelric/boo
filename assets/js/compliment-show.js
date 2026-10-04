const heartLayer = document.querySelector('.heart-layer');
const revealTrack = document.querySelector('.screens__track');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createFallingHeart() {
    if (!heartLayer) return;

    const heart = document.createElement('span');
    heart.className = 'falling-heart';
    heart.textContent = '💓';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

if (!reduceMotion) {
    setInterval(createFallingHeart, 180);
}

function scrollToBottom() {
    revealTrack?.classList.add('is-revealed');
}

function myFunction() {
    window.location.href = 'loading.html';
}