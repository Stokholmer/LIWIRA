document.addEventListener("DOMContentLoaded", function () {
  filterSelection("drinks__alle");
  initFilterButtons();
});

function filterSelection(category) {
  const items = document.getElementsByClassName("drinks__item");

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (category === "drinks__alle" || item.classList.contains(category)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  }
}

function initFilterButtons() {
  const container = document.getElementById("drinks__btn-container");
  if (!container) return;

  const btns = container.getElementsByClassName("drinks__btn");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
      }

      this.classList.add("active");

      const category = this.getAttribute("data-filter");
      filterSelection(category);
    });
  }
}
