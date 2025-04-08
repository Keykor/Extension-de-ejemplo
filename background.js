console.log("Hola, soy el background script de la mejor extensión del mundo!");

// Escuchar mensajes enviados desde el content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'mouseCoords') {
        console.log(`Coordenadas recibidas: X=${message.coords.x}, Y=${message.coords.y}`);
    }
});