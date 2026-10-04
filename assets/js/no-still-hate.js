const heartLayer = document.querySelector('.heart-layer');

function floatHeart() {
    if (!heartLayer) return;

    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 90 + 5}%`;
    heart.style.fontSize = `${Math.random() * 0.7 + 0.65}rem`;
    heart.style.animationDuration = `${Math.random() * 2 + 5}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heartInterval = reduceMotion ? null : setInterval(floatHeart, 950);

//Linking to Yes and page
function yesFunction() {
    if (heartInterval) clearInterval(heartInterval);
    window.location.href = "sorry.html";
}
function noFunction() {
    if (heartInterval) clearInterval(heartInterval);
    window.location.href = "yes.html";
}