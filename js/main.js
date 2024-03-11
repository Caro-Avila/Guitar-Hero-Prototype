var contenedor = document.querySelector(".contenedor");
        var circulosGenerados = 0;

        function crearCirculo() {
            if (circulosGenerados < 4) {
                var nuevoCirculo = document.createElement("div");
                nuevoCirculo.setAttribute("class", "circulo");
                nuevoCirculo.dataset.velocidad = (Math.random() * 10);
                nuevoCirculo.style.left = Math.floor(Math.random() * (contenedor.offsetWidth - 30)) + "px";
                contenedor.appendChild(nuevoCirculo);
                circulosGenerados++;
            }

        }

        var intervaloCantidad = setInterval(function () {
            crearCirculo()
            if (circulosGenerados===4){
                clearInterval(intervaloCantidad);

            }
        }, 20)





        var contador = 0;
        var intervalo = setInterval(function () {
            contador = contador + 1

            var elementos = document.querySelectorAll(".circulo")
            elementos.forEach(function (elemento) {

                elemento.style.top = (contador * elemento.dataset.velocidad) + "px"
                console.log(elemento.style.top)

            })
        }, 10)

        document.addEventListener("keyup", function (evento) {
            console.log(evento.key)
            if (evento.key === "a") {
                clearInterval(intervalo)
                document.querySelector(".circulo").style.background = "blue"
            }
            if (evento.key === "s") {
                clearInterval(intervaloCantidad)
            }
        })