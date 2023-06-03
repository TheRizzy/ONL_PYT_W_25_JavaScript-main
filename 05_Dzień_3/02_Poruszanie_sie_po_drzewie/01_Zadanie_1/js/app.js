const firstAnswer = document.querySelector('.first').firstElementChild.children[2];
console.log('firstAnswer:', firstAnswer);

const secondAnswer = document.querySelector('#second').parentElement.children[3];
console.log('secondAnswer:', secondAnswer);

const children =
  document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild
    .firstElementChild.children;

const thirdAnswer = children[Math.floor(children.length / 2)];

console.log('thirdAnswer:', thirdAnswer);

const article = document.querySelector('.forth').parentElement.querySelector('article');

const answer = article.querySelectorAll('p')[1];
console.log('answer:', answer);