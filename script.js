"use strict";

const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");

const startScreen = document.getElementById("start-screen");
const preparationScreen = document.getElementById("preparation-screen");

function showScreen(screenToShow) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  screenToShow.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", () => {
  showScreen(preparationScreen);
});

backButton.addEventListener("click", () => {
  showScreen(startScreen);
});