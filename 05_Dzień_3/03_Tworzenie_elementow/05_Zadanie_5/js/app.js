// Pobierz przycisk "Usuń wszystkie elementy"
const removeButton = document.getElementById("remove");

// Dodaj event "click" do przycisku
removeButton.addEventListener("click", function() {
  // Pobierz element listy
  const list = document.getElementById("list");
  
  // Usuń wszystkie dzieci z listy
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

const list = document.querySelector('#list');
const button = document.querySelector('#remove');

button.addEventListener('click', function () {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
});
