const loading = document.querySelector(".loading img");
const itemWrapper = document.querySelector(".item-wrapper");
window.onload = () => {
  loading.animate(
    [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }],
    {
      duration: 3000,
      iterations: Infinity,
    }
  );
  setTimeout(() => {
    let loadingDiv = loading.parentElement;
    loadingDiv.firstElementChild.style.display = "none";
    loadingDiv.style.transition = "opacity 0.2s ease-in";
    loadingDiv.style.opacity = "0";
    itemWrapper.style.display = "grid";
  }, 3000);
};
