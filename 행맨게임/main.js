import { sleep } from "./script/sleep.js";
import { words } from "./db.mjs";

const resultImage = document.querySelector(".result__image");
const startButton = document.querySelector(".choice__start__button");
const timeLeft = document.querySelector(".choice__time");
const pushAlphabetWrapper = document.querySelector(".choice__alphabet-wrapper");
const answer = document.querySelector(".choice__middle__body");

function changeResultImage(num) {
  resultImage.setAttribute("src", `./images/hang-${num}.png`);
}
const firstWord = {
  questionWord: "",
  changedWord: "",
  choiceWord() {
    const randomNumber = Math.ceil(Math.random() * 10);
    const randomWord = words[randomNumber].word;
    this.questionWord = randomWord;
    this.changedWord = randomWord.replaceAll(/\w/g, "_");
  },
};

function printWord(alphabet, choiceButton) {
  const beforeWord = firstWord.questionWord;
  const afterWord = firstWord.changedWord;
  const result = checkWord(beforeWord, afterWord, alphabet, choiceButton);
  firstWord.changedWord = result;
  result.replaceAll("", " ");
  answer.innerText = result;
}
function checkWord(beforeWord, afterWord, alphabet) {
  let arr = [];
  let afterArr = [...afterWord];
  for (let i = 0; i < beforeWord.length; i++) {
    let index = beforeWord.indexOf(alphabet, i);
    if (index !== -1 && !arr.includes(index)) {
      arr.push(index);
    }
  }
  arr.forEach((item) => afterArr.splice(item, 1, alphabet));
  console.log(arr);
  return afterArr.join("");
}
async function decreaseTime() {
  let TOTAL_TIME = 60;
  startButton.style.opacity = "0";
  while (TOTAL_TIME > 0) {
    await sleep(1000);
    TOTAL_TIME--;
    timeLeft.innerText = `time: ${TOTAL_TIME}`;
  }
  startButton.style.opacity = "1";
}
startButton.addEventListener("click", start);

function start() {
  decreaseTime();
  firstWord.choiceWord();
}

pushAlphabetWrapper.addEventListener("click", pushAlphabet);

function pushAlphabet(e) {
  if (e.target.className === "alphabet") {
    const word = e.target.innerText.toLowerCase();
    e.target.style.opacity = "0";
    e.target.setAttribute("disabled", "");
    printWord(word, choiceButton);
  }
}
