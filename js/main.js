let change = false;
let infoChange = false;

let tvScreen = document.getElementById("tv-screen");
let onOffButton = document.getElementById("on-off-button");
let numberButton = document.getElementsByClassName("number-button");
let infoButton = document.getElementById("info-button");
let tvInfo = document.getElementById("tv-info");
let chanelName = document.getElementById("chanel-name");
let dateTime = document.getElementById("date");

let arrayChanels = Array.from(numberButton);

for (let i = 0; i < arrayChanels.length; i++) {
  arrayChanels[i].addEventListener("click", () => {
    if (change) {
      tvScreen.classList.replace(tvScreen.classList[0], `ch${i + 1}`);
      chanelName.innerHTML = `Channel ${i + 1}`;
    }
  });
}

dateTime.innerHTML = "date and time";

onOffButton.addEventListener("click", () => {
  tvScreen.classList.toggle("on");
  change = !change;
  if (!change) {
    tvScreen.classList.replace(tvScreen.classList[0], "off");
    infoChange = false;
    tvInfo.classList.remove("info-on");
    chanelName.innerHTML = "";
  } else {
    null;
  }
});

infoButton.addEventListener("click", () => {
  if (change) {
    tvInfo.classList.toggle("info-on");
    infoChange = !infoChange;
  }
});
