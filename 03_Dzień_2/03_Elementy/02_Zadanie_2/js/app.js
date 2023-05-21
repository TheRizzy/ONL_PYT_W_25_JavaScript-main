const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home); 
console.log(children); //pesudotablica
children.forEach(oneChildren => {
    console.log(oneChildren.tagName, oneChildren.className);
});
console.log(ban); 
console.log(someBlocks); //pseudotablica
someBlocks.forEach(block => {
    console.log("Block from list someBlocks:",block.tagName, block.className);
});
console.log(listElements); //pseudotablica
listElements.forEach(element => {
    console.log("One element from list:", element.tagName, element.className);
})

