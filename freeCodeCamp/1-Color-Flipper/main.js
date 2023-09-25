class App {
  constructor() {
    this.main();
    this.randomText = "";
    const $button = document.querySelector("button");
    $button.addEventListener("click", () => {
      this.main();
    });
  }
  main() {
    this.makeRandomText();
    this.changeBackground();
  }
  makeRandomText() {
    const num = "1234567890ABCDEF";
    let arr = [];
    while (arr.length < 6) {
      let randomIndex = Math.floor(Math.random() * 16);
      arr.push(num[randomIndex]);
    }
    this.randomText = arr.join("");
  }
  changeBackground() {
    document.body.style.background = `#${this.randomText}`;
    const p = document.querySelector("p");
    p.innerText = `Background Color : #${this.randomText}`;
  }
}

window.onload = () => {
  new App();
};
