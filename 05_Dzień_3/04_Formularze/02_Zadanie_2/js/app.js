// Pobierz elementy formularza
var checkboxInvoice = document.getElementById("invoice");
var invoiceDataSection = document.getElementById("invoiceData");

// Ukryj sekcję z danymi do faktury na starcie strony
invoiceDataSection.style.display = "none";

// Funkcja do sprawdzania stanu checkboxa
function handleInvoiceCheckbox() {
  // Sprawdź, czy checkbox jest zaznaczony
  if (checkboxInvoice.checked) {
    // Pokaż sekcję z danymi do faktury
    invoiceDataSection.style.display = "block";
  } else {
    // Ukryj sekcję z danymi do faktury
    invoiceDataSection.style.display = "none";
  }
}

// Wywołaj funkcję handleInvoiceCheckbox przy starcie strony
handleInvoiceCheckbox();

// Dodaj event "change" do checkboxa
checkboxInvoice.addEventListener("change", handleInvoiceCheckbox);
