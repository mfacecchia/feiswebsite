window.matchMedia("(prefers-color-scheme: dark)"),
    addEventListener("change", (e) => {
        updateThemePreference();
    });

function getPreferredTheme() {
    let preference = localStorage.getItem("theme_preference");
    if (!preference) {
        updateThemePreference();
    }
    updateThemeControllerCheckbox(preference === "dark");
    setPageTheme(preference);
}

function updateThemePreference() {
    const body = document.querySelector("body");
    const preference = body.classList.contains("dark") ? "dark" : "light";
    updateThemeControllerCheckbox(preference === "dark");
    localStorage.setItem("theme_preference", preference);
}

function updateThemeControllerCheckbox(isDark) {
    document.querySelector("#themeController").checked = isDark;
}

function setPageTheme(preference) {
    if (!["light", "dark"].includes(preference) || preference === "light") {
        // Light theme
        document.querySelector("body").classList.remove("dark");
        return;
    }
    document.querySelector("body").classList.add("dark");
}

function toggleTheme() {
    document.querySelector("body").classList.toggle("dark");
}
