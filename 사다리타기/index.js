import Lotto from "./Lotto.js";

class App {
  constructor() {
    const $button = document.querySelector("button");
    $button.addEventListener("click", this.handleClick);
  }
  handleClick() {
    const lotto = new Lotto(5);
    const $input = document.querySelector("input");

    $input.value = lotto.setLottoNumberAll().join();
  }
}

window.onload = new App();
