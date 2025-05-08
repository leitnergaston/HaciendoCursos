// Definir la fecha de la última actualización
var ultimaActualizacion = "Haciendo Cursos | Mayo-2025";
var copy = "GC CodeDevs";

// Actualizar el contenido del footer en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    var footerText = document.getElementById("footer-date");
    if (footerText) {
        footerText.textContent = ultimaActualizacion;
    }

    var copyText = document.getElementById("copy-text");
    if (copyText) {
        copyText.textContent = copy;
    }
});
