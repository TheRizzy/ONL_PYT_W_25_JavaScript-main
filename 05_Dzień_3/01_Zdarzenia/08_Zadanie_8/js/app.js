document.getElementById('element1').addEventListener('click', function(event) {
  console.log('Event dla elementu pierwszego');
});

document.getElementById('element2').addEventListener('click', function(event) {
  console.log('Event dla elementu drugiego');
});

document.getElementById('element3').addEventListener('click', function(event) {
  event.stopPropagation();
});

document.getElementById('element4').addEventListener('click', function(event) {
  console.log('Pierwszy event dla elementu czwartego');
});

document.getElementById('element5').addEventListener('click', function(event) {
  console.log('Pierwszy event dla elementu piątego');
  event.stopPropagation();
});
