import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './components/winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const initialPlayers = [
  { symbol: 'X', initialName: 'Player 1', name: 'Player 1' },
  { symbol: 'O', initialName: 'Player 2', name: 'Player 2' }
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  const [players, setPlayers] = useState(initialPlayers);

  // Find winner, gets symbol ('X'|'O') if present
  function getWinner(turns) {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquare = combination[0];
      const firstTurn = turns.find(
        (turn) =>
          turn.square.row === firstSquare.row && turn.square.col === firstSquare.col
      );
      if (!firstTurn) continue;
      const symbol = firstTurn.player;
      const isWinningCombo = combination.every((pos) =>
        turns.some(
          (turn) =>
            turn.player === symbol &&
            turn.square.row === pos.row &&
            turn.square.col === pos.col
        )
      );
      if (isWinningCombo) return symbol;
    }
    return null;
  }

  const winnerSymbol = getWinner(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winnerSymbol;

  function handleSelectSquare(rowIndex, colIndex) {
    // Prevent move if already winner or cell is occupied
    if (winnerSymbol || gameTurns.some(t => t.square.row === rowIndex && t.square.col === colIndex)) {
      return;
    }
    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns
    ]);
    setActivePlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  }

  function handleRestart() {
    setGameTurns([]);
    setActivePlayer('X');
  }

  // For player name editing: lifts name up to App
  function handlePlayerNameChange(symbol, newName) {
    setPlayers(players =>
      players.map(p =>
        p.symbol === symbol ? { ...p, name: newName } : p
      )
    );
  }

  // Find player name by symbol
  function getPlayerName(symbol) {
    const p = players.find(p => p.symbol === symbol);
    return p ? p.name : symbol;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {players.map(player => (
            <Player
              key={player.symbol}
              symbol={player.symbol}
              isActive={activePlayer === player.symbol}
              initialName={player.initialName}
              name={player.name}
              onNameChange={handlePlayerNameChange}
            />
          ))}
        </ol>
        {(winnerSymbol || hasDraw) && (
          <GameOver
            winner={winnerSymbol ? getPlayerName(winnerSymbol) : null}
            onRestart={handleRestart}
          />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
