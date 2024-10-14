
// Hacer foco automáticamente en el campo de contraseña al cargar la página
document.getElementById('password').focus();

// Script para alternar la visibilidad de la contraseña
const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".icon-password");

togglePassword.addEventListener("click", function() {
    // Verificar el tipo de input y alternar entre 'password' y 'text'
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Alternar el icono cambiando la clase
    if (type === "password") {
        this.classList.remove('uil-eye-slash');
        this.classList.add('uil-eye');
    } else {
        this.classList.remove('uil-eye');
        this.classList.add('uil-eye-slash');
    }
});

// Codigo para el ingreso de contraseña y redireccion a pestaña correspondiente
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var password = document.getElementById("password").value;

    // Objeto con las contraseñas y las rutas a las páginas correspondientes
    var passwords = {
        "Infobasic.24": "/InformaticaBasica/informaticaBasica.html",
        "Infointer-24": "/InformaticaIntermedia/informaticaIntermedia.html",
        "we.2024": "/WordYExcel/wordexcel.html",
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
