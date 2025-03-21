// JavaScript to make the square interactive

// Get the square element
const squares = document.querySelectorAll('.square');

// Add event listener for click to toggle the "active" class
const greet = (name) => `Hello, ${name}!`;

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