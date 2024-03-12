document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');

    // Añadimos un evento de clic al botón de inicio
    startButton.addEventListener('click', () => {
        // Ocultamos el botón de inicio
        startButton.style.display = 'none';
        // Mostramos el botón de pausa
        pauseButton.style.display = 'inline-block';
        // Aquí agregaríamos la lógica para iniciar el juego
        iniciarJuego(); // Esta función debería ser implementada más adelante
    });

    // Añadimos un evento de clic al botón de pausa
    pauseButton.addEventListener('click', () => {
        // Ocultamos el botón de pausa
        pauseButton.style.display = 'none';
        // Mostramos el botón de inicio
        startButton.style.display = 'inline-block';
        // Aquí agregaríamos la lógica para pausar el juego
        pausarJuego(); // Esta función debería ser implementada más adelante
    });

    // Función para iniciar el juego
    function iniciarJuego() {
        // Aquí iría la lógica para comenzar el juego
        console.log('Juego iniciado');
    }

    // Función para pausar el juego
    function pausarJuego() {
        // Aquí iría la lógica para pausar el juego
        console.log('Juego pausado');
    }
});
