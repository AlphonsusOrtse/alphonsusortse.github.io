// Find the theme button in the DOM.
const themeButton = document.getElementById("theme-btn");

// Respond to each click by adding or removing the light-theme class.
themeButton.addEventListener("click", function () {
  const isLight = document.documentElement.classList.toggle("light-theme");
  themeButton.textContent = isLight ? "Dark mode" : "Light mode";
  themeButton.setAttribute("aria-pressed", String(isLight));
});
