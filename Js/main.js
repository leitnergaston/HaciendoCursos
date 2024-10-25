// Funcion para volver a la pagina anterior sin tener que poner la ruta manualmente en el href
function goBack() {
    window.history.back();
}


// probando scroll reveal con deploy en netlify
// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 5000,
    reset: false
});

sr.reveal('.container-content',{delay:300});
sr.reveal('.card',{});
sr.reveal('.contact',{delay:500});