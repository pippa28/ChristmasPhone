// script.js

// Snowflakes animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.position = 'absolute';
    snowflake.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Random fall time
    // snowflake.style.animationDelay = `${Math.random() * 3}s`;  // Random delay for falling
    
    // Add snowflake to the container
    document.querySelector('.snowflakes').appendChild(snowflake);
    
    // Snowflake CSS class for animation
    const style = document.createElement('style');
    style.innerHTML = `
        .snowflake {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: fall linear infinite;
        }
        @keyframes fall {
            0% {
                top: -10px;
                transform: translateX(0);
            }
            100% {
                top: 100vh;
                transform: translateX(${Math.random() * 20 - 10}vw);
            }
        }
    `;
    document.head.appendChild(style);
}

// Start button click event
document.getElementById('startButton').addEventListener('click', function() {
    gsap.to('.message', { opacity: 0, duration: 1, onComplete: () => {
        document.querySelector('.message').style.display = 'none';  // Hide message
        createSnowflakes();  // Create falling snowflakes
    }});
});

// Generate snowflakes at intervals
function createSnowflakes() {
    setInterval(createSnowflake, 200); // Generate snowflakes every 2000ms
}

// Optional: Create some snowflakes immediately for effect
createSnowflakes();
