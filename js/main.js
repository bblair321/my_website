// JavaScript to make the square interactive and to handle the wave background

// Get the square elements
const squares = document.querySelectorAll('.square');

// Add event listener for each square using for...of loop
for (const square of squares) {
    // Get the background image URL from the data-bg attribute
    const bgImage = square.getAttribute('data-bg');
    const bgSize = square.getAttribute('data-size'); // Get the background-size setting
    const url = square.getAttribute('data-url'); // Get the URL from the data-url attribute

    // Set the background image dynamically
    square.style.backgroundImage = `url(${bgImage})`;
    square.style.backgroundSize = bgSize;

    // Make the square clickable
    square.addEventListener('click', () => {
        if (url) {
            window.location.href = url; // Redirect to the specified URL
        }
    });
}

// Wave background animation (canvas)
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Wave properties
const waveAmplitude = 30; // Height of the wave
const waveFrequency = 0.02; // Frequency of the wave
const waveSpeed = 0.03; // Speed of the wave

let offset = 0; // Wave animation offset

// Draw the wave
function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  ctx.fillStyle = 'rgba(65, 119, 183, 100)'; // Color of the wave
  ctx.beginPath();

  // Create the wave shape
  for (let x = 0; x < canvas.width; x++) {
    const y = waveAmplitude * Math.sin(x * waveFrequency + offset) + canvas.height / 2;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();

  // Fill the wave
  ctx.fill();

  // Update offset for the animation
  offset += waveSpeed;
  if (offset > Math.PI * 2) offset = 0;

  // Call drawWave again to animate
  requestAnimationFrame(drawWave);
}

// Start the wave animation
drawWave();

// Resize the canvas if the window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});