// Función para dibujar en el primer canvas
function drawFirstCanvas() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Color de relleno en formato RGB
        ctx.fillStyle = "rgb(0, 128, 255)"; // Azul verdoso
        ctx.fillRect(10, 10, 100, 100);
    }
}

// Función para dibujar en el segundo canvas (Formas rectangulares)
function drawSecondCanvas() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Dibujar un rectángulo relleno
        ctx.fillStyle = "rgb(200, 0, 0)"; // Rojo
        ctx.fillRect(25, 25, 100, 100);

        // Borrar una parte del rectángulo
        ctx.clearRect(45, 45, 60, 60);

        // Dibujar un rectángulo con solo contorno
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 50, 50, 50);
    }
}

// Función para dibujar un triángulo en el tercer canvas
function drawTriangle() {
    const canvas = document.getElementById("canvas3");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(150, 50); // Punto superior del triángulo
        ctx.lineTo(200, 150); // Esquina inferior derecha
        ctx.lineTo(100, 150); // Esquina inferior izquierda
        ctx.closePath();

        ctx.fillStyle = "rgb(0, 200, 100)"; // Verde
        ctx.fill();
    }
}
// Llamar a todas las funciones cuando la página cargue
window.onload = function () {
    drawFirstCanvas();
    drawSecondCanvas();
    drawTriangle();
};
