/*
  Poniżej napisz kod rozwiązujący zadania
 */
const ulExercise = document.querySelector(".exercise ul");
ulExercise.classList.add("Menu");

const liExercise = document.querySelectorAll(".exercise li");
liExercise.forEach(element => {
  element.classList.add("menuElement");
  element.classList.remove("error");
});

