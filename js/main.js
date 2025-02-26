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
function drawCombination() {
    const canvas = document.getElementById("canvas7");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        // Dibujar múltiples rectángulos redondeados
        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);

        // Pequeño arco relleno
        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();

        // Pequeños cuadrados
        for (let i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 35, 4, 4);
        }
        for (let i = 0; i < 6; i++) {
            ctx.fillRect(115, 51 + i * 16, 4, 4);
        }
        for (let i = 0; i < 8; i++) {
            ctx.fillRect(51 + i * 16, 99, 4, 4);
        }

        // Creando una figura con curvas Bézier
        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();

        // Ojos en color blanco
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();

        // Pupilas negras
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

// Función auxiliar para dibujar rectángulos con esquinas redondeadas
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}

// Llamar a la función cuando la página cargue
window.onload = function () {
    drawFirstCanvas();
    drawSecondCanvas();
    drawTriangle();
    drawFace();
    drawSpeechBubble();
    drawHeart(); // Nuevo corazón
    drawCombination();
};

