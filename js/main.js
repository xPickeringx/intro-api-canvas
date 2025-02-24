// Obtener el elemento <canvas> del documento HTML
var canvas = document.getElementById("canvas");

// Obtener el contexto 2D del canvas para poder dibujar
var ctx = canvas.getContext("2d");

// Establecer el color de relleno en verde
ctx.fillStyle = "rgba(27, 209, 182, 0.83)";

// Dibujar un rectángulo relleno en la posición (10,10) con un tamaño de 100x100 píxeles
ctx.fillRect(10, 10, 500, 500);
