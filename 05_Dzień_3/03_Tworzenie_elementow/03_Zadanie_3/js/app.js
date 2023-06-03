const button = document.getElementById('add');
const list = document.getElementById('menu');

button.addEventListener('click', function() {
    const newItem = document.createElement("li")
    newItem.classList.add("list-group-item");
    let listElemCounter = list.children.length;
    list.appendChild(newItem);
    list.children[listElemCounter].innerText = `Element ${listElemCounter+1} - w chwili dodania bylo ${listElemCounter} elementow`
})