const divs = document.querySelectorAll('.parent'); // 3 x div - lapiemy z . po clasach

divs.forEach(function (div) {
  div.addEventListener('mouseover', function () {
    const children = this.querySelector('.children');
    children.style.display = 'block';
  });
});