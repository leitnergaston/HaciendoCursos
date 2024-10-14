// Definir la fecha de la última actualización
var ultimaActualizacion = "Última Actualización 3-Oct-24";

// Actualizar el contenido del footer en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    var footerText = document.getElementById("footer-date");
    if (footerText) {
        footerText.textContent = ultimaActualizacion;
    }
});
