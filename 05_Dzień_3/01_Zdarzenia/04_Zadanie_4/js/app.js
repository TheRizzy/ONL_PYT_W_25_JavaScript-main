const buttons = document.querySelectorAll("button");
const counter = document.querySelector("span");
let clickCount = 0;

function clickCounter (event) {
    clickCount += 1;
    counter.innerText = clickCount
}
buttons.forEach(button => {
    button.addEventListener("click", clickCounter);
})