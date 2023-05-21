const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");
console.log(childElements);

function getTags(childElements) {
    const tags = [];
    
    for (let index = 0; index < childElements.length; index++) {
        const tagName = childElements[index].tagName;
        tags.push(tagName);
    }
    return tags;
}

console.log(getTags(childElements));