// Función para dibujar en el primer canvas
function drawFirstCanvas() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(0, 128, 255)";
        ctx.fillRect(10, 10, 100, 100);
    }
}

// Función para dibujar en el segundo canvas (Formas rectangulares)
function drawSecondCanvas() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200, 0, 0)";
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

        ctx.fillStyle = "rgb(0, 200, 100)";
        ctx.fill();
    }
}

// Función para dibujar una cara feliz en el cuarto canvas
function drawFace() {
    const canvas = document.getElementById("canvas4");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(150, 150, 80, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(120, 130, 10, 0, 2 * Math.PI);
        ctx.arc(180, 130, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(150, 160, 40, 0, Math.PI, false);
        ctx.stroke();
    }
}

// Función para dibujar un globo de voz en el quinto canvas
function drawSpeechBubble() {
    const canvas = document.getElementById("canvas5");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(150, 100);
        ctx.quadraticCurveTo(50, 100, 50, 150);
        ctx.quadraticCurveTo(50, 200, 100, 200);
        ctx.quadraticCurveTo(100, 230, 80, 240);
        ctx.quadraticCurveTo(120, 230, 125, 200);
        ctx.quadraticCurveTo(250, 200, 250, 150);
        ctx.quadraticCurveTo(250, 100, 150, 100);
        ctx.stroke();
    }
}
// Función para dibujar un corazón con curvas Bézier cúbicas
function drawHeart() {
    const canvas = document.getElementById("canvas6");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.moveTo(150, 80);
        ctx.bezierCurveTo(150, 60, 120, 40, 100, 40);
        ctx.bezierCurveTo(60, 40, 60, 100, 60, 100);
        ctx.bezierCurveTo(60, 140, 100, 170, 150, 200);
        ctx.bezierCurveTo(200, 170, 240, 140, 240, 100);
        ctx.bezierCurveTo(240, 100, 240, 40, 200, 40);
        ctx.bezierCurveTo(180, 40, 150, 60, 150, 80);
        ctx.fill();
    }
}

// Llamar a la función cuando la página cargue
window.onload = function () {
    drawFirstCanvas();
    drawSecondCanvas();
    drawTriangle();
    drawFace();
    drawSpeechBubble();
    drawHeart(); // Nuevo corazón
};
