/*
 * Breakout Game
 * Basado en el código de Pong
 * Nicolas Quintana - A01785655
 * 12/03/2025
 */

"use strict";

// Dimensiones del canvas
const canvasWidth = 800;
const canvasHeight = 600;

// Variables globales
let ctx;
let ball;
let paddle;
let blocks = [];
let lives = 3;
let score = 0;
const numRows = 5;
const numCols = 8;
const blockWidth = 80;
const blockHeight = 30;
const blockPadding = 10;
let gameOver = false;
let ballCooldown = false;

// Clases
class GameObject {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Ball extends GameObject {
    constructor(x, y, radius, color) {
        super(x, y, radius * 2, radius * 2, color);
        this.radius = radius;
        this.reset();
    }
    update() {
        if (ballCooldown) return;
        this.x += this.dx;
        this.y += this.dy;
        
        // Rebote en los bordes
        if (this.x <= 0 || this.x + this.width >= canvasWidth) {
            this.dx *= -1;
        }
        if (this.y <= 0) {
            this.dy *= -1;
        }
        
        // Si la pelota cae
        if (this.y + this.height >= canvasHeight) {
            lives--;
            if (lives <= 0) {
                gameOver = true;
            } else {
                this.triggerCooldown();
            }
        }
    }
    reset() {
        this.x = canvasWidth / 2;
        this.y = canvasHeight - 50;
        let angle = (Math.random() * Math.PI) / 2 + Math.PI / 4; // Ángulo aleatorio entre 45° y 135°
        this.dx = 4 * Math.cos(angle);
        this.dy = -4 * Math.sin(angle);
    }
    triggerCooldown() {
        ballCooldown = true;
        setTimeout(() => {
            this.reset();
            ballCooldown = false;
        }, 1000);
    }
    checkCollision(obj) {
        return (
            this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y
        );
    }
}

class Paddle extends GameObject {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
        this.dx = 0;
        this.speed = 6;
    }
    update() {
        this.x += this.dx;
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvasWidth) this.x = canvasWidth - this.width;
    }
}

function createBlocks() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let x = col * (blockWidth + blockPadding) + 30;
            let y = row * (blockHeight + blockPadding) + 50;
            blocks.push(new GameObject(x, y, blockWidth, blockHeight, "blue"));
        }
    }
}

function drawBlocks() {
    blocks.forEach(block => block.draw());
}

function checkCollisions() {
    // Colisión con el paddle
    if (ball.checkCollision(paddle)) {
        ball.dy *= -1;
    }
    
    // Colisión con los bloques
    blocks = blocks.filter(block => {
        if (ball.checkCollision(block)) {
            ball.dy *= -1;
            score++;
            return false;
        }
        return true;
    });
}

function drawText() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Vidas: ${lives}`, 20, 20);
    ctx.fillText(`Puntuación: ${score}`, 660, 20);
    if (gameOver) {
        ctx.font = "40px Arial";
        ctx.fillText("GAME OVER :(", canvasWidth / 2 - 100, canvasHeight / 2);
    }
}

function updateGame() {
    if (gameOver) return;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ball.update();
    paddle.update();
    checkCollisions();
    ball.draw();
    paddle.draw();
    drawBlocks();
    drawText();
    requestAnimationFrame(updateGame);
}

function setupGame() {
    const canvas = document.getElementById("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext("2d");
    
    ball = new Ball(canvasWidth / 2, canvasHeight - 50, 10, "red");
    paddle = new Paddle(canvasWidth / 2 - 50, canvasHeight - 20, 100, 10, "green");
    createBlocks();
    
    document.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") paddle.dx = -paddle.speed;
        if (event.key === "ArrowRight") paddle.dx = paddle.speed;
    });
    document.addEventListener("keyup", event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") paddle.dx = 0;
    });
    
    updateGame();
}

setupGame();
