class App {
  constructor() {
    this.countNumber = 0;
    this.$p = document.querySelector("p:nth-of-type(2)");
    this.$p.innerHTML = this.countNumber;
    const $button = document.querySelector(".button-wrapper");

    $button.addEventListener("click", this.handleClick);
  }
  handleClick(e) {
    this.$p = document.querySelector("p:nth-of-type(2)");

    console.log(e);
    if (
      e.target.className === "increase" ||
      e.target.parentNode.className === "increase"
    ) {
      this.countNumber = this.countNumber + 1;
      this.$p.innerHTML = this.countNumber;
    }
    if (
      e.target.className === "reset" ||
      e.target.parentNode.className === "reset"
    )
      this.countNumber = 0;
    if (
      e.target.className === "decrease" ||
      e.target.parentNode.className === "decrease"
    )
      this.countNumber--;
  }
}

window.onload = () => {
  new App();
};
