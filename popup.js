// Botón para mostrar una alerta
document.getElementById('alertButton').addEventListener('click', function() {
  alert('Perdiste el juego :(');
});

// Botón para abrir la página de opciones
document.getElementById('optionsButton').addEventListener('click', function() {
  chrome.runtime.openOptionsPage();
}
);

// Cargar el color de fondo al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('enableFeature', (data) => {
      if (data.enableFeature) {
        document.body.style.backgroundColor = '#ffcccc';
      }
    });
});

// Escuchar las coordenadas enviadas desde el content script
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'mouseCoords') {
      const coordsElement = document.getElementById('mouseCoords');
      if (coordsElement) {
        coordsElement.textContent = `X: ${message.coords.x}, Y: ${message.coords.y}`;
      }
    }
  });