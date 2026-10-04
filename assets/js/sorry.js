function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.fontSize = `${Math.random() * 1.2 + 0.8}rem`;
    heart.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

const heartInterval = setInterval(createFloatingHeart, 500);

function yesFunction() {
    clearInterval(heartInterval);
    window.location.href = "yes.html";
}

document.addEventListener('click', () => createFloatingHeart());