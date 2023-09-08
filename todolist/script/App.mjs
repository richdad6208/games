import { Todos } from "./Todos.mjs";

class App {
  constructor() {
    this.addItemButton = document.querySelector(".addItemButton");
    this.addItemButton.addEventListener("click", this.addItem);
  }

  addItem(e) {
    e.preventDefault();
    console.log(Todos.TodosElement);
  }
}
window.onload = () => {
  new App();
};
