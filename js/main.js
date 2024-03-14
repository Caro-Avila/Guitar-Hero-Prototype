document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const areaCirculos = document.querySelector('.contenedor'); // Selección del área de los círculos
    var intervaloCantidad;

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
        // Intervalo para generar cuadrados
        intervaloCantidad = setInterval(function () {
            crearNota();
        }, 1000);
    }

    // Función para pausar el juego
    function pausarJuego() {
        // Detener el intervalo de generación de cuadrados
        clearInterval(intervaloCantidad);

    }

    // Función para crear cuadrado
    function crearNota() {
        var nuevaNota = document.createElement("div");
        nuevaNota.setAttribute("class", "nota");
        nuevaNota.dataset.velocidad = (Math.random() * 10);
        nuevaNota.style.left = Math.floor(Math.random() * (areaCirculos.offsetWidth - nuevaNota.offsetWidth)) + "px";
        areaCirculos.appendChild(nuevaNota);
        moverNota(nuevaNota);
    }

    // Función para mover cuadrado
    function moverNota(nota) {
        var contador = 0;
        var intervalo = setInterval(function () {
            contador = contador + 1;
            nota.style.top = (contador * nota.dataset.velocidad) + "px";
            if (contador * nota.dataset.velocidad > areaCirculos.offsetHeight) {
                nota.remove(); // Eliminar cuadrado cuando sale del área
                clearInterval(intervalo); // Detener intervalo
            }
        }, 10);
    }
});
