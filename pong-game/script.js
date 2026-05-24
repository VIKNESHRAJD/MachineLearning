// Canvas and Context
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Game Constants
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 80;
const BALL_SIZE = 8;
const PADDLE_SPEED = 6;
const COMPUTER_SPEED = 4;
const BALL_SPEED = 5;

// Game Objects
const player = {
    x: 20,
    y: canvas.height / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dy: 0,
    score: 0
};

const computer = {
    x: canvas.width - 30,
    y: canvas.height / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    dy: 0,
    score: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: BALL_SPEED,
    dy: BALL_SPEED,
    size: BALL_SIZE
};

// Game State
let gameRunning = false;
let gamePaused = false;
let keys = {};

// Event Listeners
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    
    // Start/Pause game with SPACE
    if (e.key === ' ') {
        e.preventDefault();
        if (!gameRunning) {
            gameRunning = true;
            gamePaused = false;
            resetBall();
        } else {
            gamePaused = !gamePaused;
        }
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Mouse tracking for player paddle
document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    
    // Update player paddle position based on mouse
    const centerY = mouseY - PADDLE_HEIGHT / 2;
    player.y = Math.max(0, Math.min(centerY, canvas.height - PADDLE_HEIGHT));
});

// Reset ball to center
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = BALL_SPEED * (Math.random() * 2 - 1);
}

// Update player paddle
function updatePlayer() {
    if (keys['ArrowUp'] || keys['w'] || keys['W']) {
        player.y = Math.max(0, player.y - PADDLE_SPEED);
    }
    if (keys['ArrowDown'] || keys['s'] || keys['S']) {
        player.y = Math.min(canvas.height - PADDLE_HEIGHT, player.y + PADDLE_SPEED);
    }
}

// Update computer paddle (AI)
function updateComputer() {
    const computerCenter = computer.y + PADDLE_HEIGHT / 2;
    
    // AI tracks the ball with some delay for difficulty
    if (computerCenter < ball.y - 35) {
        computer.y = Math.min(canvas.height - PADDLE_HEIGHT, computer.y + COMPUTER_SPEED);
    } else if (computerCenter > ball.y + 35) {
        computer.y = Math.max(0, computer.y - COMPUTER_SPEED);
    }
}

// Update ball position
function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
    
    // Top and bottom collision
    if (ball.y - ball.size <= 0 || ball.y + ball.size >= canvas.height) {
        ball.dy = -ball.dy;
        ball.y = Math.max(ball.size, Math.min(canvas.height - ball.size, ball.y));
    }
    
    // Paddle collision - Player
    if (ball.x - ball.size <= player.x + player.width &&
        ball.y >= player.y &&
        ball.y <= player.y + player.height &&
        ball.dx < 0) {
        
        ball.dx = -ball.dx;
        
        // Add spin based on where ball hits paddle
        const collidePoint = ball.y - (player.y + PADDLE_HEIGHT / 2);
        ball.dy = collidePoint * 0.1;
        
        ball.x = player.x + player.width + ball.size;
    }
    
    // Paddle collision - Computer
    if (ball.x + ball.size >= computer.x &&
        ball.y >= computer.y &&
        ball.y <= computer.y + computer.height &&
        ball.dx > 0) {
        
        ball.dx = -ball.dx;
        
        // Add spin based on where ball hits paddle
        const collidePoint = ball.y - (computer.y + PADDLE_HEIGHT / 2);
        ball.dy = collidePoint * 0.1;
        
        ball.x = computer.x - ball.size;
    }
    
    // Out of bounds - Score points
    if (ball.x < 0) {
        computer.score++;
        updateScore();
        resetBall();
    } else if (ball.x > canvas.width) {
        player.score++;
        updateScore();
        resetBall();
    }
}

// Update score display
function updateScore() {
    document.getElementById('playerScore').textContent = player.score;
    document.getElementById('computerScore').textContent = computer.score;
}

// Draw functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawNet() {
    for (let i = 0; i < canvas.height; i += 15) {
        drawRect(canvas.width / 2 - 1, i, 2, 10, 'rgba(255, 255, 255, 0.3)');
    }
}

function draw() {
    // Clear canvas
    ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw center line
    drawNet();
    
    // Draw paddles
    drawRect(player.x, player.y, player.width, player.height, '#00FF41');
    drawRect(computer.x, computer.y, computer.width, computer.height, '#FF006E');
    
    // Draw ball
    drawCircle(ball.x, ball.y, ball.size, '#FFD60A');
}

// Main game loop
function gameLoop() {
    if (gameRunning && !gamePaused) {
        updatePlayer();
        updateComputer();
        updateBall();
    }
    
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Initialize score display
updateScore();
