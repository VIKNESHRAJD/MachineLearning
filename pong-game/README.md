# Pong Game

A classic Pong game built with HTML, CSS, and JavaScript.

## Features

- **Player vs Computer**: Play against an AI opponent
- **Dual Control Methods**: Use either your mouse or arrow keys to move the left paddle
- **Ball Physics**: Realistic ball bouncing with spin effects based on paddle collision points
- **Collision Detection**: Accurate collision detection for paddles and walls
- **Scoreboard**: Real-time score tracking for both player and computer
- **Smooth Animations**: Responsive gameplay with smooth 60 FPS rendering

## How to Play

1. Open `index.html` in your web browser
2. Press **SPACE** to start the game
3. Move the **left paddle** (green) using:
   - **Mouse**: Move your mouse up and down
   - **Arrow Keys**: Press ↑ (Up) and ↓ (Down)
   - **WASD**: Use W and S keys
4. Keep the ball in play and score points by making the computer miss
5. Press **SPACE** again to pause/resume the game

## Game Mechanics

- The ball bounces off the top and bottom walls
- Paddles are controlled: left paddle by the player, right paddle by the computer AI
- Ball speed and direction change based on where it hits the paddle
- Score is awarded when the opponent misses the ball
- The computer uses intelligent tracking to follow the ball

## Files

- `index.html` - Game structure and canvas
- `style.css` - Styling and visual design
- `script.js` - Game logic and physics engine

## Game Settings (Customizable)

You can modify these constants in `script.js` to adjust gameplay:

- `PADDLE_SPEED` - How fast the player paddle moves
- `COMPUTER_SPEED` - How fast the computer paddle moves
- `BALL_SPEED` - Initial speed of the ball
- `PADDLE_WIDTH` / `PADDLE_HEIGHT` - Paddle dimensions
- `BALL_SIZE` - Ball radius

Enjoy the game!
