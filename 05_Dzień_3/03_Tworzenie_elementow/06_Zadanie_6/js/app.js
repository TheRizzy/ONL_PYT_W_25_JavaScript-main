// Pobierz elementy listy
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");

// Funkcja do sortowania elementów
function sortList(list) {
  // Pobierz wszystkie elementy listy
  const items = Array.from(list.children);
  
  // Posortuj elementy listy alfabetycznie
  items.sort(function(a, b) {
    const textA = a.textContent.toLowerCase();
    const textB = b.textContent.toLowerCase();
    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
  
  // Wyczyść listę
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  
  // Dodaj posortowane elementy do listy
  items.forEach(function(item) {
    list.appendChild(item);
  });
}

// Dodaj event "click" do elementów listy
list1.addEventListener("click", function(event) {
  // Sprawdź, czy kliknięto na element listy
  if (event.target.tagName === "A") {
    // Pobierz kliknięty element
    const clickedItem = event.target;
    
    // Przenieś kliknięty element do listy 2
    list2.appendChild(clickedItem);
    
    // Sortuj listę 2
    sortList(list2);
  }
});

list2.addEventListener("click", function(event) {
  // Sprawdź, czy kliknięto na element listy
  if (event.target.tagName === "A") {
    // Pobierz kliknięty element
    const clickedItem = event.target;
    
    // Przenieś kliknięty element do listy 1
    list1.appendChild(clickedItem);
    
    // Sortuj listę 1
    sortList(list1);
  }
});
