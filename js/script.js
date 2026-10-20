// Find the theme button in the DOM.
const themeButton = document.getElementById("theme-btn");

// Restore a saved theme when the page loads.
// Browsers can restrict storage, so the site should still work without it.
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch (error) {
  console.warn("Theme preference could not be loaded.", error);
}

if (savedTheme === "light") {
  document.documentElement.classList.add("light-theme");
}

// Keep the button label and accessibility state in sync with the active theme.
function updateThemeButton() {
  const isLight = document.documentElement.classList.contains("light-theme");
  themeButton.textContent = isLight ? "Dark mode" : "Light mode";
  themeButton.setAttribute("aria-pressed", String(isLight));
}

updateThemeButton();

// Switch themes on click, then remember the visitor's preference.
themeButton.addEventListener("click", function () {
  const isLight = document.documentElement.classList.toggle("light-theme");
  updateThemeButton();

  try {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  } catch (error) {
    console.warn("Theme preference could not be saved.", error);
  }
});
