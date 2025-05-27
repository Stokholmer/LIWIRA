document.addEventListener("DOMContentLoaded", function () {
  filterSelection("drinks__alle");
  initFilterButtons();
});

function filterSelection(category) {
  const items = document.getElementsByClassName("drinks__item");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.style.display = (category === "drinks__alle" || item.classList.contains(category)) ? "flex" : "none";
  }
}

function initFilterButtons() {
  const container = document.getElementById("drinks__btn-container");
  if (!container) return;

  const btns = container.getElementsByClassName("drinks__btn");

  for (let btn of btns) {
    btn.addEventListener("click", function () {
      for (let b of btns) {
        b.classList.remove("active");
      }
      this.classList.add("active");
      const category = this.getAttribute("data-filter");
      filterSelection(category);
    });
  }
}
