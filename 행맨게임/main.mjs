import { sleep } from "./script/sleep.mjs";

const resultImage = document.querySelector(".result__image");
const startButton = document.querySelector(".choice__start__button");
const timeLeft = document.querySelector(".choice__time");
function changeResultImage(num) {
  resultImage.setAttribute("src", `./images/hang-${num}.png`);
}
async function decreaseTime() {
  let TOTAL_TIME = 60;
  startButton.setAttribute("disabled", "");
  while (TOTAL_TIME > 0) {
    await sleep(1000);
    TOTAL_TIME--;
    timeLeft.innerText = `time: ${TOTAL_TIME}`;
  }
  startButton.removeAttribute("disabled");
}

startButton.addEventListener("click", decreaseTime);
