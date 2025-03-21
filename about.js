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
