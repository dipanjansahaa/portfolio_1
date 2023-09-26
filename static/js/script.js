const modeToggle = document.getElementById("mode-toggle");
const lightStyles = document.getElementById("light-styles");
const darkStyles = document.getElementById("dark-styles");

let isDarkMode = false;

modeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode; // Toggle the mode

    if (isDarkMode) {
        darkStyles.removeAttribute("disabled");
        lightStyles.setAttribute("disabled", "true");
    } else {
        lightStyles.removeAttribute("disabled");
        darkStyles.setAttribute("disabled", "true");
    }
});
