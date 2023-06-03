// Pobierz wszystkie elementy div o klasie "listContainer"
const listContainers = document.getElementsByClassName("listContainer");

// Iteruj przez wszystkie elementy div
for (const i = 0; i < listContainers.length; i++) {
  // Dodaj event "mouseover" do każdego elementu div
  listContainers[i].addEventListener("mouseover", function() {
    // Pobierz wszystkie elementy li wewnątrz aktualnego elementu div
    const listItems = this.getElementsByTagName("li");
    listItems.firstElementChild.style.backgroundColor = "red";

    // Iteruj przez wszystkie elementy li
    for (const j = 0; j < listItems.length; j++) {
      // Ustaw odpowiedni kolor tła dla pierwszego, ostatniego i innych elementów
      if (j === 0) {
        listItems[j].style.backgroundColor = "red";
      } else if (j === listItems.length - 1) {
        listItems[j].style.backgroundColor = "blue";
      } else {
        listItems[j].style.backgroundColor = "green";
      }
    }
  });
}