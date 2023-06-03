const buttons = document.querySelectorAll('.deleteBtn');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    this.parentElement.parentElement.remove();
  });
});