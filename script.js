document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("navbarBurger");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("overlayClose");

  burger.addEventListener("click", () => {
    overlay.hidden = false;
    overlay.style.width = "100%";
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.width = "0";
    setTimeout(() => {
      overlay.hidden = true;
    }, 300);
  });
});
