// Escuchar el movimiento del mouse en la página
document.addEventListener('mousemove', (event) => {
    const coords = { x: event.clientX, y: event.clientY };
  
    // Enviar las coordenadas al popup mediante mensajes
    chrome.runtime.sendMessage({ type: 'mouseCoords', coords });
  });