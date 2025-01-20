function loadPageTheme() {
    const preference = getThemePreference();
    updateThemePreference(preference);
    setPageTheme(preference);
}

function getThemePreference() {
    let preference = localStorage.getItem("theme_preference");
    if (!preference) {
        preference = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }
    return preference;
}

function updateThemePreference(preference) {
    localStorage.setItem(
        "theme_preference",
        preference === "dark" ? "dark" : "light"
    );
}

function updateThemeControllerCheckbox(isDark) {
    document.querySelector("#themeController").checked = isDark;
}

function setPageTheme(preference) {
    updateThemeControllerCheckbox(preference === "dark");
    const body = document.querySelector("body");
    if (preference === "dark") {
        // Setting light theme
        body.classList.add("dark");
        return;
    }
    body.classList.remove("dark");
}

function toggleTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    updateThemePreference(body.classList.contains("dark") ? "dark" : "light");
}
