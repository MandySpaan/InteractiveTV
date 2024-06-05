let change = false;
let tvScreen = document.getElementById("tv-screen");
let onOffButton = document.getElementById("on-off-button");
let numberButton = document.getElementsByClassName("number-button");

let arrayChanels = Array.from(numberButton);

for (let i = 0; i < arrayChanels.length; i++) {
  arrayChanels[i].addEventListener("click", () => {
    if (change) {
      tvScreen.classList.toggle(`ch${i + 1}`);
    }
  });
}

onOffButton.addEventListener("click", () => {
  tvScreen.classList.toggle("on");
  change = !change;
});
