// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    // Apply stored mode
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        // Save preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "next", "prev");
        
        if (index === currentSlide) {
            slide.classList.add("active");
        } else if (index === (currentSlide + 1) % slides.length) {
            slide.classList.add("next");
        } else {
            slide.classList.add("prev");
        }
    });

    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);
document.addEventListener("DOMContentLoaded", showSlide);

