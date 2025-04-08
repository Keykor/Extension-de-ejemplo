// Guardar la configuración en chrome.storage
document.getElementById('saveOptions').addEventListener('click', () => {
    const isEnabled = document.getElementById('enableFeature').checked;
    chrome.storage.sync.set({ enableFeature: isEnabled }, () => {
        if (isEnabled) {
            document.body.style.backgroundColor = '#ffcccc';
        }
        else {
            document.body.style.backgroundColor = '#ffffff';
        }
        alert('Configuración guardada');
    });
  });
  
// Cargar la configuración al abrir la página
document.addEventListener('DOMContentLoaded', () => {
chrome.storage.sync.get('enableFeature', (data) => {
    document.getElementById('enableFeature').checked = data.enableFeature || false;
});
});

// Cargar el color de fondo al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('enableFeature', (data) => {
        if (data.enableFeature) {
          document.body.style.backgroundColor = '#ffcccc';
        }
    });
});