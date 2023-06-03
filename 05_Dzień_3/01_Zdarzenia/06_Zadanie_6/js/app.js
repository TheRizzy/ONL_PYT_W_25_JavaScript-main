const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener('click', function () {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    })
});

