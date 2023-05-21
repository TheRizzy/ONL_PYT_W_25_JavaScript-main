/*
  Poniżej napisz kod rozwiązujący zadania
*/


//chrome
const linkChrome = document.querySelector(".chrome + a");
console.log(linkChrome);
console.log(linkChrome.getAttribute("href"));
linkChrome.innerText = 'Chrome';

const chromeDiv = document.querySelector('.chrome');
console.log('chromeDiv', chromeDiv);
chromeDiv.style.width = "100px";

//edge
const edgeLink = document.querySelector(".edge + a");
console.log('edgeDiv', edgeLink);
edgeLink.setAttribute("href", "https://www.microsoft.com/pl-pl/edge");

const edgeDiv = document.querySelector('.edge');
console.log('edgeDiv', edgeDiv);
edgeDiv.style.backgroundImage = 'url("img/edge.jpg")';

//firefox
const firefoxDiv = document.querySelector('.firefox');
firefoxDiv.style.backgroundImage = 'url("img/firefox.jpg")';

const firefoxLink = document.querySelector('.firefox + a');
firefoxLink.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");
firefoxLink.innerText = "Firefox";