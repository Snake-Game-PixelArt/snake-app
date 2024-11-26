# Snake Game

Welcome to my Snake Game project! 🎮

## Overview

This is a classic snake game that I've built as a personal challenge.
Instead of using the traditional HTML canvas, I decided to create the game using CSS and the `box-shadow` property.
By creatively applying `box-shadow` to a single element, I've constructed a grid (or mesh) that serves as the game board, allowing the snake to move and grow.

## Inspiration

I was inspired by the book ["Greatest CSS Tricks"](https://css-tricks.com/books/greatest-css-tricks/), which showcases creative ways to use CSS. In particular, I was fascinated by the technique of drawing using `box-shadow`, as demonstrated by Codrin Pavel's [Steve Jobs](https://codepen.io/zerospree/pen/tFvCw) and Jay Salvat's [Mona Lisa](https://codepen.io/jaysalvat/pen/HaqBf).

## Features

- **No Canvas:** The entire game board is rendered using CSS `box-shadow`.

- **Responsive Design**  
  The game adapts to different screen sizes. If the window size is decreased, on-screen control buttons appear, allowing players to control the snake without a keyboard.

- **Keyboard and Button Controls**

  - Use arrow keys (`↑`, `↓`, `←`, `→`) to control the snake.
  - Alternatively, use on-screen buttons for navigation in smaller windows.

- **Cross-Platform**  
  Built with ElectronJS, this game can run on Windows, macOS, and Linux.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd snake-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app in development mode:
   ```bash
   npm start
   ```

4. To build the app for production:
   ```bash
   npm run build
   ```

## Future Improvements
- Add difficulty levels.
- Introduce new game modes or themes.
- High score tracking and leaderboards.