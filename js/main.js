// Accede al elemento de la imagen
const imgElement = document.querySelector('img');

// Agrega un evento de clic a la imagen
imgElement.addEventListener('click', () => {
    // Cambia el atributo 'src' de la imagen al hacer clic
    imgElement.src = 'img/psychic-umbrella-clicked.jpg';
});

// Accede a los elementos de navegación
const navLinks = document.querySelectorAll('nav a');

// Agrega un evento de clic a cada enlace de navegación
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtiene la URL del enlace
        const linkHref = link.getAttribute('href');

        // Simula una transición suave a la página correspondiente
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = linkHref;
        }, 500); // Cambia el tiempo de espera según tus preferencias
    });
});
