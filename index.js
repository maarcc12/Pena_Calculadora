// Obtener información del navegador
document.getElementById("navegador").textContent = navigator.appName || "Navegador desconocido";
document.getElementById("version").textContent = navigator.appVersion || "Versión desconocida";
document.getElementById("so").textContent = navigator.platform || "SO desconocido";
document.getElementById("idioma").textContent = navigator.language || "Idioma desconocido";
document.getElementById("url").textContent = window.location.hostname || "URL desconocida";

