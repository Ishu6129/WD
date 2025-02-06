const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Paddle properties
const paddleWidth = 10;
const paddleHeight = 100;
const paddleSpeed = 8;

// Player 1 paddle
const player1 = {
  x: 10,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 0,
  score: 0,
};

// Player 2 paddle
const player2 = {
  x: canvas.width - 20,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  dy: 0,
  score: 0,
};

// Ball properties
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  dx: 4,
  dy: 4,
};

// Draw paddles
function drawPaddle(paddle) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// Draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

// Draw scores
function drawScores() {
  ctx.font = "30px Arial";
  ctx.fillText(player1.score, canvas.width / 4, 50);
  ctx.fillText(player2.score, (3 * canvas.width) / 4, 50);
}

// Move paddles
function movePaddles() {
  player1.y += player1.dy;
  player2.y += player2.dy;

  // Prevent paddles from going out of bounds
  if (player1.y < 0) player1.y = 0;
  if (player1.y + player1.height > canvas.height) player1.y = canvas.height - player1.height;

  if (player2.y < 0) player2.y = 0;
  if (player2.y + player2.height > canvas.height) player2.y = canvas.height - player2.height;
}

// Move ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Ball collision with top and bottom walls
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }

  // Ball collision with paddles
  if (
    ball.x - ball.radius < player1.x + player1.width &&
    ball.y > player1.y &&
    ball.y < player1.y + player1.height
  ) {
    ball.dx *= -1;
  }

  if (
    ball.x + ball.radius > player2.x &&
    ball.y > player2.y &&
    ball.y < player2.y + player2.height
  ) {
    ball.dx *= -1;
  }

  // Ball out of bounds (score)
  if (ball.x - ball.radius < 0) {
    player2.score++;
    resetBall();
  }

  if (ball.x + ball.radius > canvas.width) {
    player1.score++;
    resetBall();
  }
}

// Reset ball to center
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx *= -1;
}

// Update game state
function update() {
  movePaddles();
  moveBall();
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle(player1);
  drawPaddle(player2);
  drawBall();
  drawScores();
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Keyboard event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "w") player1.dy = -paddleSpeed; // Player 1 up
  if (e.key === "s") player1.dy = paddleSpeed; // Player 1 down
  if (e.key === "p") player2.dy = -paddleSpeed; // Player 2 up
  if (e.key === "l") player2.dy = paddleSpeed; // Player 2 down
});

document.addEventListener("keyup", (e) => {
  if (e.key === "w" || e.key === "s") player1.dy = 0; // Stop Player 1
  if (e.key === "p" || e.key === "l") player2.dy = 0; // Stop Player 2
});

// Start the game
gameLoop();