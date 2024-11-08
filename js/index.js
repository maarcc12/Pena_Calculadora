 // Funció per obrir la calculadora
 function launchCalculator() {
    window.open('calculator.html', '_blank'); // Cambia 'calculator.html' per la URL de la teva calculadora
}

// Funció per anar a l'historial enrere
function goBack() {
    window.history.back();
}

// Funció per anar a l'historial endavant
function goForward() {
    window.history.forward();
}

// Funció per omplir la informació del navegador
function fillBrowserInfo() {
    // Informació del navegador i del sistema operatiu
    document.getElementById('browserName').textContent = navigator.appName;
    document.getElementById('browserVersion').textContent = navigator.appVersion;
    document.getElementById('os').textContent = navigator.platform;
    document.getElementById('language').textContent = navigator.language;
    document.getElementById('hostname').textContent = window.location.hostname;

    // Data última modificació (es pot posar una data fixa o agafar la del fitxer)
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleDateString();
}

// Executar la funció per omplir la informació al carregar la pàgina
fillBrowserInfo();