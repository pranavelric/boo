const openLetter = document.getElementById('openLetter');
const helloButton = document.getElementById('helloButton');
const img = document.getElementById('image');

const images = {
    hi: 'assets/img/hi.gif',
    ori: 'assets/img/love.gif'
};

function ChangeImage(giphy) {
    if (img) img.src = images[giphy];
}

function ResetImage() {
    if (img) img.src = images.ori;
}

var body = document.body;

function bg() {
    body.className = 'hovered';
}

function resetBG() {
    body.className = '';
}

function launchHeartBurst() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = `${Math.random() * 88 + 6}%`;
    heart.style.fontSize = `${Math.random() * 0.9 + 0.8}rem`;
    heart.style.color = ['#c86a7d', '#d7a172', '#f0b6b8'][Math.floor(Math.random() * 3)];
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2600);
}

for (let i = 0; i < 10; i++) {
    setTimeout(launchHeartBurst, i * 260);
}

setInterval(launchHeartBurst, 3200);

helloButton.addEventListener('click', () => {
    window.location.href = 'pages/compliments.html';
});

openLetter.addEventListener('click', () => {
    window.location.href = 'pages/compliments.html';
});