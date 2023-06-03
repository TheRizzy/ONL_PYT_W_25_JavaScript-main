// Pobierz elementy formularza i tabeli
const form = document.querySelector("form");
const table = document.getElementById("orders");

// Dodaj event "click" do przycisku "Dodaj"
document.getElementById("add").addEventListener("click", function() {
  // Pobierz wartości z inputów formularza
  const orderId = document.getElementById("orderId").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  // Utwórz nowy wiersz w tabeli
  const newRow = document.createElement("tr");

  // Utwórz komórki w nowym wierszu
  const orderIdCell = document.createElement("td");
  const itemCell = document.createElement("td");
  const quantityCell = document.createElement("td");

  // Ustaw wartości tekstowe komórek
  orderIdCell.textContent = orderId;
  itemCell.textContent = item;
  quantityCell.textContent = quantity;

  // Dodaj komórki do nowego wiersza
  newRow.appendChild(orderIdCell);
  newRow.appendChild(itemCell);
  newRow.appendChild(quantityCell);

  // Dodaj nowy wiersz do tabeli
  table.querySelector("tbody").appendChild(newRow);

  // Wyczyść inputy formularza po dodaniu nowego wpisu
  form.reset();
});
