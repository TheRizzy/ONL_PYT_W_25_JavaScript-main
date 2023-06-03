
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentElement.style.backgroundColor = randomColor;
  });
});