const loading = document.querySelector(".loading img");
const itemContainer = document.querySelector(".item-container");
const rules = document.querySelector(".rules");
const playerBattle = document.querySelector(".battle-wrapper:first-child");
const computerBattle = document.querySelector(".battle-wrapper:last-child");
function changeBorderColor() {
  const itemImage = playerBattle.querySelector(".item__image");
  const imageSrc = itemImage.getAttribute("src");
  if (imageSrc.includes("가위")) {
    itemImage.parentNode.style.border = "10px solid gold";
  }
  if (imageSrc.includes("손가락벌림")) {
    itemImage.parentNode.style.border = "10px solid skyblue";
  }
  if (imageSrc.includes("보")) {
    itemImage.parentNode.style.border = "10px solid rgb(75, 147, 255)";
  }
  if (imageSrc.includes("도마뱀")) {
    itemImage.parentNode.style.border = "10px solid rgb(255, 110, 255)";
  }
  if (imageSrc.includes("바위")) {
    itemImage.parentNode.style.border = "10px solid tomato";
  }
}

document.body.addEventListener("click", (e) => {
  if (!rules.contains(e.target)) {
    rules.style.display = "none";
  }
  if (e.target.className === "rules__button") {
    rules.style.display = "block";
  }
  if (itemContainer.style.display !== "none") {
    if (e.target.className === "item" || e.target.className === "item__image") {
      let target = e.target;
      if (e.target.className === "item__image") {
        target = e.target.parentNode;
      }
      playerBattle.parentNode.style.display = "flex";
      playerBattle.innerHTML += target.parentNode.innerHTML;
      changeBorderColor();
      itemContainer.style.display = "none";
    }
  }
});
