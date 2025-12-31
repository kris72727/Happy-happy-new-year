function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id !== 'video-reel') document.getElementById('myReel').pause();
}

function startFireworks() {
    var duration = 2 * 1000;
    var end = Date.now() + duration;
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#D4AF37', '#FFFFFF'] });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#D4AF37', '#FFFFFF'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
    setTimeout(() => nextScreen('video-reel'), 1500);
}

function showPhotos() {
    nextScreen('memories');
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#D4AF37', '#ffffff'] });

    const canvas = document.getElementById('photo-canvas');
    canvas.innerHTML = ''; 

    for (let i = 1; i <= 28; i++) {
        const img = document.createElement('div');
        img.className = 'scatter-photo';
        img.innerHTML = `<img src="img${i}.jpg">`;
        img.style.left = "50%";
        img.style.top = "50%";
        canvas.appendChild(img);

        setTimeout(() => {
            const randomX = Math.random() * 80 + 10; 
            const randomY = Math.random() * 70 + 10; 
            const randomRot = Math.random() * 40 - 20;
            img.style.left = `${randomX}%`;
            img.style.top = `${randomY}%`;
            img.style.transform = `translate(-50%, -50%) rotate(${randomRot}deg)`;
            img.style.opacity = "1";
        }, i * 70);
    }
}

function finalCelebration() {
    confetti({ particleCount: 500, spread: 160, origin: { y: 0.6 }, colors: ['#D4AF37', '#ffffff'] });
}
