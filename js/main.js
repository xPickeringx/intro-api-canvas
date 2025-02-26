// Función para dibujar en el primer canvas
function drawFirstCanvas() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(0, 128, 255)"; // Azul verdoso
        ctx.fillRect(10, 10, 100, 100);
    }
}

// Función para dibujar en el segundo canvas (Formas rectangulares)
function drawSecondCanvas() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200, 0, 0)"; // Rojo
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
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
        ctx.moveTo(150, 50);
        ctx.lineTo(200, 150);
        ctx.lineTo(100, 150);
        ctx.closePath();

        ctx.fillStyle = "rgb(0, 200, 100)"; // Verde
        ctx.fill();
    }
}

// Función para dibujar una cara feliz en el cuarto canvas
function drawFace() {
    const canvas = document.getElementById("canvas4");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Cara (Círculo principal)
        ctx.beginPath();
        ctx.arc(150, 150, 80, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();

        // Ojos
        ctx.beginPath();
        ctx.arc(120, 130, 10, 0, 2 * Math.PI);
        ctx.arc(180, 130, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();

        // Boca (Arco)
        ctx.beginPath();
        ctx.arc(150, 160, 40, 0, Math.PI, false);
        ctx.stroke();
    }
}

// Llamar a todas las funciones cuando la página cargue
window.onload = function () {
    drawFirstCanvas();
    drawSecondCanvas();
    drawTriangle();
    drawFace();
};
