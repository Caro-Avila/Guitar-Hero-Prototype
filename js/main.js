document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    /*const areaCirculos = document.querySelector('.contenedor'); // Selección del área de los círculos*/
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
        pauseButton.style.display = 'none';
        startButton.style.display = 'inline-block';
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
        const contenedores = document.querySelectorAll('.contenedor');
        contenedores.forEach(contenedor => {
            let nuevaNota = document.createElement("div");
            nuevaNota.classList.add("nota");
            let color;
            let velocidad=5;
            if (contenedor.classList.contains("verde")) {
                color = "green";
                nuevaNota.style.backgroundColor = color;
                nuevaNota.dataset.velocidad = velocidad;
                nuevaNota.style.position = "absolute";
                nuevaNota.style.left = Math.floor(Math.random() * (contenedor.offsetWidth - nuevaNota.offsetWidth)) + "px";
                contenedor.appendChild(nuevaNota);
                console.log("Antes de moverNota green")
                moverNota(nuevaNota, velocidad,contenedor);                
                console.log("despues de moverNora green")
            } else if (contenedor.classList.contains("rojo")) {
                color = "red";
                nuevaNota.style.backgroundColor = color;
                nuevaNota.dataset.velocidad = velocidad;
                nuevaNota.style.position = "absolute";
                nuevaNota.style.left = Math.floor(Math.random() * (contenedor.offsetWidth - nuevaNota.offsetWidth)) + "px";
                contenedor.appendChild(nuevaNota);
                console.log("Antes de moverNota red")
                moverNota(nuevaNota, velocidad,contenedor);
                console.log("Antes de moverNota red")
            } else if (contenedor.classList.contains("amarillo")) {
                color = "yellow";
                nuevaNota.style.backgroundColor = color;
                nuevaNota.dataset.velocidad = velocidad;
                nuevaNota.style.position = "absolute";
                nuevaNota.style.left = Math.floor(Math.random() * (contenedor.offsetWidth - nuevaNota.offsetWidth)) + "px";
                contenedor.appendChild(nuevaNota);
                moverNota(nuevaNota, velocidad,contenedor);
            } else if (contenedor.classList.contains("azul")) {
                color = "blue";
                nuevaNota.style.backgroundColor = color;
                nuevaNota.dataset.velocidad = velocidad;
                nuevaNota.style.position = "absolute";
                nuevaNota.style.left = Math.floor(Math.random() * (contenedor.offsetWidth - nuevaNota.offsetWidth)) + "px";
                contenedor.appendChild(nuevaNota);
                moverNota(nuevaNota, velocidad,contenedor);
            }

        });
    }

    // Función para mover cuadrado
    function moverNota(nota, velocidad, contenedor) {
        var y = 0; // Posición vertical inicial
        var intervalo = setInterval(function () {
            y += velocidad; // Incrementar la posición vertical
            nota.style.top = y + "px";
            if (y > contenedor.offsetHeight) {
                nota.remove(); // Eliminar nota cuando sale del área
                clearInterval(intervalo); // Detener intervalo
            }
        }, 10);
    }
});
