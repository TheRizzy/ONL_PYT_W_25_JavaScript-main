// Pobierz elementy formularza
var form = document.querySelector("form");
var team1Input = document.getElementById("team1");
var team2Input = document.getElementById("team2");
var points1Input = document.getElementById("points1");
var points2Input = document.getElementById("points2");
var tableBody = document.querySelector("tbody");

// Funkcja do obsługi dodawania wyników do tabeli
function addResultToTable(e) {
  e.preventDefault();

  // Pobierz wartości wprowadzone przez użytkownika
  var team1 = team1Input.value;
  var team2 = team2Input.value;
  var points1 = parseInt(points1Input.value);
  var points2 = parseInt(points2Input.value);

  // Walidacja wprowadzonych danych
  if (team1 === team2) {
    alert("Drużyny muszą być różne!");
    return;
  }

  if (points1 < 0 || points2 < 0) {
    alert("Liczba goli powinna być nieujemna!");
    return;
  }

  // Stwórz nowy wiersz tabeli
  var newRow = document.createElement("tr");

  // Dodaj komórki z danymi do wiersza
  var team1Cell = document.createElement("td");
  team1Cell.textContent = team1;
  newRow.appendChild(team1Cell);

  var team2Cell = document.createElement("td");
  team2Cell.textContent = team2;
  newRow.appendChild(team2Cell);

  var pointsCell = document.createElement("td");
  pointsCell.textContent = points1 + " - " + points2;
  newRow.appendChild(pointsCell);

  // Dodaj nowy wiersz do tabeli
  tableBody.appendChild(newRow);

  // Zresetuj wartości formularza
  form.reset();
}

// Dodaj event "submit" do formularza
form.addEventListener("submit", addResultToTable);
