document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var password = document.getElementById("password").value;

    // Objeto con las contraseñas y las rutas a las páginas correspondientes
    var passwords = {
        "pass1": "/Excel/index.html",
        "pass2": "/Internet/index.html",
        "1234": "/Excel/Examen Excel.xlsx",
    };

    // Verificar si la contraseña es correcta y redirigir a la página correspondiente
    if (passwords[password]) {
        window.location.href = passwords[password];
    } else {
        alert("Contraseña incorrecta, inténtelo de nuevo.");
    }
});



// PROTECCION DE LINKS "a"

document.querySelectorAll('.protected-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la redirección inmediata

        var contrasenia = prompt('Ingrese la contraseña:');

        // Verificar si la contraseña es correcta
        if (contrasenia === this.getAttribute('data-password')) {
            window.location.href = this.href; // Redirige a la página de contenido
        } else {
            alert('Contraseña incorrecta, inténtelo de nuevo.');
        }
    });
});

