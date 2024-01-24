const root_colors = document.querySelector(":root");
const theme_switch = document.querySelector(".switch-theme");

let isDarkMode = false;

theme_switch.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    root_colors.style.setProperty("--txt-color", "#fff");
    root_colors.style.setProperty("--background-color", "#000");
  } else {
    root_colors.style.setProperty("--txt-color", "#000");
    root_colors.style.setProperty("--background-color", "#fff");
  }
});
//
