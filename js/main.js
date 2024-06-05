let change = false;
let tvScreen = document.getElementById("tv-screen");
let onOffButton = document.getElementById("on-off-button");

onOffButton.addEventListener("click", () => {
  tvScreen.classList.toggle("on");
});
