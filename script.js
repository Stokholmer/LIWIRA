// "document" er en global variabel udstillet af browseren.
// vi tilføjer en event listener på eventet "DOMContentLoaded", som bliver 
// sendt ud når browseren er færdig med at indlæse hele siden.
// i den event listener eksekverer vi to metoder der henholdvis laver en "default"
// filtrering, efterfulgt af en metode der sætter event listeners på filter knapperne.
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("drikkevare__all");
  initFilterButtons();
});


// Filtrerer de viste frivillig-billeder baseret på den valgte kategori. 
// denne funktion tager imod en parameter, som vi forventer er en string.
// Denne string bruger vi til at filterer med
function filterSelection(category) {
  // sender en besked to browserens konsol om hvilken parameter værdi den modtager for debugging.
  console.log("Filtering by category: " + category);
  // vi tager alle elementer i dokumentet med class "gallery_column" (som er elementerne i galleriet)
  // og gemmer dem i et const array.
  const items = document.getElementsByClassName("drikkevare__all");
  // Sring "" Klassen der styrer synligheden. vi gemmer det her så det er lettere at ændre 
  // hvis nødvendigt
  const showClass = "drikkevare__all";

  // her looper vi igennem arrayet af galleri elementer
  for (let i = 0; i < items.length; i++) { 
    // Fjern altid "gallery_show"-klassen først for at skjule alle elementer
    items[i].classList.remove(showClass);

    // her tilføjer vi klassen der gør elementet synligt, hvor vi først laver et tjek
    // i en "if" der gør således:
    // "hvis category er i lig med "gallery_alle" er true 
    // ELLER elementet i arrayet fra index "i" indeholder samme class som parameteren "category" er TRUE
    if (category === "drikkevare__all" || items[i].classList.contains(category)) {
      // tilføj værdien fra showClass til class listen på elementet i gallery arrayet
      items[i].classList.add(showClass); 
    }
  }
}

// metode der tilføjer event handlers til alle galleri filter knapper
// køre kun en gang
function initFilterButtons() {
  console.log("Initializing filter buttons."); // Så kan jeg se at den køre, når den skal
  // Det er Const variabel - gemmer containeren for filter knapperne
  const btnContainer = document.getElementById("drikkevare__filter_btns_container"); 
  // tjekker om btnContainer er false eller undefined, altså hvis den ikke findes stopper vi
  // kørslen her
  if (!btnContainer) return; 

  // fra btnContainer finder vi alle elementer med class name "gallery__filter__btn"
  // og gemmer dem i et array
  const btns = btnContainer.getElementsByClassName("drikkevare__filter__btn");

  // nu looper vi gennem btns arrayet med alle knapperne
  for (let i = 0; i < btns.length; i++) {
    // jeg tilføjer en event listener til hver knap for eventet "click"
    btns[i].addEventListener("click", function () {
      // looper igen over alle knapper og
      // fjerner "active"-klassen fra alle knapper
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
      }
      // Tilføj "active"-klassen til den knap, der blev klikket på,
      // altså kalderen af eventet
      this.classList.add("active");

      // Hent data-filter attributten fra den valgte knap
      const category = this.getAttribute("data-filter");

      // Kald filterfunktionen med den valgte kategori fra knappens data attribut
      filterSelection(category);
    });
  }
}
