document.addEventListener("DOMContentLoaded", function () {
    const sparkleContainer = document.getElementById("sparkle-container");
    const wavingHand = document.getElementById("waving-hand");

    function createSparkle() {
        const sparkle = document.createElement("span");
        sparkle.classList.add("sparkle");
        sparkle.innerHTML = "✨"; // You can try "💫" or "🌟" for different effects

        // Get hand position
        const handRect = wavingHand.getBoundingClientRect();
        const x = Math.random() * handRect.width * 0.8; // Spread across width
        const y = Math.random() * handRect.height * 0.6 + handRect.height * 0.2; // Spread vertically

        // Set sparkle position
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        // Random sizes for variation
        const size = Math.random() * 20 + 10; 
        sparkle.style.fontSize = `${size}px`;
        sparkle.style.opacity = Math.random() * 0.5 + 0.5; // Random transparency

        // Add sparkle effect
        sparkleContainer.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => sparkle.remove(), 1500);
    }

    // When hovering, create multiple sparkles with slight delay
    wavingHand.addEventListener("mouseenter", () => {
        for (let i = 0; i < 20; i++) { // More sparkles = more WOW ✨
            setTimeout(createSparkle, i * 70); // Slight stagger effect
        }
    });
});
