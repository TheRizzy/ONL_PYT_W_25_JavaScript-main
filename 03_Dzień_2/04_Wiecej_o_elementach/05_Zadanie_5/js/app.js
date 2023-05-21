/*
  Poniżej napisz kod rozwiązujący zadania
 */

const lis = document.querySelectorAll('.exercise li');

lis.forEach((li, index) => {
  li.dataset.id = index + 1;
});