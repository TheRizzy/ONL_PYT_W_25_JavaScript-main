// Pobierz elementy formularza
const selectSystem = document.querySelector(".form-control");
const windowsImage = document.querySelector('img[src="img/windows.png"]');
const macosImage = document.querySelector('img[src="img/macos.svg"]');
const ubuntuImage = document.querySelector('img[src="img/ubuntu.png"]');

// Funkcja do obsługi zmiany wyboru w selekcie
function handleSelectChange() {
  // Sprawdź wartość wybraną w selekcie
  const selectedOption = selectSystem.value;

  // Ukryj wszystkie obrazki
  windowsImage.style.display = "none";
  macosImage.style.display = "none";
  ubuntuImage.style.display = "none";

  // Wyświetl odpowiedni obrazek na podstawie wyboru
  if (selectedOption === "Windows") {
    windowsImage.style.display = "block";
  } else if (selectedOption === "MacOS") {
    macosImage.style.display = "block";
  } else if (selectedOption === "Ubuntu") {
    ubuntuImage.style.display = "block";
  }
}

// Wywołaj funkcję handleSelectChange przy starcie strony
handleSelectChange();

// Dodaj event "change" do selekta
selectSystem.addEventListener("change", handleSelectChange);
