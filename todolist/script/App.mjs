function saveTodo() {
  const addTodoInputValue = $addTodoInput.value;
  removeTodoInInput();
  return addTodoInputValue;
}

function activatePagenation(e) {
  let idx = null;
  [...$pagenation.children].forEach((page) => {
    page.classList.toggle("active", e.target === page);
    idx = Number(e.target.innerText);
  });
  showPagenation(idx);
}

function showPagenation(num) {
  $pagenation.forEach((item) => item.classList.remove("active"));
  $pagenation.children[num].classList.add("active");
  [...$todos.children].forEach((item) => item.classList.remove("active"));
  let arr = [...$todos.children];

  for (let i = 5 * (num - 1); i < 5 * num; i++) {
    arr[i]?.classList.add("active");
  }
}
function createPagenation(num) {
  const calculatePageCount = Math.ceil(num / PAGE_VOLUME);
  $pagenation.innerHTML = "";
  for (let i = 1; i <= calculatePageCount; i++) {
    $pagenation.innerHTML += `<span class="pagenation__number">${i}</span>`;
  }
}

function countTodos() {
  return $todos.children.length;
}

function removeTodoInInput() {
  $addTodoInput.value = "";
}

function deleteTodoInList(e) {
  if (e.target.className === "todo__delete") {
    $todos.removeChild(e.target.parentNode);
    showPagenation(Math.ceil($todos.children.length / 5));
  }
}

function addTodoItem(value) {
  $todos.innerHTML += `<li class="todo__item">
  ${value}<span class="todo__delete">❌</span>
</li>`;
}

const $addTodoButton = document.querySelector(".addTodoButton");
const $todos = document.querySelector(".todo__list");
const $addTodoInput = document.querySelector(".addTodoInput");
const $formInHead = document.querySelector(".formInHead");
const $pagenation = document.querySelector(".pagenation");
const PAGE_VOLUME = 5;

function main() {
  showPagenation(Math.ceil($todos.children.length / 5));
  $formInHead.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  $todos.addEventListener("click", (e) => {
    deleteTodoInList(e);
    createPagenation(countTodos());
  });

  $addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTodoItem(saveTodo());
    createPagenation(countTodos());
    showPagenation(Math.ceil($todos.children.length / 5));
  });

  $pagenation.addEventListener("click", activatePagenation);
}

main();
