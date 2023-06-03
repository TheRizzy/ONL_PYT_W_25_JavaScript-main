window.addEventListener('resize', function() {
    var windowWidthElement = document.getElementById('windowWidth');
    var windowHeightElement = document.getElementById('windowHeight');
  
    windowWidthElement.textContent = window.innerWidth + 'px';
    windowHeightElement.textContent = window.innerHeight + 'px';
  });
  
  // Inicjalne ustawienie wartości wielkości okna
  document.getElementById('windowWidth').textContent = window.innerWidth + 'px';
  document.getElementById('windowHeight').textContent = window.innerHeight + 'px';
  








