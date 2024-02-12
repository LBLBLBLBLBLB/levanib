const root_colors = document.querySelector(":root");
const themeSwitch = document.getElementById("theme-switcher");

let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const setDarkMode = () => {
  root_colors.style.setProperty("--txt-color", "#fff");
  root_colors.style.setProperty("--background-color", "#000");
};

const setLightMode = () => {
  root_colors.style.setProperty("--txt-color", "#000");
  root_colors.style.setProperty("--background-color", "#fff");
};

const updateTheme = () => {
  if (isDarkMode) {
    setDarkMode();
    themeSwitch.checked = true;
  } else {
    setLightMode();
    themeSwitch.checked = false;
  }
};

themeSwitch.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  updateTheme();
});

updateTheme();

// cursor animation
const circleEl = document.querySelector(".circle");

const mouse = { x: 0, y: 0 };
const prevMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

const speed = 0.17;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - prevMouse.x;
  const deltaMouseY = mouse.y - prevMouse.y;

  prevMouse.x = mouse.x;
  prevMouse.y = mouse.y;

  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );

  const scaleValue = (mouseVelocity / 150) * 0.5;

  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleEl.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
};
tick();
