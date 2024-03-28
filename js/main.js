document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    var intervalosGeneracion = [];
    const circuloVerde = document.querySelector('.verde');
    const circuloRojo = document.querySelector('.rojo');
    const circuloAmarillo = document.querySelector('.amarillo');
    const circuloAzul = document.querySelector('.azul');
    const scoreValue = document.querySelector('.score-value');
    let score = 0;
    document.addEventListener('keyup', function(event) {
        const key = event.key.toLowerCase();
        const margen = 10;
        switch(key) {
            case 'f':
                    const notasVerdes = document.querySelectorAll('.verde .nota');
                    notasVerdes.forEach(nota => {
                        const notaRect = nota.getBoundingClientRect();
                        const circuloRect = circuloVerde.getBoundingClientRect();
                        if (notaRect.top - margen <= circuloRect.top && notaRect.bottom + margen >= circuloRect.bottom) {
                            // La nota está dentro del área del círculo verde con un margen de 'margen' píxeles
                            score++;
                            scoreValue.textContent = score;
                        }
                    });
                
                break;
            case 'g':
                    const notasRojas = document.querySelectorAll('.rojo .nota');
                    notasRojas.forEach(nota => {
                        const notaRect = nota.getBoundingClientRect();
                        const circuloRect = circuloRojo.getBoundingClientRect();
                        if (notaRect.top - margen <= circuloRect.top && notaRect.bottom + margen >= circuloRect.bottom) {                            
                            score++;
                            scoreValue.textContent = score;
                        }
                    });                
                break;
            case 'h':
                    const notasAmarillas = document.querySelectorAll('.amarillo .nota');
                    notasAmarillas.forEach(nota => {
                        const notaRect = nota.getBoundingClientRect();
                        const circuloRect = circuloAmarillo.getBoundingClientRect();
                        if (notaRect.top - margen <= circuloRect.top && notaRect.bottom + margen >= circuloRect.bottom) {
                            // La nota está dentro del área del círculo verde con un margen de 'margen' píxeles
                            score++;
                            scoreValue.textContent = score;
                        }
                    });
                
                break;
            case 'j':                
                    const notasAzules = document.querySelectorAll('.azul .nota');
                    notasAzules.forEach(nota => {
                        const notaRect = nota.getBoundingClientRect();
                        const circuloRect = circuloAzul.getBoundingClientRect();
                        if (notaRect.top - margen <= circuloRect.top && notaRect.bottom + margen >= circuloRect.bottom) {
                            // La nota está dentro del área del círculo verde con un margen de 'margen' píxeles
                            score++;
                            scoreValue.textContent = score;
                        }
                    });
                
                break;
            default:
                break;
        }
    });
    
    // Añadimos un evento de clic al botón de inicio
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
        iniciarJuego();
    });

    // Añadimos un evento de clic al botón de pausa
    pauseButton.addEventListener('click', () => {
        pauseButton.style.display = 'none';
        startButton.style.display = 'inline-block';
        pausarJuego();
    });

    // Función para iniciar el juego
    function iniciarJuego() {        
        intervalosGeneracion.push(setInterval(crearNotaVerde, obtenerTiempoAleatorio(1500, 2000)));
        intervalosGeneracion.push(setInterval(crearNotaRoja, obtenerTiempoAleatorio(1500, 2000)));
        intervalosGeneracion.push(setInterval(crearNotaAmarilla, obtenerTiempoAleatorio(1500, 2000)));
        intervalosGeneracion.push(setInterval(crearNotaAzul, obtenerTiempoAleatorio(1500, 2000)));
    }
    function obtenerTiempoAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Función para pausar el juego
    function pausarJuego() {
        // Detener la generación de nuevas notas
        intervalosGeneracion.forEach(intervalo => clearInterval(intervalo));
        // Detener el movimiento de todas las notas existentes
        const notas = document.querySelectorAll('.nota');
        notas.forEach(nota => {
            clearInterval(nota.dataset.intervaloMovimiento);
        });
    }

    function crearNotaVerde() {
        const contenedor = document.querySelector('.verde');
        let nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");
        nuevaNota.style.backgroundColor = "green";
        nuevaNota.dataset.velocidad = 2;
        nuevaNota.style.position = "absolute";
        contenedor.appendChild(nuevaNota);
        moverNota(nuevaNota);
    }

    function crearNotaRoja() {
        const contenedor = document.querySelector('.rojo');
        let nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");
        nuevaNota.style.backgroundColor = "red";
        nuevaNota.dataset.velocidad = 2;
        nuevaNota.style.position = "absolute";
        contenedor.appendChild(nuevaNota);
        moverNota(nuevaNota);
    }

    function crearNotaAmarilla() {
        const contenedor = document.querySelector('.amarillo');
        let nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");
        nuevaNota.style.backgroundColor = "yellow";
        nuevaNota.dataset.velocidad = 2;
        nuevaNota.style.position = "absolute";
        contenedor.appendChild(nuevaNota);
        moverNota(nuevaNota);
    }


    function crearNotaAzul() {
        const contenedor = document.querySelector('.azul');
        let nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");
        nuevaNota.style.backgroundColor = "blue";
        nuevaNota.dataset.velocidad = 2;
        nuevaNota.style.position = "absolute";
        contenedor.appendChild(nuevaNota);
        moverNota(nuevaNota);
    }

    // Función para mover cuadrado
    function moverNota(nota) {
        var contador = 0;
        var intervalo = setInterval(function () {
            contador = contador + 1;
            nota.style.top = (contador * nota.dataset.velocidad) + "px";
        }, 10);
        nota.dataset.intervaloMovimiento = intervalo; // Almacenar el identificador del intervalo
    }
});
