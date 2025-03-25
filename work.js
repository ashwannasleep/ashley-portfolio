document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
    const themeIcon = toggleButton.querySelector("img"); 
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "images/lightmoon.jpg"; 
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.src = "images/darkmoon.jpg";
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "images/lightmoon.jpg"; 
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "images/darkmoon.jpg"; 
            localStorage.setItem("theme", "light");
        }
    });
});


