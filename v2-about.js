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

setInterval(showSlide, 6000);
document.addEventListener("DOMContentLoaded", showSlide);




document.addEventListener("DOMContentLoaded", function() {
    let backToTopBtn = document.getElementById("backToTop");

    
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Scroll to top when clicked
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
