
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("drinks__alle");
  initFilterButtons();
});


//Produkter
function filterSelection(category) {

  console.log("Filtering by category: " + category);
  const items = document.getElementsByClassName("drinks__item");
  const showClass = "drinks__show";

  for (let i = 0; i < items.length; i++) { 
    items[i].classList.remove(showClass);

    if (category === "drinks__alle" || items[i].classList.contains(category)) {

      items[i].classList.add(showClass); 
    }
  }
}

//Buttons
function initFilterButtons() {
  console.log("Initializing filter buttons."); 
  const btnContainer = document.getElementById("drinks__btn-container"); 
  if (!btnContainer) return; 
  
  const btns = btnContainer.getElementsByClassName("drinks__btn");

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