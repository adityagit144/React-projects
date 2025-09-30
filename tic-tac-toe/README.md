# React Tic-Tac-Toe

A modern, fully interactive Tic-Tac-Toe game built with React. Enjoy classic gameplay with customizable player names, game logs, and a clean responsive interface.

---

## Features

- **Two-player game** (no computer AI): X and O take turns clicking to play.
- **Edit player names:** Click the "Edit" button to name each player.
- **Game state:** Displays active player, detects winner or draw.
- **Game Over modal:** Announces the winning player's name or declares a draw.
- **Rematch button:** Instantly restart for a new round.
- **Move log:** See every move made, including its board position.
- **Responsive design:** Works on desktop and mobile.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:
    ```
    git clone https://github.com/yourusername/react-tic-tac-toe.git
    cd react-tic-tac-toe
    ```

2. Install dependencies:
    ```
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```
    npm start
    # or
    yarn start
    ```
4. Open your browser at [http://localhost:3000](http://localhost:3000) to play.

---

## Project Structure

react-tic-tac-toe/
├── public/
├── src/
│ ├── components/
│ │ ├── Player.jsx
│ │ ├── GameBoard.jsx
│ │ ├── GameOver.jsx
│ │ ├── Log.jsx
│ │ └── winning-combinations.js
│ ├── App.jsx
│ └── index.js
├── package.json
└── README.md


---

## Customizing

- **Change default player names**: Update `initialPlayers` in `App.jsx`.
- **Styling**: Tweak or add your own CSS for a different look.
- **Improvements**: Add AI, sound effects, animations, or time-travel features!

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Credits

Created by Aditya. Inspired by the official React tutorial and modern UI design best practices.
