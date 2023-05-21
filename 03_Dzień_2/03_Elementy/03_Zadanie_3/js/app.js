const blocks = document.querySelectorAll(".block");

blocks.forEach(function (elem){
    console.log(elem.innerText);
    elem.innerText = "Nowa wartość diva o klasie blocks"
    console.log(elem.innerText);
});