document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
    const themeIcon = toggleButton.querySelector("img"); 
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "v2-images/lightmoon.jpg"; 
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.src = "v2-images/darkmoon.jpg";
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "v2-images/lightmoon.jpg"; 
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "v2-images/darkmoon.jpg"; 
            localStorage.setItem("theme", "light");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let backToTopBtn = document.getElementById("backToTop");

    // Show button when user scrolls down 300px
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

