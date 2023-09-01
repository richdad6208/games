import { sleep } from "./script/sleep.js";
import { words } from "./db.mjs";

const resultImage = document.querySelector(".result__image");
const startButton = document.querySelector(".choice__start__button");
const timeLeft = document.querySelector(".choice__time");
const pushAlphabetWrapper = document.querySelector(".choice__alphabet-wrapper");
const answer = document.querySelector(".choice__middle__body");
const leftChance = document.querySelector(".choice__chance");
const gameOver = document.querySelector(".gameover-screen");

const firstWord = {
  questionWord: "",
  changedWord: "",
  leftCount: 7,
  leftTime: 60,
  choiceWord() {
    const randomNumber = Math.ceil(Math.random() * 10);
    const randomWord = words[randomNumber].word;
    this.questionWord = randomWord;
    this.changedWord = randomWord.replaceAll(/\w/g, "_");
  },
};

function printWord(alphabet) {
  console.log(beforeWord, afterWord);
  const beforeWord = firstWord.questionWord;
  const afterWord = firstWord.changedWord;
  const result = checkWord(beforeWord, afterWord, alphabet);
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
  return afterArr.join("");
}
async function decreaseTime() {
  firstWord.leftTime = 60;
  startButton.style.opacity = "0";
  while (firstWord.leftTime > 0) {
    await sleep(1000);
    firstWord.leftTime--;
    timeLeft.innerText = `time: ${firstWord.leftTime}`;
  }
  checkChance();
  startButton.style.opacity = "1";
}
startButton.addEventListener("click", start);

function reactiveAlphabetButton() {
  [...pushAlphabetWrapper.children].forEach((item) => {
    item.removeAttribute("disabled");
    item.style.opacity = "1";
  });
}

function start(e) {
  matchChangeToResult(7);
  reactiveAlphabetButton();
  firstWord.choiceWord();
  decreaseTime();
  pushAlphabetWrapper.addEventListener("click", pushAlphabet);
}
function retry(e) {
  if (e.target.className === "gameover__retry") {
    gameOver.style.left = "2000px";
    gameOver.style.opacity = "0";
    start();
  }
}
gameOver.addEventListener("click", retry);
function checkChance() {
  if (firstWord.leftCount === 0 || firstWord.leftTime === 0) {
    resultImage.setAttribute("src", `./images/hang-0.png`);
    gameOver.style.left = "0";
    gameOver.style.opacity = "1";
  }
}
function matchChangeToResult(num) {
  resultImage.setAttribute("src", `./images/hang-${num}.png`);
}
function pushAlphabet(e) {
  if (e.target.className === "alphabet") {
    if (firstWord.leftCount > 0) {
      firstWord.leftCount--;
      leftChance.innerHTML = `chances: ${firstWord.leftCount}`;
      matchChangeToResult(firstWord.leftCount);
      checkChance();
      const word = e.target.innerText.toLowerCase();
      e.target.style.opacity = "0";
      e.target.setAttribute("disabled", "");
      printWord(word);
    }
  }
}
