const links = document.querySelector(".links").querySelectorAll("li");

const links = document.querySelector('.links').querySelectorAll('li');

function getDataInfo(elements) {
  const result = [];

  elements.forEach(function (element) {
    result.push(element.dataset.color);
  });

  return result;
}

console.log(getDataInfo(links));
