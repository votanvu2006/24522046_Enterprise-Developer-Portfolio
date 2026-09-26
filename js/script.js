const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Light Mode";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");

        themeToggle.textContent = "Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
});