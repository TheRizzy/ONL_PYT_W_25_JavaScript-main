
const counter = document.querySelectorAll('.counter');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button, index) {
  let count = 0;
  button.addEventListener('click', function () {
    count = count + 1;
    counter[index].innerText = count;
  });
});