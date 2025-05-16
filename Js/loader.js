// Loader sin tiempo de espera
// espera el tiempo carga de la pagina para que desaparezca el loader
// window.addEventListener('load', function() {
    // Ocultar el loader una vez que la página se cargue completamente
    // const loader = document.getElementById('loader');
    // loader.style.display = 'none';
// });

// loader con tiempo de espera
// espera el tiempo que carga la pagina y le agrega 1 segundo mas
// antes de desaparecer el loader
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
    }, 1000); // Espera 1 segundos antes de ocultar el loader
});
