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

