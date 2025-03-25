document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");

    if (!toggleButton) {
        console.error("Dark mode toggle button not found!");
        return;
    }

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "🌝"; // Sun emoji
    } else {
        toggleButton.textContent = "🌚"; // Moon emoji
    }

    // Add event listener for toggle
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "🌝";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌚";
        }
    });
});

