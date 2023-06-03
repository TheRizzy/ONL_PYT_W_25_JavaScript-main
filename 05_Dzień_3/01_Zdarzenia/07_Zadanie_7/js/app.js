const box = document.querySelector('.box.big');

const localX = document.querySelector('#localX');
const localY = document.querySelector('#localY');
const globalX = document.querySelector('#globalX');
const globalY = document.querySelector('#globalY');

// box.addEventListener('mousemove', function ({ offsetX, offsetY, clientX, clientY }) {
// desctructuring
box.addEventListener('mousemove', function (event) {
  const { offsetX, offsetY, clientX, clientY } = event;
  localX.innerHTML = offsetX;
  localY.innerHTML = offsetY;

  globalX.innerHTML = clientX;
  globalY.innerHTML = clientY;
});