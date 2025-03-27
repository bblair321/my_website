// Get all squares
const squares = document.querySelectorAll('.square');

// Loop through each square and set the background image
for (const square of squares) {
    const bgImage = square.getAttribute('data-bg'); // Get image URL from attribute
    const bgSize = square.getAttribute('data-size') || 'cover'; // Default to cover
    const url = square.getAttribute('data-url'); // Get the link (if any)

    // Apply background image
    if (bgImage) {
        square.style.backgroundImage = `url(${bgImage})`;
        square.style.backgroundSize = bgSize;
    }

    // Make the square clickable
    square.addEventListener('click', () => {
        if (url) {
            window.location.href = url;
        }
    });
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array of gaming-themed icons (could be emoji or images)
const icons = ["🎮", "🕹️", "💾", "🔥", "❤️", "⚔️", "🔫"];
const particles = [];

class Particle {
    constructor(x, y, speed, size, text) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.text = text;
    }

    update() {
        this.y += this.speed; // Move down
        if (this.y > canvas.height) {
            this.y = -this.size; // Reset to top when out of view
            this.x = Math.random() * canvas.width; // Randomize X
        }
    }

    draw() {
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = "white";
        ctx.fillText(this.text, this.x, this.y);
    }
}

// Create random particles
for (let i = 0; i < 30; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speed = Math.random() * 3 + 1;
    let size = Math.random() * 30 + 20;
    let text = icons[Math.floor(Math.random() * icons.length)];
    particles.push(new Particle(x, y, speed, size, text));
}

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});