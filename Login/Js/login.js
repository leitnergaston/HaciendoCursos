// Hacer foco automáticamente en el campo de contraseña al cargar la página
document.getElementById('password').focus();

// Codigo para el ingreso de contraseña y redireccion a pestaña correspondiente
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var password = document.getElementById("password").value;

    // Objeto con las contraseñas y las rutas a las páginas correspondientes
    var passwords = {
        "Infobasic.24": "/InformaticaBasica/index.html",
        "Infointer-24": "/InformaticaIntermedia/index.html",
        "we.2024": "/WordYExcel/index.html",
        "Camseg24": "/CamarasSeguridad/index.html"
    };

    // Verificar si la contraseña es correcta y redirigir a la página correspondiente
    if (passwords[password]) {
        sessionStorage.setItem('auth', password); // Guardar en sessionStorage la señal de autenticación
        window.location.href = passwords[password];
    } else {
        alert("Contraseña incorrecta, inténtelo de nuevo.");
    }
});


// Función para obtener el valor de un parámetro en la URL para mostrar el titulo segun el curso que se esta queriendo ingresar
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obtener el curso desde la URL
const curso = getQueryParam('curso');

// Si el parámetro existe, actualizar el título
if (curso) {
    document.getElementById('titulo-curso').textContent = `Ingreso curso ${curso}`;
}
